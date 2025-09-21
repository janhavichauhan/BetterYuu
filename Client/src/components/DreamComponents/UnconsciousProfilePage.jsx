import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import styles from '../../style/components/DreamComponents/UnconsciousProfilePage.module.scss';
import { format } from 'date-fns';

// Mock data tailored for the "unconscious" profile
const mockUnconsciousProfileData = {
  name: 'MR.  BEST FRIEND', // A more thematic name
  role: 'Dream Analyst', // A role related to dreams
  avatar: 'https://i.pravatar.cc/150?img=47',
  coverImage: 'https://images.unsplash.com/photo-1549419637-bf7f62e84606?q=80&w=2940&auto=format&fit=crop', // A more dreamy cover image
  stats: [
    { label: 'Dreams Recorded', value: 37 },
    { label: 'AI Analyses', value: 25 },
    { label: 'Dream Cycles', value: 150 },
    { label: 'Luminosity Score', value: '8.4' }, // A unique stat for the dream theme
  ],
  recentActivity: [
    { type: 'dream', title: 'Flying Through Stars', date: new Date('2025-09-20'), status: 'Analyzed' },
    { type: 'AI', title: 'Symbolism of Water', date: new Date('2025-09-19'), status: 'Received' },
    { type: 'dream', title: 'Meeting a Shadow Figure', date: new Date('2025-09-18'), status: 'Recorded' },
    { type: 'blog', title: 'The World of Lucid Dreaming', date: new Date('2025-09-17'), status: 'Read' },
  ],
};

// Framer Motion variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function UnconsciousProfilePage() {
  const { name, role, avatar, coverImage, stats, recentActivity } = mockUnconsciousProfileData;
  const avatarRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the profile avatar
    gsap.fromTo(avatarRef.current, 
      { scale: 0.5, opacity: 0, y: 50 },
      { 
        scale: 1, 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "back.out(1.7)",
        delay: 0.5
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.contentWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Header */}
        <motion.div 
          className={styles.profileHeader}
          variants={itemVariants}
        >
          <div className={styles.coverImage} style={{ backgroundImage: `url(${coverImage})` }}></div>
          <div className={styles.profileInfo}>
            <img 
              ref={avatarRef}
              src={avatar} 
              alt={name} 
              className={styles.profileAvatar} 
            />
            <motion.h1 
              className={styles.profileName}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } }}
            >
              {name}
            </motion.h1>
            <motion.p 
              className={styles.profileRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.2 } }}
            >
              {role}
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className={styles.statsSection}
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className={styles.statCard}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className={styles.statValue}>{stat.value}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Activity Section */}
        <motion.div 
          className={styles.activitySection}
          variants={itemVariants}
        >
          <h2 className={styles.sectionTitle}>Recent Dream Activity</h2>
          <ul className={styles.activityList}>
            {recentActivity.map((activity, index) => (
              <motion.li 
                key={index} 
                className={styles.activityItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 1.5 + index * 0.1 } }}
              >
                <span className={styles.activityIcon}>
                  {activity.type === 'dream' && '🌙'}
                  {activity.type === 'AI' && '🤖'}
                  {activity.type === 'blog' && '📖'}
                </span>
                <div className={styles.activityDetails}>
                  <p className={styles.activityTitle}>{activity.title}</p>
                  <p className={styles.activityMeta}>{format(activity.date, 'MMM d, yyyy')} - {activity.status}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}