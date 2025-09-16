import React, { useEffect, useState } from 'react';
import '../style/components/JourneySection.scss';

const JourneySection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const getPosClass = (index) => {
    if (index === current) return 'pos-center';
    if (index === (current + 1) % 3) return 'pos-right';
    return 'pos-left';
  };

  return (
    <section className="journey-section">
      <div className="journey-container">
        <h2 className="journey-title">Journey To The Better You Made Simple!</h2>
        <p className="journey-subtitle">
          No clutter. No confusion. Just 5 simple steps to begin your journey of growth and reflection.
        </p>

        <div className="journey-stage">
          {[0,1,2].map((i) => (
            <div
              key={i}
              className={`journey-card ${getPosClass(i)} ${i === current ? 'journey-card--primary' : ''}`}
            >
              <div className="journey-card-inner" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;


