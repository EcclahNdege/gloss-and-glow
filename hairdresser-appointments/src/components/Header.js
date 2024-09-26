import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/account/check', {
          credentials: 'include',
        });

        if (response.ok) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/account/logout');

      if (response.ok) {
        setIsLoggedIn(false);
        navigate('/login'); // redirect to login page after logout
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Hairdresser Appointments</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item"><Link to="/">Home</Link></li>
            <li className="header-nav-item"><Link to="/services">Services</Link></li>
            <li className="header-nav-item"><Link to="/appointments">Appointments</Link></li>
            {isLoggedIn ? (
              <>
                <li className="header-nav-item"><Link to="/profile">Profile</Link></li>
                <li className="header-nav-item"><button onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <>
                <li className="header-nav-item"><Link to="/login">Login</Link></li>
                <li className="header-nav-item"><Link to="/signup">Sign Up</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
