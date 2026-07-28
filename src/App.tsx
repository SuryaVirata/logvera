import React, { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    // Initial routing based on path or hash
    const handleLocation = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('privacy') || hash === '#privacy-policy' || hash === '#privacy') {
        setCurrentPage('privacy');
      } else if (path.includes('terms') || hash === '#terms-of-service' || hash === '#terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
        if (hash) {
          const targetId = hash.replace('#', '');
          setTimeout(() => {
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  const navigateTo = (page: 'home' | 'privacy' | 'terms', hash?: string) => {
    setCurrentPage(page);
    let targetPath = '/';
    if (page === 'privacy') targetPath = '/privacy';
    if (page === 'terms') targetPath = '/terms';
    if (hash) targetPath += `#${hash}`;

    window.history.pushState(null, '', targetPath);

    if (page === 'home') {
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopBanner />
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {currentPage === 'home' && <Home onNavigate={navigateTo} />}
      {currentPage === 'privacy' && <Privacy onNavigate={navigateTo} />}
      {currentPage === 'terms' && <Terms onNavigate={navigateTo} />}

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
