import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

function Trips() {
  const [ary, setary] = useState<Trip[]>([]);

  const fetchTrips = async () => {
    try {
      const response = await axios.get<Trip[]>("http://localhost:3000/api/trips");
      setary(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  const handleDelete = async (tripId: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/trips/${tripId}`, {
        headers: {
          authorization: 'test-token',
        },
      });

      setary((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <div style={{ justifyContent : 'space-between'}}>
      {ary.map((item: Trip) => (
        <div key={item.id}>
          <Link to={`/TripDetail/${item.id}`}>
            <div style={{ border: 'solid ', borderRadius: '15px' }}>
              <p>{item.name}</p>
              <p>{item.destination}</p>
              <p>{item.price}</p>
              <img src={item.image} alt="" style={{ width: '180px', height: '180px' }} />
            </div>
          </Link>
          <button onClick={() => handleDelete(item.id)}>delete trip</button>
        </div>
      ))}
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/NewTripForm">New Trip Form</Link>
      </button>
    </div>
  );
}

export default Trips;
