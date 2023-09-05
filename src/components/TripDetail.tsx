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

function TripDetail() {
  const [ary, setAry] = useState<Trip[]>([]); // Specify the type as Trip[]

  const doApi = async () => {
    try {
      const url = "http://localhost:3000/api/trips";
      const resp = await axios.get<Trip[]>(url); // Use generic type to specify response data type
      console.log(resp.data);
      setAry(resp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    doApi();
  }, []);

  return (
    <div>
      {ary.map((item: Trip) => (
        <div key={item.id}>
          <div style={{ border: 'solid', borderRadius: '15px' }}>
            <p>{item.name}</p>
            <p>{item.destination}</p>
            <p>{item.price}</p>
            <img src={item.image} alt="" style={{ width: '180px', height: '180px' }} />
          </div>
        </div>
      ))}
      <Link to="/">
        <button>Home</button> 
      </Link>
    </div>
  );
}

export default TripDetail;


console.log(2);
