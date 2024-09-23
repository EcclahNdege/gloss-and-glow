import React from 'react';
import Services from './Services';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Optional for styling

const Dashboard = ({ isLoggedIn }) => {
  const latestAppointments = [
    {
      id: 1,
      clientName: "John Doe",
      service: "Haircut",
      date: "2024-10-01",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      service: "Hair Styling",
      date: "2024-10-03",
      time: "2:00 PM",
      status: "Accepted",
    },
    {
      id: 3,
      clientName: "Sam Wilson",
      service: "Hair Coloring",
      date: "2024-10-05",
      time: "11:00 AM",
      status: "Rejected",
    },
  ];

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-tabs">
        <div className="appointments-tab">
          <h3>Latest Appointments</h3>
          {isLoggedIn ? (
            <ul className="appointments-list">
              {latestAppointments.map(appointment => (
                <li key={appointment.id} className={`appointment-item ${appointment.status.toLowerCase()}`}>
                  <h4>{appointment.clientName}</h4>
                  <p>Service: {appointment.service}</p>
                  <p>Date: {appointment.date}</p>
                  <p>Time: {appointment.time}</p>
                  <p>Status: {appointment.status}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Make an appointment</p>
          )}
        </div>
        <div className="services-tab">
          <h3>Services</h3>
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
