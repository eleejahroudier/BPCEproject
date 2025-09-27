import React from 'react';

function UrlForm({ url, onUrlChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="url-form">
      <input
        type="text"
        placeholder="Enter URL..."
        value={url}
        onChange={onUrlChange}
        className="url-input"
      />
      <button type="submit" className="url-button">Search</button>
    </form>
  );
}

export default UrlForm;
