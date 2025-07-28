import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import img1 from "./festa.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"><Link t="/"><img src={img1} alt="bts" /></Link></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Festa2025">Festa 2025</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
