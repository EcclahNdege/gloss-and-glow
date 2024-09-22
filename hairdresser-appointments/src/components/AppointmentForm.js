import React, { useState } from 'react';

function AppointmentForm({ serviceId }) {
  const [preferredTime, setPreferredTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        serviceId,
        preferredTime
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Appointment requested successfully!');
        } else {
          alert('Error requesting appointment.');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Preferred Time:
        <input
          type="datetime-local"
          value={preferredTime}
          onChange={(e) => setPreferredTime(e.target.value)}
        />
      </label>
      <button type="submit">Request Appointment</button>
    </form>
  );
}

export default AppointmentForm;
