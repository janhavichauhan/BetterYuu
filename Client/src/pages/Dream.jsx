import React, { useState } from 'react';
import Sidebar from '../components/DreamComponents/Sidebar';
import Navbar from '../components/DreamComponents/Navbar';
import HeroCarousel from '../components/DreamComponents/HeroCourosel';
import DreamsSection from '../components/DreamComponents/DreamSection';
import BlogsSection from '../components/DreamComponents/BlogSection';
import StarBackground from '../components/DreamComponents/StarBackground';
import StatsSection from '../components/DreamComponents/StatsSection';
// Note: PageWrapper and useLocation are not needed here if you're handling the routing with state
// import PageWrapper from '../utils/PageWrapper';
// import { useLocation } from 'react-router-dom';

// Import all the components that can be rendered in the main area
import AddDreams from '../components/DreamComponents/Add_dream';
import ViewDreams from '../components/DreamComponents/view_dream';
import YourBlogs from '../components/DreamComponents/YourBlog';
import UnconsciousProfilePage from '../components/DreamComponents/UnconsciousProfilePage'; // Correct path

import styles from '../style/components/DreamComponents/DreamPage.module.scss';

// Create a map of keys to their corresponding components
const pageMap = {
  'dashboard': (
    <>
      <HeroCarousel />
      <StatsSection />
      <DreamsSection />
      <BlogsSection />
    </>
  ),
  'add-dream': <AddDreams />,
  'view-dreams': <ViewDreams />,
  'your-blogs': <YourBlogs />,
  // 'add-blog': <AddBlog />, // These components are not imported and will cause an error if used.
  // 'view-blogs': <ViewBlogs />,
  'profile': <UnconsciousProfilePage />, // Correctly map 'profile' to the new component
};

export default function Dream() {
  // Use a state variable to track the currently active page.
  const [activePage, setActivePage] = useState('dashboard');

  // This function will be passed to the Sidebar
  const handleNavigation = (pageKey) => {
    setActivePage(pageKey);
  };
  
  // This function conditionally renders the component based on the state.
  const renderContent = () => {
    return pageMap[activePage] || <div>Page not found!</div>;
  };

  return (
    <div className={styles.mainLayout}>
      <div className={styles.background}>
        <StarBackground />
      </div>
      
      {/* Pass the handleNavigation function to the Sidebar */}
      <Sidebar onNavigate={handleNavigation} />
      
      <div className={styles.content}>
        <Navbar />
        {/* The active content is rendered here */}
        <div className={styles.mainContentArea}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}