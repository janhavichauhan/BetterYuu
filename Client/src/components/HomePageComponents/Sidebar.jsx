// import { useState } from 'react';
// import styles from '../../style/components/HomeComponent/Sidebar.module.scss';

// export default function Sidebar() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [expandedSections, setExpandedSections] = useState({
//     goals: true, 
//     dailySchedule: false, 
//     blogs: false,
//     other: false
//   });

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   return (
//     <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
//       {/* Header with Logo */}
//       <div className={styles.header}>
//         <div className={styles.logo}>
//           <div className={styles.logoIcon}>⚡</div>
//           {!isCollapsed && <span>Better You</span>}
//         </div>
//         <button 
//           className={styles.toggleBtn}
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           title={isCollapsed ? "Expand menu" : "Collapse menu"}
//         >
//           {isCollapsed ? <i className="fa-solid fa-chevron-right"></i> : <i className="fa-solid fa-chevron-left"></i>}
//         </button>
//       </div>

//       {/* Search Bar */}
//       {!isCollapsed && (
//         <div className={styles.searchContainer}>
//           <div className={styles.searchInput}>
//             <span className={styles.searchIcon}><i className="fa-solid fa-magnifying-glass"></i></span>
//             <input type="text" placeholder="Search" />
//           </div>
//         </div>
//       )}

//       {/* Navigation */}
//       <nav className={styles.nav}>
//         {/* Dashboard */}
//         <a href="/dashboard" className={styles.navItem}>
//           <span className={styles.navIcon}><i className="fa-solid fa-gauge-high"></i></span>
//           {!isCollapsed && <span>Dashboard</span>}
//         </a>

//         {/* Goals Section */}
//         <div className={styles.navSection}>
//           <button 
//             className={styles.navSectionHeader}
//             onClick={() => toggleSection('goals')}
//           >
//             <span className={styles.navIcon}><i className="fa-solid fa-bullseye"></i></span>
//             {!isCollapsed && (
//               <>
//                 <span>Goals</span>
//                 <span className={styles.expandIcon}>
//                   {expandedSections.goals ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i> }
//                 </span>
//               </>
//             )}
//           </button>
//           {!isCollapsed && expandedSections.goals && (
//             <div className={styles.subNav}>
//               <a href="/ai-assessment" className={styles.subNavItem}><i className="fa-solid fa-brain"></i>&nbsp;AI Assessment</a>
//               <a href="/set-goals" className={styles.subNavItem}><i className="fa-regular fa-pen-to-square"></i>&nbsp;Set Goals</a>
//               <a href="/progress-graph" className={styles.subNavItem}><i className="fa-solid fa-chart-line"></i>&nbsp;Progress Graph</a>
//               <a href="/results" className={styles.subNavItem}><i className="fa-solid fa-trophy"></i>&nbsp;Results</a>
//             </div>
//           )}
//         </div>

//         {/* Courses */}
//         <a href="/courses" className={styles.navItem}>
//           <span className={styles.navIcon}><i className="fa-solid fa-book"></i></span>
//           {!isCollapsed && <span>Courses</span>}
//         </a>

//         {/* Groups */}
//         <a href="/groups" className={styles.navItem}>
//           <span className={styles.navIcon}><i className="fa-solid fa-users"></i></span>
//           {!isCollapsed && <span>Groups</span>}
//         </a>

//         {/* Daily Schedule Section */}
//         <div className={styles.navSection}>
//           <button 
//             className={styles.navSectionHeader}
//             onClick={() => toggleSection('dailySchedule')}
//           >
//             <span className={styles.navIcon}><i className="fa-regular fa-calendar-days"></i></span>
//             {!isCollapsed && (
//               <>
//                 <span>Daily Schedule</span>
//                 <span className={styles.expandIcon}>
//                   {expandedSections.dailySchedule ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
//                 </span>
//               </>
//             )}
//           </button>
//           {!isCollapsed && expandedSections.dailySchedule && (
//             <div className={styles.subNav}>
//               <a href="/streak" className={styles.subNavItem}><i className="fa-solid fa-fire"></i>&nbsp;Streak</a>
//               <a href="/daily-progress" className={styles.subNavItem}><i className="fa-solid fa-chart-simple"></i>&nbsp;Daily Progress</a>
//             </div>
//           )}
//         </div>

//         {/* Blogs Section */}
//         <div className={styles.navSection}>
//           <button 
//             className={styles.navSectionHeader}
//             onClick={() => toggleSection('blogs')}
//           >
//             <span className={styles.navIcon}><i className="fa-regular fa-newspaper"></i></span>
//             {!isCollapsed && (
//               <>
//                 <span>Blogs</span>
//                 <span className={styles.expandIcon}>
//                   {expandedSections.blogs ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
//                 </span>
//               </>
//             )}
//           </button>
//           {!isCollapsed && expandedSections.blogs && (
//             <div className={styles.subNav}>
//               <a href="/add-blog" className={styles.subNavItem}><i className="fa-regular fa-pen-to-square"></i>&nbsp;Add blogs</a>
//               <a href="/your-blogs" className={styles.subNavItem}><i className="fa-regular fa-user"></i>&nbsp;Your blogs</a>
//               <a href="/view-blogs" className={styles.subNavItem}><i className="fa-regular fa-eye"></i>&nbsp;View Blogs</a>
//             </div>
//           )}
//         </div>

//         {/* AI Dream Analyzer */}
//         <a href="/ai-tutor" className={styles.navItem}>
//           <span className={styles.navIcon}><i className="fa-solid fa-robot"></i></span>
//           {!isCollapsed && <span>AI Tutor</span>}
//         </a>

//         {/* Profile Page */}
//         <a href="/profile" className={styles.navItem}>
//           <span className={styles.navIcon}><i className="fa-regular fa-user"></i></span>
//           {!isCollapsed && <span>Profile page</span>}
//         </a>

//         {/* Settings */}
//         <a href="/settings" className={styles.navItem}>
//           <span className={styles.navIcon}><i className="fa-solid fa-gear"></i></span>
//           {!isCollapsed && <span>Settings</span>}
//         </a>

//         {/* Other Section */}
//         <div className={styles.navSection}>
//           <button 
//             className={styles.navSectionHeader}
//             onClick={() => toggleSection('other')}
//           >
//             <span className={styles.navIcon}><i className="fa-regular fa-square-check"></i></span>
//             {!isCollapsed && (
//               <>
//                 <span>Other</span>
//                 <span className={styles.expandIcon}>
//                   {expandedSections.other ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
//                 </span>
//               </>
//             )}
//           </button>
//           {!isCollapsed && expandedSections.other && (
//             <div className={styles.subNav}>
//               <a href="/documentation" className={styles.subNavItem}><i className="fa-regular fa-file-lines"></i>&nbsp;Documentation</a>
//               <a href="/refer-friend" className={styles.subNavItem}><i className="fa-regular fa-paper-plane"></i>&nbsp;Refer a friend</a>
//               <a href="/support" className={styles.subNavItem}><i className="fa-regular fa-circle-question"></i>&nbsp;Support</a>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Bottom Buttons */}
//       {!isCollapsed && (
//         <div className={styles.bottomButtons}>
//           <button className={styles.boostBtn}>
//             <span className={styles.btnIcon}><i className="fa-solid fa-bolt"></i></span>
//             Boost with AI
//           </button>
//           <button className={styles.upgradeBtn}>
//             <span className={styles.btnIcon}><i className="fa-solid fa-crown"></i></span>
//             Upgrade to pro
//           </button>
//         </div>
//       )}
//     </aside>
//   );
// }


import React, { useState } from 'react';

// Helper component for Icons. In a real app, you would use a library like lucide-react.
const Icon = ({ name, size = 24, className = "", strokeWidth = 1.5 }) => {
    const icons = {
        logo: (
            <svg width={size} height={size} className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="#F8F8FA"/>
                <path d="M29.4088 18.2625C29.4088 20.375 28.5338 22.3125 27.0688 23.7775C25.6038 25.2425 23.6663 26.1175 21.5538 26.1175C19.4413 26.1175 17.5038 25.2425 16.0388 23.7775C14.5738 22.3125 13.6988 20.375 13.6988 18.2625C13.6988 14.0375 17.1838 10.5525 21.5538 10.5525C25.9238 10.5525 29.4088 14.0375 29.4088 18.2625Z" fill="#775FFC"/>
                <path d="M29.4088 29.8375C29.4088 34.0625 25.9238 37.5475 21.5538 37.5475C17.1838 37.5475 13.6988 34.0625 13.6988 29.8375C13.6988 28.5275 14.0488 27.32 14.6613 26.2575C15.9613 27.7225 18.0738 29.0225 21.5538 29.0225C25.0338 29.0225 27.1463 27.7225 28.4463 26.2575C29.0588 27.32 29.4088 28.5275 29.4088 29.8375Z" fill="#775FFC"/>
            </svg>
        ),
        dashboard: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className} width={size} height={size} strokeWidth={strokeWidth}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
        track: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className} width={size} height={size} strokeWidth={strokeWidth}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        projects: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className} width={size} height={size} strokeWidth={strokeWidth}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>,
        reports: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className} width={size} height={size} strokeWidth={strokeWidth}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h16.5M3.75 3v1.5M16.5 3v1.5m0 9.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h.008M9.75 16.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h.008m4.5-9.75h.008" /></svg>,
        support: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className} width={size} height={size} strokeWidth={strokeWidth}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.5 21.75l-.398-1.188a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.188-.398a2.25 2.25 0 001.423-1.423L16.5 15.75l.398 1.188a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.188.398a2.25 2.25 0 00-1.423 1.423z" /></svg>,
        settings: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className} width={size} height={size} strokeWidth={strokeWidth}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5" /></svg>,
        bell: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className} width={size} height={size}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>,
        plus: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className} width={size} height={size}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
        ellipsis: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className} width={size} height={size}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>,
        check: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} width={size} height={size}><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" /></svg>,
    };
    return icons[name] || null;
};

