import React, { useState } from 'react';
import axios from 'axios';

const Converter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const convertCurrency = async () => {
    const match = input.match(/(\d+)\s+(\w+)\s+in\s+(\w+)/);
    if (match) {
      const [, amount, fromCurrency, toCurrency] = match;
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const rate = response.data.rates[toCurrency];
      setResult(amount * rate);
    } else {
      alert('Please enter a valid format: e.g., "15 USD in RUB"');
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="15 USD in RUB" />
      <button onClick={convertCurrency}>Convert</button>
      {result && <div>Result: {result}</div>}
    </div>
  );
};

export default Converter;
