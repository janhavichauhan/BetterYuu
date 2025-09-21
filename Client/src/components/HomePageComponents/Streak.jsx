import React, { useState } from 'react';

// --- FAKE DYNAMIC DATA ---
const userData = {
    name: 'Janhavi Chauhan',
};

const productivityData = [
    { day: 'Sun', progress: 30 },
    { day: 'Mon', progress: 70 },
    { day: 'Tue', progress: 85 },
    { day: 'Wed', progress: 95 },
    { day: 'Thu', progress: 50 },
    { day: 'Fri', progress: 60 },
    { day: 'Sat', progress: 40 }
];

const overallProgress = 72; // Percentage

const scheduleData = [
    { time: '09:00', title: 'Design Standup', duration: '30min', color: '#4F46E5' },
    { time: '11:00', title: 'Prototyping Session', duration: '2hr', color: '#10B981' },
    { time: '14:30', title: 'Client Feedback Call', duration: '1hr', color: '#F59E0B' }
];

const dailyStreak = {
    count: 18,
};

// Function to generate fake GitHub-like streak data for the last 91 days (13 weeks)
const generateStreakData = () => {
    const data = [];
    const today = new Date();
    for (let i = 0; i < 91; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        data.push({
            date: date.toISOString().split('T')[0],
            level: Math.floor(Math.random() * 5), // Activity level 0-4
        });
    }
    return data.reverse();
};
const streakGraphData = generateStreakData();


// --- SVG ICONS ---
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const FlameIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="#FF6D00" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.83 3.06C12.83 3.06 12 6.5 12 8.5c0 1.82 1.5 3.5 3 4.5 1.45.97 2.5 2.47 2.5 4c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.21.73-2.25 1.75-2.83C8.13 12.9 6.75 10.58 6.75 8c0-3.5 2.44-6.5 5.5-6.5.49 0 1.29 1 1.29 1z" />
    </svg>
);


