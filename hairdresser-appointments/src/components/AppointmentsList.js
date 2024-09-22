import React, { useEffect, useState } from 'react';

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('/api/appointments')
      .then(response => response.json())
      .then(data => setAppointments(data));
  }, []);

  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>
            <p>Service: {appointment.service.name}</p>
            <p>Time: {appointment.scheduledTime || appointment.preferredTime}</p>
            <p>Status: {appointment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentsList;
