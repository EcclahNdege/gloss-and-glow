// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Hairdresser Appointments</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item"><Link to="/">Home</Link></li>
            <li className="header-nav-item"><Link to="/services">Services</Link></li>
            <li className="header-nav-item"><Link to="/appointments">Appointments</Link></li>
            <li className="header-nav-item"><Link to="/login">Login</Link></li>
            <li className="header-nav-item"><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
