import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-illustration">
          <div className="main-figure">
            <div className="woman-head">
              <div className="plants-garden">
                <div className="plant plant-1"></div>
                <div className="plant plant-2"></div>
                <div className="plant plant-3"></div>
                <div className="flower flower-1"></div>
                <div className="flower flower-2"></div>
              </div>
            </div>
            <div className="woman-body">
              <div className="striped-shirt"></div>
            </div>
          </div>
          
          <div className="left-character">
            <div className="man-body"></div>
            <div className="purple-pot">
              <div className="pot-plant"></div>
            </div>
            <div className="ground-plants"></div>
          </div>
          
          <div className="right-character">
            <div className="ladder"></div>
            <div className="woman-dress"></div>
            <div className="watering-can"></div>
          </div>
          
          <div className="hearts">
            <div className="heart heart-1"></div>
            <div className="heart heart-2"></div>
            <div className="heart heart-3"></div>
          </div>
          
          <div className="teal-plants"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-headline">Clarity. Growth. Connection.</h1>
          <p className="hero-description">
            Daytime accountability meets nighttime reflection powered by AI, privacy-first, and peer-driven.
          </p>
          <button className="cta-button">GET STARTED</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
