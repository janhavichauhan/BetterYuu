import Sidebar from '../components/DreamComponents/Sidebar';
import Navbar from '../components/DreamComponents/Navbar';
import HeroCarousel from '../components/DreamComponents/HeroCourosel';
import DreamsSection from '../components/DreamComponents/DreamSection';
import BlogsSection from '../components/DreamComponents/BlogSection';
import StarBackground from '../components/DreamComponents/StarBackground';
import StatsSection from '../components/DreamComponents/StatsSection';

import styles from '../style/components/DreamComponents/DreamPage.module.scss';

export default function Dream({ children }) {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.background}><StarBackground /></div>
      <Sidebar />
      <div className={styles.content}>
        <Navbar />
        <HeroCarousel />
        <StatsSection />
        <DreamsSection />
        <BlogsSection />
        {children}
      </div>
    </div>
  );
}
