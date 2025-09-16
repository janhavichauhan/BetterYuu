import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import JourneySection from './JourneySection';
import TestimonialsSection from './TestimonialsSection';
import CardsSection from './CardsSection';
import MissionVisionSection from './MissionVisionSection';
import '../style/global/MainLayout.scss';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      <CardsSection />

      <MissionVisionSection />
      <JourneySection />
      <TestimonialsSection />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
