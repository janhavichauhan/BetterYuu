import React, { useState, useMemo } from 'react';

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
        .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; text-align: center; }
        .calendar-grid .day-name { font-size: 0.8rem; color: var(--text-light); font-weight: 600; padding: 0.5rem 0; }
        .calendar-grid .day {
            padding: 0.5rem; font-size: 0.9rem; cursor: pointer; border-radius: 50%;
            transition: background-color 0.2s; position: relative;
        }
        .calendar-grid .day.other-month { color: #D1D5DB; }
        .calendar-grid .day:not(.other-month):hover { background-color: var(--light-blue); }
        .calendar-grid .day.today { background-color: var(--orange); color: white; }
        .calendar-grid .day.event::after {
            content: ''; position: absolute; bottom: 6px; left: 50%; transform: translateX(-50%);
            width: 5px; height: 5px; background-color: var(--primary-blue); border-radius: 50%;
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
    const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 19)); // Hardcoding to Feb 2025 for consistency with design
    
    const changeMonth = (amount) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(newDate.getMonth() + amount);
            return newDate;
        });
    };

    const monthData = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const daysArray = Array(daysInMonth).fill(null).map((_, i) => {
            const dayNumber = i + 1;
            const today = new Date();
            const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === dayNumber;
            return {
                num: dayNumber,
                isToday: isToday,
                isEvent: events.includes(dayNumber)
            };
        });
        
        const placeholders = Array(firstDayOfMonth).fill({ num: null });
        
        return {
            monthName: currentDate.toLocaleString('default', { month: 'long' }),
            year,
            days: [...placeholders, ...daysArray]
        };
    }, [currentDate, events]);
    
    return { currentDate, changeMonth, monthData };
};


// --- Main Component ---
export default function GoalDashboard() {
    const { monthData, changeMonth } = useCalendar(eventDays);

    const averageProgress = useMemo(() => {
        if (dailyGoalsData.length === 0) return 0;
        const totalProgress = dailyGoalsData.reduce((acc, goal) => acc + goal.progress, 0);
        return Math.round(totalProgress / dailyGoalsData.length);
    }, [dailyGoalsData]);

    return (
        <>
            <GlobalStyles />
            <div className="dashboard-container">
                <main className="main-content">
                    <header className="main-header">
                        <h1>Dashboard</h1>
                        <div className="search-bar">
                            <Icon name="search" className="icon" />
                            <input type="text" placeholder="Search Class, task and more" />
                        </div>
                    </header>
                    
                    <div className="content-grid">
                        <section className="card productivity-card">
                            <h2 className="card-title">Productivity</h2>
                            <div className="chart-container">
                                {productivityData.map(d => (
                                    <div key={d.day} className="bar-wrapper">
                                        <div className="bar" style={{ height: `${d.progress * 1.5}px` }}>
                                           <div className="bar-inner" style={{height: '100%'}}></div>
                                        </div>
                                        <span className="bar-day">{d.day}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="card progress-card">
                            <h2 className="card-title">Progress</h2>
                            <div className="progress-circle-container">
                                <div className="progress-circle">
                                     <svg width="150" height="150" viewBox="0 0 150 150">
                                        <circle cx="75" cy="75" r="65" fill="none" stroke={COLORS.light} strokeWidth="15" />
                                        <circle cx="75" cy="75" r="65" fill="none" stroke={COLORS.main} strokeWidth="15" strokeDasharray="408" strokeDashoffset={408 - (408 * averageProgress) / 100} strokeLinecap="round" />
                                    </svg>
                                    <div className="percent">{averageProgress}%</div>
                                </div>
                                <div className="progress-legend">
                                    <div className="legend-item"><div className="legend-dot" style={{backgroundColor: COLORS.main}}></div> Online Class</div>
                                    <div className="legend-item"><div className="legend-dot" style={{backgroundColor: COLORS.light}}></div> Private Class</div>
                                </div>
                            </div>
                        </section>

                        <section className="card my-class-card">
                            <h2 className="card-title">My Class</h2>
                            <div className="goal-list">
                                {dailyGoalsData.map(goal => (
                                    <div key={goal.id} className="goal-item">
                                        <div className="goal-icon"><Icon name={goal.icon} className="icon"/></div>
                                        <div className="goal-details">
                                            <p className="goal-title">{goal.title}</p>
                                            <div className="goal-progress-bar"><div className="goal-progress-inner" style={{width: `${goal.progress}%`}}></div></div>
                                        </div>
                                        <span className="goal-percent">{goal.progress}%</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="card notifications-card">
                            <h2 className="card-title">Notifications</h2>
                             <div className="notification-list">
                                {notificationsData.map(n => (
                                    <div key={n.id} className="notification-item">
                                        <div className="notification-initial" style={{backgroundColor: n.color}}>{n.senderInitial}</div>
                                        <div className="notification-content">
                                            <p className="message">{n.message}</p>
                                            <p className="time">{n.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="card schedule-card">
                             <div className="calendar-header">
                                <span className="month">{monthData.monthName} {monthData.year}</span>
                                <div className="calendar-nav">
                                    <button onClick={() => changeMonth(-1)}><Icon name="chevronLeft" className="icon"/></button>
                                    <button onClick={() => changeMonth(1)}><Icon name="chevronRight" className="icon"/></button>
                                </div>
                            </div>
                            <div className="calendar-grid">
                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="day-name">{d}</div>)}
                                {monthData.days.map((day, i) => (
                                    <div key={i} className={`day ${day.num === null ? 'other-month' : ''} ${day.isToday ? 'today' : ''} ${day.isEvent ? 'event' : ''}`}>
                                        {day.num}
                                    </div>
                                ))}
                            </div>
                        </section>
                        
                        <section className="card profile-card">
                             <div className="profile-content">
                                <img src={profileData.avatarUrl} alt={profileData.name} className="profile-avatar"/>
                                <h3 className="profile-name">{profileData.name}</h3>
                                <p className="profile-role">{profileData.role}</p>
                                <div className="profile-stats">
                                    <div className="stat-item">
                                        <Icon name="achievement" className="icon"/>
                                        <div className="stat-value">{profileData.achievements}</div>
                                        <div className="stat-label">Achievement</div>
                                    </div>
                                     <div className="stat-item">
                                        <Icon name="friend" className="icon"/>
                                        <div className="stat-value">{profileData.friends}</div>
                                        <div className="stat-label">Courses</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}

const COLORS = { main: '#4F46E5', light: '#E0E7FF' };

