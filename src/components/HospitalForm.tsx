import React, { useState } from 'react';
import axios from 'axios';
import '../app/globals.css';

const HospitalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    address: '',
    phone: '',
    email: '',
    services: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newHospital = {
      ...formData,
      services: formData.services.split(',').map(service => service.trim()), // Convert comma-separated services into an array
    };

    try {
      const response = await axios.post('/api/hospitals', newHospital);
      alert('Hospital added successfully!');
      // Optionally, clear the form fields after submission
      setFormData({
        name: '',
        city: '',
        address: '',
        phone: '',
        email: '',
        services: '',
      });
    } catch (error) {
      console.error('Error adding hospital:', error);
      alert('Failed to add hospital. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <label>Services (comma-separated):</label>
        <input
          type="text"
          name="services"
          value={formData.services}
          onChange={handleChange}
          placeholder="Services"
          required
        />
      </div>
      <button type="submit">Add Hospital</button>
    </form>
  );
};

export default HospitalForm;