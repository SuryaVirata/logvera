import React from 'react';
import { PipelineSimulator } from '../components/PipelineSimulator';
import { FaqAccordion } from '../components/FaqAccordion';
import { ContactForm } from '../components/ContactForm';

interface HomeProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms', hash?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6z"/></svg>
              YouTube Data API v3 Project
            </div>

            <h1 className="hero-title">
              Transform Public YouTube Discussions into <span>Executive Product Intelligence</span>
            </h1>

            <p className="hero-subtitle">
              Logvera is an experimental personal engineering project designed to automatically collect, cluster, and analyze public software discussions from YouTube to identify recurring bugs, feature requests, and community sentiment.
            </p>

            <div className="hero-cta-group">
              <a href="#workflow" className="btn btn-primary">
                Explore Workflow Pipeline
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="#compliance" className="btn btn-secondary">
                View API Compliance
              </a>
            </div>

            {/* Project Status Notice Card */}
            <div className="status-card">
              <div className="status-card-header">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Personal Software Engineering Project Notice
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                This application is a local engineering prototype built for research and demonstration. It is not a public commercial SaaS platform.
              </p>
              <ul className="status-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Local Developer Environment
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Strict Read-Only YouTube API
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  No Public User Registration
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Hero Dashboard Card Mockup */}
          <div className="hero-visual">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="mockup-title">Logvera Local Analytics Dashboard v1.0</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-status-row">
                  <div className="mockup-status-item">
                    <span className="mockup-status-label">API Quota Usage</span>
                    <span className="mockup-status-value">1,240 / 10,000 Units (12.4%)</span>
                  </div>
                  <div className="mockup-status-item" style={{ textAlign: 'right' }}>
                    <span className="mockup-status-label">Pipeline Status</span>
                    <span className="mockup-status-value" style={{ color: 'var(--accent-green)' }}>● Active Local Sync</span>
                  </div>
                </div>

                <div className="mockup-chart-placeholder">
                  <div className="mockup-bar-item">
                    <div className="bar-meta">
                      <span>Debugger & Extensions Friction</span>
                      <span style={{ color: 'var(--primary)' }}>38% of feedback</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: '78%' }}></div>
                    </div>
                  </div>

                  <div className="mockup-bar-item">
                    <div className="bar-meta">
                      <span>Memory Indexing Overhead</span>
                      <span style={{ color: 'var(--accent-purple)' }}>27% of feedback</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill purple" style={{ width: '55%' }}></div>
                    </div>
                  </div>

                  <div className="mockup-bar-item">
                    <div className="bar-meta">
                      <span>Language Server Latency</span>
                      <span style={{ color: 'var(--accent-green)' }}>19% of feedback</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill green" style={{ width: '38%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Project Overview</span>
            <h2 className="section-title">Understanding the Logvera Mission</h2>
            <p className="section-description">
              Software engineering teams often struggle to aggregate feedback scattered across YouTube tutorials, product reviews, and tech podcasts. Logvera solves this by turning raw public comments into structured technical intelligence.
            </p>
          </div>

          <div className="about-grid">
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <h3 className="card-title">The Fragmented Feedback Problem</h3>
              <p className="card-text">
                When software updates break workflows or introduce memory leaks, users frequently leave detailed bug reports in YouTube comment sections under review videos rather than opening official GitHub issues.
              </p>
            </div>

            <div className="card">
              <div className="card-icon green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
              <h3 className="card-title">The Automated Solution</h3>
              <p className="card-text">
                Logvera programmatically queries public YouTube video metadata and public comments regarding target software tools, categorizing discussion threads into actionable bug reports and feature requests.
              </p>
            </div>

            <div className="card">
              <div className="card-icon purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="card-title">API Compliance Guarantee</h3>
              <p className="card-text">
                Built strictly on YouTube Data API v3 official guidelines. All data access is read-only, non-persistent, and fully compliant with Google Developer Terms and Privacy Policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="workflow-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">System Architecture</span>
            <h2 className="section-title">The 4-Step Analytical Pipeline</h2>
            <p className="section-description">
              How Logvera securely processes public YouTube API data locally to deliver structured product insights.
            </p>
          </div>

          <div className="pipeline-timeline">
            <div className="pipeline-step">
              <span className="step-num">STEP 01</span>
              <h4 className="step-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                Topic Discovery
              </h4>
              <p className="step-desc">Discovers trending software titles, developer tools, and framework discussion keywords on YouTube.</p>
            </div>

            <div className="pipeline-step">
              <span className="step-num">STEP 02</span>
              <h4 className="step-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                API Fetching
              </h4>
              <p className="step-desc">Executes targeted, rate-limited queries against official YouTube Data API v3 commentThreads and search endpoints.</p>
            </div>

            <div className="pipeline-step">
              <span className="step-num">STEP 03</span>
              <h4 className="step-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                NLP Clustering
              </h4>
              <p className="step-desc">Clusters public comment strings into distinct issue categories, sentiment scores, and severity tiers.</p>
            </div>

            <div className="pipeline-step">
              <span className="step-num">STEP 04</span>
              <h4 className="step-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                Executive Reporting
              </h4>
              <p className="step-desc">Presents aggregated insights in a clean local developer dashboard without storing binary media.</p>
            </div>
          </div>

          {/* Interactive Pipeline Simulator */}
          <PipelineSimulator />
        </div>
      </section>

      {/* Independent Value Added Section */}
      <section id="independent-value">
        <div className="container">
          <div className="section-header">
            <span className="section-tag purple">Significant Value Added</span>
            <h2 className="section-title">Beyond Raw Data Proxying</h2>
            <p className="section-description">
              Logvera provides substantial independent value by transforming raw unstructured public API text into refined analytical metrics, statistical trend lines, and actionable issue clusters.
            </p>
          </div>

          <div className="value-comparison-grid">
            <div className="comparison-box">
              <div className="comparison-header" style={{ color: 'var(--text-muted)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                Raw API Output (Without Logvera)
              </div>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  <span>Unstructured JSON text payloads containing thousands of mixed comments.</span>
                </li>
                <li className="comparison-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  <span>No categorization between off-topic chatter and critical software bug reports.</span>
                </li>
                <li className="comparison-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  <span>Manual reading required across dozens of video links.</span>
                </li>
              </ul>
            </div>

            <div className="comparison-box highlight">
              <div className="comparison-header" style={{ color: 'var(--primary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Logvera Analytical Transformation
              </div>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>Automated NLP topic classification (e.g. Memory, LSP, Extensions).</span>
                </li>
                <li className="comparison-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>Sentiment scoring and severity ranking for engineering prioritization.</span>
                </li>
                <li className="comparison-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>Unified local dashboard visualizing recurring friction points over time.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="value-pillars">
            <div className="pillar-card">
              <div className="pillar-num">01</div>
              <h4 className="card-title">NLP Topic Grouping</h4>
              <p className="card-text">Groups text comments into relevant technical categories to separate noise from actionable engineering feedback.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">02</div>
              <h4 className="card-title">Sentiment Severity</h4>
              <p className="card-text">Quantifies customer frustration levels to highlight high-urgency regressions following software releases.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">03</div>
              <h4 className="card-title">Executive Summary</h4>
              <p className="card-text">Synthesizes thousands of feedback strings into clean, concise release notes for product teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube API Compliance Grid */}
      <section id="compliance">
        <div className="container">
          <div className="section-header">
            <span className="section-tag green">YouTube API Services Compliance</span>
            <h2 className="section-title">Strict Policy & Terms Adherence</h2>
            <p className="section-description">
              Logvera is engineered from the ground up to respect YouTube API Services Developer Policies, Google Terms of Service, and User Data Guidelines.
            </p>
          </div>

          <div className="compliance-grid">
            <div className="compliance-card">
              <div className="compliance-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="compliance-content">
                <h4>Strict Read-Only Access</h4>
                <p>Logvera never performs write actions, posts comments, modifies YouTube content, or alters user account state. All API calls are read-only.</p>
              </div>
            </div>

            <div className="compliance-card">
              <div className="compliance-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="compliance-content">
                <h4>Quota & Rate Limit Awareness</h4>
                <p>Designed with built-in quota calculators and back-off timers to ensure local development queries remain strictly within official Google daily limits.</p>
              </div>
            </div>

            <div className="compliance-card">
              <div className="compliance-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><line x1="12" y1="3" x2="12" y2="15"/><line x1="12" y1="15" x2="15" y2="12"/><line x1="12" y1="15" x2="9" y2="12"/></svg>
              </div>
              <div className="compliance-content">
                <h4>Zero Media Binary Downloads</h4>
                <p>Logvera never downloads, captures, or redistributes video files, audio tracks, or thumbnails. Only public text metadata is processed.</p>
              </div>
            </div>

            <div className="compliance-card">
              <div className="compliance-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </div>
              <div className="compliance-content">
                <h4>Data Retention & Purge Compliance</h4>
                <p>Transient data is automatically purged or refreshed upon API sync cycles, respecting content updates or deletion on YouTube.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Technology Foundation</span>
            <h2 className="section-title">Built with Modern Developer Tools</h2>
            <p className="section-description">
              Logvera leverages industry-standard software frameworks to maintain high performance, strict type safety, and efficient local data processing.
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <div className="tech-name">React & Vite</div>
              <div className="tech-desc">Fast, modern single-page application frontend with clean modular components.</div>
            </div>

            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6z"/></svg>
              </div>
              <div className="tech-name">YouTube Data API v3</div>
              <div className="tech-desc">Official Google REST endpoints for retrieving public video and comment metadata.</div>
            </div>

            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <div className="tech-name">PostgreSQL / Redis</div>
              <div className="tech-desc">Local relational storage for analytical index caches and topic classification data.</div>
            </div>

            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>
              </div>
              <div className="tech-name">Node.js & TypeScript</div>
              <div className="tech-desc">Type-safe backend processing routines for batching, tokenizing, and scoring comments.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Features</span>
            <h2 className="section-title">Designed for Developer Workflows</h2>
            <p className="section-description">
              A breakdown of key functionalities provided by Logvera's local analytics pipeline.
            </p>
          </div>

          <div className="features-grid">
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
              </div>
              <h3 className="card-title">Automatic Bug Flagging</h3>
              <p className="card-text">Identifies recurring error codes, crash logs, and version-specific bug reports across comment threads.</p>
            </div>

            <div className="card">
              <div className="card-icon green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h3 className="card-title">Release Trend Velocity</h3>
              <p className="card-text">Tracks comment volume spikes following major product releases to gauge post-launch stability.</p>
            </div>

            <div className="card">
              <div className="card-icon purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="card-title">Quota Protection</h3>
              <p className="card-text">Built-in smart caching prevents unnecessary API calls, preserving Google API quota units efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Common Verification Questions</h2>
            <p className="section-description">
              Answers to questions regarding Logvera's local development build, API compliance, and project scope.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag green">Developer Information</span>
            <h2 className="section-title">Contact & Developer Verification</h2>
            <p className="section-description">
              Need to verify Logvera's YouTube API compliance or inspect development notes? Send a direct message or review our developer details below.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
};
