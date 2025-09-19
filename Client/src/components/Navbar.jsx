import React, { useState, useEffect } from 'react';
import '../style/components/Navbar.scss';
import brandSvg from '../assets/Better-Yuu.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking on backdrop
  const handleBackdropClick = () => {
    closeMenu();
  };

  // Close menu when clicking on nav links
  const handleNavLinkClick = () => {
    closeMenu();
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src={brandSvg} alt="Better Yuu Logo" className="brand-logo" />
          </div>
          
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={handleNavLinkClick}>Home</a>
            <a href="#about" className="nav-link" onClick={handleNavLinkClick}>About us</a>
            <a href="#cases" className="nav-link" onClick={handleNavLinkClick}>Cases</a>
            <a href="#services" className="nav-link" onClick={handleNavLinkClick}>Services</a>
            <a href="#features" className="nav-link" onClick={handleNavLinkClick}>Features</a>
            <a href="#contact" className="nav-link" onClick={handleNavLinkClick}>Contact us</a>
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
              <button onClick={() => navigate("/login")}>
                  Join Now
               </button> 
          </div>
          
          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </nav>
      
      {/* Mobile Backdrop */}
      <div 
        className={`mobile-backdrop ${isMenuOpen ? 'active' : ''}`}
        onClick={handleBackdropClick}
      ></div>
    </>
  );
};

export default Navbar;