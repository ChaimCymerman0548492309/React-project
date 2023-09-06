import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function EditTrip() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: "",
    image: "",
    activities: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
console.log();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = `http://localhost:3000/api/trips/${id}`;
      const response = await axios.put(url, formData, {
        headers: {
          Authorization: "test-token", // טוקן אמיתי כאן
        },
      });
      console.log(response.data);
      navigate("/all-trips"); // לאחר העריכה, נניתן לחזור לעמוד הרשימה של כל הטיולים
    } catch (error) {
      console.error("Error editing trip:", error);
    }
  };

  useEffect(() => {
    // טעינת הנתונים של הטיול לטופס לעריכה
    const fetchTripData = async () => {
      try {
        const tripDataUrl = `http://localhost:3000/api/trips/${id}`;
        const response = await axios.get(tripDataUrl);
        const tripData = response.data;
        setFormData({
          name: tripData.name,
          destination: tripData.destination,
          startDate: tripData.startDate,
          endDate: tripData.endDate,
          description: tripData.description,
          price: tripData.price.toString(), // להמיר את המחיר למחרוזת
          image: tripData.image,
          activities: tripData.activities.join(", "), // ייתכן שתרצה לערוך את הפורמט
        });
      } catch (error) {
        console.error("Error fetching trip data:", error);
      }
    };

    fetchTripData();
  }, [id]);

  return (
    <div>
      <h2>Edit Trip</h2>
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
        <button type="submit">Update Trip</button>
      </form>
      <button>
        <Link to="/">Cancel</Link>
      </button>
    </div>
  );
}
