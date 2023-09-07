import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserRegistration.css'; // כאן ניתן לציין את הקובץ CSS

function UserRegistration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    const role = 'admin'
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        email,
        password,
      }, {
        headers: {
          authorization: 'test-token',
        },
      });
      console.log('Registration success:', response.data);

    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="user-registration"> {/* הוספתי את הקלאס שנתתי לו */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button type="submit">Submit</button>
      </form>

      <Link to="/">
        <button className="link-button">Home</button> {/* הוספתי את הקלאס שנתתי לו */}
      </Link>
    </div>
  );
}

export default UserRegistration;
