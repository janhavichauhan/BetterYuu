import React from 'react';
import '../style/components/MissionVisionSection.scss';
import heroSvg from '../assets/Home-page/vision-image.svg';

const MissionVisionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-text">
          <h2 className="mission-title">Our Mission and Vision</h2>
          <p className="mission-paragraph">
            Yuu was born out of a mission to redefine digital wellness. Unlike social media driven by vanity metrics,
            we believe in authenticity, privacy, and real growth. Our vision is a proactive ecosystem that supports
            you 24/7 keeping you accountable during the day and helping you reflect at night.
          </p>
          <div className="mission-divider" />
        </div>
        <div className="mission-illustration">
          <img src={heroSvg} alt="Mission and Vision illustration" />
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;


