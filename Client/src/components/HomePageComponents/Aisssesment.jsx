import React, { useState, useMemo } from 'react';
// In a real project, you would install and import recharts:
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
// For this single-file example, we assume Recharts is loaded from a CDN.
// Make sure to add this script tag to your HTML file:
// <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>

// --- FAKE JSON DATA ---
const javascriptQuizData = [
  {
    id: 1,
    question: "A 62-year-old man presents with nocturia, hesitancy, and terminal dribbling. Prostate examination reveals a moderately enlarged prostate with no irregular features and a well defined median sulcus. Blood tests show: PSA 1.3 ng/mL. What is the most appropriate management?",
    options: ["Alpha-1 antagonist", "5 alpha-reductase inhibitor", "Non-urgent referral for transurethral resection of prostate", "Empirical treatment with ciprofloxacin for 2 weeks", "Urgent referral to urology"],
    correctAnswer: "Alpha-1 antagonist",
    explanation: "The symptoms are suggestive of benign prostatic hyperplasia (BPH). Alpha-1 antagonists are first-line therapy for moderate to severe symptoms of BPH."
  },
  {
    id: 2,
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    options: ["String", "Number", "Symbol", "Object"],
    correctAnswer: "Object",
    explanation: "JavaScript has seven primitive data types: String, Number, BigInt, Boolean, Undefined, Symbol, and Null. Object is not a primitive type."
  },
  {
    id: 3,
    question: "What does the `...` operator do in JavaScript?",
    options: [
      "It is used for comments.",
      "It spreads array elements or object properties.",
      "It declares a new variable.",
      "It signifies the end of a block.",
    ],
    correctAnswer: "It spreads array elements or object properties.",
    explanation: "The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments or elements are expected."
  },
  {
    id: 4,
    question: "What will `console.log(0.1 + 0.2 === 0.3)` output?",
    options: ["true", "false", "undefined", "TypeError"],
    correctAnswer: "false",
    explanation: "This is due to floating-point precision errors in binary representation. The sum of 0.1 and 0.2 is not exactly 0.3, but a very close number."
  },
  {
    id: 5,
    question: "Which function is used to parse a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.toObject()"],
    correctAnswer: "JSON.parse()",
    explanation: "The `JSON.parse()` method parses a JSON string, constructing the JavaScript value or object described by the string."
  },
  {
    id: 6,
    question: "What is a 'closure' in JavaScript?",
    options: [
        "A function having access to the parent scope, even after the parent function has closed.",
        "A way to lock variables from being changed.",
        "A built-in method for closing browser windows.",
        "A security feature to prevent memory leaks."
    ],
    correctAnswer: "A function having access to the parent scope, even after the parent function has closed.",
    explanation: "A closure gives you access to an outer function's scope from an inner function. Closures are created every time a function is created, at function creation time."
  },
  {
    id: 7,
    question: "What does 'Hoisting' mean in JavaScript?",
    options: [
        "It's a way to lift elements up in the DOM tree.",
        "A mechanism where variables and function declarations are moved to the top of their scope before code execution.",
        "A method to improve performance by caching function results.",
        "The process of converting a string to a number."
    ],
    correctAnswer: "A mechanism where variables and function declarations are moved to the top of their scope before code execution.",
    explanation: "Hoisting is JavaScript's default behavior of moving declarations to the top. This means that you can use a variable or function before it has been declared."
  },
  {
    id: 8,
    question: "What is the difference between `==` and `===`?",
    options: [
      "`==` compares values, `===` compares values and types.",
      "`==` is for assignment, `===` is for comparison.",
      "`===` compares values, `==` compares values and types.",
      "There is no difference.",
    ],
    correctAnswer: "`==` compares values, `===` compares values and types.",
    explanation: "The `==` operator performs type coercion, meaning it converts the operands to the same type before comparison. The `===` operator (strict equality) does not perform type coercion and checks for both value and type equality."
  },
  {
    id: 9,
    question: "How do you create a new promise in JavaScript?",
    options: [
        "`new Promise(function(resolve, reject){...})`",
        "`Promise.create(function(){...})`",
        "`makePromise(function(){...})`",
        "`Promise(function(resolve, reject){...})`"
    ],
    correctAnswer: "`new Promise(function(resolve, reject){...})`",
    explanation: "A new Promise is created using the `new Promise()` constructor, which takes an 'executor' function with `resolve` and `reject` parameters."
  },
  {
    id: 10,
    question: "What is the purpose of the `map` method in arrays?",
    options: [
        "To iterate over the array elements without returning a value.",
        "To filter elements based on a condition.",
        "To create a new array with the results of calling a provided function on every element.",
        "To check if at least one element in the array passes a test."
    ],
    correctAnswer: "To create a new array with the results of calling a provided function on every element.",
    explanation: "The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array."
  }
];


