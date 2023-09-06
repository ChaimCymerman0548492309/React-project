// import React from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// const handleDelete = async (tripId: string) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/trips/${tripId}`,{
//         headers: {
//             authorization: 'test-token', 
//         },
//     });

//       setary((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
//     } catch (error) {
//       console.error("Error deleting trip:", error);
//     }
  

//     const { id } = useParams();


//     return (
//         <div>
//             <button onClick={() => handleDelete}>Delete Trip</button>

//             <button>
//                 <Link to="/">Cancel and take back to Home</Link>

//             </button>
//         </div>
//     );
// }

// export default Delete;
