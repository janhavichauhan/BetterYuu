// src/components/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/components/LoginComponents/LoginPage.scss';

// A simple Google Icon component
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

function LoginPage() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    setShowPopup(true);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Here you would typically handle form validation and submission
    console.log("Signing up...");
    navigate('/dashboard');
  };

  return (
    <>
      <div className="login-container">
        {/* Left Side: Image */}
        <div className="login-image-section">
        </div>

        {/* Right Side: Content */}
        <div className="login-form-section">
          <div className="form-wrapper">
            <h1>Welcome to Better Youu!!</h1>
            <p className="subtitle">Sign in to continue your journey</p>
            <hr className="divider" />
            <div className="button-group">
              <button className="btn btn-google" onClick={handleGoogleSignIn}>
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>
              <button className="btn btn-email" onClick={() => navigate("/home")}>
                Continue with email
              </button>

            </div>
            <p className="signup-link">
              Don't have an account? <a href="#">Sign up here</a>
            </p>
          </div>
        </div>
      </div>

      {/* Popup / Modal for Google Sign-in */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={() => setShowPopup(false)}>×</button>
            <h2>Sign Up</h2>
            <p>Enter your details to create an account.</p>
            <form onSubmit={handleSignUp} className="popup-form">
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="btn btn-signup">Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;