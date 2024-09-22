import React, { useEffect, useState } from 'react';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/api/services') // Adjust the URL according to your backend
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div>
      <h2>Available Services</h2>
      <ul>
        {services.map(service => (
          <li key={service._id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
            <img src={service.image} alt={service.name} width="200px" />
            <button>Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
