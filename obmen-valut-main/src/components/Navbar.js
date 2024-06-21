import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Converter</Link></li>
      <li><Link to="/rates">Exchange Rates</Link></li>
    </ul>
  </nav>
);

export default Navbar;
