import React from 'react';

// SVG Icon Components for clarity
const AcademyIcon = () => (
    <div className="icon-container academy-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 22 8.5 12 15 2 8.5 12 2"></polygon>
            <polyline points="2 15 12 21 22 15"></polyline>
            <polyline points="2 8.5 12 15 22 8.5"></polyline>
        </svg>
    </div>
);

const HomeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>);
const CoursesIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>);
const ChatsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>);
const GradesIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>);
const ScheduleIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>);
const SettingsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>);
const ChevronRight = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>);
const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const BellIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>);


const navItems = [
    { icon: <HomeIcon />, label: 'Dashboard', active: true },
    { icon: <CoursesIcon />, label: 'Courses' },
    { icon: <ChatsIcon />, label: 'Chats' },
    { icon: <GradesIcon />, label: 'Grades' },
    { icon: <ScheduleIcon />, label: 'Schedule' },
    { icon: <SettingsIcon />, label: 'Settings' },
];

const newCourses = [
    { title: 'Geography', lessons: 12, image: '🗺️', color: '#FFF2E5' },
    { title: 'JavaScript Course', lessons: 15, image: '👨‍💻', color: '#E9E7FF' },
    { title: 'Photography Course', lessons: 8, image: '📸', color: '#E6F7FF' },
];

const myCourses = [
    { icon: '💻', name: 'Web Design', lessons: 10, start: 'May 12', rate: 4.8, level: 'Elementary' },
    { icon: '</>', name: 'Development Basics', lessons: 8, start: 'May 14', rate: 4.4, level: 'Intermediate' },
    { icon: '📊', name: 'Data with Python', lessons: 5, start: 'May 17', rate: 4.6, level: 'Intermediate' },
    { icon: '📄', name: 'HTML Basics', lessons: 12, start: 'May 26', rate: 4.7, level: 'Elementary' },
    { icon: '📜', name: 'JavaScript', lessons: 8, start: 'May 30', rate: 4.9, level: 'Elementary' },
];

const homework = [
    { title: 'Styling with CSS', tasks: 12, progress: 90, color: '#6D28D9' },
    { title: 'Basics of programming', tasks: 18, progress: 45, color: '#10B981' },
    { title: 'Learn to Program in Java', tasks: 10, progress: 25, color: '#F59E0B' },
];

const courseProgress = [
    { name: 'JS', progress: 85 },
    { name: 'Python', progress: 38 },
    { name: 'Java', progress: 25 },
    { name: 'Angular', progress: 20 },
];

