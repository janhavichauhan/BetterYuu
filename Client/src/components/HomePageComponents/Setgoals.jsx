import React, { useState, useMemo, useEffect } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { motion } from 'framer-motion';
import { Badge } from '@mui/material';

// --- FAKE DYNAMIC DATA ---

const profileData = {
    name: 'Janhavi Chauhan',
    role: 'Student',
    achievements: 23,
    friends: 38,
    avatarUrl: 'https://placehold.co/100x100/6366f1/ffffff?text=AW'
};

const productivityData = [
    { day: 'Sun', progress: 40 },
    { day: 'Mon', progress: 65 },
    { day: 'Tue', progress: 80 },
    { day: 'Wed', progress: 95 },
    { day: 'Thu', progress: 50 },
    { day: 'Fri', progress: 70 },
    { day: 'Sat', progress: 30 }
];

const dailyGoalsData = [
    { id: 1, title: 'Adobe XD - Prototyping', progress: 95, icon: 'adobe' },
    { id: 2, title: 'How to playing Piano', progress: 84, icon: 'piano' },
    { id: 3, title: 'Video Editing - Animation', progress: 75, icon: 'video' },
    { id: 4, title: 'Chemistry - Expert', progress: 48, icon: 'chemistry' },
    { id: 5, title: 'Mathematic - Basic', progress: 28, icon: 'math' },
];

const notificationsData = [
    { id: 1, senderInitial: 'C', message: 'You have 1 new class on 28 Feb', time: '12 Minutes ago', color: '#4F46E5' },
    { id: 2, senderInitial: 'M', message: 'Miguel send you message', time: '1 hour ago', color: '#10B981' },
    { id: 3, senderInitial: 'N', message: 'You have taken AI class', time: '1 Day ago', color: '#F59E0B' },
    { id: 4, senderInitial: 'F', message: 'You have 1 new friend', time: '1 Day ago', color: '#EF4444' },
    { id: 5, senderInitial: 'T', message: 'You have new mentor now', time: '3 Day ago', color: '#3B82F6' },
];

const eventDays = [8, 11, 23, 28]; // Days in the current month with events

// --- SVG ICONS ---

const Icon = ({ name, className }) => {
    const icons = {
        dashboard: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
        myClass: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
        myTeacher: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
        myTask: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />,
        message: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
        settings: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
        search: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
        chevronLeft: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />,
        chevronRight: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />,
        achievement: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />,
        friend: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-6-6h6z" />,
        // Goal icons
        adobe: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
        piano: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l7-3v13l-7 3zM9 19a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2a2 2 0 012 2v7zm0 0h2v-7H9v7zm10-5h-2V6h2v8z" />,
        video: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />,
        chemistry: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.022.547m14.454-1.022a2 2 0 00.547 1.806l-.477 2.387a6 6 0 01-.517 3.86l-.158.318a6 6 0 01-.517 3.86l-2.387.477a2 2 0 01-1.806-.547a2 2 0 01-.547-1.806l.477-2.387a6 6 0 01.517-3.86l.158-.318a6 6 0 01.517-3.86l2.387-.477a2 2 0 011.022.547M12 6V3m0 3h3m-3 0H9" />,
        math: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 01-1 1H9a1 1 0 01-1-1V5a2 2 0 114 0v0zM7 10h10M7 13h10M7 16h10" />
    };
    return <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icons[name]}</svg>;
};

// --- STYLES ---

