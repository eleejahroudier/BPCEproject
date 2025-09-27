import React from 'react';

function Dashboard({ data }) {
  if (data && data.error) {
    return (
      <div className="gradient-bg" style={{ minHeight: '100vh', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 120, color: '#ff1744', marginBottom: 24 }}>✖️</div>
        <h2 style={{ color: '#fff', fontWeight: 700, fontSize: 32, marginBottom: 16 }}>Erreur</h2>
        <div style={{ color: '#fff', fontSize: 20 }}>{data.error}</div>
      </div>
    );
  }

  const categories = data && typeof data === 'object' ? Object.entries(data) : [];

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
          Analysis Dashboard
        </h2>
        {categories.length > 0 ? (
          <div style={{ marginBottom: 32 }}>
            {categories.map(([cat, value]) => (
              <div key={cat} style={{
                background: 'rgba(0,0,0,0.10)',
                borderRadius: 8,
                padding: 16,
                color: '#fff',
                marginBottom: 16
              }}>
                <h3 style={{ margin: 0, color: '#ffe082', fontWeight: 500 }}>{cat}</h3>
                <pre style={{
                  background: 'rgba(0,0,0,0.08)',
                  borderRadius: 6,
                  padding: 12,
                  color: '#ffe',
                  fontSize: 15,
                  margin: 0
                }}>
                  {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                </pre>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#fff', fontSize: 18 }}>No data received.</div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
