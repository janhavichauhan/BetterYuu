import React from 'react';
import '../../style/components/HomeComponent/GroupChat.scss';
// Main App Component
const App = () => {
  // Hardcoded data based on the provided UI image
  const onlineUsers = [
    { name: 'User 1', avatar: 'https://placehold.co/40x40/7B61FF/FFFFFF?text=A' },
    { name: 'User 2', avatar: 'https://placehold.co/40x40/FFC700/FFFFFF?text=B' },
    { name: 'User 3', avatar: 'https://placehold.co/40x40/FF6B6B/FFFFFF?text=C' },
    { name: 'User 4', avatar: 'https://placehold.co/40x40/4ECDC4/FFFFFF?text=D' },
    { name: 'User 5', avatar: 'https://placehold.co/40x40/343A40/FFFFFF?text=E' },
    { name: 'User 6', avatar: 'https://placehold.co/40x40/007BFF/FFFFFF?text=F' },
  ];

  const chatThreads = [
    { id: 1, name: 'Redux Team', message: 'typing...', time: '4:42 PM', avatar: 'https://placehold.co/48x48/FF6B6B/FFFFFF?text=R', unread: 0, typing: true },
    { id: 2, name: 'Piano Lessons', message: 'I don\'t like this tune.', time: '4:42 PM', avatar: 'https://placehold.co/48x48/4ECDC4/FFFFFF?text=F', unread: 0 },
    { id: 3, name: 'JavaScript learners', message: 'If so, we can learn this tomorrow', time: '1:29 AM', avatar: 'https://placehold.co/48x48/7B61FF/FFFFFF?text=P', active: true, unread: 0 },
    { id: 4, name: 'React team', message: 'When will we start the project?', time: '4:42 AM', avatar: 'https://placehold.co/48x48/FFC700/FFFFFF?text=D', unread: 1 },
    { id: 5, name: 'Web team', message: 'I finished it yesterday', time: '9:27 AM', avatar: 'https://placehold.co/48x48/343A40/FFFFFF?text=K', unread: 0 },
    { id: 6, name: 'Frontend developers', message: 'I threw off the technical task', time: '4:42 PM', avatar: 'https://placehold.co/48x48/007BFF/FFFFFF?text=D', unread: 0 },
  ];

  const messages = [
    { from: 'Anonymous1', time: '9:34 AM', text: 'Have a great working week!', avatar: 'https://placehold.co/40x40/7B61FF/FFFFFF?text=E' },
    { from: 'Anonymous2', time: '9:34 AM', text: 'This new landing page. What do you think?', avatar: 'https://placehold.co/40x40/FFC700/FFFFFF?text=B', hasImage: true },
    { from: 'Anonymous3', time: '1:48 PM', text: 'Wow it looks amazing, what kind of font did you use?', avatar: 'https://placehold.co/40x40/FF6B6B/FFFFFF?text=A' },
    { from: 'You', time: '1:48 PM', text: 'Really great job, if I\'m not mistaken, this is Inter', avatar: 'https://placehold.co/40x40/343A40/FFFFFF?text=Y', self: true },
  ];
    
  const plans = [
      {id: 1, icon: 'package', title: 'Package', description: 'Go to the post office', checked: true },
      {id: 2, icon: 'headache', title: 'Headache', description: 'Finish the project K', checked: false},
      {id: 3, icon: 'cat', title: 'Hungry cat', description: 'Buy cat food', checked: false}
  ];



  // Helper component for icons
  const Icon = ({ type, size = 20 }) => {
    const icons = {
      edit: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>,
      search: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
      phone: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
      bell: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
      attach: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>,
      smile: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>,
      send: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
      chevronLeft: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>,
      chevronRight: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
      package: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
      check: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
      headache: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.2 20.9a1 1 0 0 0 1.6 0l5.4-7.4c.1-.2.2-.5.2-.8v-5.2a1 1 0 0 0-1-1H5.6a1 1 0 0 0-1 1v5.2c0 .3.1.6.2.8l5.4 7.4z"/><path d="M12.2 6.5a1 1 0 0 0-1.6 0L5.2 14c-.2.2-.3.5-.3.8v.7c0 .6.4 1 1 1h12.2c.6 0 1-.4 1-1v-.7c0-.3-.1-.6-.3-.8l-5.4-7.5z"/><path d="m17.5 7.5-11 11"/><path d="m6.5 7.5 11 11"/></svg>,
      cat: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 20.7c-2.4 1.3-5.2 1.3-7.6 0-3.6-2-6.2-5.6-6.2-9.7V9.2c0-3.3 2.1-6.3 5.1-7.4 2.5-.9 5.3-.9 7.8 0 3 1.1 5.1 4.1 5.1 7.4v1.8c0 4.1-2.6 7.7-6.2 9.7z"/><path d="M9 12a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1z"/><path d="M10 17c.5-1 1.8-1.5 3-1.5s2.5.5 3 1.5"/><path d="M9.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/><path d="M15.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/></svg>,
      x: <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
    };
    return icons[type] || null;
  };

  const MessageList = () => (
    <section className="message-list">
      <div className="message-list-header">
        <h2>Messages</h2>
        <div className="header-icons">
          <Icon type="edit" />
        </div>
      </div>
      <div className="search-bar">
        <Icon type="search" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="online-now">
        <div className="online-now-header">
          <h3>Online now</h3>
          <a href="#">All</a>
        </div>
        <div className="avatars">
          {onlineUsers.map((user, index) => <img key={index} src={user.avatar} alt={user.name} />)}
        </div>
      </div>
      <div className="chat-threads">
        <h3>Work Project</h3>
        {chatThreads.map(thread => (
          <div key={thread.id} className={`thread-item ${thread.active ? 'active' : ''}`}>
            <div className="avatar">
                {thread.name === 'Purrweb team' ? 
                 <div className="placeholder">||</div> :
                 <img src={thread.avatar} alt={thread.name} />
                }
            </div>
            <div className="thread-content">
              <div className="name">{thread.name}</div>
              <div className={`message ${thread.typing ? 'typing' : ''}`}>{thread.message}</div>
            </div>
            <div className="thread-info">
              <div className="time">{thread.time}</div>
              {thread.unread > 0 && <div className="unread-dot"></div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
  const ChatWindow = () => (
    <main className="chat-window">
        <header className="chat-header">
            <div className="chat-header-info">
                <div className="avatar">||</div>
            </div>
            <div>
                <h3>Javascript learners</h3>
                <p>4 members, 3 online</p>
            </div>
            <div className="chat-header-actions">
                <Icon type="search" />
                <Icon type="phone" />
                <div className="dark-mode-toggle">
                    <span>Dark</span>
                    <label className="toggle-switch">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                    </label>
                </div>
                <Icon type="bell" />
                <div className="user-profile">
                    <img src="https://placehold.co/40x40/343A40/FFFFFF?text=Y" alt="User Profile"/>
                </div>
            </div>
        </header>
        <div className="chat-body">
            <div className="date-divider">Today</div>
            {messages.map((msg, index) => (
                <div key={index} className={`message-item ${msg.self ? 'self' : ''}`}>
                    <img src={msg.avatar} alt={msg.from} className="avatar"/>
                    <div className="message-content">
                        <div className="message-header">
                            <span className="name">{msg.from}</span>
                            <span className="time">{msg.time}</span>
                        </div>
                        <div className="message-bubble">
                            {msg.text}
                            {msg.hasImage && <img src="data:image/jpeg;base64,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" alt="Landing page preview"/>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <footer className="chat-input">
            <input type="text" placeholder="Write a message..."/>
            <div className="input-actions">
                <Icon type="attach" />
                <Icon type="smile" />
                <Icon type="send" />
            </div>
        </footer>
    </main>
  );

  const Timeline = () => {
    const calendarDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    // Simplified calendar grid for September 2022
    const daysInMonth = Array.from({length: 30}, (_, i) => i + 1);
    const startDay = 4; // Thursday
    const blanks = Array(startDay).fill(null);
    const calendarGrid = [...blanks, ...daysInMonth];

    return (
        <aside className="timeline">
            <div className="timeline-header">
                <h2>Timeline</h2>
                <button className="add-event-btn">Add event +</button>
            </div>
            <div className="calendar">
                <div className="calendar-header">
                    <button><Icon type="chevronLeft"/></button>
                    <h3>September 2022</h3>
                    <button><Icon type="chevronRight"/></button>
                </div>
                <div className="calendar-grid">
                    {calendarDays.map(day => <span key={day} className="day-name">{day}</span>)}
                    {calendarGrid.map((day, index) => (
                        <span key={index} className={`day ${day === 23 ? 'today' : ''} ${!day ? 'other-month' : ''}`}>
                            {day}
                        </span>
                    ))}
                </div>
            </div>
            <div className="plans-for-day">
                <div className="plans-header">
                    <h3>Plans for the day</h3>
                    <span>Tomorrow</span>
                </div>
                {plans.map(plan => (
                    <div key={plan.id} className={`plan-item ${plan.checked ? 'checked' : ''}`}>
                        <div className={`plan-icon ${plan.icon}`}>
                           {plan.checked ? <Icon type="check"/> : <Icon type={plan.icon}/> }
                        </div>
                        <div className="plan-details">
                            <h4>{plan.title}</h4>
                            <p>{plan.description}</p>
                        </div>
                        <div className="plan-action">
                            {!plan.checked && <Icon type="x" size={16}/>}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
  }


  return (
    <>

      <div className="team-chat-app">
        <MessageList />
        <ChatWindow />
        <Timeline />
      </div>
    </>
  );
};

export default App;

