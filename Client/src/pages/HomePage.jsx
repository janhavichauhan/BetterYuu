import React, { useState } from 'react';
import Navbar from "../components/HomePageComponents/Navbar";
import { Sidebar } from "../components/HomePageComponents/Sidebar";
import RightSidebar from "../components/HomePageComponents/RightSidebar";
import Header from "../components/HomePageComponents/Header";
import styles from "../style/components/HomeComponent/Sidebar.module.scss";

// Import all dynamic components
import {
    Dashboard,
    AIAssessment,
    SetGoals,
    Courses,
    Groups,
    Streak,
    DailyProgress,
    AddBlog,
    YourBlogs,
    ViewBlogs,
    AITutor,
    Profile,
    Settings,
    Documentation,
    ReferFriend,
    Support
} from "../components/HomePageComponents/DynamicComponents";

// Import the existing components from Sidebar.jsx
import { 
    TodayTask, 
    TasksProgress, 
    TasksProgressGraph, 
    Assignments, 
    WeeklyProgress 
} from "../components/HomePageComponents/Sidebar";

export default function Home() {
    const [activeSection, setActiveSection] = useState('dashboard');
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

    const [activeDay, setActiveDay] = useState(1);

    const handleNavClick = (label) => {
        setNavItems(prevItems => 
            prevItems.map(item => ({ ...item, active: item.label === label }))
        );
    };

    const handleSectionClick = (section) => {
        setActiveSection(section);
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
        if (!scheduleItems.find(item => item.title === 'New Meeting')) {
            setScheduleItems(prev => [...prev, newTask]);
        }
    };

    const handleActiveDay = (dayIndex) => {
        setActiveDay(dayIndex);
    };

    // Component mapping
    const componentMap = {
        'dashboard': Dashboard,
        'ai-assessment': AIAssessment,
        'set-goals': SetGoals,
        'courses': Courses,
        'groups': Groups,
        'streak': Streak,
        'daily-progress': DailyProgress,
        'add-blog': AddBlog,
        'your-blogs': YourBlogs,
        'view-blogs': ViewBlogs,
        'ai-tutor': AITutor,
        'profile': Profile,
        'settings': Settings,
        'documentation': Documentation,
        'refer-friend': ReferFriend,
        'support': Support
    };

    const ActiveComponent = componentMap[activeSection] || Dashboard;

    const renderDashboardContent = () => {
        if (activeSection === 'dashboard') {
            return (
                <>
                    <TodayTask />
                    <TasksProgress tasks={tasks}/>
                    <div className={styles.mainBottomGrid}>
                        <TasksProgressGraph />
                        <div className={styles.mainBottomRight}>
                            <WeeklyProgress />
                            <Assignments assignments={assignments} onToggle={handleToggleAssignment} />
                        </div>
                    </div>
                </>
            );
        }
        return <ActiveComponent />;
    };

    return (
        <div className={styles.dashboardLayout}>
            <Sidebar 
                navItems={navItems} 
                onNavClick={handleNavClick} 
                onSectionClick={handleSectionClick}
            />
            <main className={styles.mainContent}>
                <Header />
                {renderDashboardContent()}
            </main>
            <RightSidebar 
                scheduleItems={scheduleItems} 
                onAddTask={handleAddTask}
                activeDay={activeDay}
                onDayClick={handleActiveDay}
            />
        </div>
    );
}