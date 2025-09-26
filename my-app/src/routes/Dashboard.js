import React from 'react';


function Dashboard({ data }) {
  return (
    <div>
      <h2>Dashboard</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data yet.</p>
      )}
    </div>
  );
}

export default Dashboard;