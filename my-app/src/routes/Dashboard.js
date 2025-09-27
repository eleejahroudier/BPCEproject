import React from 'react';

function Dashboard({ data }) {
  return (
    <div className="gradient-bg" style={{ minHeight: '100vh', padding: '40px 0' }}>
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        background: 'rgba(255,255,255,0.07)',
        borderRadius: 16,
        padding: 32,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
      }}>
        <h2 style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: 32,
          marginBottom: 32,
          letterSpacing: 1
        }}>
          Dashboard d’Analyse
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 32,
          justifyContent: 'center',
          marginBottom: 32
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #6a1b9a 60%, #5f0a87 100%)',
            borderRadius: 12,
            minWidth: 160,
            minHeight: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 20,
            position: 'relative'
          }}>
            <span style={{ fontSize: 48, fontWeight: 700, marginBottom: 8 }}>--</span>
            <span style={{ fontSize: 18, opacity: 0.85 }}>Accessibility</span>
          </div>
        </div>
        <div style={{
          background: 'rgba(0,0,0,0.10)',
          borderRadius: 8,
          padding: 24,
          color: '#fff',
          fontSize: 16
        }}>
          <h3 style={{ marginTop: 0, color: '#ffe082', fontWeight: 500 }}>Détails JSON (placeholder)</h3>
          <pre style={{
            background: 'rgba(0,0,0,0.08)',
            borderRadius: 6,
            padding: 16,
            color: '#ffe'
          }}>
            {data ? JSON.stringify(data, null, 2) : 'Aucune donnée reçue.'}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;