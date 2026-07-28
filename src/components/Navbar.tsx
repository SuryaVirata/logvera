import React, { useState } from 'react';

interface NavbarProps {
  currentPage: 'home' | 'privacy' | 'terms';
  onNavigate: (page: 'home' | 'privacy' | 'terms', hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'privacy' | 'terms', hash?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, hash);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
          className="brand-logo" 
          aria-label="Logvera Homepage"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20v-6M6 20V10M18 20V4"/>
            <circle cx="12" cy="14" r="2" fill="currentColor"/>
            <circle cx="6" cy="10" r="2" fill="currentColor"/>
            <circle cx="18" cy="4" r="2" fill="currentColor"/>
          </svg>
          <span className="brand-name">Logvera</span>
          <span className="dev-pill">Local Dev Build</span>
        </a>

        <nav className="header-nav">
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {currentPage === 'home' ? (
              <>
                <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                <li><a href="#workflow" onClick={() => setMobileMenuOpen(false)}>Workflow</a></li>
                <li><a href="#independent-value" onClick={() => setMobileMenuOpen(false)}>Value Added</a></li>
                <li><a href="#compliance" onClick={() => setMobileMenuOpen(false)}>API Compliance</a></li>
                <li><a href="#tech-stack" onClick={() => setMobileMenuOpen(false)}>Tech Stack</a></li>
                <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
                <li><a href="/privacy" onClick={(e) => { e.preventDefault(); handleNavClick('privacy'); }}>Privacy</a></li>
                <li><a href="/terms" onClick={(e) => { e.preventDefault(); handleNavClick('terms'); }}>Terms</a></li>
                <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
              </>
            ) : (
              <>
                <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'about'); }}>About</a></li>
                <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'workflow'); }}>Workflow</a></li>
                <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'independent-value'); }}>Value Added</a></li>
                <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'compliance'); }}>API Compliance</a></li>
                <li><a href="/privacy" className={currentPage === 'privacy' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('privacy'); }}>Privacy</a></li>
                <li><a href="/terms" className={currentPage === 'terms' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('terms'); }}>Terms</a></li>
                <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'contact'); }}>Contact</a></li>
              </>
            )}
          </ul>
        </nav>

        <div className="nav-actions">
          {currentPage === 'home' ? (
            <a href="#compliance" className="btn btn-primary btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              API Compliance
            </a>
          ) : (
            <a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="btn btn-secondary btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Back to Homepage
            </a>
          )}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};
