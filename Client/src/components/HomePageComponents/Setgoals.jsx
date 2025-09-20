import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge, CircularProgress } from '@mui/material';
import "../../style/components/HomeComponent/Setgoals.scss";

const { DateCalendar, LocalizationProvider, AdapterDateFns } = window['@mui/x-date-pickers'] || {};


// --- Static Data & Config ---
const GEMINI_API_KEY = 'AIzaSyDGE57iZlzm-eKaN7iSKMt_68nRmSZUJD8'; 

const profileData = {
    name: 'Janhavi Chauhan',
    role: 'Student',
    achievements: 23,
    courses: 38, 
    avatarUrl: 'https://placehold.co/100x100/6366f1/ffffff?text=AW'
};

const notificationsData = [
    { id: 1, senderInitial: 'C', message: 'You have 1 new class on 28 Feb', time: '12 Minutes ago', color: '#4F46E5' },
    { id: 2, senderInitial: 'M', message: 'Miguel send you message', time: '1 hour ago', color: '#10B981' },
    { id: 3, senderInitial: 'N', message: 'You have taken AI class', time: '1 Day ago', color: '#F59E0B' },
];

const eventDays = [8, 11, 23, 28];

// --- SVG ICONS ---
const Icon = ({ name, className }) => {
    const icons = {
        dashboard: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
        search: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
        achievement: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />,
        course: <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
        adobe: <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
        piano: <path d="M9 19V6l7-3v13l-7 3zM9 19a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2a2 2 0 012 2v7zm0 0h2v-7H9v7zm10-5h-2V6h2v8z" />,
        video: <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />,
        chemistry: <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.022.547m14.454-1.022a2 2 0 00.547 1.806l-.477 2.387a6 6 0 01-.517 3.86l-.158.318a6 6 0 01-.517 3.86l-2.387.477a2 2 0 01-1.806-.547a2 2 0 01-.547-1.806l.477-2.387a6 6 0 01.517-3.86l.158-.318a6 6 0 01.517-3.86l2.387-.477a2 2 0 011.022.547M12 6V3m0 3h3m-3 0H9" />,
        math: <path d="M11 4a2 2 0 114 0v1a1 1 0 01-1 1H9a1 1 0 01-1-1V5a2 2 0 114 0v0zM7 10h10M7 13h10M7 16h10" />,
        mentor: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z" />,
        chatbot: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
        send: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    };
    return <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">{icons[name]}</svg>;
};

