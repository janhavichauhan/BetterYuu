import React from 'react';
import '../style/components/CardsSection.scss';

const cardData = [
  { id: 1, title: 'Card One', description: 'Placeholder content' },
  { id: 2, title: 'Card Two', description: 'Placeholder content' },
  { id: 3, title: 'Card Three', description: 'Placeholder content' },
  { id: 4, title: 'Card Four', description: 'Placeholder content' },
];

const CardsSection = () => {
  return (
    <section className="cards-section">
      <div className="cards-container">
        {cardData.map(card => (
          <div key={card.id} className="feature-card">
            <div className="feature-card__content">
              <div className="feature-card__image" />
              <h3 className="feature-card__title">{card.title}</h3>
              <p className="feature-card__desc">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;


