import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import styles from '../../style/components/HomeComponent/ProfilePageConcious.module.scss';
import { format } from 'date-fns';

// Mock data for the user profile
const mockProfileData = {
  name: 'Janhavi Chauhan',
  role: 'UI/UX Designer',
  avatar: 'https://i.pravatar.cc/150?img=47',
  coverImage: 'https://images.unsplash.com/photo-1510936279934-2e212470725a?q=80&w=2940&auto=format&fit=crop',
  stats: [
    { label: 'Goals Completed', value: 12 },
    { label: 'Courses Finished', value: 4 },
    { label: 'Current Streak', value: 45 },
    { label: 'Blogs Written', value: 8 },
  ],
  recentActivity: [
    { type: 'assignment', title: 'User Persona Project', date: new Date('2025-09-19'), status: 'Completed' },
    { type: 'blog', title: 'The Power of Dream Interpretation', date: new Date('2025-09-18'), status: 'Published' },
    { type: 'course', title: 'Mindfulness for Beginners', date: new Date('2025-09-17'), status: 'Finished' },
    { type: 'goal', title: 'Learn React Hooks', date: new Date('2025-09-16'), status: 'Achieved' },
  ],
};

// Framer Motion variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Delay between children animations
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProfilePage() {
  const { name, role, avatar, coverImage, stats, recentActivity } = mockProfileData;
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
          <h2 className={styles.sectionTitle}>Recent Activity</h2>
          <ul className={styles.activityList}>
            {recentActivity.map((activity, index) => (
              <motion.li 
                key={index} 
                className={styles.activityItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 1.5 + index * 0.1 } }}
              >
                <span className={styles.activityIcon}>
                  {activity.type === 'assignment' && '✅'}
                  {activity.type === 'blog' && '📝'}
                  {activity.type === 'course' && '🎓'}
                  {activity.type === 'goal' && '🎯'}
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