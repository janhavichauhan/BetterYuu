import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import '../../style/components/HomeComponent/Aiassement.scss';

// --- SVG ICONS ---
const CheckIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4CAF50' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>);
const XIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#F44336' }}><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>);
const FullscreenEnterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>;
const FullscreenExitIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>;
const ScreenshareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>;
const TimerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;


const GEMINI_API_KEY = 'AIzaSyDGE57iZlzm-eKaN7iSKMt_68nRmSZUJD8';
const QUIZ_DURATION = 30 * 60; 

export default function GeminiQuizApp() {
    const [quizState, setQuizState] = useState('topic_selection');
    const [quizTopic, setQuizTopic] = useState('');
    const [quizData, setQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [analysis, setAnalysis] = useState(null);
    const [error, setError] = useState('');
    const [isFullscreen, setIsFullscreen] = useState(false);
    
    // State and refs for proctoring
    const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
    const [proctoringViolation, setProctoringViolation] = useState('');
    const timerRef = useRef(null);
    const streamRef = useRef(null);

    const { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } = window.Recharts || {};

    const currentQuestion = quizData[currentQuestionIndex];
    const selectedAnswer = userAnswers[currentQuestion?.id];

    // Clean up timer and media streams
    const cleanupProctoring = useCallback(() => {
        clearInterval(timerRef.current);
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
    }, []);

    // Handle any proctoring violation
    const handleQuizViolation = useCallback((reason) => {
        cleanupProctoring();
        setProctoringViolation(reason);
        setQuizState('ended_by_proctor');
    }, [cleanupProctoring]);

    // Generate the quiz content via API
    const generateQuiz = async () => {
        if (!quizTopic.trim() || !GEMINI_API_KEY) {
            if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
                 setError('API Key is not set. Please edit the code to add your Gemini API key.');
            }
            return;
        }
        setQuizState('loading_quiz');
        setError('');
        
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
        const prompt = `Generate a 10-question multiple-choice quiz on the topic of "${quizTopic}". Each question must have exactly 4 options. Include a concise, one-sentence explanation for the correct answer. Ensure the response is a valid JSON array of objects.`;
        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "ARRAY",
                    items: {
                        type: "OBJECT",
                        properties: {
                            id: { type: "NUMBER" },
                            question: { type: "STRING" },
                            options: { type: "ARRAY", items: { type: "STRING" } },
                            correctAnswer: { type: "STRING" },
                            explanation: { type: "STRING" }
                        },
                        required: ["id", "question", "options", "correctAnswer", "explanation"]
                    }
                }
            }
        };

        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
            const result = await response.json();
            const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;
            if (!jsonText) throw new Error("No content received from API.");
            const parsedData = JSON.parse(jsonText);
            if (!Array.isArray(parsedData) || parsedData.length === 0) throw new Error("Generated quiz data is invalid or empty.");
            
            setQuizData(parsedData);
            setQuizState('in_progress');
        } catch (err) {
            setError(`Failed to generate the quiz. Please check your API key and topic, then try again. Error: ${err.message}`);
            setQuizState('topic_selection');
            cleanupProctoring();
        }
    };
    
    // Analyze quiz results via API
    const analyzeResults = async (score) => {
        setQuizState('submitting');
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
        const prompt = `A user scored ${score.toFixed(1)}% on a ${quizTopic} quiz. Based on this score, respond in this exact format: "Level: [level]\\nFeedback: [feedback]". The level should be one of: Beginner, Intermediate, Advanced, or Expert. The feedback should be a short, encouraging paragraph.`;
        const payload = { contents: [{ parts: [{ text: prompt }] }] };

        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
            const result = await response.json();
            const analysisText = result.candidates?.[0]?.content?.parts?.[0]?.text;
            const levelMatch = analysisText.match(/Level:\s*(.*)/i);
            const feedbackMatch = analysisText.match(/Feedback:\s*(.*)/i);
            const level = levelMatch ? levelMatch[1].trim() : "Beginner";
            const feedback = feedbackMatch ? feedbackMatch[1].trim() : "Great effort! Keep practicing to improve your score.";
            setAnalysis({ level, feedback });
        } catch (err) {
            console.error("Failed to analyze results:", err);
            setAnalysis({ level: 'Intermediate', feedback: 'Great effort! Keep practicing to improve your score.' }); // Fallback
        } finally {
            setQuizState('results');
        }
    };

    // Prompt for screen sharing and then start the quiz
    const handleStartQuizAttempt = async () => {
        setError('');
        if (!quizTopic.trim()) return;

        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
            streamRef.current = stream;
            
            const videoTrack = stream.getVideoTracks()[0];
            videoTrack.onended = () => handleQuizViolation("Screen sharing was stopped.");

            await generateQuiz();
        } catch (err) {
            console.error("Screen sharing failed or was cancelled:", err);
            setError("Screen sharing is required to start the quiz. Please grant permission and try again.");
            cleanupProctoring();
        }
    };
    
    // Effect to manage timer and visibility listener
    useEffect(() => {
        if (quizState === 'in_progress') {
            setTimeLeft(QUIZ_DURATION);
            timerRef.current = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timerRef.current);
                        handleSubmit(true); 
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
            
            const handleVisibilityChange = () => {
                if (document.hidden) {
                    handleQuizViolation("You navigated away from the quiz tab.");
                }
            };
            document.addEventListener('visibilitychange', handleVisibilityChange);

            return () => {
                clearInterval(timerRef.current);
                document.removeEventListener('visibilitychange', handleVisibilityChange);
            };
        }
    }, [quizState, handleQuizViolation]);
    
    // Fullscreen logic
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(err => console.error(err));
        } else {
            document.exitFullscreen().then(() => setIsFullscreen(false));
        }
    };
    
    useEffect(() => {
        const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    // Quiz action handlers
    const handleSelectAnswer = (answer) => setUserAnswers({ ...userAnswers, [currentQuestion.id]: answer });
    const handleNext = () => { if (currentQuestionIndex < quizData.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1); };
    
    const handleSubmit = useCallback((isAutoSubmit = false) => {
        if (!isAutoSubmit) {
            cleanupProctoring();
        }
        const correctAnswersCount = quizData.reduce((acc, q) => userAnswers[q.id] === q.correctAnswer ? acc + 1 : acc, 0);
        const score = quizData.length > 0 ? (correctAnswersCount / quizData.length) * 100 : 0;
        analyzeResults(score);
    }, [cleanupProctoring, quizData, userAnswers]);

    const handleRestart = () => {
        cleanupProctoring();
        setQuizState('topic_selection');
        setQuizData([]);
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        setAnalysis(null);
        setError('');
        setQuizTopic('');
        setProctoringViolation('');
    };

    // Memoized calculations
    const results = useMemo(() => {
        if (quizState !== 'results') return null;
        const correct = quizData.reduce((acc, q) => userAnswers[q.id] === q.correctAnswer ? acc + 1 : acc, 0);
        const incorrect = quizData.length - correct;
        const score = quizData.length > 0 ? (correct / quizData.length) * 100 : 0;
        return { correct, incorrect, score: score.toFixed(1), level: analysis?.level || 'Beginner', feedback: analysis?.feedback || '' };
    }, [quizState, userAnswers, analysis, quizData]);

    const pieChartData = useMemo(() => results ? [{ name: 'Correct', value: results.correct }, { name: 'Incorrect', value: results.incorrect }] : [], [results]);
    const progress = quizData.length > 0 ? ((Object.keys(userAnswers).length) / quizData.length) * 100 : 0;

    // --- RENDER LOGIC ---
    const renderContent = () => {
        switch (quizState) {
            case 'topic_selection': return <TopicSelectionScreen />;
            case 'loading_quiz': return <div className="loading-view">Starting proctoring session & generating quiz...</div>;
            case 'submitting': return <div className="loading-view">Analyzing Results...</div>;
            case 'in_progress': return <QuizView />;
            case 'results': return <ResultsView />;
            case 'ended_by_proctor': return <ProctoringViolationScreen />;
            default: return null;
        }
    };
    
    // --- Sub-Components ---
    const UtilityButtons = () => (
         <div className="utility-buttons">
            <button className="utility-btn" title="Toggle Fullscreen" onClick={toggleFullscreen}>
                {isFullscreen ? <FullscreenExitIcon /> : <FullscreenEnterIcon />}
            </button>
        </div>
    );
    
    const Timer = ({ seconds }) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return (
            <div className="timer">
                <TimerIcon />
                <span>{String(minutes).padStart(2, '0')}:{String(remainingSeconds).padStart(2, '0')}</span>
            </div>
        );
    };
    
    const ProctoringViolationScreen = () => (
        <div className="proctoring-violation-view">
            <h2>Quiz Terminated</h2>
            <p><strong>Reason:</strong> {proctoringViolation}</p>
            <button onClick={handleRestart} className="restart-button">Return to Start</button>
        </div>
    );
    
    const TopicSelectionScreen = () => (
        <div className="topic-selector">
            <h1>AI-Powered Proctored Quiz</h1>
            <p>You must enable screen sharing for the entire 30-minute duration of the quiz. Navigating away from this tab or stopping the screen share will automatically end the test.</p>
            <div className="topic-input-container">
                <input 
                    type="text"
                    className="topic-input"
                    value={quizTopic}
                    onChange={(e) => setQuizTopic(e.target.value)}
                    placeholder="e.g., The Renaissance, Quantum Physics..."
                />
                <button className="start-quiz-btn" onClick={handleStartQuizAttempt} disabled={!quizTopic.trim()}>Start Quiz</button>
            </div>
             <div className="topic-suggestions">
                <p>Or try one of these:</p>
                <div className="topic-suggestions-grid">
                    {['Cardiology', 'JavaScript', 'World History', 'Astrophysics'].map(topic => (
                        <button key={topic} className="suggestion-btn" onClick={() => setQuizTopic(topic)}>{topic}</button>
                    ))}
                </div>
            </div>
            {error && <p style={{ color: '#F44336', marginTop: '1rem' }}>{error}</p>}
        </div>
    );
    
    const QuizView = () => (
        <div className="grid">
            <div className="left-panel">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <h2 className="quiz-title">{quizTopic} Quiz</h2>
                    <Timer seconds={timeLeft} />
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar"><div className="progress-bar-inner" style={{ width: `${progress}%` }}></div></div>
                    <span className="progress-text">{Object.keys(userAnswers).length}/{quizData.length} Answered</span>
                </div>
                <div className="question-container">
                    <p className="question-number">Question {currentQuestionIndex + 1}/{quizData.length}:</p>
                    <p className="question-text">{currentQuestion.question}</p>
                </div>
                <div className="options-container">
                    {currentQuestion.options.map((option, index) => (
                        <button key={index} onClick={() => handleSelectAnswer(option)} className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}>{option}</button>
                    ))}
                </div>
                <div className="button-group">
                    {currentQuestionIndex < quizData.length - 1 ? (
                        <button onClick={handleNext} disabled={!selectedAnswer} className="quiz-button next">Next</button>
                    ) : (
                        <button onClick={() => handleSubmit(false)} disabled={Object.keys(userAnswers).length !== quizData.length} className="quiz-button next">Submit</button>
                    )}
                </div>
            </div>
            <RightPanel />
        </div>
    );
    
    const QuestionReview = () => (
        <div className="question-review-section">
            <h3>Review Your Answers</h3>
            {quizData.map((question, index) => {
                const userAnswer = userAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                return (
                    <div key={question.id} className="review-item">
                        <p className="review-question">{index + 1}. {question.question}</p>
                        <div className="review-options">
                            {question.options.map((option, optIndex) => {
                                let className = 'review-option';
                                if (option === userAnswer) {
                                    className += ' user-answer ' + (isCorrect ? 'correct' : 'incorrect');
                                } else if (option === question.correctAnswer) {
                                    className += ' correct-answer';
                                }
                                return <div key={optIndex} className={className}>{option}</div>;
                            })}
                        </div>
                        {!isCorrect && question.explanation && (
                            <div className="review-explanation">
                                <strong>Explanation:</strong> {question.explanation}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
    
    const ResultsView = () => (
        <div className="grid">
            <div className="left-panel">
                <div className="results-view">
                    <h2>Quiz Results for {quizTopic}</h2>
                    <div className="results-summary">
                        <p>You are at an</p>
                        <p className="level">{results.level} Level</p>
                        <p>{results.feedback}</p>
                    </div>
                    <div className="chart-and-score">
                        <div className="score-details">
                            <p className="score-label">Your Score</p>
                            <p className="score-percentage">{results.score}%</p>
                            <div className="legend">
                                <div className="legend-item"><div className="legend-color-box" style={{ backgroundColor: '#4CAF50' }}></div><span>{results.correct} Correct</span></div>
                                <div className="legend-item"><div className="legend-color-box" style={{ backgroundColor: '#F44336' }}></div><span>{results.incorrect} Incorrect</span></div>
                            </div>
                        </div>
                        <div className="chart-container">
                            {PieChart && ResponsiveContainer ? (
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Pie data={pieChartData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} fill="#8884d8" paddingAngle={5} dataKey="value">
                                            {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={['#4CAF50', '#F44336'][index % 2]} />)}
                                        </Pie>
                                        <Tooltip formatter={(value, name) => [`${value} Questions`, name]} />
                                    </PieChart>
                                </ResponsiveContainer>
                            ) : <div>Loading Chart...</div>}
                        </div>
                    </div>
                    <div className="restart-button-container"><button onClick={handleRestart} className="restart-button">Take Another Quiz</button></div>
                    <QuestionReview />
                </div>
            </div>
            <RightPanel />
        </div>
    );
    
    const RightPanel = () => (
        <div className="right-panel">
            <div className="right-panel-inner">
                <div className="score-card">
                     {quizState === 'results' ? (
                        <><p className="score">{results.score}%</p><p className="text">Final Score</p></>
                    ) : (
                        <><p className="score">{Object.keys(userAnswers).length}</p><p className="text">out of {quizData.length} answered</p></>
                    )}
                </div>
                <div className="question-list">
                    {quizData.map((question, index) => {
                        const isAnswered = userAnswers.hasOwnProperty(question.id);
                        const isCorrect = quizState === 'results' && userAnswers[question.id] === question.correctAnswer;
                        const isCurrent = index === currentQuestionIndex;
                        let itemClass = 'unanswered';
                        if (quizState === 'results') {
                            if(isAnswered) itemClass = isCorrect ? 'correct' : 'incorrect';
                        } else {
                            if(isCurrent) itemClass = 'current';
                            else if (isAnswered) itemClass = 'answered';
                        }
                        return (
                            <div key={question.id} className={`question-list-item ${itemClass}`}>
                                <span className={`question-list-item-text ${isCurrent && quizState !== 'results' ? 'current' : ''}`}>Question {index + 1}</span>
                                {quizState === 'results' && isAnswered && (isCorrect ? <CheckIcon /> : <XIcon />)}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
    
    return (
        <>
            <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>
          
            <div className="quiz-container">
                <main className="quiz-main">
                    {quizState !== 'topic_selection' && <UtilityButtons />}
                    {renderContent()}
                </main>
            </div>
        </>
    );
}
