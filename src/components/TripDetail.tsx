import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

function TripDetail() {
  const { id } = useParams();
  const [trip, setTrip] = useState<Trip | null>(null); // Specify the type as Trip | null

  const doApi = async () => {
    try {
      const url = `http://localhost:3000/api/trips/${id}`; // Assuming you can fetch a specific trip by id
      const resp = await axios.get<Trip>(url); // Use generic type to specify response data type
      console.log(resp.data);
      setTrip(resp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    doApi();
  }, []);

  return (
    <div>
      {trip && (
        <div key={trip.id}>
          <div style={{ border: 'solid', borderRadius: '15px' }}>
            <p>{trip.name}</p>
            <p>{trip.destination}</p>
            <p>{trip.price}</p>
            <p>{trip.activities}</p>
            <img src={trip.image} alt="" style={{ width: '250px', height: '250px' }} />

            <Link to="/NewTripForm">
              <button>New trip </button>
            </Link>

          </div>
        </div>
      )}
      <footer>
        <Link to="/">
          <button>Home</button>
        </Link></footer>
    </div>
  );
}

export default TripDetail;
