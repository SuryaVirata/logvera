import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms', hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="brand-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <path d="M12 20v-6M6 20V10M18 20V4"/>
                <circle cx="12" cy="14" r="2" fill="currentColor"/>
                <circle cx="6" cy="10" r="2" fill="currentColor"/>
                <circle cx="18" cy="4" r="2" fill="currentColor"/>
              </svg>
              <span>Logvera</span>
            </a>
            <p>A personal software engineering project for analyzing public customer discussions on YouTube using the official YouTube Data API.</p>
          </div>

          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('home', 'about'); }}>About</a></li>
              <li><a href="#workflow" onClick={(e) => { e.preventDefault(); onNavigate('home', 'workflow'); }}>Workflow</a></li>
              <li><a href="#independent-value" onClick={(e) => { e.preventDefault(); onNavigate('home', 'independent-value'); }}>Value Added</a></li>
              <li><a href="#compliance" onClick={(e) => { e.preventDefault(); onNavigate('home', 'compliance'); }}>API Compliance</a></li>
              <li><a href="#tech-stack" onClick={(e) => { e.preventDefault(); onNavigate('home', 'tech-stack'); }}>Tech Stack</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Legal & Policy</h4>
            <ul className="footer-links">
              <li><a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }}>Privacy Policy</a></li>
              <li><a href="/terms" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }}>Terms of Service</a></li>
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
              <li><a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube ToS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Project Info</h4>
            <ul className="footer-links">
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('home', 'contact'); }}>Developer Contact</a></li>
              <li><a href="https://github.com/SuryaVirata/Logvera-reddit-Extarctor" target="_blank" rel="noopener noreferrer">GitHub Repo</a></li>
              <li><a href="https://logvera-lemon.vercel.app" target="_blank" rel="noopener noreferrer">Vercel Deployment</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 Logvera Project. Personal Software Engineering Project. All rights reserved.
          </div>
          <div className="footer-status-tag">
            <span>● Local Development Build</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
