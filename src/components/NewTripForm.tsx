import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import './NewTripForm.css';

export default function NewTripForm() {
  const [formData, setFormData] = useState({
    nameInput: "",
    destinationInput: "",
    startDateInput: "",
    endDateInput: "",
    descriptionInput: "",
    priceInput: "",
    imageInput: "",
    activitiesInput: "",
  });

  const handleChange = (e :any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/trips", formData,
        {
          headers: {
            authorization: 'test-token'
          },
        });
      console.log(response.data)
    } catch (error) {
      console.error("Error adding trip:", error);
    }
  };

  return (
    <div className="new-trip-form">
      <h2>Add a New Trip</h2>
      <Link to="/trips">
        <button>To trips page</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="nameInput"
            value={formData.nameInput}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Destination:</label>
          <input
            type="text"
            name="destinationInput"
            value={formData.destinationInput}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDateInput"
            value={formData.startDateInput}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            name="endDateInput"
            value={formData.endDateInput}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="descriptionInput"
            value={formData.descriptionInput}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="priceInput"
            value={formData.priceInput}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="imageInput"
            value={formData.imageInput}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Activities (comma-separated):</label>
          <input
            type="text"
            name="activitiesInput"
            value={formData.activitiesInput}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Trip</button>
      </form>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}
