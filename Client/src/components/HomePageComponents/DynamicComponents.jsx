import React from 'react';
import styles from '../../style/components/HomeComponent/Sidebar.module.scss';
import GeminiQuizApp from './Aisssesment';
import CoursesDashboard from './Courses';
import GroupChatApp from './GroupChat';
import ProductivityDashboard from './Streak';
import BlogCreator from './Blogs';
import BlogFeed from './ViewBlogs';
import AiTutorChat from './Aichat';

// AI Assessment Component
export const AIAssessment = () => (
    <div className={styles.dynamicComponent}>
        <GeminiQuizApp />
    </div>
);

// Set Goals Component
export const SetGoals = () => (
    <div className={styles.dynamicComponent}>
        <div className={styles.componentHeader}>
            <h2>Set Your Goals</h2>
            <p>Define and track your personal and professional objectives</p>
        </div>
        <div className={styles.componentContent}>
            <div className={styles.goalForm}>
                <h3>Create New Goal</h3>
                <form>
                    <input type="text" placeholder="Goal title" className={styles.formInput} />
                    <textarea placeholder="Goal description" className={styles.formTextarea}></textarea>
                    <select className={styles.formSelect}>
                        <option>Short-term (1-3 months)</option>
                        <option>Medium-term (3-12 months)</option>
                        <option>Long-term (1+ years)</option>
                    </select>
                    <button type="submit" className={styles.primaryButton}>Create Goal</button>
                </form>
            </div>
        </div>
    </div>
);

// Courses Component
export const Courses = () => (
    <div className={styles.dynamicComponent}>
        <CoursesDashboard />
    </div>
);

// Groups Component
export const Groups = () => (
    <div className={styles.dynamicComponent}>
        <GroupChatApp />
    </div>
);

// Streak Component
export const Streak = () => (
    <div className={styles.dynamicComponent}>
        <ProductivityDashboard />
    </div>
);

// Daily Progress Component
export const DailyProgress = () => (
    <div className={styles.dynamicComponent}>
        <div className={styles.componentHeader}>
            <h2>Daily Progress</h2>
            <p>Monitor your daily learning activities and achievements</p>
        </div>
        <div className={styles.componentContent}>
            <div className={styles.progressStats}>
                <div className={styles.statCard}>
                    <h3>Today's Study Time</h3>
                    <div className={styles.statValue}>2h 30m</div>
                </div>
                <div className={styles.statCard}>
                    <h3>Lessons Completed</h3>
                    <div className={styles.statValue}>5</div>
                </div>
                <div className={styles.statCard}>
                    <h3>Quizzes Passed</h3>
                    <div className={styles.statValue}>3</div>
                </div>
            </div>
        </div>
    </div>
);

// Add Blog Component
export const AddBlog = () => (
    <div className={styles.dynamicComponent}>
        <BlogCreator />
    </div>
);

