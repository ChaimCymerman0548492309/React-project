import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Trip {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
  id: string;
}

function UpdateTripForm() {
  const { id } = useParams();
  const history = useNavigate();

  const [trip, setTrip] = useState<Trip | null>(null); // Specify the type as Trip | null
  const [formData, setFormData] = useState<Trip>({
    name: '',
    destination: '',
    startDate: '',
    endDate: '',
    description: '',
    price: 0,
    image: '',
    activities: [],
    id: '',
  });

  const doApi = async () => {
    try {
      const url = `http://localhost:3000/api/trips/${id}`; // Assuming you can fetch a specific trip by id
      const resp = await axios.get<Trip>(url); // Use generic type to specify response data type
      console.log(resp.data);
      setTrip(resp.data);
      setFormData(resp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    doApi();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = `http://localhost:3000/api/trips/${id}`;
      const resp = await axios.put(url, formData); // Assuming your API supports updating a trip using a PUT request
      console.log(resp.data);
      useNavigate('/');
    } catch (error) {
      console.error("Error updating trip:", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Destination:</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other fields for editing trip details */}
        <button type="submit">Update Trip</button>
      </form>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default UpdateTripForm;
