import React from 'react';

function ThemeSelector({ themes, onThemeChange }) {
  return (
    <div className="themes-checkbox-list" style={{marginBottom: 24, background: 'rgba(255,255,255,0.07)', borderRadius: 8, padding: 16, maxWidth: 400}}>
      <h3 style={{color: 'white', marginBottom: 12, fontWeight: 500}}>Choose themes:</h3>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
        {themes.map((t) => (
          <label key={t.id} style={{color: 'white', fontSize: 15, minWidth: 160, display: 'flex', alignItems: 'center', gap: 6}}>
            <input
              type="checkbox"
              checked={t.checked}
              onChange={() => onThemeChange(t.id)}
              style={{ accentColor: '#a4508b' }}
            />
            {t.theme}
          </label>
        ))}
      </div>
      <div style={{marginTop: 16, background: 'rgba(0,0,0,0.15)', borderRadius: 6, padding: 8, color: 'white', fontSize: 13}}>
        <strong>Checked themes:</strong>
        <pre style={{margin: 0, color: '#ffe'}}>
{JSON.stringify(themes.filter(t => t.checked).map(t => t.theme), null, 2) || '[]'}
        </pre>
        {themes.filter(t => t.checked).length === 0 && (
          <span style={{color: '#ffb3b3'}}>No theme selected</span>
        )}
      </div>
    </div>
  );
}

export default ThemeSelector;
