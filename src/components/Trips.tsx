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
console.log(ary);

  return (
    <div >
      {ary.map((item: Trip) => {
        return (
          <>
          
            <Link to={`/TripDetail/${item.id}`}>
                <div key={item.id}>
                  <div style={{ border: 'solid ', borderRadius: '15px' }}>
                    <p>{item.name}</p>
                    <p>{item.destination}</p>
                    <p>{item.price}</p>
                    <img src={item.image} alt="" style={{ width: '180px', height: '180px' }} />
                  </div>
                </div>
                <button>delete trip</button>

            </Link>

          </>
        )
      })}
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Trips;