const DashboardStyles = () => (
    <style>{`
        :root {
            --primary-color: #6D28D9;
            --background-color: #F8F7FF;
            --sidebar-bg: #FFFFFF;
            --card-bg: #FFFFFF;
            --text-primary: #1F2937;
            --text-secondary: #6B7280;
            --font-family: 'Inter', sans-serif;
            --border-color: #E5E7EB;
            --radius: 12px;
        }

        body {
            font-family: var(--font-family);
            background-color: var(--background-color);
            color: var(--text-primary);
            margin: 0;
        }

        .dashboard-container {
            display: flex;
            min-height: 100vh;
        }

        .icon-container {
            padding: 8px;
            border-radius: 8px;
            display: inline-flex;
        }
        
        .icon-container.academy-icon {
            background-color: var(--primary-color);
        }
        
        .icon-container.academy-icon svg {
            color: white;
        }

        .icon-button {
            background: none;
            border: none;
            padding: 8px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
        }
        
        .icon-button:hover {
            background-color: #f3f4f6;
        }

        .arrow-button {
            background-color: var(--sidebar-bg);
            border: 1px solid var(--border-color);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text-secondary);
            transition: all 0.2s ease;
        }

        .arrow-button:hover {
            background-color: var(--primary-color);
            color: white;
        }
        
        .arrow-button.small {
            width: 28px;
            height: 28px;
        }

        .sidebar {
            width: 280px;
            background-color: var(--sidebar-bg);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-shrink: 0;
        }

        .sidebar__header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 2.5rem;
        }
        
        .sidebar__header h1 {
            font-size: 1.5rem;
            font-weight: 700;
        }

        .sidebar__nav {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .nav-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.75rem 1rem;
            border-radius: var(--radius);
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.2s ease;
        }

        .nav-item svg {
            width: 20px;
            height: 20px;
        }

        .nav-item:hover {
            background-color: #f9fafb;
        }

        .nav-item--active {
            background-color: #EDE9FE;
            color: var(--primary-color);
            font-weight: 600;
        }

        .premium-card-container {
            position: relative;
            margin-top: 2rem;
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

        .main-content {
            flex-grow: 1;
            padding: 2rem;
            overflow-y: auto;
        }

        .main-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }
        
        .main-header h2 {
            font-size: 2rem;
            font-weight: 700;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .search-bar {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background-color: var(--card-bg);
            padding: 0.5rem 1rem;
            border-radius: var(--radius);
            border: 1px solid var(--border-color);
        }
        
        .search-bar svg {
            color: var(--text-secondary);
        }
        
        .search-bar input {
            border: none;
            outline: none;
            background: none;
            font-size: 1rem;
        }
        
        .search-bar input::placeholder {
            color: var(--text-secondary);
        }

        /* Welcome Banner */
        .welcome-banner {
            background-color: #4c1d95;
            color: white;
            padding: 2rem;
            border-radius: var(--radius);
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235b21b6' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .welcome-banner__text h3 {
            font-size: 1.75rem;
            font-weight: 600;
            margin: 0 0 0.5rem;
        }

        .welcome-banner__text p {
            margin: 0 0 1rem;
            opacity: 0.8;
        }

        .welcome-banner__text a {
            color: white;
            text-decoration: none;
            font-weight: 500;
        }

        .welcome-banner__illustration {
            font-size: 4rem;
            opacity: 0.8;
        }

        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background-color: var(--card-bg);
            padding: 1.5rem;
            border-radius: var(--radius);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .stat-card h4 {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0 0 1.5rem;
            color: var(--text-secondary);
        }

        .stat-progress-circle {
            width: 150px;
            height: 150px;
            margin: 0 auto 1.5rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: radial-gradient(closest-side, white 80%, transparent 0 99.9%, white 0),
                        conic-gradient(var(--color) calc(var(--progress)), #E5E7EB 0);
        }

        .stat-progress-circle span {
            font-size: 2rem;
            font-weight: 700;
        }

        .stat-legend {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            font-size: 0.9rem;
        }

        .stat-legend span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .stat-legend i {
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        /* Course Progress */
        .course-progress-list {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            margin-bottom: 1.5rem;
            height: 150px; /* To match other cards */
        }

        .course-progress-item {
            display: grid;
            grid-template-columns: 50px 1fr 40px;
            align-items: center;
            gap: 1rem;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        .progress-bar-container {
            height: 8px;
            background-color: #E5E7EB;
            border-radius: 99px;
            overflow: hidden;
        }

        .progress-bar {
            height: 100%;
            border-radius: 99px;
        }

        .content-body {
            display: flex;
            gap: 2rem;
        }

        .content-body__main {
            flex-grow: 1;
        }
        .content-body__right {
            width: 320px;
            flex-shrink: 0;
        }

        .section {
            margin-bottom: 2.5rem;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        
        .section-header h3 {
            font-size: 1.5rem;
            font-weight: 600;
        }
        .section-header .view-all {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
        }

        .new-courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.5rem;
        }

        .course-card {
            background-color: var(--card-bg);
            border-radius: var(--radius);
            padding: 1.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .course-card__image {
            width: 100%;
            height: 120px;
            border-radius: var(--radius);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .course-card h4 {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0 0 0.25rem;
        }

        .course-card p {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin: 0 0 1rem;
        }

        .course-card__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .user-avatars {
            display: flex;
        }
        .user-avatars span {
            display: block;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 2px solid var(--card-bg);
            background-color: #ccc;
        }
        
        .user-avatars span:not(:first-child) {
            margin-left: -10px;
        }
        .user-avatars span:nth-child(1) { background-color: #FCA5A5; }
        .user-avatars span:nth-child(2) { background-color: #93C5FD; }
        .user-avatars span:nth-child(3) { background-color: #A7F3D0; }

        .my-courses-table {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .table-header, .table-row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            align-items: center;
            padding: 0 1rem;
        }

        .table-header {
            color: var(--text-secondary);
            font-weight: 500;
            font-size: 0.9rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--border-color);
        }

        .table-row {
            background-color: var(--card-bg);
            padding: 1rem;
            border-radius: var(--radius);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .table-row .course-info {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .table-row .course-icon {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            border-radius: var(--radius);
            background-color: #F3F4F6;
        }
        
        .table-row h4 {
            font-weight: 600;
            margin: 0 0 0.25rem;
        }
        
        .table-row p {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin: 0;
        }
        
        .table-row .rate {
            font-weight: 500;
        }
        
        .profile-section {
            margin-bottom: 2rem;
        }
        .profile-section .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .profile-section .profile-header h3 {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .profile-card {
            background-color: var(--card-bg);
            border-radius: var(--radius);
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .profile-card img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto 1rem;
            display: block;
        }
        .profile-card h4 {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0 0 0.25rem;
        }
        .profile-card p {
            color: var(--text-secondary);
            margin: 0;
        }

        .calendar-section {
            background: var(--card-bg);
            border-radius: var(--radius);
            padding: 1.5rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .calendar-header h4 {
            font-weight: 600;
        }

        .calendar-header .calendar-nav {
            display: flex;
            gap: 0.5rem;
        }
        
        .calendar-header .calendar-nav button {
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border-color);
            background: none;
            border-radius: 50%;
            cursor: pointer;
        }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 0.5rem;
            text-align: center;
            font-size: 0.9rem;
        }

        .calendar-grid .day-name {
            color: var(--text-secondary);
            font-weight: 500;
        }

        .calendar-grid .date {
            padding: 0.25rem;
            border-radius: 50%;
            cursor: pointer;
        }
        
        .calendar-grid .date.active-date {
            background-color: var(--primary-color);
            color: white;
            font-weight: 600;
        }
        .calendar-grid .date.empty {
            cursor: default;
        }

        .homework-section h4 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .homework-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            background-color: var(--card-bg);
            padding: 1rem;
            border-radius: var(--radius);
            margin-bottom: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        
        .progress-bar-wrapper .progress-circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: radial-gradient(closest-side, white 80%, transparent 0 99.9%, white 0),
                        conic-gradient(var(--color) calc(var(--progress)), #E5E7EB 0);
            font-size: 0.9rem;
            font-weight: 600;
        }

        .homework-details {
            flex-grow: 1;
        }
        
        .homework-details h5 {
            font-weight: 600;
            margin: 0 0 0.25rem;
        }
        
        .homework-details p {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin: 0;
        }
    `}</style>
);


