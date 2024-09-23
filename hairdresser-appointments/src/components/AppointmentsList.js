import React from 'react';
import './AppointmentsList.css'; // Optional if you want specific styles

const AppointmentsList = () => {
  const appointments = [
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
    <div className="appointments-container">
      <h2>Your Appointments</h2>
      <ul className="appointments-list">
        {appointments.map(appointment => (
          <li key={appointment.id} className={`appointment-item ${appointment.status.toLowerCase()}`}>
            <h3>{appointment.clientName}</h3>
            <p>Service: {appointment.service}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Status: {appointment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsList;
