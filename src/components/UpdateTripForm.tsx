import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import './NewTripForm.css'; // משתמשים בעיצוב מקובץ ה-CSS

function UpdateTrip() {
    const { id } = useParams();
    const [editedTrip, setEditedTrip] = useState({
        name: "",
        destination: "",
        startDate: "",
        endDate: "",
        description: "",
        price: 0,
        image: "",
        activities: "",
    });
    useEffect(() => {
        axios.get(`http://localhost:3000/api/trips/${id}`)
            .then(response => {
                setEditedTrip(response.data);
            })
            .catch(error => {
                console.error("Error fetching trip data:", error);
            });
    }, [id]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditedTrip({ ...editedTrip, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/trips/${id}`, editedTrip, {
                headers: {
                    authorization: 'test-token'
                },
            });
            console.log("Trip updated:", response.data);
        } catch (error) {
            console.error("Error updating trip:", error);
        }
    };
    return (
        <div className="update-trip"> {/* השתמשנו בקלאס מקובץ ה-CSS */}
            <h2>Edit Trip</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group"> {/* השתמשנו בקלאס מקובץ ה-CSS */}
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={editedTrip.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group"> {/* השתמשנו בקלאס מקובץ ה-CSS */}
                    <label>Destination:</label>
                    <input
                        type="text"
                        name="destination"
                        value={editedTrip.destination}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group"> {/* השתמשנו בקלאס מקובץ ה-CSS */}
                    <label>Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={editedTrip.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group"> {/* השתמשנו בקלאס מקובץ ה-CSS */}
                    <label>End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={editedTrip.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group"> {/* השתמשנו בקלאס מקובץ ה-CSS */}
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={editedTrip.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group"> {/* השתמשנו בקלאס מקובץ ה-CSS */}
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={editedTrip.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group"> {/* השתמשנו בקלאס מקובץ ה-CSS */}
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={editedTrip.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group"> {/* השתמשנו בקלאס מקובץ ה-CSS */}
                    <label>Activities (comma-separated):</label>
                    <input
                        type="text"
                        name="activities"
                        value={editedTrip.activities}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="update-button">Update Trip</button> {/* השתמשנו בקלאס מקובץ ה-CSS */}
            </form>
            <Link to={`/Trips`}>
                <button className="link-button">Back to Trip Details</button> {/* השתמשנו בקלאס מקובץ ה-CSS */}
            </Link>
        </div>
    )
}
export default UpdateTrip
