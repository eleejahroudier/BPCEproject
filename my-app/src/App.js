
import React, { useState } from 'react';
import './App.css';

import Dashboard from './routes/Dashboard';
import ThemeSelector from './components/ThemeSelector';
import UrlForm from './components/UrlForm';



const initialThemes = [
  { id: '1', theme: 'Images', checked: true },
  { id: '2', theme: 'Cadres', checked: true },
  { id: '3', theme: 'Couleurs', checked: true },
  { id: '4', theme: 'Multimédia', checked: true },
  { id: '5', theme: 'Tableaux', checked: true },
  { id: '6', theme: 'Liens', checked: true },
  { id: '7', theme: 'Scripts', checked: true },
  { id: '8', theme: 'Éléments obligatoires', checked: true },
  { id: '9', theme: 'Structuration de l’information', checked: true },
  { id: '10', theme: 'Présentation de l’information', checked: true },
  { id: '11', theme: 'Formulaires', checked: true },
  { id: '12', theme: 'Navigation', checked: true },
  { id: '13', theme: 'Consultation', checked: true },
];

function App() {
  const [url, setUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [themes, setThemes] = useState(initialThemes);

  const handleThemeChange = (id) => {
    setThemes((prevThemes) =>
      prevThemes.map((t) =>
        t.id === id ? { ...t, checked: !t.checked } : t
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedUrl(url);
    setApiResponse(null);
    setError(null);
    const selectedThemes = themes.filter(t => t.checked).map(t => t.theme);
    try {
      const response = await fetch('/api/your-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, themes: selectedThemes }),
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
        <ThemeSelector themes={themes} onThemeChange={handleThemeChange} />
        <UrlForm url={url} onUrlChange={e => setUrl(e.target.value)} onSubmit={handleSubmit} />
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
