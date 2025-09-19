import React, { useState } from 'react';

// --- FAKE DYNAMIC DATA ---

const userData = {
  name: 'Janhavi Chauhan',
};

const coursesData = [
  {
    id: 1,
    title: 'Design Strategy',
    description: 'Lesson on planning a design concept and proper planning of work',
    category: 'UX/UI Design',
    startDate: 'May 5',
    rating: 4.0,
    ratingCount: '33,098',
    status: 'Active',
    bgColor: '#f0f7f7',
    color: '#4db6ac',
  },
  {
    id: 2,
    title: 'English lecture',
    description: 'Language lessons with the most popular teachers',
    category: 'Languages',
    startDate: 'May 6',
    rating: 5.0,
    ratingCount: '39,008',
    status: 'Active',
    bgColor: '#f3eefc',
    color: '#9575cd',
  },
  {
    id: 3,
    title: 'Business lecture',
    description: 'Lectures on how to build your business safely without fear of new projects',
    category: 'Finance',
    startDate: 'May 8',
    rating: 4.0,
    ratingCount: '33,098',
    status: 'Upcoming',
    bgColor: '#fff8e1',
    color: '#ffb74d',
  },
  {
    id: 4,
    title: 'Introduction to Python',
    description: 'Learn the fundamentals of Python programming from scratch.',
    category: 'Development',
    startDate: 'April 20',
    rating: 4.8,
    ratingCount: '51,234',
    status: 'Completed',
    bgColor: '#eef2ff',
    color: '#3B82F6',
  }
];

const scheduleData = [
  { day: '05', title: 'UX/UI workshop', time: '18:00 - 19:30', chapters: '08 of 20 chapters', color: '#9575cd' },
  { day: '06', title: 'English', time: '11:00 - 12:30', chapters: '16 of 20 chapters', color: '#4db6ac' },
  { day: '07', title: 'Product Design', time: '14:00 - 15:30', chapters: '06 of 15 chapters', color: '#ffb74d' },
];

const hoursSpendData = [
  { day: 'S', hours: 3 },
  { day: 'M', hours: 5 },
  { day: 'T', hours: 4 },
  { day: 'W', hours: 7.5 },
  { day: 'T', hours: 5 },
  { day: 'F', hours: 3 },
  { day: 'S', hours: 2 },
];


// --- SVG ICONS ---
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;


// --- STYLES ---
const GlobalStyles = () => (
    <style>{`
        :root {
            --bg-color: #f4f7fa;
            --card-bg: #FFFFFF;
            --text-dark: #1e293b;
            --text-secondary: #64748b;
            --text-light: #94a3b8;
            --border-color: #e2e8f0;
            --accent-purple: #818cf8;
        }
        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--bg-color);
            margin: 0;
            color: var(--text-dark);
        }
        .courses-dashboard {
            max-width: 1400px;
            margin: 2rem auto;
            padding: 2rem;
            background-color: var(--card-bg);
            border-radius: 24px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
         @media (min-width: 1024px) {
            .courses-dashboard {
                grid-template-columns: 2fr 1fr;
            }
        }

        /* Header */
        .header {
            grid-column: 1 / -1;
            padding-bottom: 1rem;
        }
        .header h1 {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 500;
        }
        .header h1 span {
            font-weight: 700;
        }

        /* Main Content */
        .courses-section {
            padding-right: 2rem;
        }
        .courses-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        .courses-header h2 {
            margin: 0;
            font-size: 2rem;
        }
        .courses-header a {
            text-decoration: none;
            color: var(--text-secondary);
            font-weight: 500;
        }
        .course-tabs {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        .course-tabs button {
            background: none;
            border: none;
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-light);
            padding-bottom: 0.5rem;
            cursor: pointer;
            position: relative;
        }
        .course-tabs button.active {
            color: var(--text-dark);
        }
        .course-tabs button.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: var(--text-dark);
            border-radius: 2px;
        }

        .course-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        .course-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.5rem;
            display: flex;
            gap: 1.5rem;
            align-items: center;
        }
        .course-card-bg {
            width: 100px;
            height: 100px;
            border-radius: 12px;
            flex-shrink: 0;
            /* In a real app, you'd use an SVG or image here */
            background-size: cover;
        }
        .course-info h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.2rem;
        }
        .course-info p {
            margin: 0 0 1rem 0;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        .course-info .tag {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: 500;
            color: var(--text-dark);
            border: 1px solid var(--border-color);
        }
        .course-meta {
            margin-left: auto;
            text-align: right;
        }
        .course-meta .start-date {
            font-weight: 600;
            margin-bottom: 1.5rem;
        }
        .course-meta .rating {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 0.5rem;
        }
        .course-meta .rating-text {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* Sidebar */
        .sidebar {
            padding-left: 2rem;
            border-left: 1px solid var(--border-color);
        }
        .widget { margin-bottom: 2rem; }
        .widget-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        .widget-title {
            font-size: 1.25rem;
            margin: 0;
        }
        .widget-header a {
             text-decoration: none;
            color: var(--text-secondary);
            font-weight: 500;
        }

        /* Calendar */
        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
         .calendar-header .month { font-weight: 600; }
        .calendar-nav button { background: none; border: none; cursor: pointer; color: var(--text-secondary); }
        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 0.5rem;
            text-align: center;
        }
        .calendar-grid .day-name { font-size: 0.8rem; color: var(--text-light); font-weight: 600; padding: 0.5rem 0; }
        .calendar-grid .day { padding: 0.5rem; font-weight: 500; cursor: pointer; border-radius: 50%; }
        .calendar-grid .day.today { background-color: var(--accent-purple); color: white; }

        /* Schedule */
        .schedule-list { display: flex; flex-direction: column; gap: 1rem; }
        .schedule-item {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .schedule-day {
            font-size: 1.5rem;
            font-weight: 700;
            width: 40px;
            text-align: center;
        }
        .schedule-details {
            border-left: 3px solid;
            padding-left: 1rem;
        }
        .schedule-details h4 { margin: 0; font-size: 1rem; }
        .schedule-details p { margin: 0.25rem 0 0 0; color: var(--text-secondary); font-size: 0.8rem; }
        
        /* Hours Spend Chart */
        .hours-chart {
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            height: 120px;
        }
        .hour-bar-wrapper { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .hour-bar { width: 12px; background-color: #eef2ff; border-radius: 6px; }
        .hour-bar-inner { width: 100%; background-color: var(--accent-purple); border-radius: 6px; }
    `}</style>
);


