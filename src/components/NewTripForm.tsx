
// import React, { useEffect, useState } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// interface Trip {
//   name: string;
//   destination: string;
//   startDate: string;
//   endDate: string;
//   description: string;
//   price: number;
//   image: string;
//   activities: string[];
//   id: string;
// }

// function NewTripForm() {
//   const { id } = useParams();
//   const navigate = useNavigate(); // שימוש ב־useNavigate

//   const [trip, setTrip] = useState<Trip | null>(null);
//   const [formData, setFormData] = useState<Trip>({
//     name: '',
//     destination: '',
//     startDate: '',
//     endDate: '',
//     description: '',
//     price: 0,
//     image: '',
//     activities: [],
//     id: '',
//   });

//   const doApi = async () => {
//     try {
//       const url = `http://localhost:3000/api/trips/${id}`;
//       const resp = await axios.get<Trip>(url);
//       console.log(resp.data);
//       setTrip(resp.data);
//       setFormData(resp.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   useEffect(() => {
//     doApi();
//   }, [id]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const url = `http://localhost:3000/api/trips`;
//       const tripData = {
//         name: formData.name,
//         destination: formData.destination,
//         startDate: formData.startDate,
//         endDate: formData.endDate,
//         description: formData.description,
//         price: formData.price,
//         image: formData.image,
//         activities: formData.activities,
//       };
  
//       const resp = await axios.post(url, tripData, {
//         headers: {
//           Authorization: 'test-token', // הוספת הטוקן בתוך הכותרת
//         },
//       });
//       console.log(resp.data);
//       navigate('/');
//     } catch (error) {
//       console.error("Error creating new trip:", error);
//     }
//   }
  
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Destination:</label>
//           <input
//             type="text"
//             name="destination"
//             value={formData.destination}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>startDate:</label>
//           <input
//             type="text"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>endDate:</label>
//           <input
//             type="text"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>price:</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>image:</label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleInputChange}
//           />
//         </div>
//         {/* Add other fields for editing trip details */}
//         <button type="submit">New Trip</button>
//       </form>
//       <Link to="/">
//         <button>Cancel and take beek to Home</button>
//       </Link>
//     </div>
//   );
// }


// export default NewTripForm

import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'



export default function NewTripForm() {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: "",
    image: "",
    activities: [],
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <div>
      <h2>Add a New Trip</h2>
      <Link to="/all-trips">
        <button>To trips page</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Destination:</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Activities (comma-separated):</label>
          <input
            type="text"
            name="activities"
            value={formData.activities}
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
