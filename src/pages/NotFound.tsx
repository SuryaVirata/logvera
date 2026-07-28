import React from 'react';

interface NotFoundProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms', hash?: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  return (
    <main>
      <section className="page-hero-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">404 Error</span>
          <h1 className="section-title" style={{ marginTop: '1rem' }}>Page Not Found</h1>
          <p className="section-description" style={{ marginBottom: '2rem' }}>
            The requested page does not exist or has been moved in the clean Logvera React application.
          </p>
          <button onClick={() => onNavigate('home')} className="btn btn-primary">
            Return to Homepage
          </button>
        </div>
      </section>
    </main>
  );
};
