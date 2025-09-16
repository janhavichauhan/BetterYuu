import React from 'react';
import '../style/components/TestimonialsSection.scss';

// Import SVG files
import BrainIdea from '../assets/testimonials/brain-idea.svg';
import BrainJumping from '../assets/testimonials/brain-jumping.svg';
import BrainMiddle from '../assets/testimonials/brain-middle.svg';
import BrainGlass from '../assets/testimonials/brain-glass.svg';
import BrainSmiles from '../assets/testimonials/brain-smiles.svg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Better Yuu has transformed my daily routine. The simple 5-step process makes personal growth feel achievable and sustainable.",
      author: "Sarah Johnson",
      role: "Marketing Manager",
      brainType: "idea"
    },
    {
      id: 2,
      text: "I love how the platform breaks down complex self-improvement into manageable steps. It's been a game-changer for my mental health.",
      author: "Michael Chen",
      role: "Software Developer",
      brainType: "jumping"
    },
    {
      id: 3,
      text: "The meditation and reflection features have helped me find inner peace. I feel more centered and focused than ever before.",
      author: "Emily Rodriguez",
      role: "Teacher",
      brainType: "middle",
      featured: true
    },
    {
      id: 4,
      text: "As someone who struggled with consistency, Better Yuu's approach has made it easy to stick to my personal development goals.",
      author: "David Kim",
      role: "Entrepreneur",
      brainType: "glass"
    },
    {
      id: 5,
      text: "The community aspect and progress tracking have kept me motivated throughout my journey. Highly recommend!",
      author: "Lisa Thompson",
      role: "Designer",
      brainType: "smiles"
    }
  ];

  const BrainIcon = ({ type, className = "" }) => {
    const brainImages = {
      idea: BrainIdea,
      jumping: BrainJumping,
      middle: BrainMiddle,
      glass: BrainGlass,
      smiles: BrainSmiles
    };

    const BrainComponent = brainImages[type] || BrainSmiles;

    return (
      <img 
        src={BrainComponent} 
        alt={`Brain ${type}`}
        className={`brain-icon ${className}`}
      />
    );
  };

  // Modular component for featured testimonial
  const FeaturedTestimonial = ({ testimonial }) => (
    <div className="testimonial-card testimonial-card--featured">
      <div className="testimonial-brain testimonial-brain--featured">
        <BrainIcon type={testimonial.brainType} className="testimonial-brain-icon" />
      </div>
      
      <div className="testimonial-content testimonial-content--featured">
        <div className="testimonial-text">
          <p>"{testimonial.text}"</p>
        </div>
        
        <div className="testimonial-author">
          <h4>{testimonial.author}</h4>
          <span>{testimonial.role}</span>
        </div>
      </div>

      <div className="quote-mark quote-mark--closing">"</div>
    </div>
  );

  // Modular component for regular testimonial
  const RegularTestimonial = ({ testimonial, index }) => (
    <div className="testimonial-card">
      {index === 0 && <div className="quote-mark quote-mark--opening">"</div>}
      
      <div className="testimonial-content">
        <div className="testimonial-text">
          <p>"{testimonial.text}"</p>
        </div>
        
        <div className="testimonial-author">
          <h4>{testimonial.author}</h4>
          <span>{testimonial.role}</span>
        </div>
      </div>

      <div className="testimonial-brain">
        <BrainIcon type={testimonial.brainType} className="testimonial-brain-icon" />
      </div>
    </div>
  );

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Our Testimonials</h2>
          <div className="testimonials-underline"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            testimonial.featured ? (
              <FeaturedTestimonial 
                key={testimonial.id} 
                testimonial={testimonial} 
              />
            ) : (
              <RegularTestimonial 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
              />
            )
          ))}
        </div>

        <div className="testimonials-cta">
          <button className="cta-button">Start Your Journey Today</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