// --- Components ---

const Sidebar = ({ navItems, onNavClick }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const[expandedSections, setExpandedSections] = useState({
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
    const bottomNavItems = [
        { icon: 'settings', label: 'Settings' },
    ];

    return (
         <aside className="sidebar" style={{ width: isCollapsed ? "80px" : "250px" }}>
      {/* Header with Logo */}
      <div className="sidebar__logo">
        <i className="fa-solid fa-bolt fa-2x"></i>
        {!isCollapsed && <span className="sidebar__logo-text">Better Youu</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand menu" : "Collapse menu"}
          style={{
            marginLeft: "auto",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isCollapsed ? (
            <i className="fa-solid fa-chevron-right"></i>
          ) : (
            <i className="fa-solid fa-chevron-left"></i>
          )}
        </button>
      </div>

      {/* Search Bar */}
      {!isCollapsed && (
        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "var(--light-purple)",
              borderRadius: "0.75rem",
              padding: "0.5rem 0.75rem",
            }}
          >
            <i className="fa-solid fa-magnifying-glass" style={{ marginRight: "0.5rem" }}></i>
            <input
              type="text"
              placeholder="Search"
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                width: "100%",
              }}
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="sidebar__nav">
        <ul>
          {/* Dashboard */}
          <li>
            <a href="/dashboard">
              <i className="fa-solid fa-gauge-high"></i>
              {!isCollapsed && <span>Dashboard</span>}
            </a>
          </li>

          {/* Goals Section */}
          <li>
            <button
              className="sidebar__nav-item"
              onClick={() => toggleSection("goals")}
              style={{ display: "flex", alignItems: "center", width: "100%", background: "none", border: "none", padding: "0.875rem 1rem", cursor: "pointer", color: "var(--text-light)", fontWeight:"500" }}
            >
              <i className="fa-solid fa-bullseye"></i>
              {!isCollapsed && (
                <>
                  <span className="sidebar__nav-item-text" style={{ marginLeft: "1rem", color: "var(--text-light)", fontWeight:"500", fontSize:"1.05rem" }}>Goals</span>
                  <span style={{ marginLeft: "auto" }}>
                    {expandedSections.goals ? (
                      <i className="fa-solid fa-caret-up"></i>
                    ) : (
                      <i className="fa-solid fa-caret-down"></i>
                    )}
                  </span>
                </>
              )}
            </button>
            {!isCollapsed && expandedSections.goals && (
              <ul style={{ paddingLeft: "2rem" }}>
                <li><a href="/aiassesment"><i className="fa-solid fa-brain"></i> AI Assessment</a></li>
                <li><a href="/set-goals"><i className="fa-regular fa-pen-to-square"></i> Set Goals</a></li>
                <li><a href="/progress-graph"><i className="fa-solid fa-chart-line"></i> Progress Graph</a></li>
                <li><a href="/results"><i className="fa-solid fa-trophy"></i> Results</a></li>
              </ul>
            )}
          </li>

          {/* Courses */}
          <li>
            <a href="/courses">
              <i className="fa-solid fa-book"></i>
              {!isCollapsed && <span>Courses</span>}
            </a>
          </li>

          {/* Groups */}
          <li>
            <a href="/groups">
              <i className="fa-solid fa-users"></i>
              {!isCollapsed && <span>Groups</span>}
            </a>
          </li>

          {/* Daily Schedule */}
          <li>
            <button
              className="sidebar__nav-item"
              onClick={() => toggleSection("dailySchedule")}
              style={{ display: "flex", alignItems: "center", width: "100%", background: "none", border: "none", padding: "0.875rem 1rem", cursor: "pointer", color: "var(--text-light)", fontWeight:"500" }}
            >
              <i className="fa-regular fa-calendar-days"></i>
              {!isCollapsed && (
                <>
                  <span className="sidebar__nav-item-text" style={{ marginLeft: "1rem", color: "var(--text-light)", fontWeight:"500", fontSize:"1.05rem" }}>Daily Schedule</span>
                  <span style={{ marginLeft: "auto" }}>
                    {expandedSections.dailySchedule ? (
                      <i className="fa-solid fa-caret-up"></i>
                    ) : (
                      <i className="fa-solid fa-caret-down"></i>
                    )}
                  </span>
                </>
              )}
            </button>
            {!isCollapsed && expandedSections.dailySchedule && (
              <ul style={{ paddingLeft: "2rem" }}>
                <li><a href="/streak"><i className="fa-solid fa-fire"></i> Streak</a></li>
                <li><a href="/daily-progress"><i className="fa-solid fa-chart-simple"></i> Daily Progress</a></li>
              </ul>
            )}
          </li>

          {/* Blogs */}
          <li>
            <button
              className="sidebar__nav-item"
              onClick={() => toggleSection("blogs")}
              style={{ display: "flex", alignItems: "center", width: "100%", background: "none", border: "none", padding: "0.875rem 1rem", cursor: "pointer", color: "var(--text-light)" , fontWeight:"500"}}
            >
              <i className="fa-regular fa-newspaper"></i>
              {!isCollapsed && (
                <>
                  <span className="sidebar__nav-item-text"  style={{ marginLeft: "1rem", color: "var(--text-light)", fontWeight:"500", fontSize:"1.05rem" }}>Blogs</span>
                  <span style={{ marginLeft: "auto" }}>
                    {expandedSections.blogs ? (
                      <i className="fa-solid fa-caret-up"></i>
                    ) : (
                      <i className="fa-solid fa-caret-down"></i>
                    )}
                  </span>
                </>
              )}
            </button>
            {!isCollapsed && expandedSections.blogs && (
              <ul style={{ paddingLeft: "2rem" }}>
                <li><a href="/add-blog"><i className="fa-regular fa-pen-to-square"></i> Add Blogs</a></li>
                <li><a href="/your-blogs"><i className="fa-regular fa-user"></i> Your Blogs</a></li>
                <li><a href="/view-blogs"><i className="fa-regular fa-eye"></i> View Blogs</a></li>
              </ul>
            )}
          </li>

          {/* AI Tutor */}
          <li>
            <a href="/ai-tutor">
              <i className="fa-solid fa-robot"></i>
              {!isCollapsed && <span>AI Tutor</span>}
            </a>
          </li>

          {/* Profile Page */}
          <li>
            <a href="/profile">
              <i className="fa-regular fa-user"></i>
              {!isCollapsed && <span>Profile Page</span>}
            </a>
          </li>

          {/* Other Section */}
          <li>
            <button
              className="sidebar__nav-item"
              onClick={() => toggleSection("other")}
              style={{ display: "flex", alignItems: "center", width: "100%", background: "none", border: "none", padding: "0.875rem 1rem", cursor: "pointer", color: "var(--text-light)", fontWeight:"500" }}
            >
              <i className="fa-regular fa-square-check"></i>
              {!isCollapsed && (
                <>
                 

                  <span className="sidebar__nav-item-text" style={{ marginLeft: "1rem", color: "var(--text-light)", fontWeight:"500", fontSize:"1.05rem" }}>Other</span>
                  <span style={{ marginLeft: "auto" }}>
                    {expandedSections.other ? (
                      <i className="fa-solid fa-caret-up"></i>
                    ) : (
                      <i className="fa-solid fa-caret-down"></i>
                    )}
                  </span>
                    
                  
                </>
              )}
            </button>
            {!isCollapsed && expandedSections.other && (
              <ul style={{ paddingLeft: "2rem" }}>
                <li><a href="/documentation"><i className="fa-regular fa-file-lines"></i> Documentation</a></li>
                <li><a href="/refer-friend"><i className="fa-regular fa-paper-plane"></i> Refer a Friend</a></li>
                <li><a href="/support"><i className="fa-regular fa-circle-question"></i> Support</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Bottom Navigation */}
      <div className="sidebar__bottom">
        <ul>
          <li>
            <a href="/settings">
              <i className="fa-solid fa-gear"></i>
              {!isCollapsed && <span>Settings</span>}
            </a>
          </li>
        </ul>
      </div>

      <div className="premium-card-container">
        <div className="premium-card">
          <div className="premium-card__illustration">👩‍🎓</div>
            <h3>Premium subscription</h3>
            <p>Buy premium and get access to new courses</p>
            <button>More detailed</button>
          </div>
        </div>
    </aside>
  );
};

const Header = () => {
    // For animation, you can use CSS transitions or a library like Framer Motion.
    // Here, we'll use a simple fade-out effect before redirecting.
    const [isSwitching, setIsSwitching] = useState(false);

    const handleSwitch = () => {
        setIsSwitching(true);
        setTimeout(() => {
            window.location.href = "/dreampage";
        }, 1800); // 800ms for smooth transition
    };

    return (
        <header className={`header${isSwitching ? " fade-out" : ""}`}>
            <div>
                <h1 className="header__title">Hi, Janhavi Chauhan</h1>
                <p className="header__subtitle">Let's finish your task today!</p>
            </div>
            <div className="header__actions">
                <button className="header__icon-btn">
                    <Icon name="bell" size={24}/>
                </button>
                <button
                    className="header__switch-btn"
                    style={{
                        marginLeft: "1rem",
                        background: "var(--primary-purple)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "0.75rem",
                        padding: "0.5rem 1rem",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "background 0.2s"
                    }}
                    onClick={handleSwitch}
                >
                    Switch to Unconscious
                </button>
            </div>
            <style>{`
                .fade-out {
                    opacity: 0;
                    transition: opacity 0.8s;
                }
            `}</style>
        </header>
    );
};

const TodayTask = () => (
    <div className="today-task">
        <div className="today-task__content">
            <h2 className="today-task__title">Today Task</h2>
            <p className="today-task__subtitle">Check your daily tasks and schedules</p>
            <button className="today-task__btn">Today's schedule</button>
        </div>
        <div className="today-task__image">
            <img src="https://img.freepik.com/free-vector/colorful-illustration-female-programmer-working_23-2148277397.jpg?semt=ais_incoming&w=740&q=80" alt="Task management illustration" />
        </div>
    </div>
);

const TaskCard = ({ task }) => (
    <div className="task-card">
        <div className="task-card__header">
            <div>
                <p className="task-card__date">{task.date}</p>
                <h3 className="task-card__title">{task.title}</h3>
                <p className="task-card__category">{task.category}</p>
            </div>
            <button className="task-card__menu-btn">
                <Icon name="ellipsis" size={20}/>
            </button>
        </div>
        <div className="task-card__progress">
            <p>Progress</p>
            <p>{task.progress}%</p>
        </div>
        <div className="progress-bar">
            <div className={`progress-bar__inner ${task.color}`} style={{ width: `${task.progress}%` }}></div>
        </div>
        <div className="task-card__footer">
            <div className="task-card__avatars">
                {task.avatars.map((avatar, index) => (
                    <img key={index} src={avatar} alt={`User ${index + 1}`} />
                ))}
                 <button className="task-card__add-btn">+</button>
            </div>
            <span className={`task-card__days-left ${task.daysLeftColor}`}>{task.daysLeft} days left</span>
        </div>
    </div>
);

const TasksProgress = ({ tasks }) => {
    return (
        <div className="tasks-progress-grid">
            {tasks.map((task, index) => <TaskCard key={index} task={task} />)}
        </div>
    );
};

const TasksProgressGraph = () => {
    const data = [
        { day: 'M', value: 2.8 },
        { day: 'T', value: 4.5 },
        { day: 'W', value: 3.2 },
        { day: 'T', value: 1.5 },
        { day: 'F', value: 3.5 },
        { day: 'S', value: 2.0 },
        { day: 'S', value: 1.0 },
    ];
    const maxVal = 5;

    return (
        <div className="graph-card">
            <h3 className="card-title">Tasks Progress</h3>
            <div className="graph">
                <div className="graph__y-axis">
                    <span>05</span>
                    <span>04</span>
                    <span>03</span>
                    <span>02</span>
                    <span>01</span>
                    <span>0</span>
                </div>
                <div className="graph__bars">
                    {data.map((item, index) => (
                        <div key={index} className="graph__bar-container">
                            <div className="graph__bar" style={{ height: `${(item.value / maxVal) * 100}%` }}></div>
                            <span className="graph__x-label">{item.day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Assignments = ({ assignments, onToggle }) => {
    const completedCount = assignments.filter(a => a.status === 'completed').length;
    return (
        <div className="assignments-card">
            <div className="card-header">
                <h3 className="card-title">Assignments ({assignments.length})</h3>
                <span>{completedCount}/{assignments.length} completed</span>
            </div>
            <ul className="assignments-list">
                {assignments.map((item, index) => (
                    <li key={index} className="assignment-item">
                        <div className={`assignment-item__checkbox ${item.status}`} onClick={() => onToggle(item.title)}>
                            {item.status === 'completed' && <Icon name="check" size={16} className="text-white"/>}
                        </div>
                        <div className="assignment-item__details">
                            <p>{item.title}</p>
                            <small>{item.date}</small>
                        </div>
                        <div className="assignment-item__grade">
                            <p>{item.grade}</p>
                            <small>{item.status === 'completed' ? 'Grade' : 'To Do'}</small>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const WeeklyProgress = () => (
    <div className="weekly-progress-card">
        <div className="card-header">
            <h3 className="card-title">Weekly</h3>
        </div>
        <div className="weekly-progress__items">
            <div className="weekly-progress__item">
                <div className="weekly-progress__details">
                    <p>Time spent</p>
                    <p><strong>18h</strong> <span>120%</span></p>
                </div>
                <div className="progress-bar-small"><div className="progress-bar-small__inner bg-orange" style={{width: '80%'}}></div></div>
            </div>
            <div className="weekly-progress__item">
                <div className="weekly-progress__details">
                    <p>Lesson Learnt</p>
                    <p><strong>15h</strong> <span>120%</span></p>
                </div>
                <div className="progress-bar-small"><div className="progress-bar-small__inner bg-purple" style={{width: '60%'}}></div></div>
            </div>
            <div className="weekly-progress__item">
                <div className="weekly-progress__details">
                    <p>Exams Passed</p>
                    <p><strong>2h</strong> <span>100%</span></p>
                </div>
                 <div className="progress-bar-small"><div className="progress-bar-small__inner bg-green" style={{width: '100%'}}></div></div>
            </div>
        </div>
    </div>
);


const RightSidebar = ({ scheduleItems, onAddTask, activeDay, onDayClick }) => {
    const batchmates = [
        { name: 'Rinsen Jey', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/40?img=7' },
        { name: 'Kim jeeyong', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/40?img=8' },
        { name: 'Kim Jeeyong', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/40?img=9' },
    ];

    return (
        <aside className="right-sidebar">
            <div className="profile-card">
                <img src="https://i.pravatar.cc/48?img=11" alt="Kim Namjoon" className="profile-card__avatar" />
                <h3 className="profile-card__name">Kim Namjoon</h3>
                <p className="profile-card__role">UI/UX Designer</p>
            </div>
            <div className="schedule-card">
                <div className="schedule-card__header">
                    <h4>March</h4>
                    <button className="schedule-card__add-btn" onClick={onAddTask}><Icon name="plus" size={16}/> Add Task</button>
                </div>
                <div className="schedule-card__calendar">
                    {['mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day, i) => (
                        <div key={day} className={`day ${activeDay === i ? 'active' : ''}`} onClick={() => onDayClick(i)}>
                            <span>{day.charAt(0).toUpperCase() + day.slice(1,3)}</span>
                            <span>{6 + i}</span>
                        </div>
                    ))}
                </div>
                <div className="schedule-card__timeline">
                    {['09:00', '10:00', '11:00', '12:00', '01:00'].map(time => <div key={time} className="time-marker"><span>{time}</span></div>)}
                    {scheduleItems.map((item, index) => (
                        <div key={index} className={`schedule-item ${item.color}`} style={{top: item.top, height: item.height}}>
                           <div className="schedule-item__details">
                                <p>{item.title}</p>
                                <small>{item.time}</small>
                           </div>
                           <button><Icon name="ellipsis" size={20}/></button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="batchmates-card">
                <h3 className="card-title">Batchmates</h3>
                <ul>
                    {batchmates.map((mate, index) => (
                        <li key={index}>
                            <img src={mate.avatar} alt={mate.name} />
                            <div>
                                <p>{mate.name}</p>
                                <small>{mate.role}</small>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className="batchmates-card__see-all">See All</button>
            </div>
        </aside>
    );
};

// --- Main App Component ---

const App = () => {
  const [navItems, setNavItems] = useState([
      { icon: 'dashboard', label: 'Dashboard', active: true },
      { icon: 'track', label: 'Track', active: false },
      { icon: 'projects', label: 'Projects', count: 2, active: false },
      { icon: 'reports', label: 'Reports', active: false },
  ]);

  const [tasks, setTasks] = useState([
        {
            date: 'Mar 2, 2024',
            title: 'Web Dashboard',
            category: 'Designing',
            progress: 90,
            avatars: ['https://i.pravatar.cc/24?img=1', 'https://i.pravatar.cc/24?img=2'],
            daysLeft: 3,
            color: 'bg-purple',
            daysLeftColor: 'text-purple'
        },
        {
            date: 'Mar 6, 2024',
            title: 'Mobile App',
            category: 'Shopping',
            progress: 30,
            avatars: ['https://i.pravatar.cc/24?img=3', 'https://i.pravatar.cc/24?img=4'],
            daysLeft: 25,
            color: 'bg-blue',
            daysLeftColor: 'text-blue'
        },
        {
            date: 'Mar 8, 2024',
            title: 'Animation',
            category: 'Designing',
            progress: 75,
            avatars: ['https://i.pravatar.cc/24?img=5', 'https://i.pravatar.cc/24?img=6'],
            daysLeft: 7,
            color: 'bg-orange',
            daysLeftColor: 'text-orange'
        },
  ]);

  const [assignments, setAssignments] = useState([
      { title: 'Colour Theory', date: '01 Feb 2024', grade: '86/100', status: 'completed' },
      { title: 'Design system', date: '01 Feb 2024', grade: '90/100', status: 'completed' },
      { title: 'User persona', date: '13 Mar 2024', grade: '0/100', status: 'todo' },
      { title: 'Prototyping', date: '16 Mar 2024', grade: '0/100', status: 'todo' },
  ]);
  
  const [scheduleItems, setScheduleItems] = useState([
      { time: '10:00am - 12:00pm', title: 'UI Motion', color: 'border-orange', top: '60px', height: '120px' },
      { time: '12:00pm - 01:00pm', title: 'UI Design', color: 'border-purple', top: '180px', height: '60px' },
  ]);

  const [activeDay, setActiveDay] = useState(1); // Tuesday is active by default (index 1)

  const handleNavClick = (label) => {
      setNavItems(prevItems => 
          prevItems.map(item => ({ ...item, active: item.label === label }))
      );
  };
  
  const handleToggleAssignment = (title) => {
      setAssignments(prevAssignments =>
          prevAssignments.map(item => 
              item.title === title 
                  ? { ...item, status: item.status === 'completed' ? 'todo' : 'completed' } 
                  : item
          )
      );
  };

  const handleAddTask = () => {
    const newTask = {
      time: '09:00am - 10:00am',
      title: 'New Meeting',
      color: 'border-blue',
      top: '0px',
      height: '60px',
    };
    // Prevent adding duplicate tasks for this simple demo
    if (!scheduleItems.find(item => item.title === 'New Meeting')) {
        setScheduleItems(prev => [...prev, newTask]);
    }
  };

  const handleActiveDay = (dayIndex) => {
      setActiveDay(dayIndex);
  }

  return (
    <>
      <style>{`
        /* --- GLOBAL STYLES & SETUP --- */
        :root {
          --primary-purple: #775FFC;
          --light-purple: #E8E5FB;
          --dark-purple: #5F33E1;
          --text-dark: #1E2749;
          --text-light: #7E8AA9;
          --bg-main: #F8F8FA;
          --bg-white: #FFFFFF;
          --border-color: #ECEEF6;
          --orange: #FFAB2D;
          --blue: #3695E5;
          --green: #2ED47A;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--bg-main);
          color: var(--text-dark);
        }

        .dashboard-layout {
          display: grid;
          grid-template-columns: 240px 1fr 350px;
          height: 100vh;
          padding: 1rem;
          gap: 1.5rem;
        }

        .main-content {
          overflow-y: auto;
          padding-right: 1rem;
        }
        
        .main-content::-webkit-scrollbar {
            width: 6px;
        }
        .main-content::-webkit-scrollbar-thumb {
            background: var(--border-color);
            border-radius: 3px;
        }

        /* --- UTILITY CLASSES --- */
        .text-white { 
            color: #FFFFFF;
        }
        .card-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .card-header span {
            font-size: 0.875rem;
            color: var(--text-light);
        }

        /* --- SIDEBAR --- */
        .sidebar {
          background-color: var(--bg-white);
          border-radius: 1.5rem;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .sidebar__logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }
        .sidebar__logo-text {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .sidebar__nav ul {
          list-style: none;
        }
        .sidebar__nav li a {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.875rem 1rem;
          border-radius: 0.75rem;
          text-decoration: none;
          color: var(--text-light);
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .sidebar__nav li.active a, .sidebar__nav li a:hover {
          background-color: var(--primary-purple);
          color: white;
        }
        .sidebar__nav-count {
          margin-left: auto;
          background-color: var(--light-purple);
          color: var(--primary-purple);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
        }
        .sidebar__nav li.active .sidebar__nav-count {
            background-color: var(--dark-purple);
            color: white;
        }
        .sidebar__bottom {
          margin-top: auto;
        }
        .sidebar__bottom ul { list-style: none; }
        .sidebar__bottom li a {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.875rem 1rem;
            text-decoration: none;
            color: var(--text-light);
            font-weight: 500;
        }
        sidebar__nav-item-text span{
            color : var(--text-light);
          }

        .premium-card-container {
            position: relative;
            margin-top: 5rem;
        }

        .premium-card {
            background-color: #EDE9FE;
            padding: 1.5rem;
            padding-top: 3.5rem;
            border-radius: calc(var(--radius) * 1.5);
            text-align: center;
        }
        
        .premium-card__illustration {
            width: 80px;
            height: 80px;
            background-color: #DDD6FE;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 6px solid var(--sidebar-bg);
        }
        
        .premium-card h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0 0 0.5rem;
        }
        
        .premium-card p {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin: 0 0 1rem;
        }
        
        .premium-card button {
            width: 100%;
            padding: 0.75rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: var(--radius);
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .premium-card button:hover {
            background-color: #5b21b6;
        }

        /* --- HEADER --- */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .header__title {
          font-size: 1.75rem;
          font-weight: 600;
        }
        .header__subtitle {
          color: var(--text-light);
        }
        .header__actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .header__icon-btn {
          background: none;
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-light);
        }

        /* --- TODAY TASK --- */
        .today-task {
          background-color: var(--bg-white);
          border-radius: 1.5rem;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .today-task__title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .today-task__subtitle {
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }
        .today-task__btn {
          background-color: var(--light-purple);
          color: var(--primary-purple);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
        }
        .today-task__image img {
          max-width: 200px;
        }

        /* --- TASK CARD --- */
        .tasks-progress-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }
        .task-card {
          background-color: var(--bg-white);
          border-radius: 1rem;
          padding: 1.25rem;
        }
        .task-card__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .task-card__date, .task-card__category {
            font-size: 0.75rem;
            color: var(--text-light);
        }
        .task-card__title {
            font-size: 1rem;
            font-weight: 600;
            margin: 0.25rem 0;
        }
        .task-card__menu-btn {
            background: none;
            border: none;
            color: var(--text-light);
            cursor: pointer;
        }
        .task-card__progress {
            display: flex;
            justify-content: space-between;
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
            color: var(--text-light);
        }
        .progress-bar {
            height: 6px;
            background-color: var(--bg-main);
            border-radius: 3px;
            margin-bottom: 1rem;
        }
        .progress-bar__inner {
            height: 100%;
            border-radius: 3px;
        }
        .bg-purple { background-color: var(--primary-purple); }
        .bg-blue { background-color: var(--blue); }
        .bg-orange { background-color: var(--orange); }
        .bg-green { background-color: var(--green); }
        
        .task-card__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .task-card__avatars {
            display: flex;
            align-items: center;
        }
        .task-card__avatars img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid white;
            margin-left: -8px;
        }
        .task-card__avatars img:first-child {
            margin-left: 0;
        }
        .task-card__add-btn {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 1px dashed var(--text-light);
            background: none;
            color: var(--text-light);
            margin-left: -8px;
            z-index: 5;
            cursor: pointer;
        }
        .task-card__days-left {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            border-radius: 0.5rem;
        }
        .text-purple { background-color: #F4F2FF; color: var(--primary-purple); }
        .text-blue { background-color: #E8F4FC; color: var(--blue); }
        .text-orange { background-color: #FFF4E4; color: var(--orange); }

        /* --- MAIN AREA BOTTOM SECTION --- */
        .main-bottom-grid {
            display: grid;
            grid-template-columns: 3fr 2fr;
            gap: 1.5rem;
        }
        .main-bottom-right {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        /* --- GRAPH CARD --- */
        .graph-card {
            background-color: var(--bg-white);
            border-radius: 1rem;
            padding: 1.5rem;
        }
        .graph {
            display: flex;
            height: 180px;
        }
        .graph__y-axis {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 0.75rem;
            color: var(--text-light);
            margin-right: 1rem;
            text-align: right;
        }
        .graph__bars {
            display: flex;
            flex-grow: 1;
            justify-content: space-around;
            align-items: flex-end;
            border-left: 1px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
            padding-left: 1rem;
        }
        .graph__bar-container {
            width: 10%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
        }
        .graph__bar {
            width: 100%;
            background-color: var(--light-purple);
            border-radius: 4px 4px 0 0;
            position: relative;
        }
        .graph__bar::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60%; /* Represents the darker part of the bar */
            background-color: var(--primary-purple);
            border-radius: 4px 4px 0 0;
        }
        .graph__x-label {
            font-size: 0.75rem;
            color: var(--text-light);
            margin-top: 0.5rem;
        }

        /* --- ASSIGNMENTS CARD --- */
        .assignments-card {
             background-color: var(--bg-white);
             border-radius: 1rem;
             padding: 1.5rem;
        }
        .assignments-list { list-style: none; }
        .assignment-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        .assignment-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }
        .assignment-item:first-child {
            padding-top: 0;
        }
        .assignment-item__checkbox {
            width: 20px;
            height: 20px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }
        .assignment-item__checkbox.completed {
            background-color: var(--primary-purple);
        }
        .assignment-item__checkbox.todo {
            border: 2px solid var(--border-color);
        }
        .assignment-item__details {
            flex-grow: 1;
        }
        .assignment-item__details p { font-weight: 500; font-size: 0.875rem; }
        .assignment-item__details small, .assignment-item__grade small {
            font-size: 0.75rem;
            color: var(--text-light);
        }
        .assignment-item__grade { text-align: right; }
        .assignment-item__grade p { font-weight: 500; font-size: 0.875rem; }

        /* Weekly Progress Card */
        .weekly-progress-card {
             background-color: var(--bg-white);
             border-radius: 1rem;
             padding: 1.5rem;
        }
        .weekly-progress__items {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .weekly-progress__details {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 0.5rem;
        }
        .weekly-progress__details p:first-child {
            font-size: 0.875rem;
            color: var(--text-light);
        }
        .weekly-progress__details p:last-child {
            font-size: 0.875rem;
        }
        .weekly-progress__details strong {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-dark);
        }
        .weekly-progress__details span {
            color: var(--green);
            font-weight: 500;
            font-size: 0.75rem;
            margin-left: 0.25rem;
        }
        .progress-bar-small {
            height: 4px;
            background-color: var(--bg-main);
            border-radius: 2px;
        }
        .progress-bar-small__inner {
            height: 100%;
            border-radius: 2px;
        }

        /* --- RIGHT SIDEBAR --- */
        .right-sidebar {
            background-color: var(--light-purple);
            border-radius: 1.5rem;
            padding: 1.5rem;
            overflow-y: auto;
        }
        .right-sidebar::-webkit-scrollbar { display: none; }

        .profile-card {
            background-color: var(--bg-white);
            border-radius: 1rem;
            padding: 1.5rem;
            text-align: center;
            margin-bottom: 1.5rem;
        }
        .profile-card__avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            margin: 0 auto 1rem;
        }
        .profile-card__name {
            font-weight: 600;
        }
        .profile-card__role {
            font-size: 0.875rem;
            color: var(--text-light);
        }

        .schedule-card {
            background-color: var(--bg-white);
            border-radius: 1rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }
        .schedule-card__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        .schedule-card__header h4 {
            font-weight: 600;
        }
        .schedule-card__add-btn {
            background: none;
            border: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
            color: var(--text-dark);
            cursor: pointer;
        }
        .schedule-card__calendar {
            display: flex;
            justify-content: space-around;
            margin-bottom: 1.5rem;
        }
        .day {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.75rem;
            color: var(--text-light);
            padding: 0.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }
        .day span:last-child {
            font-weight: 600;
            font-size: 1rem;
            color: var(--text-dark);
            margin-top: 0.25rem;
        }
        .day.active {
            background-color: var(--primary-purple);
            color: white;
        }
        .day.active span {
            color: white !important;
        }
        .schedule-card__timeline {
            position: relative;
            padding-left: 3rem;
            height: 240px;
        }
        .time-marker {
            height: 60px;
            border-bottom: 1px dashed var(--border-color);
            position: relative;
        }
        .time-marker:last-of-type {
            border-bottom: none;
        }
        .time-marker span {
            position: absolute;
            left: -3rem;
            top: -0.5em;
            font-size: 0.75rem;
            color: var(--text-light);
        }
        .schedule-item {
            position: absolute;
            left: 3rem;
            right: 0;
            background-color: var(--bg-main);
            border-radius: 0.5rem;
            padding: 0.5rem 0.75rem;
            border-left: 4px solid;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
        }
        .schedule-item.border-orange { border-color: var(--orange); }
        .schedule-item.border-purple { border-color: var(--primary-purple); }
        .schedule-item.border-blue { border-color: var(--blue); }
        
        .schedule-item p { font-size: 0.875rem; font-weight: 600; }
        .schedule-item small { font-size: 0.75rem; color: var(--text-light); }
        .schedule-item button { background: none; border: none; cursor: pointer; color: var(--text-light); }

        .batchmates-card {
            background-color: var(--bg-white);
            border-radius: 1rem;
            padding: 1.5rem;
        }
        .batchmates-card ul {
            list-style: none;
            margin-top: 1rem;
        }
        .batchmates-card li {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        .batchmates-card li:last-child {
            margin-bottom: 0;
        }
        .batchmates-card li img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .batchmates-card li p { font-weight: 600; font-size: 0.875rem; }
        .batchmates-card li small { font-size: 0.75rem; color: var(--text-light); }

        .batchmates-card__see-all {
            width: 100%;
            text-align: center;
            background: none;
            border: none;
            color: var(--primary-purple);
            font-weight: 600;
            cursor: pointer;
            padding-top: 1rem;
            margin-top: 0.5rem;
            border-top: 1px solid var(--border-color);
        }
      `}</style>
      <div className="dashboard-layout">
        <Sidebar navItems={navItems} onNavClick={handleNavClick} />
        <main className="main-content">
          <Header />
          <TodayTask />
          <TasksProgress tasks={tasks}/>
          <div className="main-bottom-grid">
            <TasksProgressGraph />
            <div className="main-bottom-right">
                <WeeklyProgress />
                <Assignments assignments={assignments} onToggle={handleToggleAssignment} />
            </div>
          </div>
        </main>
        <RightSidebar 
            scheduleItems={scheduleItems} 
            onAddTask={handleAddTask}
            activeDay={activeDay}
            onDayClick={handleActiveDay}
        />
      </div>
    </>
  );
};

export default App;

