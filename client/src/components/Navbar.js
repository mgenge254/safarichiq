import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">SafariChiq</h2>

      <ul className="nav-links">
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


