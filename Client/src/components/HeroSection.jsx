import React from 'react';
import '../style/components/HeroSection.scss';
import heroSvg from '../assets/Home-page/hero-section.svg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container" data-speed="-0.2" data-lag="0.4">
        <div className="hero-illustration" data-speed="0.15" data-lag="0.5">
          <img 
            src={heroSvg} 
            alt="Hero illustration showing people with plants and growth" 
            className="hero-svg"
          />
        </div>
        
        <div className="hero-content" data-speed="0.05" data-lag="0.35">
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