// --- Main Component ---
export default function CoursesDashboard() {
    const [activeTab, setActiveTab] = useState('Active');
    
    const filteredCourses = coursesData.filter(c => activeTab === 'All' || c.status === activeTab);

    return (
        <>
            <GlobalStyles />
            <div className="courses-dashboard">
                <header className="header">
                    <h1>Hi, <span>{userData.name}</span> 👋</h1>
                </header>

                <main className="courses-section">
                    <div className="courses-header">
                        <h2>My Courses</h2>
                        <a href="#">See all &rarr;</a>
                    </div>
                    <div className="course-tabs">
                        {['All', 'Active', 'Upcoming', 'Completed'].map(tab => (
                            <button
                                key={tab}
                                className={activeTab === tab ? 'active' : ''}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="course-list">
                        {filteredCourses.map(course => (
                            <div key={course.id} className="course-card">
                                <div className="course-card-bg" style={{ backgroundColor: course.bgColor }}></div>
                                <div className="course-info">
                                    <h3>{course.title}</h3>
                                    <p>{course.description}</p>
                                    <span className="tag" style={{backgroundColor: course.bgColor, color: course.color}}>{course.category}</span>
                                </div>
                                <div className="course-meta">
                                    <div className="start-date">Start {course.startDate}</div>
                                    <div className="rating">
                                        <StarIcon />
                                        <span className="rating-text">{course.rating} ({course.ratingCount} rating)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                <aside className="sidebar">
                    <div className="widget">
                        <div className="calendar-header">
                            <h3 className="widget-title">May 2021</h3>
                            <div className="calendar-nav">
                                <button><ChevronLeftIcon /></button>
                                <button><ChevronRightIcon /></button>
                            </div>
                        </div>
                        <div className="calendar-grid">
                            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => <div key={d} className="day-name">{d}</div>)}
                            {[...Array(31)].map((_, i) => <div key={i} className={`day ${i + 1 === 4 ? 'today' : ''}`}>{i + 1}</div>)}
                        </div>
                    </div>
                    <div className="widget">
                        <div className="widget-header">
                            <h3 className="widget-title">Schedule</h3>
                            <a href="#">See all &rarr;</a>
                        </div>
                        <div className="schedule-list">
                            {scheduleData.map(item => (
                                <div key={item.day} className="schedule-item">
                                    <div className="schedule-day">{item.day}</div>
                                    <div className="schedule-details" style={{ borderColor: item.color }}>
                                        <h4>{item.title}</h4>
                                        <p>{item.chapters} &bull; {item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="widget">
                        <div className="widget-header">
                            <h3 className="widget-title">Hours spend</h3>
                            <span>22 h 40 min</span>
                        </div>
                        <div className="hours-chart">
                            {hoursSpendData.map(d => (
                                <div key={d.day} className="hour-bar-wrapper">
                                    <div className="hour-bar" style={{ height: `${d.hours * 10}px` }}>
                                        <div className="hour-bar-inner" style={{ height: '100%' }}></div>
                                    </div>
                                    <span>{d.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}

