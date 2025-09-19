import { useState } from 'react';
import styles from '../../style/components/HomeComponent/Sidebar.module.scss';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    goals: true, 
    dailySchedule: false, 
    blogs: false,
    other: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      {/* Header with Logo */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>⚡</div>
          {!isCollapsed && <span>Better You</span>}
        </div>
        <button 
          className={styles.toggleBtn}
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand menu" : "Collapse menu"}
        >
          {isCollapsed ? <i className="fa-solid fa-chevron-right"></i> : <i className="fa-solid fa-chevron-left"></i>}
        </button>
      </div>

      {/* Search Bar */}
      {!isCollapsed && (
        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <span className={styles.searchIcon}><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={styles.nav}>
        {/* Dashboard */}
        <a href="/dashboard" className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-solid fa-gauge-high"></i></span>
          {!isCollapsed && <span>Dashboard</span>}
        </a>

        {/* Goals Section */}
        <div className={styles.navSection}>
          <button 
            className={styles.navSectionHeader}
            onClick={() => toggleSection('goals')}
          >
            <span className={styles.navIcon}><i className="fa-solid fa-bullseye"></i></span>
            {!isCollapsed && (
              <>
                <span>Goals</span>
                <span className={styles.expandIcon}>
                  {expandedSections.goals ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i> }
                </span>
              </>
            )}
          </button>
          {!isCollapsed && expandedSections.goals && (
            <div className={styles.subNav}>
              <a href="/ai-assessment" className={styles.subNavItem}><i className="fa-solid fa-brain"></i>&nbsp;AI Assessment</a>
              <a href="/set-goals" className={styles.subNavItem}><i className="fa-regular fa-pen-to-square"></i>&nbsp;Set Goals</a>
              <a href="/progress-graph" className={styles.subNavItem}><i className="fa-solid fa-chart-line"></i>&nbsp;Progress Graph</a>
              <a href="/results" className={styles.subNavItem}><i className="fa-solid fa-trophy"></i>&nbsp;Results</a>
            </div>
          )}
        </div>

        {/* Courses */}
        <a href="/courses" className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-solid fa-book"></i></span>
          {!isCollapsed && <span>Courses</span>}
        </a>

        {/* Groups */}
        <a href="/groups" className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-solid fa-users"></i></span>
          {!isCollapsed && <span>Groups</span>}
        </a>

        {/* Daily Schedule Section */}
        <div className={styles.navSection}>
          <button 
            className={styles.navSectionHeader}
            onClick={() => toggleSection('dailySchedule')}
          >
            <span className={styles.navIcon}><i className="fa-regular fa-calendar-days"></i></span>
            {!isCollapsed && (
              <>
                <span>Daily Schedule</span>
                <span className={styles.expandIcon}>
                  {expandedSections.dailySchedule ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
                </span>
              </>
            )}
          </button>
          {!isCollapsed && expandedSections.dailySchedule && (
            <div className={styles.subNav}>
              <a href="/streak" className={styles.subNavItem}><i className="fa-solid fa-fire"></i>&nbsp;Streak</a>
              <a href="/daily-progress" className={styles.subNavItem}><i className="fa-solid fa-chart-simple"></i>&nbsp;Daily Progress</a>
            </div>
          )}
        </div>

        {/* Blogs Section */}
        <div className={styles.navSection}>
          <button 
            className={styles.navSectionHeader}
            onClick={() => toggleSection('blogs')}
          >
            <span className={styles.navIcon}><i className="fa-regular fa-newspaper"></i></span>
            {!isCollapsed && (
              <>
                <span>Blogs</span>
                <span className={styles.expandIcon}>
                  {expandedSections.blogs ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
                </span>
              </>
            )}
          </button>
          {!isCollapsed && expandedSections.blogs && (
            <div className={styles.subNav}>
              <a href="/add-blog" className={styles.subNavItem}><i className="fa-regular fa-pen-to-square"></i>&nbsp;Add blogs</a>
              <a href="/your-blogs" className={styles.subNavItem}><i className="fa-regular fa-user"></i>&nbsp;Your blogs</a>
              <a href="/view-blogs" className={styles.subNavItem}><i className="fa-regular fa-eye"></i>&nbsp;View Blogs</a>
            </div>
          )}
        </div>

        {/* AI Dream Analyzer */}
        <a href="/ai-tutor" className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-solid fa-robot"></i></span>
          {!isCollapsed && <span>AI Tutor</span>}
        </a>

        {/* Profile Page */}
        <a href="/profile" className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-regular fa-user"></i></span>
          {!isCollapsed && <span>Profile page</span>}
        </a>

        {/* Settings */}
        <a href="/settings" className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-solid fa-gear"></i></span>
          {!isCollapsed && <span>Settings</span>}
        </a>

        {/* Other Section */}
        <div className={styles.navSection}>
          <button 
            className={styles.navSectionHeader}
            onClick={() => toggleSection('other')}
          >
            <span className={styles.navIcon}><i className="fa-regular fa-square-check"></i></span>
            {!isCollapsed && (
              <>
                <span>Other</span>
                <span className={styles.expandIcon}>
                  {expandedSections.other ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
                </span>
              </>
            )}
          </button>
          {!isCollapsed && expandedSections.other && (
            <div className={styles.subNav}>
              <a href="/documentation" className={styles.subNavItem}><i className="fa-regular fa-file-lines"></i>&nbsp;Documentation</a>
              <a href="/refer-friend" className={styles.subNavItem}><i className="fa-regular fa-paper-plane"></i>&nbsp;Refer a friend</a>
              <a href="/support" className={styles.subNavItem}><i className="fa-regular fa-circle-question"></i>&nbsp;Support</a>
            </div>
          )}
        </div>
      </nav>

      {/* Bottom Buttons */}
      {!isCollapsed && (
        <div className={styles.bottomButtons}>
          <button className={styles.boostBtn}>
            <span className={styles.btnIcon}><i className="fa-solid fa-bolt"></i></span>
            Boost with AI
          </button>
          <button className={styles.upgradeBtn}>
            <span className={styles.btnIcon}><i className="fa-solid fa-crown"></i></span>
            Upgrade to pro
          </button>
        </div>
      )}
    </aside>
  );
}