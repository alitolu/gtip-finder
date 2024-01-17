
import React, { useState } from 'react';
import './App.css';

function App() {
  const [productName, setProductName] = useState('');
  const [gtipCode, setGtipCode] = useState('');

  const findGTIPCode = () => {
    fetch('http://localhost:5000/find-gtip-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productName }),
    })
    .then(response => response.json())
    .then(data => setGtipCode(data.gtipCode))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <input
        type="text"
        value={productName}
        onChange={e => setProductName(e.target.value)}
        placeholder="Ürün adını girin"
      />
      <button onClick={findGTIPCode}>Ara</button>
      {gtipCode && <p>GTİP Kodu: {gtipCode}</p>}
    </div>
  );
}

export default App;
