import React from 'react';
import '../style/components/HeroSection.css';
import heroSvg from '../assets/Home-page/hero-section.svg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-illustration">
          <img 
            src={heroSvg} 
            alt="Hero illustration showing people with plants and growth" 
            className="hero-svg"
          />
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