// --- Helper Components ---

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4CAF50' }}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#F44336' }}>
        <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
);

const GlobalStyles = () => (
    <style>{`
        body {
            font-family: sans-serif;
            background-color: #f8fafc;
            margin: 0;
        }
        .quiz-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }
        @media (min-width: 640px) {
            .quiz-container { padding: 1.5rem; }
        }
        @media (min-width: 768px) {
            .quiz-container { padding: 3rem; }
        }
        .quiz-main {
            width: 100%;
            max-width: 72rem;
            margin-left: auto;
            margin-right: auto;
            background-color: white;
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
            padding: 1.5rem;
        }
        @media (min-width: 768px) {
            .quiz-main { padding: 2rem; }
        }
        .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        @media (min-width: 1024px) {
            .grid { grid-template-columns: repeat(3, 1fr); }
        }
        .left-panel {
            grid-column: span 1 / span 1;
        }
        @media (min-width: 1024px) {
            .left-panel { grid-column: span 2 / span 2; }
        }
        .right-panel {
             grid-column: span 1 / span 1;
        }
        .quiz-title {
            font-size: 1.875rem;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 1rem;
        }
        .progress-bar-container {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        .progress-bar {
            width: 100%;
            background-color: #e5e7eb;
            border-radius: 9999px;
            height: 0.5rem;
        }
        .progress-bar-inner {
            background-color: #2563eb;
            height: 0.5rem;
            border-radius: 9999px;
        }
        .progress-text {
            font-size: 0.875rem;
            font-weight: 600;
            color: #6b7280;
        }
        .question-container {
            font-size: 1.125rem;
            color: #374151;
            margin-bottom: 1.5rem;
        }
        .question-number {
            font-weight: 600;
            color: #111827;
        }
        .question-text {
            margin-top: 0.5rem;
        }
        .options-container {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        .option-button {
            width: 100%;
            text-align: left;
            padding: 1rem;
            border-radius: 0.5rem;
            border: 2px solid;
            transition: all 0.2s ease-in-out;
            color: #1f2937;
            cursor: pointer;
            background-color: #f9fafb;
            border-color: #e5e7eb;
        }
        .option-button:hover {
            background-color: #eff6ff;
            border-color: #93c5fd;
        }
        .option-button.selected {
            background-color: #dbeafe;
            border-color: #3b82f6;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        }
        .button-group {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
        }
        .quiz-button {
            padding: 0.75rem 2rem;
            font-weight: 600;
            border-radius: 0.5rem;
            cursor: pointer;
            border: none;
        }
        .quiz-button.previous {
            background-color: white;
            border: 2px solid #d1d5db;
            color: #374151;
        }
        .quiz-button.previous:hover {
            background-color: #f9fafb;
        }
        .quiz-button.next {
            background-color: #2563eb;
            color: white;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
        }
        .quiz-button.next:hover {
            background-color: #1d4ed8;
        }
        .quiz-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            background-color: #9ca3af;
        }
        .results-view h2 {
            font-size: 1.875rem;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 1rem;
        }
        .results-summary {
            background-color: #eff6ff;
            border: 2px solid #bfdbfe;
            padding: 1.5rem;
            border-radius: 0.5rem;
            text-align: center;
            margin-bottom: 1.5rem;
        }
        .results-summary p:first-child {
            font-size: 1.125rem;
            color: #374151;
        }
        .results-summary p.level {
            font-size: 2.25rem;
            font-weight: 800;
            color: #2563eb;
            margin: 0.5rem 0;
        }
        .results-summary p:last-child {
            font-size: 0.875rem;
            color: #6b7280;
        }
        .chart-and-score {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            gap: 1.5rem;
        }
        @media (min-width: 768px) {
            .chart-and-score { flex-direction: row; }
        }
        .chart-container {
            width: 100%;
            height: 16rem;
        }
        @media (min-width: 768px) {
            .chart-container { width: 50%; }
        }
        .score-details {
            text-align: center;
        }
        .score-percentage {
            font-size: 3rem;
            font-weight: bold;
            color: #1f2937;
        }
        .score-label {
            font-size: 1.125rem;
            color: #4b5563;
        }
        .legend {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .legend-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            justify-content: center;
        }
        .legend-color-box {
            width: 1rem;
            height: 1rem;
            border-radius: 9999px;
        }
        .restart-button-container {
            text-align: center;
            margin-top: 2rem;
        }
        .restart-button {
            padding: 0.75rem 2rem;
            background-color: #2563eb;
            color: white;
            font-weight: 600;
            border-radius: 0.5rem;
            border: none;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
            transition: transform 0.2s;
        }
        .restart-button:hover {
            background-color: #1d4ed8;
            transform: scale(1.05);
        }
        .right-panel-inner {
            padding: 1.5rem;
            border-radius: 0.5rem;
            background-color: #f9fafb;
            border: 2px solid #f3f4f6;
        }
        .score-card {
            text-align: center;
            background-color: white;
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
            margin-bottom: 1.5rem;
        }
        .score-card .score {
            font-size: 3rem;
            font-weight: bold;
            color: #2563eb;
        }
        .score-card .text {
            font-size: 0.875rem;
            color: #4b5563;
            margin-top: 0.5rem;
        }
        .question-list {
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .question-list-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem;
            border-radius: 0.375rem;
            transition: all 0.2s;
        }
        .question-list-item.correct { background-color: #dcfce7; }
        .question-list-item.incorrect { background-color: #fee2e2; }
        .question-list-item.answered { background-color: #eff6ff; }
        .question-list-item.current { background-color: white; border: 2px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .question-list-item.unanswered { background-color: #e5e7eb; }
        .question-list-item-text {
            font-weight: 500;
        }
        .question-list-item-text.current { color: #1d4ed8; }
    `}</style>
);