// Your Blogs Component
export const YourBlogs = () => (
    <div className={styles.dynamicComponent}>
        <div className={styles.componentHeader}>
            <h2>Your Blogs</h2>
            <p>Manage and edit your published blog posts</p>
        </div>
        <div className={styles.componentContent}>
            <div className={styles.blogList}>
                <div className={styles.blogItem}>
                    <h3>My Journey Learning React</h3>
                    <p>Published 2 days ago</p>
                    <div className={styles.blogActions}>
                        <button className={styles.secondaryButton}>Edit</button>
                        <button className={styles.dangerButton}>Delete</button>
                    </div>
                </div>
                <div className={styles.blogItem}>
                    <h3>Tips for Better Time Management</h3>
                    <p>Published 1 week ago</p>
                    <div className={styles.blogActions}>
                        <button className={styles.secondaryButton}>Edit</button>
                        <button className={styles.dangerButton}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// View Blogs Component
export const ViewBlogs = () => (
    <div className={styles.dynamicComponent}>
        <BlogFeed />
    </div>
);

// AI Tutor Component
export const AITutor = () => (
    <div className={styles.dynamicComponent}>
        <AiTutorChat />
    </div>
);

// Profile Component
export const Profile = () => (
    <div className={styles.dynamicComponent}>
        <div className={styles.componentHeader}>
            <h2>Your Profile</h2>
            <p>Manage your account settings and personal information</p>
        </div>
        <div className={styles.componentContent}>
            <div className={styles.profileForm}>
                <div className={styles.profileImage}>
                    <div className={styles.avatar}>👤</div>
                    <button className={styles.secondaryButton}>Change Photo</button>
                </div>
                <form>
                    <input type="text" placeholder="Full Name" className={styles.formInput} />
                    <input type="email" placeholder="Email" className={styles.formInput} />
                    <input type="text" placeholder="Bio" className={styles.formInput} />
                    <button type="submit" className={styles.primaryButton}>Update Profile</button>
                </form>
            </div>
        </div>
    </div>
);

// Settings Component
export const Settings = () => (
    <div className={styles.dynamicComponent}>
        <div className={styles.componentHeader}>
            <h2>Settings</h2>
            <p>Customize your learning experience and preferences</p>
        </div>
        <div className={styles.componentContent}>
            <div className={styles.settingsGrid}>
                <div className={styles.settingCard}>
                    <h3>Notifications</h3>
                    <p>Manage your notification preferences</p>
                    <button className={styles.primaryButton}>Configure</button>
                </div>
                <div className={styles.settingCard}>
                    <h3>Privacy</h3>
                    <p>Control your privacy settings</p>
                    <button className={styles.primaryButton}>Configure</button>
                </div>
                <div className={styles.settingCard}>
                    <h3>Account</h3>
                    <p>Manage your account settings</p>
                    <button className={styles.primaryButton}>Configure</button>
                </div>
            </div>
        </div>
    </div>
);

// Documentation Component
export const Documentation = () => (
    <div className={styles.dynamicComponent}>
        <div className={styles.componentHeader}>
            <h2>Documentation</h2>
            <p>Learn how to use all features of the platform</p>
        </div>
        <div className={styles.componentContent}>
            <div className={styles.docSections}>
                <div className={styles.docCard}>
                    <h3>Getting Started</h3>
                    <p>Learn the basics of using our platform</p>
                    <button className={styles.primaryButton}>Read Guide</button>
                </div>
                <div className={styles.docCard}>
                    <h3>API Reference</h3>
                    <p>Technical documentation for developers</p>
                    <button className={styles.primaryButton}>View API</button>
                </div>
            </div>
        </div>
    </div>
);

// Refer Friend Component
export const ReferFriend = () => (
    <div className={styles.dynamicComponent}>
        <div className={styles.componentHeader}>
            <h2>Refer a Friend</h2>
            <p>Invite friends and earn rewards together</p>
        </div>
        <div className={styles.componentContent}>
            <div className={styles.referralForm}>
                <input type="email" placeholder="Friend's email" className={styles.formInput} />
                <button className={styles.primaryButton}>Send Invitation</button>
                <div className={styles.referralCode}>
                    <p>Your referral code: <strong>FRIEND2024</strong></p>
                </div>
            </div>
        </div>
    </div>
);

// Support Component
export const Support = () => (
    <div className={styles.dynamicComponent}>
        <div className={styles.componentHeader}>
            <h2>Support Center</h2>
            <p>Get help and support when you need it</p>
        </div>
        <div className={styles.componentContent}>
            <div className={styles.supportOptions}>
                <div className={styles.supportCard}>
                    <h3>FAQ</h3>
                    <p>Find answers to common questions</p>
                    <button className={styles.primaryButton}>Browse FAQ</button>
                </div>
                <div className={styles.supportCard}>
                    <h3>Contact Us</h3>
                    <p>Get in touch with our support team</p>
                    <button className={styles.primaryButton}>Contact</button>
                </div>
            </div>
        </div>
    </div>
);

// Dashboard Component (default view)
export const Dashboard = () => (
    <div className={styles.dynamicComponent}>
        <div className={styles.componentHeader}>
            <h2>Welcome to Your Dashboard</h2>
            <p>Your learning journey starts here</p>
        </div>
        <div className={styles.componentContent}>
            <div className={styles.dashboardGrid}>
                <div className={styles.dashboardCard}>
                    <h3>Quick Actions</h3>
                    <p>Start learning, set goals, or join a group</p>
                    <button className={styles.primaryButton}>Get Started</button>
                </div>
                <div className={styles.dashboardCard}>
                    <h3>Recent Activity</h3>
                    <p>View your recent learning progress</p>
                    <button className={styles.primaryButton}>View Activity</button>
                </div>
            </div>
        </div>
    </div>
);