const GlobalStyles = () => (
    <style>{`
        :root {
            --primary-blue: #4F46E5;
            --light-blue: #EEF2FF;
            --text-dark: #1F2937;
            --text-light: #6B7280;
            --bg-color: #F9FAFB;
            --sidebar-bg: #FFFFFF;
            --border-color: #E5E7EB;
            --orange: #F59E0B;
            --progress-blue: #3B82F6;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            margin: 0;
            color: var(--text-dark);
        }
        .dashboard-container {
            padding: 2rem;
        }
      
        /* --- Main Content --- */
        .main-content {
            width: 100%;
        }
        .main-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .main-header h1 { font-size: 1.75rem; margin: 0; }
        .search-bar { position: relative; }
        .search-bar input {
            background: #fff; border: 1px solid var(--border-color); border-radius: 8px;
            padding: 0.6rem 1rem 0.6rem 2.5rem; min-width: 300px;
        }
        .search-bar .icon { position: absolute; left: 0.8rem; top: 50%; transform: translateY(-50%); color: var(--text-light); width: 20px; height: 20px; }
        .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 1.5rem;
        }
         @media (min-width: 1280px) {
            .content-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        .card { background-color: white; padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--border-color); }
        .card-title { margin-top: 0; margin-bottom: 1.5rem; font-size: 1.2rem; font-weight: 600; }
        
        /* Specific Cards Layout */
        @media (min-width: 1280px) {
            .productivity-card { grid-column: span 2; }
            .progress-card { grid-column: span 1; }
            .my-class-card { grid-column: span 2; }
            .notifications-card { grid-column: span 1; }
            .schedule-card { grid-column: span 1; }
            .profile-card { grid-column: span 1; }
        }


        /* Productivity Chart */
        .chart-container { display: flex; justify-content: space-around; align-items: flex-end; height: 180px; }
        .bar-wrapper { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .bar { width: 15px; background-color: var(--light-blue); border-radius: 5px; }
        .bar-inner { width: 100%; background-color: var(--progress-blue); border-radius: 5px; }
        .bar-wrapper:nth-child(odd) .bar-inner { background-color: var(--orange); }
        .bar-day { font-size: 0.8rem; color: var(--text-light); }

        /* Progress Circle */
        .progress-circle-container { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; }
        .progress-circle { position: relative; width: 150px; height: 150px; }
        .progress-circle svg { transform: rotate(-90deg); }
        .progress-circle circle { transition: stroke-dashoffset 0.5s ease; }
        .progress-circle .percent { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 2.5rem; font-weight: 700; }
        .progress-legend { display: flex; gap: 1.5rem; margin-top: 2rem; }
        .legend-item { display: flex; align-items: center; gap: 0.5rem; }
        .legend-dot { width: 12px; height: 12px; border-radius: 50%; }

        /* My Class / Daily Goals */
        .goal-list { display: flex; flex-direction: column; gap: 1rem; }
        .goal-item { display: flex; align-items: center; gap: 1rem; }
        .goal-icon {
            width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
            border-radius: 0.75rem; flex-shrink: 0; color: var(--primary-blue); background-color: var(--light-blue);
        }
        .goal-icon .icon { width: 24px; height: 24px; }
        .goal-details { flex-grow: 1; }
        .goal-title { font-weight: 500; margin: 0 0 0.5rem 0; }
        .goal-progress-bar { height: 6px; background: var(--border-color); border-radius: 3px; overflow: hidden; }
        .goal-progress-inner { height: 100%; background: var(--progress-blue); border-radius: 3px; }
        .goal-percent { font-weight: 600; color: var(--text-light); }

        /* Notifications */
        .notification-list { display: flex; flex-direction: column; gap: 1.25rem; }
        .notification-item { display: flex; align-items: flex-start; gap: 1rem; }
        .notification-initial {
            width: 40px; height: 40px; border-radius: 50%; color: white; flex-shrink: 0;
            display: flex; align-items: center; justify-content: center; font-weight: 700;
        }
        .notification-content .message { margin: 0; font-weight: 500; }
        .notification-content .time { font-size: 0.8rem; color: var(--text-light); margin-top: 0.25rem; }

        /* Schedule / Calendar */
        .calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .calendar-header .month { font-weight: 600; }
        .calendar-nav button { background: none; border: none; cursor: pointer; padding: 0.25rem; }
        .calendar-nav .icon { width: 20px; height: 20px; color: var(--text-light); }
        
        /* MUI Calendar Styles */
        .mui-calendar-container { padding: 0; margin-top: 10px; }
        .mui-calendar-container .MuiDateCalendar-root {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
            border-radius: 12px;
        }
        .mui-calendar-container .MuiPickersCalendarHeader-root {
            padding-top: 0;
            margin-top: 0;
        }
        .mui-calendar-container .MuiPickersCalendarHeader-label {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-dark);
        }
        .mui-calendar-container .MuiPickersDay-root {
            margin: 2px;
            font-size: 0.9rem;
        }
        .mui-calendar-container .MuiPickersDay-today {
            border: 1px solid var(--primary-blue);
        }
        .mui-calendar-container .MuiPickersDay-root.Mui-selected {
            background-color: var(--primary-blue);
            color: white;
        }
        .mui-calendar-container .MuiPickersDay-root:hover {
            background-color: var(--light-blue);
        }
        .mui-calendar-container .MuiBadge-badge {
            background-color: var(--primary-blue);
            width: 6px;
            height: 6px;
            min-width: 6px;
            border-radius: 50%;
            right: 2px;
            top: 2px;
        }
        
        /* Profile */
        .profile-content { display: flex; flex-direction: column; align-items: center; }
        .profile-avatar { width: 80px; height: 80px; border-radius: 50%; margin-bottom: 1rem; object-fit: cover; }
        .profile-name { font-size: 1.2rem; font-weight: 600; margin: 0; }
        .profile-role { color: var(--text-light); margin-bottom: 1.5rem; }
        .profile-stats { display: flex; gap: 2rem; }
        .stat-item { text-align: center; }
        .stat-item .icon { width: 24px; height: 24px; color: var(--primary-blue); margin-bottom: 0.5rem; }
        .stat-value { font-size: 1.25rem; font-weight: 700; }
        .stat-label { font-size: 0.8rem; color: var(--text-light); }
    `}</style>
);


