import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import AppointmentsList from './components/AppointmentsList';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // New Dashboard component
import ServiceDetails from './components/ServiceDetails'; // New service details component
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login status

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Dashboard isLoggedIn={isLoggedIn} />} />
          <Route path="/services/:id" element={<ServiceDetails />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
