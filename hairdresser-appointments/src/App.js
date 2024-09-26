import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import AppointmentsList from './components/AppointmentsList';
import Signup from './components/SignupForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ServiceDetails from './components/ServiceDetails';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Dashboard isLoggedIn={isLoggedIn} />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
