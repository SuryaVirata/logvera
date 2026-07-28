import React from 'react';

interface PrivacyProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms', hash?: string) => void;
}

export const Privacy: React.FC<PrivacyProps> = ({ onNavigate }) => {
  return (
    <main>
      <section className="page-hero-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1rem' }}>
            <span className="section-tag green">Legal & Compliance</span>
            <h1 className="section-title">Privacy Policy</h1>
            <p className="section-description">
              Last Updated: July 28, 2026 • Official Privacy Policy for the Logvera Project
            </p>
          </div>
        </div>
      </section>

      <section className="legal-page-section">
        <div className="container">
          <div className="legal-card">
            <div className="legal-highlight-box">
              <strong>Project Context & Scope:</strong> Logvera is an experimental personal software engineering project developed for technical discussion analytics. The application operates solely in a local development environment, is not a commercial public SaaS, and accesses data exclusively through authorized official YouTube Data API v3 endpoints.
            </div>

            <h2>1. Information We Collect</h2>
            <p>Logvera retrieves and processes data strictly through official, authorized YouTube Data API v3 endpoints. The categories of data accessed include:</p>
            <ul>
              <li><strong>Public YouTube Content Data:</strong> Publicly available video titles, channel names, upload timestamps, public video descriptions, and public comment threads associated with specific technical software topics.</li>
              <li><strong>Non-Personal Technical Logs:</strong> Local application execution diagnostics, API query execution counts, and local cache metadata stored during local processing.</li>
            </ul>
            <p><strong>What We DO NOT Collect:</strong> Logvera does not request or collect private personal identifiers, email addresses, passwords, private YouTube messages, search histories, or viewing habits. No private user data is accessed or processed.</p>

            <h2>2. How We Use the Data</h2>
            <p>Logvera processes publicly retrieved YouTube data strictly to generate independent analytical insights regarding software products. Specifically, data is used to:</p>
            <ul>
              <li>Group public discussions into topic-based categories (e.g., IDE debugging, database client connection issues).</li>
              <li>Perform automated sentiment analysis to gauge general community satisfaction or frustration regarding software updates.</li>
              <li>Identify recurring technical bug reports, error messages, and customer friction points.</li>
              <li>Generate structured local executive dashboards and aggregated trend reports for software engineering analysis.</li>
            </ul>

            <h2>3. Third-Party Services & YouTube API Services Compliance</h2>
            <p>Logvera integrates with YouTube API Services to access public discussion data. By using Logvera or interacting with data derived from YouTube API Services, you acknowledge and agree that:</p>
            <ul>
              <li>Logvera uses the official YouTube Data API in strict accordance with the <a href="https://developers.google.com/youtube/terms/api-services-terms-of-service" target="_blank" rel="noopener noreferrer">YouTube API Services Terms of Service</a>.</li>
              <li>Users are bound by the official <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a> and Google Privacy Policy.</li>
              <li>Logvera does not circumvent, modify, or bypass any security features, access controls, or rate limits of YouTube API Services.</li>
            </ul>
            <p>Please refer to the official <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a> for information on how Google collects and processes data.</p>

            <h2>4. Data Storage, Retention, and Deletion Policy</h2>
            <p>Logvera maintains strict data retention practices aligned with YouTube API Services Developer Policies:</p>
            <ul>
              <li><strong>No Binary Content Storage:</strong> Logvera never downloads, captures, or retains YouTube video files, audio tracks, or media binaries.</li>
              <li><strong>Transient Local Processing:</strong> Retrieved text comment data is stored only temporarily in local memory and local relational database instances (PostgreSQL / Redis) for analytical processing.</li>
              <li><strong>Revocation & Data Deletion:</strong> Users may revoke Logvera’s access to API data or inspect connected application permissions at any time via the <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noopener noreferrer">Google Security Settings Page</a>.</li>
              <li><strong>Data Removal Requests:</strong> If a public video or comment is deleted or marked private on YouTube, local analytical references are purged upon subsequent synchronization cycles or upon manual developer request.</li>
            </ul>

            <h2>5. Zero Data Commercialization or Selling</h2>
            <p>Logvera is a personal engineering research project. We do not sell, rent, lease, monetize, or license public YouTube data or derived analytical metrics to any third party, broker, or advertising network.</p>

            <h2>6. Contact & Compliance Inquiries</h2>
            <p>For questions regarding this Privacy Policy, YouTube Data API compliance verification, or data retention practices, please contact the developer directly:</p>
            <div className="contact-highlight-card">
              <p><strong>Developer Email:</strong> <a href="mailto:gsurya1412@gmail.com">gsurya1412@gmail.com</a></p>
              <p><strong>GitHub Repository:</strong> <a href="https://github.com/SuryaVirata/Logvera-reddit-Extarctor" target="_blank" rel="noopener noreferrer">github.com/SuryaVirata/Logvera-reddit-Extarctor</a></p>
              <p><strong>Project Website URL:</strong> <a href="https://logvera-lemon.vercel.app" target="_blank" rel="noopener noreferrer">https://logvera-lemon.vercel.app</a></p>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <button onClick={() => onNavigate('home')} className="btn btn-secondary btn-sm">
                ← Back to Homepage
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