// --- Calendar Logic ---
const useCalendar = (events) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [highlightedDays, setHighlightedDays] = useState([]);
    
    // Convert event days to Date objects for the current month
    useEffect(() => {
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth();
        
        const daysWithEvents = events.map(day => new Date(year, month, day));
        setHighlightedDays(daysWithEvents);
    }, [selectedDate, events]);
    
    // Function to check if a date has an event
    const isDateHighlighted = (date) => {
        return highlightedDays.some(d => 
            d.getDate() === date.getDate() && 
            d.getMonth() === date.getMonth() && 
            d.getFullYear() === date.getFullYear()
        );
    };
    
    return { selectedDate, setSelectedDate, isDateHighlighted, highlightedDays };
};


// Animation variants for motion components
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Custom day renderer for MUI Calendar
const ServerDay = (props) => {
    const { day, outsideCurrentMonth, isDateHighlighted, ...other } = props;
    
    const isHighlighted = isDateHighlighted(day);
    
    return (
        <Badge
            key={day.toString()}
            overlap="circular"
            badgeContent={isHighlighted ? '🔵' : undefined}
        >
            <div {...other} />
        </Badge>
    );
};

// --- Main Component ---
export default function GoalDashboard() {
    const { selectedDate, setSelectedDate, isDateHighlighted } = useCalendar(eventDays);

    const averageProgress = useMemo(() => {
        if (dailyGoalsData.length === 0) return 0;
        const totalProgress = dailyGoalsData.reduce((acc, goal) => acc + goal.progress, 0);
        return Math.round(totalProgress / dailyGoalsData.length);
    }, [dailyGoalsData]);

    return (
        <>
            <GlobalStyles />
            <motion.div 
                className="dashboard-container"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <main className="main-content">
                    <motion.header className="main-header" variants={fadeInUp}>
                        <h1>Dashboard</h1>
                        <div className="search-bar">
                            <Icon name="search" className="icon" />
                            <input type="text" placeholder="Search Class, task and more" />
                        </div>
                    </motion.header>
                    
                    <motion.div className="content-grid" variants={staggerContainer}>
                        <motion.section className="card productivity-card" variants={fadeInUp}>
                            <h2 className="card-title">Productivity</h2>
                            <div className="chart-container">
                                {productivityData.map((d, index) => (
                                    <motion.div 
                                        key={d.day} 
                                        className="bar-wrapper"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                    >
                                        <div className="bar" style={{ height: `${d.progress * 1.5}px` }}>
                                           <motion.div 
                                               className="bar-inner" 
                                               initial={{ height: 0 }}
                                               animate={{ height: '100%' }}
                                               transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                                           ></motion.div>
                                        </div>
                                        <span className="bar-day">{d.day}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section className="card progress-card" variants={fadeInUp}>
                            <h2 className="card-title">Progress</h2>
                            <div className="progress-circle-container">
                                <motion.div 
                                    className="progress-circle"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                     <svg width="150" height="150" viewBox="0 0 150 150">
                                        <circle cx="75" cy="75" r="65" fill="none" stroke={COLORS.light} strokeWidth="15" />
                                        <motion.circle 
                                            cx="75" 
                                            cy="75" 
                                            r="65" 
                                            fill="none" 
                                            stroke={COLORS.main} 
                                            strokeWidth="15" 
                                            strokeDasharray="408" 
                                            initial={{ strokeDashoffset: 408 }}
                                            animate={{ strokeDashoffset: 408 - (408 * averageProgress) / 100 }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            strokeLinecap="round" 
                                        />
                                    </svg>
                                    <motion.div 
                                        className="percent"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1.5 }}
                                    >
                                        {averageProgress}%
                                    </motion.div>
                                </motion.div>
                                <motion.div 
                                    className="progress-legend"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.7 }}
                                >
                                    <div className="legend-item"><div className="legend-dot" style={{backgroundColor: COLORS.main}}></div> Online Class</div>
                                    <div className="legend-item"><div className="legend-dot" style={{backgroundColor: COLORS.light}}></div> Private Class</div>
                                </motion.div>
                            </div>
                        </motion.section>

                        <motion.section className="card my-class-card" variants={fadeInUp}>
                            <h2 className="card-title">My Class</h2>
                            <div className="goal-list">
                                {dailyGoalsData.map((goal, index) => (
                                    <motion.div 
                                        key={goal.id} 
                                        className="goal-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                    >
                                        <div className="goal-icon"><Icon name={goal.icon} className="icon"/></div>
                                        <div className="goal-details">
                                            <p className="goal-title">{goal.title}</p>
                                            <div className="goal-progress-bar">
                                                <motion.div 
                                                    className="goal-progress-inner" 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${goal.progress}%` }}
                                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                                ></motion.div>
                                            </div>
                                        </div>
                                        <span className="goal-percent">{goal.progress}%</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section className="card notifications-card" variants={fadeInUp}>
                            <h2 className="card-title">Notifications</h2>
                             <div className="notification-list">
                                {notificationsData.map((n, index) => (
                                    <motion.div 
                                        key={n.id} 
                                        className="notification-item"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                    >
                                        <motion.div 
                                            className="notification-initial" 
                                            style={{backgroundColor: n.color}}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 500, delay: 0.4 + (index * 0.1) }}
                                        >{n.senderInitial}</motion.div>
                                        <div className="notification-content">
                                            <p className="message">{n.message}</p>
                                            <p className="time">{n.time}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section className="card schedule-card" variants={fadeInUp}>
                            <h2 className="card-title">Schedule</h2>
                            <motion.div 
                                className="mui-calendar-container"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateCalendar 
                                        value={selectedDate}
                                        onChange={(newDate) => setSelectedDate(newDate)}
                                        slots={{
                                            day: ServerDay,
                                        }}
                                        slotProps={{
                                            day: {
                                                isDateHighlighted,
                                            },
                                        }}
                                        sx={{
                                            width: '100%',
                                            '& .MuiPickersDay-root': {
                                                borderRadius: '50%',
                                                '&.Mui-selected': {
                                                    backgroundColor: COLORS.main,
                                                    color: '#fff',
                                                    '&:hover': {
                                                        backgroundColor: COLORS.main,
                                                    },
                                                },
                                                '&:hover': {
                                                    backgroundColor: COLORS.light,
                                                },
                                            },
                                        }}
                                    />
                                </LocalizationProvider>
                            </motion.div>
                        </motion.section>
                        
                        <motion.section className="card profile-card" variants={fadeInUp}>
                             <motion.div 
                                className="profile-content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <motion.img 
                                    src={profileData.avatarUrl} 
                                    alt={profileData.name} 
                                    className="profile-avatar"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                />
                                <motion.h3 
                                    className="profile-name"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >{profileData.name}</motion.h3>
                                <motion.p 
                                    className="profile-role"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >{profileData.role}</motion.p>
                                <motion.div 
                                    className="profile-stats"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    <motion.div 
                                        className="stat-item"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 0.8 }}
                                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    >
                                        <Icon name="achievement" className="icon"/>
                                        <motion.div 
                                            className="stat-value"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 500, delay: 0.9 }}
                                        >{profileData.achievements}</motion.div>
                                        <div className="stat-label">Achievement</div>
                                    </motion.div>
                                    <motion.div 
                                        className="stat-item"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 0.9 }}
                                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    >
                                        <Icon name="friend" className="icon"/>
                                        <motion.div 
                                            className="stat-value"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 500, delay: 1.0 }}
                                        >{profileData.friends}</motion.div>
                                        <div className="stat-label">Courses</div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.section>
                    </motion.div>
                </main>
            </motion.div>
        </>
    );
}

const COLORS = { main: '#4F46E5', light: '#E0E7FF' };

