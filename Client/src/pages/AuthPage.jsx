import React, { useState } from 'react';
import '../style/pages/AuthPage.scss';

const AuthPage = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const openModal = () => { setShowEmailModal(true); setStep(1); };
  const closeModal = () => { setShowEmailModal(false); setEmail(''); setName(''); setStep(1); };
  const next = () => setStep(2);
  const back = () => setStep(1);

  const submit = (e) => {
    e.preventDefault();
    // TODO: integrate backend. For now, close modal.
    closeModal();
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Welcome to Better Youu!</h1>
        <p className="auth-subtitle">Sign in to continue our journey</p>
        <div className="auth-actions">
          <button className="auth-btn primary" onClick={openModal}>
            Continue With E-mail
          </button>
          <button className="auth-btn hollow">
            Sign-up with Google
          </button>
        </div>
        <p className="auth-footer">Don't have an account? <a href="#" onClick={openModal}>Sign Up</a> here</p>
      </div>

      {showEmailModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="email-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            {step === 1 ? (
              <form onSubmit={(e) => { e.preventDefault(); next(); }}>
                <h3 className="modal-title">Enter your e-mail</h3>
                <input
                  type="email"
                  className="modal-input"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="modal-cta">Continue</button>
              </form>
            ) : (
              <form onSubmit={submit}>
                <h3 className="modal-title">Your name</h3>
                <input
                  type="text"
                  className="modal-input"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div className="modal-actions">
                  <button type="button" className="modal-secondary" onClick={back}>Back</button>
                  <button type="submit" className="modal-cta">Continue</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default AuthPage;