// --- Animation Variants ---
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// --- Main App Component ---
export default function GoalDashboard() {
    const [appState, setAppState] = useState('goal_setting'); 
    const [userInterests, setUserInterests] = useState('');
    const [goals, setGoals] = useState([]);
    const [suggestions, setSuggestions] = useState('');
    const [error, setError] = useState('');
    
    // Chatbot state
    const [chatHistory, setChatHistory] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const [isChatbotLoading, setIsChatbotLoading] = useState(false);

    useEffect(() => {
        if(appState === 'dashboard') {
            setChatHistory([{ sender: 'ai', text: `Hello ${profileData.name}! I'm your AI Mentor. I see your goals are set. How can I help you get started?` }]);
        }
    }, [appState]);

    const generateGoalsAndSuggestions = useCallback(async () => {
        // ... (this function is unchanged)
        if (!userInterests.trim()) { setError('Please enter your interests.'); return; }
        if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') { setError('API Key is not configured. Please add your Gemini API key in the code.'); return; }
        setAppState('loading');
        setError('');
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
        try {
            const goalPrompt = `Based on a student's interest in "${userInterests}", generate exactly 5 learning goals. For each goal, provide a 'title', a starting 'progress' percentage (between 20 and 50), and one of these icon names: 'adobe', 'piano', 'video', 'chemistry', 'math'.`;
            const goalPayload = { contents: [{ parts: [{ text: goalPrompt }] }], generationConfig: { responseMimeType: "application/json", responseSchema: { type: "ARRAY", items: { type: "OBJECT", properties: { id: { type: "NUMBER" }, title: { type: "STRING" }, progress: { type: "NUMBER" }, icon: { type: "STRING" } }, required: ["id", "title", "progress", "icon"] } } } };
            const goalResponse = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(goalPayload) });
            if (!goalResponse.ok) throw new Error(`API Error: ${goalResponse.statusText}`);
            const goalResult = await goalResponse.json();
            const generatedGoals = JSON.parse(goalResult.candidates[0].content.parts[0].text);
            setGoals(generatedGoals);
            const suggestionPrompt = `A student has these AI-generated learning goals: ${generatedGoals.map(g => `"${g.title}"`).join(', ')}. Write a short, encouraging paragraph of 2-3 sentences as an "AI Mentor", providing actionable suggestions on how to start working on these goals.`;
            const suggestionPayload = { contents: [{ parts: [{ text: suggestionPrompt }] }] };
            const suggestionResponse = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(suggestionPayload) });
            if (!suggestionResponse.ok) throw new Error(`API Error: ${suggestionResponse.statusText}`);
            const suggestionResult = await suggestionResponse.json();
            setSuggestions(suggestionResult.candidates[0].content.parts[0].text);
            setAppState('dashboard');
        } catch (err) {
            console.error(err);
            setError(`Failed to generate goals. ${err.message}. Please try again.`);
            setAppState('goal_setting');
        }
    }, [userInterests]);

    const handleSendMessage = useCallback(async () => {
        if (!chatInput.trim()) return;

        const newUserMessage = { sender: 'user', text: chatInput };
        const updatedChatHistory = [...chatHistory, newUserMessage];
        setChatHistory(updatedChatHistory);
        setChatInput('');
        setIsChatbotLoading(true);

        try {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
            const promptContext = updatedChatHistory.map(msg => `${msg.sender}: ${msg.text}`).join('\n');
            const prompt = `You are a friendly and helpful AI study mentor for a student named ${profileData.name}. Their current goals are: ${goals.map(g => g.title).join(', ')}. Continue the following conversation:\n\n${promptContext}\nai:`;
            
            const payload = { contents: [{ parts: [{ text: prompt }] }] };
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
            const result = await response.json();
            const aiResponse = result.candidates[0].content.parts[0].text;

            setChatHistory(prev => [...prev, { sender: 'ai', text: aiResponse }]);
        } catch (err) {
            console.error(err);
            setChatHistory(prev => [...prev, { sender: 'ai', text: `Sorry, I'm having trouble connecting. Please check the API key.` }]);
        } finally {
            setIsChatbotLoading(false);
        }
    }, [chatInput, chatHistory, goals]);

    // Render different views based on app state
    return (
        <>
            <script src="https://unpkg.com/@mui/x-date-pickers/dist/umd/index.js" async></script>
            <AnimatePresence mode="wait">
                {appState === 'goal_setting' && (
                    <GoalSetupScreen
                        userInterests={userInterests}
                        setUserInterests={setUserInterests}
                        onGenerate={generateGoalsAndSuggestions}
                        error={error}
                        isLoading={false}
                    />
                )}
                {appState === 'loading' && (
                     <GoalSetupScreen userInterests={userInterests} setUserInterests={setUserInterests} onGenerate={() => {}} error="" isLoading={true} />
                )}
                {appState === 'dashboard' && (
                    <Dashboard
                        goals={goals}
                        suggestions={suggestions}
                        chatHistory={chatHistory}
                        chatInput={chatInput}
                        setChatInput={setChatInput}
                        onSendMessage={handleSendMessage}
                        isChatbotLoading={isChatbotLoading}
                    />
                )}
            </AnimatePresence>
        </>
    );
}


