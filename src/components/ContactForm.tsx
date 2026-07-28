import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('YouTube Data API Compliance Inquiries');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(name || 'Reviewer');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-grid">
      <div className="contact-info-card">
        <span className="section-tag green">Direct Contact</span>
        <h3 className="card-title" style={{ marginTop: '0.8rem' }}>Developer & Project Inquiries</h3>
        <p className="card-text">
          Logvera is developed and maintained by an independent software engineer. If you have questions regarding YouTube Data API compliance verification, project architecture, or data retention policies, please reach out directly.
        </p>

        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div className="contact-details">
              <label>Developer Email</label>
              <a href="mailto:gsurya1412@gmail.com">
                <span>gsurya1412@gmail.com</span>
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="contact-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </div>
            <div className="contact-details">
              <label>Source Code Repository</label>
              <a href="https://github.com/SuryaVirata/Logvera-reddit-Extarctor" target="_blank" rel="noopener noreferrer">
                <span>github.com/SuryaVirata/Logvera-reddit-Extarctor</span>
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="contact-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div className="contact-details">
              <label>Project Public URL</label>
              <a href="https://logvera-lemon.vercel.app" target="_blank" rel="noopener noreferrer">
                <span>https://logvera-lemon.vercel.app</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="contact-form-card">
        <h3 className="card-title" style={{ marginBottom: '1.25rem' }}>Send a Message</h3>
        {submittedMessage ? (
          <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', color: '#047857', padding: '1.25rem', borderRadius: '12px', fontSize: '0.925rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '1rem' }}>✓ Message Received (Local Demo)</strong>
            Thank you, {submittedMessage}! Your inquiry regarding Logvera's YouTube Data API compliance has been recorded locally for demonstration purposes.
            <button 
              onClick={() => setSubmittedMessage(null)} 
              className="btn btn-secondary btn-sm" 
              style={{ marginTop: '1rem', display: 'block' }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contactName">Your Name / Reviewer Title</label>
              <input 
                type="text" 
                id="contactName" 
                className="form-control" 
                placeholder="e.g. Google API Compliance Team" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactEmail">Email Address</label>
              <input 
                type="email" 
                id="contactEmail" 
                className="form-control" 
                placeholder="reviewer@domain.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactSubject">Inquiry Topic</label>
              <select 
                id="contactSubject" 
                className="form-control"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="YouTube Data API Compliance Inquiries">YouTube Data API Compliance Verification</option>
                <option value="Technical Architecture Question">Technical Architecture Question</option>
                <option value="General Engineering Feedback">General Engineering Feedback</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contactMessage">Message Details</label>
              <textarea 
                id="contactMessage" 
                className="form-control" 
                placeholder="Please state your inquiry or verification details..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Submit Inquiry
            </button>
            <p className="form-notice">
              Note: This contact form runs locally for project demonstration and review verification.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
