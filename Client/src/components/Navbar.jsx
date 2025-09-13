import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About us</a>
          <a href="#cases" className="nav-link">Cases</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#contact" className="nav-link">Contact us</a>
        </div>
        
        <div className="navbar-right">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search" 
              className="search-input"
            />
            <div className="search-icon">🔍</div>
          </div>
          <button className="join-button">JOIN NOW</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
