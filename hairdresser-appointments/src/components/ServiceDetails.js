import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetails.css'; // Create this CSS file for styling

const ServiceDetails = () => {
  const { id } = useParams();

  // Mock service data - you would fetch this from your backend
  const services = [
    {
      id: 1,
      name: "Haircut",
      description: "Basic haircut with styling.",
      price: "$25",
      image: "https://via.placeholder.com/300", // Replace with actual images
    },
    {
      id: 2,
      name: "Hair Coloring",
      description: "Full hair coloring service.",
      price: "$45",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Hair Styling",
      description: "Hair styling for special occasions.",
      price: "$35",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Beard Trim",
      description: "Stylish beard trimming service.",
      price: "$15",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "Scalp Massage",
      description: "Relaxing scalp massage.",
      price: "$20",
      image: "https://via.placeholder.com/300",
    },
  ];

  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return <p>Service not found</p>;
  }

  const handleWhatsApp = () => {
    const message = `Hi, I am interested in the ${service.name} service.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleAppointmentRequest = () => {
    // Logic for requesting an appointment can go here
    alert(`Requesting an appointment for ${service.name}`);
  };

  return (
    <div className="service-details">
      <img src={service.image} alt={service.name} className="service-image" />
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <p className="service-price">Price: {service.price}</p>
      <div className="button-container">
        <button onClick={handleWhatsApp} className="whatsapp-button">
          Chat on WhatsApp
        </button>
        <button onClick={handleAppointmentRequest} className="appointment-button">
          Request Appointment
        </button>
      </div>

      {/* Other Services Section */}
      <h3>Other Services</h3>
      <div className="other-services">
        {services.filter(s => s.id !== service.id).map(otherService => (
          <div key={otherService.id} className="other-service-item">
            <Link to={`/services/${otherService.id}`}>
              <img src={otherService.image} alt={otherService.name} className="other-service-image" />
              <h4>{otherService.name}</h4>
              <p>{otherService.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
