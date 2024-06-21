import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ConverterPage from './pages/ConverterPage';
import ExchangeRatesPage from './pages/ExchangeRatesPage';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ConverterPage />} />
        <Route path="/rates" element={<ExchangeRatesPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
