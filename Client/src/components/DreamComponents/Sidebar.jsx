// src/components/DreamComponents/Sidebar.jsx
import React, { useState } from 'react';
import styles from '../../style/components/DreamComponents/Sidebar.module.scss';
import AIAnalyzerModal from './AIAnalyzerModal';

export default function Sidebar({ onNavigate }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    dreams: true,
    blogs: false,
    other: false,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
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
        {/* Dashboard link as a clickable button */}
        <button onClick={() => handleNavClick('dashboard')} className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-solid fa-gauge-high"></i></span>
          {!isCollapsed && <span>Dashboard</span>}
        </button>

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
                  {expandedSections.dreams ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
                </span>
              </>
            )}
          </button>
          {!isCollapsed && expandedSections.dreams && (
            <div className={styles.subNav}>
              <button onClick={() => handleNavClick('add-dream')} className={styles.subNavItem}>
                <i className="fa-regular fa-pen-to-square"></i>&nbsp;Add dreams
              </button>
              <button onClick={() => handleNavClick('view-dreams')} className={styles.subNavItem}>
                <i className="fa-regular fa-eye"></i>&nbsp;View dreams
              </button>
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
              <button onClick={() => handleNavClick('add-blog')} className={styles.subNavItem}>
                <i className="fa-regular fa-pen-to-square"></i>&nbsp;Add blogs
              </button>
              <button onClick={() => handleNavClick('your-blogs')} className={styles.subNavItem}>
                <i className="fa-regular fa-user"></i>&nbsp;Your blogs
              </button>
              <button onClick={() => handleNavClick('view-blogs')} className={styles.subNavItem}>
                <i className="fa-regular fa-eye"></i>&nbsp;View Blogs
              </button>
            </div>
          )}
        </div>

        {/* AI Dream Analyzer */}
        <button onClick={openModal} className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-solid fa-robot"></i></span>
          {!isCollapsed && <span>AI dream Analyzer</span>}
        </button>

        {/* Profile Page */}
        <button onClick={() => handleNavClick('profile')} className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-regular fa-user"></i></span>
          {!isCollapsed && <span>Profile page</span>}
        </button>

        {/* Settings */}
        <button onClick={() => handleNavClick('settings')} className={styles.navItem}>
          <span className={styles.navIcon}><i className="fa-solid fa-gear"></i></span>
          {!isCollapsed && <span>Settings</span>}
        </button>

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
              <button onClick={() => handleNavClick('documentation')} className={styles.subNavItem}>
                <i className="fa-regular fa-file-lines"></i>&nbsp;Documentation
              </button>
              <button onClick={() => handleNavClick('refer-friend')} className={styles.subNavItem}>
                <i className="fa-regular fa-paper-plane"></i>&nbsp;Refer a friend
              </button>
              <button onClick={() => handleNavClick('support')} className={styles.subNavItem}>
                <i className="fa-regular fa-circle-question"></i>&nbsp;Support
              </button>
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
      <AIAnalyzerModal open={isModalOpen} onClose={closeModal} />
    </aside>
  );
}