// --- Main App Component ---
export default function Aiassesment() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } = window.Recharts || {};

  const currentQuestion = javascriptQuizData[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestion.id];

  const handleSelectAnswer = (answer) => {
    setUserAnswers({ ...userAnswers, [currentQuestion.id]: answer });
  };

  const handleNext = () => {
    if (currentQuestionIndex < javascriptQuizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => setShowResults(true);
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResults(false);
  }

  const results = useMemo(() => {
    if (!showResults) return null;
    const correctAnswersCount = javascriptQuizData.reduce((acc, q) => userAnswers[q.id] === q.correctAnswer ? acc + 1 : acc, 0);
    const incorrectAnswersCount = javascriptQuizData.length - correctAnswersCount;
    const score = (correctAnswersCount / javascriptQuizData.length) * 100;
    let level = 'Beginner';
    if (score >= 80) level = 'Advanced';
    else if (score >= 50) level = 'Intermediate';
    return { correct: correctAnswersCount, incorrect: incorrectAnswersCount, score: score.toFixed(1), level };
  }, [showResults, userAnswers]);

  const pieChartData = useMemo(() => showResults ? [
    { name: 'Correct', value: results.correct },
    { name: 'Incorrect', value: results.incorrect },
  ] : [], [showResults, results]);

  const COLORS = ['#4CAF50', '#F44336'];
  const progress = ((currentQuestionIndex + 1) / javascriptQuizData.length) * 100;

  return (
    <>
      <GlobalStyles />
      <div className="quiz-container">
        <main className="quiz-main">
          <div className="grid">
            <div className="left-panel">
              {!showResults ? (
                <div>
                  <h2 className="quiz-title">Cardiology Quiz</h2>
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
                    </div>
                    <span className="progress-text">{Math.round(progress)}%</span>
                  </div>
                  <div className="question-container">
                    <p className="question-number">Question {currentQuestionIndex + 1}/{javascriptQuizData.length}:</p>
                    <p className="question-text">{currentQuestion.question}</p>
                  </div>
                  <div className="options-container">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelectAnswer(option)}
                        className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <div className="button-group">
                    <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="quiz-button previous">
                      Previous
                    </button>
                    {currentQuestionIndex < javascriptQuizData.length - 1 ? (
                      <button onClick={handleNext} disabled={!selectedAnswer} className="quiz-button next">
                        Next
                      </button>
                    ) : (
                      <button onClick={handleSubmit} disabled={!selectedAnswer} className="quiz-button next">
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="results-view">
                  <h2>Quiz Results</h2>
                  <div className="results-summary">
                    <p>You are at an</p>
                    <p className="level">{results.level} Level</p>
                    <p>Based on your score</p>
                  </div>
                  <div className="chart-and-score">
                    <div className="chart-container">
                      {PieChart && ResponsiveContainer ? (
                        <ResponsiveContainer>
                          <PieChart>
                            <Pie data={pieChartData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} fill="#8884d8" paddingAngle={5} dataKey="value" labelLine={false} label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                              {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      ) : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#6b7280' }}>Loading Chart...</div>}
                    </div>
                    <div className="score-details">
                      <p className="score-percentage">{results.score}%</p>
                      <p className="score-label">Your Score</p>
                      <div className="legend">
                        <div className="legend-item">
                          <div className="legend-color-box" style={{ backgroundColor: '#4CAF50' }}></div>
                          <span>{results.correct} Correct</span>
                        </div>
                        <div className="legend-item">
                          <div className="legend-color-box" style={{ backgroundColor: '#F44336' }}></div>
                          <span>{results.incorrect} Incorrect</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="restart-button-container">
                    <button onClick={handleRestart} className="restart-button">Try Again</button>
                  </div>
                </div>
              )}
            </div>
            <div className="right-panel">
              <div className="right-panel-inner">
                <div className="score-card">
                  {showResults ? (
                    <>
                      <p className="score">{results.score}%</p>
                      <p className="text">You got {results.correct} answers correct</p>
                    </>
                  ) : (
                    <>
                      <p className="score">{Object.keys(userAnswers).length}</p>
                      <p className="text">out of {javascriptQuizData.length} answered</p>
                    </>
                  )}
                </div>
                <div className="question-list">
                  {javascriptQuizData.map((question, index) => {
                    const isAnswered = userAnswers.hasOwnProperty(question.id);
                    const isCorrect = showResults && userAnswers[question.id] === question.correctAnswer;
                    const isCurrent = index === currentQuestionIndex;
                    let itemClass = 'unanswered';
                    if (showResults) {
                        if(isAnswered) itemClass = isCorrect ? 'correct' : 'incorrect';
                    } else {
                        if(isCurrent) itemClass = 'current';
                        else if (isAnswered) itemClass = 'answered';
                    }
                    return (
                      <div key={question.id} className={`question-list-item ${itemClass}`}>
                        <span className={`question-list-item-text ${isCurrent && !showResults ? 'current' : ''}`}>Question {index + 1}</span>
                        {showResults && isAnswered && (isCorrect ? <CheckIcon /> : <XIcon />)}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

