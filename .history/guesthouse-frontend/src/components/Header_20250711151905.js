import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
      <Link to="/booking" style={{ margin: '0 10px' }}>Booking</Link>
      <Link to="/availability" style={{ margin: '0 10px' }}>Availability</Link>
      <Link to="/admin" style={{ margin: '0 10px' }}>Admin</Link>
    </nav>
  );
}

export default Header;
