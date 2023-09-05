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
  const [ary, setary] = useState([])

  const doapi = async () => {
    let url = "http://localhost:3000/api/trips"
    let resp = await axios.get(url)
    console.log(resp.data);
    setary(resp.data)

  }
  useEffect(() => {
    doapi()

  }, [])

  return (
    <div >
      {ary.map((item: Trip) => {
        return (
          <>
          
            <Link to="/TripDetail">
                <div key={item.id}>
                  <div style={{ border: 'solid ', borderRadius: '15px' }}>
                    <p>{item.name}</p>
                    <p>{item.destination}</p>
                    <p>{item.price}</p>
                    <img src={item.image} alt="" style={{ width: '180px', height: '180px' }} />
                  </div>
                </div>
            </Link>
            <button>delete trip</button>

          </>
        )
      })}
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/NewTripForm">
        <button>New trip </button>  
      </Link>
      {/* <Link to="/TripDetail">
        <button >One trip</button>
      </Link> */}
    </div>
  );
}

export default Trips;