const GoalSetupScreen = ({ userInterests, setUserInterests, onGenerate, error, isLoading }) => (
    <motion.div className="goal-setup-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
        <div className="goal-setup-box">
            <motion.h1 variants={fadeInUp}>Welcome to Your AI-Powered Dashboard</motion.h1>
            <motion.p variants={fadeInUp} transition={{ delay: 0.1 }}>Tell us what you're interested in learning, and our AI will create a personalized goal plan for you.</motion.p>
            <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
                <input type="text" className="interest-input" value={userInterests} onChange={(e) => setUserInterests(e.target.value)} placeholder="e.g., Graphic Design, Music Theory, Rocket Science" disabled={isLoading} />
                <button className="generate-btn" onClick={onGenerate} disabled={isLoading || !userInterests.trim()}>
                    {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Generate My Goals'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </motion.div>
        </div>
    </motion.div>
);

const Dashboard = ({ goals, suggestions, chatHistory, chatInput, setChatInput, onSendMessage, isChatbotLoading }) => {
    const { selectedDate, setSelectedDate, isDateHighlighted } = useCalendar(eventDays);

    const averageProgress = useMemo(() => {
        if (!goals || goals.length === 0) return 0;
        const total = goals.reduce((acc, goal) => acc + goal.progress, 0);
        return Math.round(total / goals.length);
    }, [goals]);

    const productivityData = useMemo(() => {
        const baseData = [40, 65, 80, 95, 50, 70, 30];
        const multiplier = averageProgress / 50;
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => ({ day, progress: Math.min(100, Math.round(baseData[i] * multiplier)) }));
    }, [averageProgress]);

    return (
        <motion.div className="dashboard-container" initial="hidden" animate="visible" variants={staggerContainer}>
            <main className="main-content">
                <motion.header className="main-header" variants={fadeInUp}>
                    <h1>Dashboard</h1>
                    <div className="search-bar">
                        <Icon name="search" className="icon" />
                        <input type="text" placeholder="Search anything..." />
                    </div>
                </motion.header>
                <motion.div className="content-grid" variants={staggerContainer}>
                    <ProductivityCard data={productivityData} />
                    <ProgressCard progress={averageProgress} />
                    <GoalsCard data={goals} />
                    <ProfileCard />
                    <ChatbotCard 
                        history={chatHistory} 
                        input={chatInput} 
                        setInput={setChatInput} 
                        onSend={onSendMessage} 
                        isLoading={isChatbotLoading} 
                    />
                    <AiMentorCard content={suggestions} />
                    <NotificationsCard />
                    <ScheduleCard selectedDate={selectedDate} setSelectedDate={setSelectedDate} isDateHighlighted={isDateHighlighted} />
                </motion.div>
            </main>
        </motion.div>
    );
};

// --- Card Components ---
const ProductivityCard = ({ data }) => (
    <motion.section className="card productivity-card" variants={fadeInUp}>
        <h2 className="card-title">Productivity</h2>
        <div className="chart-container">
            {data.map((d, i) => (
                <motion.div key={d.day} className="bar-wrapper" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                    <div className="bar" style={{ height: `${d.progress * 1.5}px` }}><motion.div className="bar-inner" initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ duration: 1, delay: 0.3 + (i * 0.1) }} /></div>
                    <span className="bar-day">{d.day}</span>
                </motion.div>
            ))}
        </div>
    </motion.section>
);

const ProgressCard = ({ progress }) => {
    const COLORS = { main: '#4F46E5', light: '#E0E7FF' };
    return (
        <motion.section className="card" variants={fadeInUp}>
            <h2 className="card-title">Progress</h2>
            <div className="progress-circle-container">
                <div className="progress-circle">
                    <svg width="150" height="150" viewBox="0 0 150 150">
                        <circle cx="75" cy="75" r="65" fill="none" stroke={COLORS.light} strokeWidth="15" />
                        <motion.circle cx="75" cy="75" r="65" fill="none" stroke={COLORS.main} strokeWidth="15" strokeDasharray="408" initial={{ strokeDashoffset: 408 }} animate={{ strokeDashoffset: 408 - (408 * progress) / 100 }} transition={{ duration: 1.5 }} strokeLinecap="round" />
                    </svg>
                    <div className="percent">{progress}%</div>
                </div>
                <div className="progress-legend">
                    <div className="legend-item"><div className="legend-dot" style={{ backgroundColor: COLORS.main }}></div> AI Goals</div>
                    <div className="legend-item"><div className="legend-dot" style={{ backgroundColor: COLORS.light }}></div> Remaining</div>
                </div>
            </div>
        </motion.section>
    );
};

const GoalsCard = ({ data }) => (
    <motion.section className="card goals-card" variants={fadeInUp}>
        <h2 className="card-title">Your AI-Generated Goals</h2>
        <div className="goal-list">
            {data.map((goal, i) => (
                <motion.div key={goal.id} className="goal-item" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}>
                    <div className="goal-icon"><Icon name={goal.icon} className="icon" /></div>
                    <div className="goal-details">
                        <p className="goal-title">{goal.title}</p>
                        <div className="goal-progress-bar"><motion.div className="goal-progress-inner" initial={{ width: 0 }} animate={{ width: `${goal.progress}%` }} transition={{ duration: 1, delay: 0.5 + (i * 0.1) }} /></div>
                    </div>
                    <span className="goal-percent">{goal.progress}%</span>
                </motion.div>
            ))}
        </div>
    </motion.section>
);

