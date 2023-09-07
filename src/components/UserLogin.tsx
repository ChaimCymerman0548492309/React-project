import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserLogin.css'; // כאן ניתן לציין את הקובץ CSS

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
        
      }, {
        headers: {
          authorization: 'test-token',
        },
      });
      console.log('Login success:', response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="user-login"> {/* הוספתי את הקלאס שנתתי לו */}
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

export default UserLogin;
