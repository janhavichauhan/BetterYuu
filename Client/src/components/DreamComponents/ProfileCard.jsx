import React, { useState } from 'react'; // Import React for keys, etc.
import { 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Chip, 
  LinearProgress, 
  Button, 
  Modal, // New import for pop-out
  Box, 
  TextField, 
  Stack // Import Stack for better layout inside modals
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // New import for close button
import styles from '../../style/components/DreamComponents/ProfileCard.module.scss';

// --- Modal Content Components ---

// Basic style for the Modal content Box
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: 'none',
};

/**
 * Mock component for the Edit Profile form.
 */
function EditProfileModal({ open, onClose, userData, onSave }) {
  // Local state for form fields
  const [formData, setFormData] = useState({ 
    name: userData.name, 
    role: userData.role 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // In a real app, you'd send this data to an API
    onSave(formData); 
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="edit-profile-title">
      <Box sx={modalStyle}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography id="edit-profile-title" variant="h6" component="h2">
            Edit Profile
          </Typography>
          <Button onClick={onClose} size="small" color="inherit">
             <CloseIcon />
          </Button>
        </Stack>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          {/* Add more fields like avatar upload, memberSince, etc. */}
        </Stack>
        <Box mt={3} display="flex" justifyContent="flex-end" gap={1}>
          <Button onClick={onClose} variant="outlined">Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">Save Changes</Button>
        </Box>
      </Box>
    </Modal>
  );
}

/**
 * Mock component for the Share Profile pop-out.
 */
function ShareProfileModal({ open, onClose, profileLink }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileLink);
      alert('Profile link copied to clipboard!'); // Replace with a sophisticated notification
      onClose();
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy link.');
    }
  };
  
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="share-profile-title">
      <Box sx={modalStyle}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography id="share-profile-title" variant="h6" component="h2">
            Share Profile
          </Typography>
           <Button onClick={onClose} size="small" color="inherit">
             <CloseIcon />
          </Button>
        </Stack>
        <Typography variant="body1" mb={2}>
          Share your profile with your friends!
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <TextField
            value={profileLink}
            fullWidth
            size="small"
            InputProps={{ readOnly: true }}
            variant="outlined"
          />
          <Button variant="contained" onClick={handleCopy}>
            Copy Link
          </Button>
        </Stack>
        <Box mt={2}>
          {/* Mock social share buttons */}
          <Button variant="outlined" startIcon={<span role="img" aria-label="twitter">🐦</span>} sx={{ mr: 1 }}>
            Twitter
          </Button>
          <Button variant="outlined" startIcon={<span role="img" aria-label="facebook">📘</span>}>
            Facebook
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

// --- Main ProfileCard Component ---

export default function ProfileCard() {
  const [activeTab, setActiveTab] = useState('overview');
  // New state for modal visibility
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  
  // Sample data (updated to be mutable for the form)
  const [userData, setUserData] = useState({
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
  });

  const handleEditSave = (newFormData) => {
    // Update the main userData state with the new values
    setUserData(prevData => ({
      ...prevData,
      name: newFormData.name,
      role: newFormData.role,
      // You would typically update more fields here
    }));
    // Note: The progress bar and level logic would usually be recalculated based on real data
  };

  const profileLink = `https://dreamapp.com/profile/${userData.name.toLowerCase()}`; // Mock profile URL

  return (
    <>
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
          
          {/* Action Buttons with Modal Logic */}
          <div className={styles.actionButtons}>
            <Button 
              variant="contained" 
              className={styles.primaryButton}
              onClick={() => setIsEditModalOpen(true)} // Open Edit Modal
            >
              Edit Profile
            </Button>
            <Button 
              variant="outlined" 
              className={styles.secondaryButton}
              onClick={() => setIsShareModalOpen(true)} // Open Share Modal
            >
              Share Profile
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Modals */}
      <EditProfileModal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        userData={userData}
        onSave={handleEditSave}
      />
      <ShareProfileModal
        open={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        profileLink={profileLink}
      />
    </>
  );
}