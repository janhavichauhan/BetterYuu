import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
