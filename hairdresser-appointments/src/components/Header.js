// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Optional: For better routing

function Header() {
  return (
    <header>
      <h1>Hairdresser Appointments</h1>
      <nav>
        {/* It's better to use Link instead of a tags for client-side routing */}
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
