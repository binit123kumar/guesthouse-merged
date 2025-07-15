import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [guest, setGuest] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setGuest({ ...guest, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/guest/register', guest);
      alert(res.data.message);
    } catch (err) {
      alert('❌ Registration failed!');
    }
  };

  return (
    <div>
      <h2>Guest Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={guest.name} onChange={handleChange} required /><br/>
        <input type="email" name="email" placeholder="Email" value={guest.email} onChange={handleChange} required /><br/>
        <input type="text" name="phone" placeholder="Phone Number" value={guest.phone} onChange={handleChange} required /><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