// --- STYLES ---
const GlobalStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        :root {
            --primary-blue: #4F46E5;
            --light-blue: #EEF2FF;
            --text-dark: #1F2937;
            --text-secondary: #6B7280;
            --bg-color: #F9FAFB;
            --card-bg: #FFFFFF;
            --border-color: #E5E7EB;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            margin: 0;
            color: var(--text-dark);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        .dashboard-container {
            width: 100%;
            max-width: 1200px;
            margin: 2rem;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        @media (min-width: 1024px) {
            .dashboard-container {
                grid-template-columns: 2fr 1fr;
            }
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .dashboard-container {
                margin: 1rem;
                gap: 1.5rem;
            }
            .dashboard-header h1 {
                font-size: 1.5rem;
            }
            .card {
                padding: 1rem;
            }
            .card-title {
                font-size: 1.1rem;
                margin-bottom: 1rem;
            }
            .chart-container {
                height: 150px;
            }
            .bar {
                width: 20px;
            }
            .bar-day {
                font-size: 0.8rem;
            }
            .progress-circle {
                width: 150px;
                height: 150px;
            }
            .progress-circle-percent {
                font-size: 2rem;
            }
            .streak-count {
                font-size: 2rem;
            }
            .streak-label {
                font-size: 0.9rem;
            }
            .calendar-header .month-year {
                font-size: 0.9rem;
            }
            .calendar-grid {
                gap: 0.5rem;
            }
            .calendar-grid .day {
                padding: 0.4rem;
                font-size: 0.8rem;
            }
            .schedule-item {
                gap: 0.75rem;
            }
            .schedule-time {
                width: 40px;
                font-size: 0.8rem;
            }
            .schedule-details {
                padding-left: 0.75rem;
            }
            .schedule-details h4 {
                font-size: 0.9rem;
            }
            .schedule-details p {
                font-size: 0.8rem;
            }
            .streak-grid {
                gap: 3px;
            }
            .streak-day-square {
                width: 12px;
                height: 12px;
            }
        }
        
        @media (max-width: 480px) {
            .dashboard-container {
                margin: 0.5rem;
                gap: 1rem;
            }
            .dashboard-header h1 {
                font-size: 1.25rem;
            }
            .card {
                padding: 0.75rem;
            }
            .card-title {
                font-size: 1rem;
                margin-bottom: 0.75rem;
            }
            .chart-container {
                height: 120px;
            }
            .bar {
                width: 16px;
            }
            .bar-day {
                font-size: 0.7rem;
            }
            .progress-circle {
                width: 120px;
                height: 120px;
            }
            .progress-circle-percent {
                font-size: 1.5rem;
            }
            .streak-count {
                font-size: 1.75rem;
            }
            .streak-label {
                font-size: 0.8rem;
            }
            .calendar-header .month-year {
                font-size: 0.8rem;
            }
            .calendar-nav button {
                padding: 0.2rem;
            }
            .calendar-grid {
                gap: 0.3rem;
            }
            .calendar-grid .day {
                padding: 0.3rem;
                font-size: 0.7rem;
            }
            .schedule-item {
                flex-direction: column;
                gap: 0.5rem;
                text-align: center;
            }
            .schedule-time {
                width: auto;
                font-size: 0.75rem;
            }
            .schedule-details {
                border-left: none;
                border-top: 2px solid;
                padding-left: 0;
                padding-top: 0.5rem;
            }
            .schedule-details h4 {
                font-size: 0.8rem;
            }
            .schedule-details p {
                font-size: 0.7rem;
            }
            .streak-grid {
                gap: 2px;
            }
            .streak-day-square {
                width: 10px;
                height: 10px;
            }
            .streak-day-square .tooltip {
                min-width: 120px;
                font-size: 0.7rem;
                padding: 3px 6px;
            }
        }
        .card {
            background-color: var(--card-bg);
            padding: 1.5rem;
            border-radius: 1rem;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        .card-title {
            margin-top: 0;
            margin-bottom: 1.5rem;
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        /* Header */
        .dashboard-header {
            grid-column: 1 / -1;
        }
        .dashboard-header h1 {
            font-size: 2rem;
            margin: 0;
        }

        /* Main Content Area */
        .main-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        /* Productivity Chart */
        .chart-container {
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            height: 200px;
        }
        .bar-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
        }
        .bar {
            width: 30px;
            background-color: var(--light-blue);
            border-radius: 8px;
            position: relative;
        }
        .bar-inner {
            width: 100%;
            background-color: var(--primary-blue);
            border-radius: 8px;
            transition: height 0.5s ease-out;
        }
        .bar-day {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-secondary);
        }

        /* Sidebar Area */
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        /* Progress Circle */
        .progress-circle-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .progress-circle {
            position: relative;
            width: 180px;
            height: 180px;
        }
        .progress-circle svg {
            transform: rotate(-90deg);
        }
        .progress-circle circle {
            transition: stroke-dashoffset 0.5s ease;
        }
        .progress-circle-percent {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2.75rem;
            font-weight: 700;
        }

        /* Calendar */
        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        .calendar-header .month-year {
            font-weight: 600;
        }
        .calendar-nav button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.25rem;
            color: var(--text-secondary);
        }
        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 0.75rem;
            text-align: center;
        }
        .calendar-grid .day-name {
            font-size: 0.8rem;
            color: var(--text-secondary);
            font-weight: 600;
        }
        .calendar-grid .day {
            padding: 0.5rem;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            border-radius: 50%;
            transition: background-color 0.2s;
        }
        .calendar-grid .day:not(.other-month):hover {
            background-color: var(--light-blue);
        }
        .calendar-grid .day.today {
            background-color: var(--primary-blue);
            color: white;
        }

        /* Schedule */
        .schedule-list {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }
        .schedule-item {
            display: flex;
            gap: 1rem;
        }
        .schedule-time {
            font-weight: 600;
            width: 50px;
        }
        .schedule-details {
            flex-grow: 1;
            padding-left: 1rem;
            border-left: 3px solid;
        }
        .schedule-details h4 {
            margin: 0 0 0.25rem 0;
        }
        .schedule-details p {
            margin: 0;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        /* Streak Card */
        .streak-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        .streak-info {
            line-height: 1.2;
        }
        .streak-count {
            font-size: 2.5rem;
            font-weight: 700;
        }
        .streak-label {
            font-size: 1rem;
            color: var(--text-secondary);
        }

        /* Streak Graph */
        .streak-graph-container {
             overflow-x: auto;
        }
        .streak-grid {
            display: grid;
            grid-template-rows: repeat(7, 1fr);
            grid-auto-flow: column;
            gap: 4px;
        }
        .streak-day-square {
            width: 16px;
            height: 16px;
            border-radius: 4px;
            position: relative;
        }
         .streak-day-square .tooltip {
            visibility: hidden;
            min-width: 150px;
            background-color: var(--text-dark);
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 10px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
        }
        .streak-day-square:hover .tooltip {
            visibility: visible;
            opacity: 1;
        }

    `}</style>
);

// --- Calendar Logic Hook ---
const useCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const changeMonth = (amount) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(newDate.getMonth() + amount);
            return newDate;
        });
    };

    const monthData = (() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const days = Array.from({ length: daysInMonth }, (_, i) => ({
            num: i + 1,
            isToday: (new Date()).toDateString() === (new Date(year, month, i + 1)).toDateString(),
        }));
        
        const placeholders = Array(firstDayOfMonth).fill({ num: null });
        
        return {
            monthName: currentDate.toLocaleString('default', { month: 'long' }),
            year,
            days: [...placeholders, ...days]
        };
    })();
    
    return { changeMonth, monthData };
};


// --- Main Component ---
export default function ProductivityDashboard() {
    const { monthData, changeMonth } = useCalendar();
    const progressCircleCircumference = 2 * Math.PI * 80;

    return (
        <>
            <GlobalStyles />
            <div className="dashboard-container">
                <header className="dashboard-header">
                    <h1>Good morning, {userData.name}!</h1>
                </header>

                <main className="main-content">
                    <section className="card">
                        <h2 className="card-title">Weekly Productivity</h2>
                        <div className="chart-container">
                            {productivityData.map(d => (
                                <div key={d.day} className="bar-wrapper">
                                    <div className="bar" style={{ height: `${d.progress * 1.8}px` }}>
                                       <div className="bar-inner" style={{height: '100%'}}></div>
                                    </div>
                                    <span className="bar-day">{d.day}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="card">
                        <h2 className="card-title">Activity Streak</h2>
                        <div className="streak-graph-container">
                            <div className="streak-grid">
                                {streakGraphData.map(day => {
                                    const colors = ['#EBEDF0', '#9BE9A8', '#40C463', '#30A14E', '#216E39'];
                                    const formattedDate = new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                                    return (
                                        <div
                                            key={day.date}
                                            className="streak-day-square"
                                            style={{ backgroundColor: colors[day.level] }}
                                        >
                                            <span className="tooltip">{day.level} activities on {formattedDate}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </main>

                <aside className="sidebar">
                    <section className="card">
                        <h2 className="card-title">Overall Progress</h2>
                        <div className="progress-circle-container">
                            <div className="progress-circle">
                                <svg width="180" height="180" viewBox="0 0 180 180">
                                    <circle cx="90" cy="90" r="80" fill="none" stroke="var(--light-blue)" strokeWidth="15" />
                                    <circle
                                        cx="90" cy="90" r="80" fill="none"
                                        stroke="var(--primary-blue)" strokeWidth="15"
                                        strokeDasharray={progressCircleCircumference}
                                        strokeDashoffset={progressCircleCircumference - (progressCircleCircumference * overallProgress) / 100}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="progress-circle-percent">{overallProgress}%</div>
                            </div>
                        </div>
                    </section>
                    <section className="card streak-card">
                        <div className="streak-info">
                            <div className="streak-count">{dailyStreak.count}</div>
                            <div className="streak-label">Day Streak</div>
                        </div>
                        <FlameIcon />
                    </section>
                    <section className="card">
                         <div className="calendar-header">
                            <span className="month-year">{monthData.monthName} {monthData.year}</span>
                            <div className="calendar-nav">
                                <button onClick={() => changeMonth(-1)}><ChevronLeftIcon/></button>
                                <button onClick={() => changeMonth(1)}><ChevronRightIcon/></button>
                            </div>
                        </div>
                        <div className="calendar-grid">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="day-name">{d}</div>)}
                            {monthData.days.map((day, i) => (
                                <div key={i} className={`day ${!day.num ? 'other-month' : ''} ${day.isToday ? 'today' : ''}`}>
                                    {day.num}
                                </div>
                            ))}
                        </div>
                    </section>
                </aside>
            </div>
        </>
    );
}

