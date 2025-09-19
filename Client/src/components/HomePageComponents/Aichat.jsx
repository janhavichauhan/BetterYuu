import React, { useState } from 'react';

// --- SVG ICONS ---
const WriteCopyIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="#EAB308"/></svg>;
const ImageGenIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#3B82F6"/></svg>;
const CreateAvatarIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.33 4 18V20H20V18C20 15.33 14.67 14 12 14Z" fill="#10B981"/></svg>;
const WriteCodeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="#EC4899"/></svg>;
const AttachIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z" fill="#6B7280"/></svg>;
const VoiceIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM10.8 4.9C10.8 4.4 11.35 4 12 4C12.65 4 13.2 4.4 13.2 4.9V11.1C13.2 11.6 12.65 12 12 12C11.35 12 10.8 11.6 10.8 11.1V4.9ZM17.3 11C17.3 14 14.76 16.1 12 16.1C9.24 16.1 6.7 14 6.7 11H5C5 14.41 7.72 17.23 11 17.72V21H13V17.72C16.28 17.23 19 14.41 19 11H17.3Z" fill="#6B7280"/></svg>;
const BrowseIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#6B7280"/></svg>;
const SendIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/></svg>;


// --- FAKE DATA ---
const suggestionChips = [
    { text: 'Write copy', icon: <WriteCopyIcon />, color: '#FFFBEB' },
    { text: 'Image generation', icon: <ImageGenIcon />, color: '#EFF6FF' },
    { text: 'Create avatar', icon: <CreateAvatarIcon />, color: '#F0FDF4' },
    { text: 'Write code', icon: <WriteCodeIcon />, color: '#FFF1F2' },
];

// --- STYLES ---
const GlobalStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        :root {
            --bg-color: #F9FAFB;
            --main-bg: #FFFFFF;
            --primary-blue: #4F46E5;
            --text-dark: #111827;
            --text-secondary: #374151;
            --text-light: #6B7280;
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

        .ai-chat-container {
            width: 100%;
            max-width: 800px;
            background-color: var(--main-bg);
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            padding: 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        
        .welcome-section h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin: 0;
        }

        .welcome-section p {
            font-size: 1.1rem;
            color: var(--text-secondary);
            max-width: 450px;
            margin: 1rem auto 0;
        }

        .suggestion-chips {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin: 2.5rem 0;
            width: 100%;
            max-width: 500px;
        }

        .chip {
            background-color: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 0.75rem;
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .chip:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .chip .plus-icon {
            margin-left: auto;
            color: var(--text-light);
            font-size: 1.25rem;
        }

        .chat-input-area {
            width: 100%;
            margin-top: auto;
        }
        
        .prompt-wrapper {
            position: relative;
        }

        .prompt-textarea {
            width: 100%;
            min-height: 100px;
            border: 1px solid var(--border-color);
            border-radius: 1rem;
            padding: 1rem 4rem 1rem 1rem;
            font-size: 1rem;
            font-family: 'Inter', sans-serif;
            resize: vertical;
            box-sizing: border-box;
            background-color: var(--main-bg);
        }

        .prompt-textarea:focus {
            outline: none;
            border-color: var(--primary-blue);
            box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
        }
        
        .send-button {
            position: absolute;
            right: 0.75rem;
            top: 0.75rem;
            background-color: var(--primary-blue);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .send-button:hover {
            background-color: #4338CA;
        }
        
        .chat-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.75rem;
        }
        
        .action-buttons {
            display: flex;
            gap: 0.5rem;
        }

        .action-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
            background-color: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-secondary);
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .action-btn:hover {
            background-color: #F3F4F6;
        }

        .char-counter {
            font-size: 0.9rem;
            color: var(--text-light);
        }
        
        .footer-note {
            margin-top: 1rem;
            font-size: 0.8rem;
            color: var(--text-light);
        }
    `}</style>
);


// --- Main Component ---
export default function AiChat() {
    const [prompt, setPrompt] = useState('');

    return (
        <>
            <GlobalStyles />
            <div className="ai-chat-container">
                <section className="welcome-section">
                    <h1>Welcome to Script</h1>
                    <p>Get started by Script a task and Chat can do the rest. Not sure where to start?</p>
                </section>

                <div className="suggestion-chips">
                    {suggestionChips.map((chip, index) => (
                        <button key={index} className="chip" style={{ backgroundColor: chip.color }}>
                            {chip.icon}
                            <span>{chip.text}</span>
                            <span className="plus-icon">+</span>
                        </button>
                    ))}
                </div>
                
                <div className="chat-input-area">
                    <div className="prompt-wrapper">
                        <textarea
                            className="prompt-textarea"
                            placeholder="Summarize the latest..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            maxLength="3000"
                        />
                        <button className="send-button">
                            <SendIcon />
                        </button>
                    </div>
                    <div className="chat-actions">
                        <div className="action-buttons">
                           <button className="action-btn"><AttachIcon /> Attach</button>
                           <button className="action-btn"><VoiceIcon /> Voice Message</button>
                           <button className="action-btn"><BrowseIcon /> Browse Prompts</button>
                        </div>
                        <div className="char-counter">{prompt.length}/3000</div>
                    </div>
                     <p className="footer-note">Script may generate inaccurate information about people, places, or facts. Model: Script AI v1.3</p>
                </div>
            </div>
        </>
    );
}

