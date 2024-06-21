import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');

  useEffect(() => {
    const fetchRates = async () => {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      setRates(response.data.rates);
    };

    fetchRates();
  }, [baseCurrency]);

  return (
    <div>
      <h2>Exchange Rates</h2>
      <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
        {Object.keys(rates).map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <ul>
        {Object.entries(rates).map(([currency, rate]) => (
          <li key={currency}>{`1 ${baseCurrency} = ${rate} ${currency}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExchangeRates;
