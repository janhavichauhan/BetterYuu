import React from 'react';
import '../style/components/FooterSection.scss';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            Better Yuu
            <div className="footer-tagline">Clarity. Growth. Connection.</div>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <div className="footer-col-title">Product</div>
              <a href="#features" className="footer-link">Features</a>
              <a href="#cases" className="footer-link">Use Cases</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#" className="footer-link">Pricing</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <a href="#about" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Press</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Resources</div>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Guides</a>
              <a href="#" className="footer-link">Help Center</a>
              <a href="#" className="footer-link">Community</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Legal</div>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Cookie Policy</a>
              <a href="#" className="footer-link">Security</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© {new Date().getFullYear()} Better Yuu. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;


