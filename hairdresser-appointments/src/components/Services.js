import React from 'react';
import './Services.css'; // Optional if you want specific styles
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Haircut",
      description: "Basic haircut with styling.",
      price: "$25",
      image: "https://via.placeholder.com/150", // Replace with actual images later
    },
    {
      id: 2,
      name: "Hair Coloring",
      description: "Full hair coloring service.",
      price: "$45",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Hair Styling",
      description: "Hair styling for special occasions.",
      price: "$35",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="services-container">
      <h2>Available Services</h2>
      <div className="services-list">
        {services.map(service => (
          <Link key={service.id} to={`/services/${service.id}`} className="service-item">
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>{service.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
