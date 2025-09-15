import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import JourneySection from './JourneySection';
import CardsSection from './CardsSection';
import MissionVisionSection from './MissionVisionSection';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      <CardsSection />

      <MissionVisionSection />
      <JourneySection />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
