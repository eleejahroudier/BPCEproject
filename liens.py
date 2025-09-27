from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import os
import base64
from openai import AzureOpenAI

# For JS rendering
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import WebDriverException
from webdriver_manager.chrome import ChromeDriverManager

app = Flask(__name__)
CORS(app)

endpoint = os.getenv("ENDPOINT_URL", "https://prout.openai.azure.com/")
deployment = os.getenv("DEPLOYMENT_NAME", "gpt-4.1-mini")
subscription_key = os.getenv("AZURE_OPENAI_API_KEY", "B570uJmM5ktcTYiwgKkBzpfc8RiWiiHXQasOxAONgXvsHm0PWA0YJQQJ99BIACfhMk5XJ3w3AAABACOG2C09")

# Initialize Azure OpenAI client with key-based authentication
client = AzureOpenAI(
    azure_endpoint=endpoint,
    api_key=subscription_key,
    api_version="2025-01-01-preview",
)



def check_link_explicit_ai(link_text, href, context_text):
    """
    Ask AI if the link text + nearby text is explicit regarding the link destination.
    """
    prompt = f"""
    You are an accessibility expert. 
    Given the link text: "{link_text}" 
    and the destination URL: "{href}" 
    and nearby context text: "{context_text}", 

    answer exactly "YES" or "NO": 
    Is this link text ginving information about its destination or action?
    """
    messages = [{"role": "system", "content": prompt}]
    
    response = client.chat.completions.create(
        model=deployment,
        messages=messages,
        stop=None,
        stream=False
        )
    
    answer = response.choices[0].message.content.strip()
    return answer


def check_rgaa_links(url, soup):
    results = []
    seen_texts = {}

    # Check for incorrect link implementations
    # 1. <div onclick="...">
    for div in soup.find_all("div", onclick=True):
        results.append({
            "element": "div",
            "text": div.get_text(strip=True),
            "issues": ["DIV used as link (onclick). Not semantically a link, not keyboard accessible."],
            "html": str(div)
        })

    # 2. <span role="link" onclick="...">
    for span in soup.find_all("span", onclick=True):
        if span.get("role") == "link":
            results.append({
                "element": "span",
                "text": span.get_text(strip=True),
                "issues": ["SPAN with role=link and onclick used as link. Requires extra attributes and keyboard handling."],
                "html": str(span)
            })

    # 3. <button onclick="window.location=...">
    for button in soup.find_all("button", onclick=True):
        onclick = button.get("onclick", "")
        if "window.location" in onclick or "location.href" in onclick:
            results.append({
                "element": "button",
                "text": button.get_text(strip=True),
                "issues": ["BUTTON used for navigation. Buttons are for actions, not navigation."],
                "html": str(button)
            })

    for a in soup.find_all("a", href=True):
        link_info = {
            "href": urljoin(url, a["href"]),
            "text": a.get_text(strip=True),
            "title": a.get("title"),
            "img_alt": None,
            "issues": []
        }

        # Check for empty link text
        if not link_info["text"] or link_info["text"] == "":
            link_info["issues"].append("Empty link text")

        # Check if link contains only an image
        imgs = a.find_all("img")
        if imgs and not link_info["text"]:
            alt_texts = [img.get("alt", "") for img in imgs]
            link_info["img_alt"] = alt_texts
            if not any(alt_texts):
                link_info["issues"].append("Link contains only image(s) without alt text")

        # Check for duplicate link texts with different destinations
        text_key = link_info["text"].strip().lower()
        if text_key:
            if text_key in seen_texts:
                if seen_texts[text_key] != link_info["href"]:
                    link_info["issues"].append("Duplicate link text with different destinations")
            else:
                seen_texts[text_key] = link_info["href"]

        # AI check for explicitness
        context_text = a.find_parent().get_text(" ", strip=True)
        if link_info["text"]:
            ai_answer = check_link_explicit_ai(link_info["text"], link_info["href"], context_text)
            link_info["ai_explicit"] = ai_answer
            if ai_answer.upper() == "NO":
                link_info["issues"].append("Link text not explicit according to AI check")
                link_info["issues"].append(context_text)

        results.append(link_info)

    return results


def get_html_with_selenium(url):
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    try:
        # Nouvelle syntaxe pour initialiser Chrome WebDriver
        driver = webdriver.Chrome(
            service=webdriver.chrome.service.Service(ChromeDriverManager().install()),
            options=options
        )
        driver.get(url)
        html = driver.page_source
        driver.quit()
        return html
    except WebDriverException as e:
        print(f"Selenium error: {str(e)}")
        return None


@app.route("/check-links-ai", methods=["GET"])
def check_links_ai():
    url = request.args.get("url")
    if not url:
        return jsonify({"error": "Missing 'url' query parameter"}), 400

    try:
        print(f"[DEBUG] Starting check for URL: {url}")
        
        # Test if URL is reachable
        try:
            test_response = requests.head(url, timeout=5)
            print(f"[DEBUG] URL status code: {test_response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"[DEBUG] URL not reachable: {str(e)}")
            return jsonify({"error": f"URL not reachable: {str(e)}"}), 400

        # Try with Selenium
        print("[DEBUG] Attempting to fetch with Selenium...")
        html = get_html_with_selenium(url)
        
        if not html:
            print("[DEBUG] Selenium returned no content")
            return jsonify({"error": "No content retrieved from page"}), 500
            
        print(f"[DEBUG] Retrieved content length: {len(html)}")
        
        # Parse with BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")
        
        # Debug information about parsed content
        links = soup.find_all('a', href=True)
        print(f"[DEBUG] Found {len(links)} links in page")
        for link in links[:5]:  # Print first 5 links only
            print(f"[DEBUG] Link found: {link.get_text(strip=True)[:50]} -> {link['href']}")

        # Check links
        print("[DEBUG] Starting RGAA check...")
        links_report = check_rgaa_links(url, soup)
        print(f"[DEBUG] RGAA check complete. Found {len(links_report)} issues/items")

        return jsonify({
            "url": url,
            "links_report": links_report,
            "stats": {
                "total_links": len(links),
                "issues_found": len(links_report)
            }
        }), 200

    except Exception as e:
        print(f"[ERROR] Unexpected error: {str(e)}")
        import traceback
        print(traceback.format_exc())
        return jsonify({"error": f"Server error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
<<<<<<< HEAD
=======

>>>>>>> herasinho