const Dashboard = () => {
    return (
        <>
            <DashboardStyles />
            <div className="dashboard-container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div>
                        <div className="sidebar__header">
                            <AcademyIcon />
                            <h1>Academy</h1>
                        </div>
                        <nav className="sidebar__nav">
                            {navItems.map(item => (
                                <a href="#" key={item.label} className={`nav-item ${item.active ? 'nav-item--active' : ''}`}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </a>
                            ))}
                        </nav>
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

                {/* Main Content */}
                <main className="main-content">
                    <header className="main-header">
                        <h2>Dashboard</h2>
                        <div className="header-actions">
                            <div className="search-bar">
                                <SearchIcon />
                                <input type="text" placeholder="Search" />
                            </div>
                            <button className="icon-button">
                                <BellIcon />
                            </button>
                        </div>
                    </header>

                    <div className="welcome-banner">
                        <div className="welcome-banner__text">
                            <h3>Welcome back, Esther!</h3>
                            <p>You're doing great, keep it up!</p>
                            <a href="#">Go back to the course →</a>
                        </div>
                        <div className="welcome-banner__illustration">
                            <span role="img" aria-label="students with laptops">👩‍💻👨‍💻</span>
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <h4>Today's goal</h4>
                            <div className="stat-progress-circle" style={{'--progress': '85%', '--color': '#F59E0B'}}>
                                <span>85%</span>
                            </div>
                            <div className="stat-legend">
                                <span><i style={{backgroundColor: '#F59E0B'}}></i> Your goal</span>
                                <span><i style={{backgroundColor: '#E5E7EB'}}></i> Progress</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <h4>Your score looks good!</h4>
                            <div className="stat-progress-circle" style={{'--progress': '50%', '--color': '#8B5CF6'}}>
                                <span>50%</span>
                            </div>
                             <div className="stat-legend">
                                <span><i style={{backgroundColor: '#8B5CF6'}}></i> All courses</span>
                                <span><i style={{backgroundColor: '#E5E7EB'}}></i> General</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <h4>Your courses</h4>
                            <div className="course-progress-list">
                                {courseProgress.map(course => (
                                    <div className="course-progress-item" key={course.name}>
                                        <span>{course.name}</span>
                                        <div className="progress-bar-container">
                                            <div className="progress-bar" style={{width: `${course.progress}%`, backgroundColor: '#6D28D9'}}></div>
                                        </div>
                                        <span>{course.progress}%</span>
                                    </div>
                                ))}
                            </div>
                            <div className="stat-legend">
                                <span><i style={{backgroundColor: '#6D28D9'}}></i> Progress</span>
                                <span><i style={{backgroundColor: '#E5E7EB'}}></i> Your Goal</span>
                            </div>
                        </div>
                    </div>

                    <section className="content-body">
                        <div className="content-body__main">
                            <div className="section">
                                <div className="section-header">
                                    <h3>New Courses</h3>
                                </div>
                                <div className="new-courses-grid">
                                    {newCourses.map(course => (
                                        <div className="course-card" key={course.title}>
                                            <div className="course-card__image" style={{backgroundColor: course.color}}>{course.image}</div>
                                            <h4>{course.title}</h4>
                                            <p>{course.lessons} lessons</p>
                                            <div className="course-card__footer">
                                                <div className="user-avatars">
                                                    <span></span><span></span><span></span>
                                                </div>
                                                <button className="arrow-button"><ChevronRight /></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="section">
                                <div className="section-header">
                                    <h3>My Courses</h3>
                                    <a href="#" className="view-all">View All</a>
                                </div>
                                <div className="my-courses-table">
                                    <div className="table-header">
                                        <span>Course Name</span>
                                        <span>Start</span>
                                        <span>Rate</span>
                                        <span>Level</span>
                                    </div>
                                    {myCourses.map(course => (
                                        <div className="table-row" key={course.name}>
                                            <div className="course-info">
                                                <div className="course-icon">{course.icon}</div>
                                                <div>
                                                    <h4>{course.name}</h4>
                                                    <p>{course.lessons} lessons</p>
                                                </div>
                                            </div>
                                            <span>{course.start}</span>
                                            <span className="rate">⭐ {course.rate}</span>
                                            <span>{course.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <aside className="content-body__right">
                            <div className="profile-section">
                               <div className="profile-header">
                                 <h3>Profile</h3>
                                 <button className="icon-button">...</button>
                               </div>
                                <div className="profile-card">
                                    <img src="https://placehold.co/80x80/E9E7FF/6D28D9?text=EH" alt="Esther Howard" />
                                    <h4>Esther Howard</h4>
                                    <p>Elementary</p>
                                </div>
                            </div>

                            <div className="calendar-section">
                                <div className="calendar-header">
                                    <h4>May 2022</h4>
                                    <div className="calendar-nav">
                                        <button>&lt;</button>
                                        <button>&gt;</button>
                                    </div>
                                </div>
                                <div className="calendar-grid">
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="day-name">{day}</div>)}
                                    {Array.from({length: 35}, (_, i) => {
                                        const day = i - 1;
                                        const date = day > 0 && day < 32 ? day : '';
                                        const isActive = date === 9;
                                        return <div key={i} className={`date ${isActive ? 'active-date' : ''} ${date === '' ? 'empty' : ''}`}>{date}</div>
                                    })}
                                </div>
                            </div>

                            <div className="homework-section">
                                <h4>Homework progress</h4>
                                {homework.map(item => (
                                    <div className="homework-item" key={item.title}>
                                        <div className="progress-bar-wrapper">
                                            <div className="progress-circle" style={{'--progress': `${item.progress}%`, '--color': item.color}}>
                                              <span>{item.progress}%</span>
                                            </div>
                                        </div>
                                        <div className="homework-details">
                                            <h5>{item.title}</h5>
                                            <p>{item.tasks} tasks</p>
                                        </div>
                                        <button className="arrow-button small"><ChevronRight /></button>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Dashboard;


