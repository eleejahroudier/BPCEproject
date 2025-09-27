
import React, { useState } from 'react';
import './App.css';


import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import ThemeSelector from './components/ThemeSelector';
import UrlForm from './components/UrlForm';



const initialThemes = [
  { id: '1', theme: 'Images', checked: true },
  { id: '2', theme: 'Frames', checked: true },
  { id: '3', theme: 'Colors', checked: true },
  { id: '4', theme: 'Multimedia', checked: true },
  { id: '5', theme: 'Tables', checked: true },
  { id: '6', theme: 'Links', checked: true },
  { id: '7', theme: 'Scripts', checked: true },
  { id: '8', theme: 'Required elements', checked: true },
  { id: '9', theme: 'Information structure', checked: true },
  { id: '10', theme: 'Information presentation', checked: true },
  { id: '11', theme: 'Forms', checked: true },
  { id: '12', theme: 'Navigation', checked: true },
  { id: '13', theme: 'Consultation', checked: true },
];

function MainApp() {
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

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedUrl(url);
    setApiResponse(null);
    setError(null);
    const selectedThemes = themes.filter(t => t.checked).map(t => t.theme);
    try {
      const response = await fetch(`http://127.0.0.1:5000/check-links-ai?url=${encodeURIComponent(url)}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('API error: ' + response.status);
      const data = await response.json();
      setApiResponse(data);
      navigate('/dashboard', { state: { data } });
    } catch (err) {
      setError(err.message);
      navigate('/dashboard', { state: { error: err.message } });
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
        {/* Dashboard is now a separate page */}
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/dashboard" element={<DashboardWrapper />} />
      </Routes>
    </Router>
  );
}

function DashboardWrapper() {
  const location = window.location;
  // For react-router-dom v6, use useLocation
  let state = {};
  try {
    // Try to use useLocation if available
    // eslint-disable-next-line react-hooks/rules-of-hooks
    state = require('react-router-dom').useLocation().state || {};
  } catch (e) {
    // fallback for SSR or direct access
  }
  return <Dashboard data={state.data || (state.error ? { error: state.error } : null)} />;
}

export default App;
