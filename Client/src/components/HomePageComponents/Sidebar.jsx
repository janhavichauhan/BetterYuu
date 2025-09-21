import React, { useState } from 'react';
import RightSidebar from './RightSidebar';
// Helper component for Icons. In a real app, you would use a library like lucide-react.
import Icon from './icons';
import Header from './Header';
import styles from '../../style/components/HomeComponent/Sidebar.module.scss';
const Sidebar = ({ navItems, onNavClick, onSectionClick }) => {
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
         <aside className={styles.sidebar} style={{ width: isCollapsed ? "80px" : "250px" }}>
      {/* Header with Logo */}
      <div className={styles.sidebar__logo}>
        <i className="fa-solid fa-bolt fa-2x"></i>
        {!isCollapsed && <span className={styles.sidebar__logoText}>Better Youu</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand menu" : "Collapse menu"}
          className={styles.sidebar__toggleBtn}
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
        <div className={styles.sidebar__searchContainer}>
          <div className={styles.sidebar__searchBox}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search"
              className={styles.sidebar__searchInput}
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={styles.sidebar__nav}>
        <ul>
          {/* Dashboard */}
          <li>
            <button 
              className={styles.sidebar__navItem}
              onClick={() => onSectionClick('dashboard')}
            >
              <i className="fa-solid fa-gauge-high"></i>
              {!isCollapsed && <span>Dashboard</span>}
            </button>
          </li>

          {/* Goals Section */}
          <li>
            <button
              className={styles.sidebar__navItem}
              onClick={() => toggleSection("goals")}
            >
              <i className="fa-solid fa-bullseye"></i>
              {!isCollapsed && (
                <>
                  <span className={styles.sidebar__navItemText}>Goals</span>
                  <span className={styles.sidebar__navItemCaret}>
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
              <ul className={styles.sidebar__subNav}>
                <li><button className={styles.sidebar__subNavItem} onClick={() => onSectionClick('ai-assessment')}><i className="fa-solid fa-brain"></i> AI Assessment</button></li>
                <li><button className={styles.sidebar__subNavItem} onClick={() => onSectionClick('set-goals')}><i className="fa-regular fa-pen-to-square"></i> Set Goals</button></li>
              </ul>
            )}
          </li>

          {/* Courses */}
          <li>
            <button 
              className={styles.sidebar__navItem}
              onClick={() => onSectionClick('courses')}
            >
              <i className="fa-solid fa-book"></i>
              {!isCollapsed && <span>Courses</span>}
            </button>
          </li>

          {/* Groups */}
          <li>
            <button 
              className={styles.sidebar__navItem}
              onClick={() => onSectionClick('groups')}
            >
              <i className="fa-solid fa-users"></i>
              {!isCollapsed && <span>Groups</span>}
            </button>
          </li>

          {/* Daily Schedule */}
          <li>
            <button
              className={styles.sidebar__navItem}
              onClick={() => toggleSection("dailySchedule")}
            >
              <i className="fa-regular fa-calendar-days"></i>
              {!isCollapsed && (
                <>
                  <span className={styles.sidebar__navItemText}>Daily Schedule</span>
                  <span className={styles.sidebar__navItemCaret}>
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
              <ul className={styles.sidebar__subNav}>
                <li><button className={styles.sidebar__subNavItem} onClick={() => onSectionClick('streak')}><i className="fa-solid fa-fire"></i> Streak</button></li>
                <li><button className={styles.sidebar__subNavItem} onClick={() => onSectionClick('daily-progress')}><i className="fa-solid fa-chart-simple"></i> Daily Progress</button></li>
              </ul>
            )}
          </li>

          {/* Blogs */}
          <li>
            <button
              className={styles.sidebar__navItem}
              onClick={() => toggleSection("blogs")}
            >
              <i className="fa-regular fa-newspaper"></i>
              {!isCollapsed && (
                <>
                  <span className={styles.sidebar__navItemText}>Blogs</span>
                  <span className={styles.sidebar__navItemCaret}>
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
              <ul className={styles.sidebar__subNav}>
                <li><button className={styles.sidebar__subNavItem} onClick={() => onSectionClick('add-blog')}><i className="fa-regular fa-pen-to-square"></i> Add Blogs</button></li>
                <li><button className={styles.sidebar__subNavItem} onClick={() => onSectionClick('your-blogs')}><i className="fa-regular fa-user"></i> Your Blogs</button></li>
                <li><button className={styles.sidebar__subNavItem} onClick={() => onSectionClick('view-blogs')}><i className="fa-regular fa-eye"></i> View Blogs</button></li>
              </ul>
            )}
          </li>

          {/* AI Tutor */}
          <li>
            <button 
              className={styles.sidebar__navItem}
              onClick={() => onSectionClick('ai-tutor')}
            >
              <i className="fa-solid fa-robot"></i>
              {!isCollapsed && <span>AI Tutor</span>}
            </button>
          </li>

          {/* Profile Page */}
          <li>
            <button 
              className={styles.sidebar__navItem}
              onClick={() => onSectionClick('profile')}
            >
              <i className="fa-regular fa-user"></i>
              {!isCollapsed && <span>Profile Page</span>}
            </button>
          </li>

          {/* Other Section */}
          <li>
            <button
              className={styles.sidebar__navItem}
              onClick={() => toggleSection("other")}
            >
              <i className="fa-regular fa-square-check"></i>
              {!isCollapsed && (
                <>
                  <span className={styles.sidebar__navItemText}>Other</span>
                  <span className={styles.sidebar__navItemCaret}>
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
              <ul className={styles.sidebar__subNav}>
                <li><button className={styles.sidebar__subNavItem} onClick={() => onSectionClick('documentation')}><i className="fa-regular fa-file-lines"></i> Documentation</button></li>
                <li><button className={styles.sidebar__subNavItem} onClick={() => onSectionClick('refer-friend')}><i className="fa-regular fa-paper-plane"></i> Refer a Friend</button></li>
                <li><button className={styles.sidebar__subNavItem} onClick={() => onSectionClick('support')}><i className="fa-regular fa-circle-question"></i> Support</button></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Bottom Navigation */}
      <div className={styles.sidebar__bottom}>
        <ul>
          <li>
            <button 
              className={styles.sidebar__navItem}
              onClick={() => onSectionClick('settings')}
            >
              <i className="fa-solid fa-gear"></i>
              {!isCollapsed && <span>Settings</span>}
            </button>
          </li>
        </ul>
      </div>

      <div className={styles.premiumCardContainer}>
        <div className={styles.premiumCard}>
          <div className={styles.premiumCard__illustration}>👩‍🎓</div>
            <h3>Premium subscription</h3>
            <p>Buy premium and get access to new courses</p>
            <button>More detailed</button>
          </div>
        </div>
    </aside>
  );
};


const TodayTask = () => (
    <div className={styles.todayTask}>
        <div className={styles.todayTask__content}>
            <h2 className={styles.todayTask__title}>Today Task</h2>
            <p className={styles.todayTask__subtitle}>Check your daily tasks and schedules</p>
            <button className={styles.todayTask__btn}>Today's schedule</button>
        </div>
        <div className={styles.todayTask__image}>
            <img src="https://img.freepik.com/free-vector/colorful-illustration-female-programmer-working_23-2148277397.jpg?semt=ais_incoming&w=740&q=80" alt="Task management illustration" />
        </div>
    </div>
);

const TaskCard = ({ task }) => (
    <div className={styles.taskCard}>
        <div className={styles.taskCard__header}>
            <div>
                <p className={styles.taskCard__date}>{task.date}</p>
                <h3 className={styles.taskCard__title}>{task.title}</h3>
                <p className={styles.taskCard__category}>{task.category}</p>
            </div>
            <button className={styles.taskCard__menuBtn}>
                <Icon name="ellipsis" size={20}/>
            </button>
        </div>
        <div className={styles.taskCard__progress}>
            <p>Progress</p>
            <p>{task.progress}%</p>
        </div>
        <div className={styles.progressBar}>
            <div className={`${styles.progressBar__inner} ${styles[task.color]}`} style={{ width: `${task.progress}%` }}></div>
        </div>
        <div className={styles.taskCard__footer}>
            <div className={styles.taskCard__avatars}>
                {task.avatars.map((avatar, index) => (
                    <img key={index} src={avatar} alt={`User ${index + 1}`} />
                ))}
                 <button className={styles.taskCard__addBtn}>+</button>
            </div>
            <span className={`${styles.taskCard__daysLeft} ${styles[task.daysLeftColor]}`}>{task.daysLeft} days left</span>
        </div>
    </div>
);

const TasksProgress = ({ tasks }) => {
    return (
        <div className={styles.tasksProgressGrid}>
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
        <div className={styles.graphCard}>
            <h3 className={styles.cardTitle}>Tasks Progress</h3>
            <div className={styles.graph}>
                <div className={styles.graph__yAxis}>
                    <span>05</span>
                    <span>04</span>
                    <span>03</span>
                    <span>02</span>
                    <span>01</span>
                    <span>0</span>
                </div>
                <div className={styles.graph__bars}>
                    {data.map((item, index) => (
                        <div key={index} className={styles.graph__barContainer}>
                            <div className={styles.graph__bar} style={{ height: `${(item.value / maxVal) * 100}%` }}></div>
                            <span className={styles.graph__xLabel}>{item.day}</span>
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
        <div className={styles.assignmentsCard}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Assignments ({assignments.length})</h3>
                <span>{completedCount}/{assignments.length} completed</span>
            </div>
            <ul className={styles.assignmentsList}>
                {assignments.map((item, index) => (
                    <li key={index} className={styles.assignmentItem}>
                        <div className={`${styles.assignmentItem__checkbox} ${styles[item.status]}`} onClick={() => onToggle(item.title)}>
                            {item.status === 'completed' && <Icon name="check" size={16} className={styles.textWhite}/>}
                        </div>
                        <div className={styles.assignmentItem__details}>
                            <p>{item.title}</p>
                            <small>{item.date}</small>
                        </div>
                        <div className={styles.assignmentItem__grade}>
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
    <div className={styles.weeklyProgressCard}>
        <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Weekly</h3>
        </div>
        <div className={styles.weeklyProgress__items}>
            <div className={styles.weeklyProgress__item}>
                <div className={styles.weeklyProgress__details}>
                    <p>Time spent</p>
                    <p><strong>18h</strong> <span>120%</span></p>
                </div>
                <div className={styles.progressBarSmall}><div className={`${styles.progressBarSmall__inner} ${styles.bgOrange}`} style={{width: '80%'}}></div></div>
            </div>
            <div className={styles.weeklyProgress__item}>
                <div className={styles.weeklyProgress__details}>
                    <p>Lesson Learnt</p>
                    <p><strong>15h</strong> <span>120%</span></p>
                </div>
                <div className={styles.progressBarSmall}><div className={`${styles.progressBarSmall__inner} ${styles.bgPurple}`} style={{width: '60%'}}></div></div>
            </div>
            <div className={styles.weeklyProgress__item}>
                <div className={styles.weeklyProgress__details}>
                    <p>Exams Passed</p>
                    <p><strong>2h</strong> <span>100%</span></p>
                </div>
                 <div className={styles.progressBarSmall}><div className={`${styles.progressBarSmall__inner} ${styles.bgGreen}`} style={{width: '100%'}}></div></div>
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
            color: 'bgPurple',
            daysLeftColor: 'textPurple'
        },
        {
            date: 'Mar 6, 2024',
            title: 'Mobile App',
            category: 'Shopping',
            progress: 30,
            avatars: ['https://i.pravatar.cc/24?img=3', 'https://i.pravatar.cc/24?img=4'],
            daysLeft: 25,
            color: 'bgBlue',
            daysLeftColor: 'textBlue'
        },
        {
            date: 'Mar 8, 2024',
            title: 'Animation',
            category: 'Designing',
            progress: 75,
            avatars: ['https://i.pravatar.cc/24?img=5', 'https://i.pravatar.cc/24?img=6'],
            daysLeft: 7,
            color: 'bgOrange',
            daysLeftColor: 'textOrange'
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
      <div className={styles.dashboardLayout}>
        <Sidebar navItems={navItems} onNavClick={handleNavClick} />
        <main className={styles.mainContent}>
          <Header />
          <TodayTask />
          <TasksProgress tasks={tasks}/>
          <div className={styles.mainBottomGrid}>
            <TasksProgressGraph />
            <div className={styles.mainBottomRight}>
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

// Export individual components for use in other files
export { Sidebar, TodayTask, TaskCard, TasksProgress, TasksProgressGraph, Assignments, WeeklyProgress };

