import React from 'react';
import '../style/components/JourneySection.css';

const JourneySection = () => {
  return (
    <section className="journey-section">
      <div className="journey-container">
        <h2 className="journey-title">Journey To The Better You Made Simple!</h2>
        <p className="journey-subtitle">
          No clutter. No confusion. Just 5 simple steps to begin your journey of growth and reflection.
        </p>

        <div className="journey-cards">
          <div className="journey-card">
            <div className="journey-card-inner"></div>
          </div>
          <div className="journey-card journey-card--primary">
            <div className="journey-card-inner"></div>
          </div>
          <div className="journey-card">
            <div className="journey-card-inner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;