const ChatbotCard = ({ history, input, setInput, onSend, isLoading }) => {
    const chatEndRef = useRef(null);
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);
    
    return (
        <motion.section className="card chatbot-card" variants={fadeInUp}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <Icon name="chatbot" className="icon" style={{color: 'var(--primary-blue)', width: '24px', height: '24px'}} />
                <h2 className="card-title" style={{marginBottom: 0}}>AI Chatbot</h2>
            </div>
            <div className="chat-history">
                {history.map((msg, index) => (
                    <motion.div key={index} className={`chat-message ${msg.sender}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                        {msg.text}
                    </motion.div>
                ))}
                {isLoading && <div className="typing-indicator">AI is typing...</div>}
                <div ref={chatEndRef} />
            </div>
            <div className="chat-input-area">
                <input 
                    type="text" 
                    className="chat-input" 
                    placeholder="Ask about your goals..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && onSend()}
                    disabled={isLoading}
                />
                <button className="send-btn" onClick={onSend} disabled={isLoading || !input.trim()}>
                    <Icon name="send" className="icon" />
                </button>
            </div>
        </motion.section>
    );
};

const AiMentorCard = ({ content }) => (
    <motion.section className="card" variants={fadeInUp}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Icon name="mentor" className="icon" style={{color: 'var(--primary-blue)', width: '24px', height: '24px'}} />
            <h2 className="card-title" style={{marginBottom: 0}}>AI Mentor</h2>
        </div>
        <p>{content}</p>
    </motion.section>
);

const NotificationsCard = () => (
    <motion.section className="card" variants={fadeInUp}>
        <h2 className="card-title">Notifications</h2>
        <div className="notification-list">
            {notificationsData.map((n, i) => (
                <motion.div key={n.id} className="notification-item" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}>
                    <div className="notification-initial" style={{ backgroundColor: n.color }}>{n.senderInitial}</div>
                    <div className="notification-content">
                        <p className="message">{n.message}</p>
                        <p className="time">{n.time}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.section>
);

const ScheduleCard = ({ selectedDate, setSelectedDate, isDateHighlighted }) => {
    if (!LocalizationProvider) { return <motion.section className="card" variants={fadeInUp}><h2 className="card-title">Schedule</h2><p>Loading Calendar...</p></motion.section>; }
    return(
        <motion.section className="card" variants={fadeInUp}>
            <h2 className="card-title">Schedule</h2>
            <div className="mui-calendar-container">
                <LocalizationProvider dateAdapter={AdapterDateFns}><DateCalendar value={selectedDate} onChange={(newDate) => setSelectedDate(newDate)} slots={{ day: ServerDay }} slotProps={{ day: { isDateHighlighted } }} /></LocalizationProvider>
            </div>
        </motion.section>
    );
};

const ProfileCard = () => (
    <motion.section className="card" variants={fadeInUp}>
        <div className="profile-content">
            <img src={profileData.avatarUrl} alt={profileData.name} className="profile-avatar" />
            <h3 className="profile-name">{profileData.name}</h3>
            <p className="profile-role">{profileData.role}</p>
            <div className="profile-stats">
                <div className="stat-item"><Icon name="achievement" className="icon" /><div className="stat-value">{profileData.achievements}</div><div className="stat-label">Achievement</div></div>
                <div className="stat-item"><Icon name="course" className="icon" /><div className="stat-value">{profileData.courses}</div><div className="stat-label">Courses</div></div>
            </div>
        </div>
    </motion.section>
);

// --- Calendar Logic and Custom Day Renderer ---
const useCalendar = (events) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return { selectedDate, setSelectedDate, isDateHighlighted: (date) => events.includes(date.getDate()) };
};

const ServerDay = (props) => {
    const { day, outsideCurrentMonth, isDateHighlighted, ...other } = props;
    return ( <Badge key={day.toString()} overlap="circular" badgeContent={!outsideCurrentMonth && isDateHighlighted(day) ? ' ' : undefined}><div {...other} style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}/></Badge> );
};

