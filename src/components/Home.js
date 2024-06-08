import React, { useState } from 'react';

const Home = () => {
  const [url, setUrl] = useState('');
  const [displayUrl, setDisplayUrl] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleDisplayUrl = () => {
    setDisplayUrl(url);
  };

  return (
    <div>
      <h1>Welcome to Rubick</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleInputChange}
        style={{ width: '80%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleDisplayUrl} style={{ padding: '10px' }}>Display URL</button>
      {displayUrl && (
        <div style={{ marginTop: '20px' }}>
          <iframe
            src={displayUrl}
            title="Displayed URL"
            width="100%"
            height="600px"
            style={{ border: '1px solid #ccc' }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
