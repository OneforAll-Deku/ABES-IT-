import React from 'react';
import './Navbar.css';
import Link1 from './component/Link1';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link1 to="/">Bookstore</Link1>
      </div>
      <div className="navbar-links">
        <Link1 to="/login">Login</Link1>
        <Link1 to="/register">Register</Link1>
      </div>
    </nav>
  );
};

export default Navbar;