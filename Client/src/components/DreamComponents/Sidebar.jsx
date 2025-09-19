import { useState } from 'react';
import styles from '../../style/components/DreamComponents/Sidebar.module.scss';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    dreams: true,
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
          {isCollapsed ? '→' : '←'}
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

        {/* Dreams Section */}
        <div className={styles.navSection}>
          <button 
            className={styles.navSectionHeader}
            onClick={() => toggleSection('dreams')}
          >
            <span className={styles.navIcon}><i className="fa-regular fa-moon"></i></span>
            {!isCollapsed && (
              <>
                <span>Dreams</span>
                <span className={styles.expandIcon}>
                  {expandedSections.dreams ?<i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i> }
                </span>
              </>
            )}
          </button>
          {!isCollapsed && expandedSections.dreams && (
            <div className={styles.subNav}>
              <a href="/add-dream" className={styles.subNavItem}><i className="fa-regular fa-pen-to-square"></i>&nbsp;Add dreams</a>
              <a href="/view-dreams" className={styles.subNavItem}><i className="fa-regular fa-eye"></i>&nbsp;View dreams</a>
              <a href="/dream-analysis" className={styles.subNavItem}><i className="fa-solid fa-chart-line"></i>&nbsp;Dream Analysis</a>
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
                  {expandedSections.blogs ? '▲' : '▼'}
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
        <a href="/ai-analyzer" className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-solid fa-robot"></i></span>
          {!isCollapsed && <span>AI dream Analyzer</span>}
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
                  {expandedSections.other ? '▲' : '▼'}
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
