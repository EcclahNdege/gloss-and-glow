// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import AppointmentsList from './components/AppointmentsList';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h2>Welcome to Hairdresser Appointments</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
