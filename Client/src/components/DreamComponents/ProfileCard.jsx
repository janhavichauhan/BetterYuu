import { useState } from 'react';
import { Card, CardContent, Typography, Avatar, Stack, Box, Chip, Grid, Button, LinearProgress, IconButton } from '@mui/material';
import styles from '../../style/components/DreamComponents/ProfileCard.module.scss';

export default function ProfileCard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample data
  const userData = {
    name: 'Janhavi',
    role: 'Dream Explorer',
    avatar: 'https://i.pravatar.cc/140?img=68',
    memberSince: 'March 2023',
    level: 'Pro',
    progress: 78,
    stats: {
      dreams: 42,
      analysis: 18,
      blogs: 7
    },
    badges: [
      { name: 'Dream Master', icon: '🌟' },
      { name: 'Consistent Dreamer', icon: '🔄' },
      { name: 'Insight Seeker', icon: '🔍' }
    ],
    recentActivity: [
      { type: 'dream', title: 'Flying over mountains', date: '2 days ago' },
      { type: 'analysis', title: 'Dream pattern recognition', date: '1 week ago' },
      { type: 'blog', title: 'Understanding lucid dreams', date: '2 weeks ago' }
    ]
  };
  
  return (
    <Card className={styles.profileCard}>
      {/* Header with background gradient */}
      <div className={styles.cardHeader}>
        <div className={styles.headerContent}>
          <div className={styles.userInfo}>
            <Avatar 
              src={userData.avatar} 
              alt={userData.name} 
              className={styles.avatar}
            />
            <div>
              <Typography variant="h5" className={styles.userName}>
                {userData.name}
              </Typography>
              <Typography variant="body2" className={styles.userRole}>
                {userData.role} • Member since {userData.memberSince}
              </Typography>
            </div>
          </div>
          <Chip
            label={userData.level}
            className={styles.levelBadge}
          />
        </div>
      </div>
      
      {/* Card Body */}
      <CardContent className={styles.cardBody}>
        {/* Progress bar */}
        <div className={styles.progressSection}>
          <div className={styles.progressHeader}>
            <Typography variant="body2" className={styles.progressTitle}>
              Profile Completion
            </Typography>
            <Typography variant="body2" className={styles.progressPercentage}>
              {userData.progress}%
            </Typography>
          </div>
          <LinearProgress 
            variant="determinate" 
            value={userData.progress} 
            className={styles.progressBar}
          />
        </div>
        
        {/* Tabs */}
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'overview' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'activity' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'badges' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('badges')}
          >
            Badges
          </button>
        </div>
        
        {/* Tab Content */}
        <div className={styles.tabContent}>
          {activeTab === 'overview' && (
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>✨</div>
                <Typography variant="h4" className={styles.statValue}>{userData.stats.dreams}</Typography>
                <Typography variant="body2" className={styles.statLabel}>Dreams</Typography>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>🧠</div>
                <Typography variant="h4" className={styles.statValue}>{userData.stats.analysis}</Typography>
                <Typography variant="body2" className={styles.statLabel}>Analyses</Typography>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>📝</div>
                <Typography variant="h4" className={styles.statValue}>{userData.stats.blogs}</Typography>
                <Typography variant="body2" className={styles.statLabel}>Blogs</Typography>
              </div>
            </div>
          )}
          
          {activeTab === 'activity' && (
            <div className={styles.activityList}>
              {userData.recentActivity.map((activity, index) => (
                <div key={index} className={styles.activityItem}>
                  <div className={styles.activityIcon}>
                    {activity.type === 'dream' ? '💤' : activity.type === 'analysis' ? '📊' : '📝'}
                  </div>
                  <div className={styles.activityDetails}>
                    <Typography variant="body2" className={styles.activityTitle}>
                      {activity.title}
                    </Typography>
                    <Typography variant="caption" className={styles.activityDate}>
                      {activity.date}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'badges' && (
            <div className={styles.badgesList}>
              {userData.badges.map((badge, index) => (
                <div key={index} className={styles.badgeItem}>
                  <div className={styles.badgeIcon}>{badge.icon}</div>
                  <Typography variant="body2" className={styles.badgeName}>
                    {badge.name}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <Button variant="contained" className={styles.primaryButton}>
            Edit Profile
          </Button>
          <Button variant="outlined" className={styles.secondaryButton}>
            Share Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
