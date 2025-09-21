import React, { useState } from 'react';
import RightSidebar from './RightSidebar';
// Helper component for Icons. In a real app, you would use a library like lucide-react.
import Icon from './icons';
import Header from './Header';
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

