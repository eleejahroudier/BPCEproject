
import React, { useState } from 'react';
import './App.css';
import Dashboard from './routes/Dashboard';


function App() {
  const [url, setUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedUrl(url);
    setApiResponse(null);
    setError(null);
    try {
      const response = await fetch('/api/your-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) throw new Error('API error: ' + response.status);
      const data = await response.json();
      setApiResponse(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <div className="gradient-bg">
        <form onSubmit={handleSubmit} className="url-form">
          <input
            type="text"
            placeholder="Enter URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="url-input"
          />
          <button type="submit" className="url-button">Search</button>
        </form>
        {submittedUrl && (
          <div className="result">
            <p>Submitted URL: {submittedUrl}</p>
          </div>
        )}
        {error && (
          <div className="result" style={{ color: 'red' }}>
            <p>{error}</p>
          </div>
        )}
  {apiResponse && <Dashboard data={apiResponse} />}
      </div>
    </div>
  );
}

export default App;
