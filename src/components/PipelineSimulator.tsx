import React, { useState } from 'react';

interface ScenarioData {
  product: string;
  topics: string[];
  queries: string[];
  issues: { issue: string; severity: 'High' | 'Medium' | 'Low'; count: number }[];
}

const sampleScenarios: Record<string, ScenarioData> = {
  ide: {
    product: "Cloud Code Editor IDE",
    topics: ["Debugger Extensions", "Workspace Memory Usage", "Git Merge Conflicts", "Plugin API"],
    queries: [
      '"Cloud Code Editor IDE" debugger bug',
      '"Cloud Code Editor" memory leak 2026',
      '"Cloud Code Editor" extensions crash'
    ],
    issues: [
      { issue: "High RAM consumption during large file indexing", severity: "High", count: 142 },
      { issue: "Language Server Protocol connection timeout", severity: "Medium", count: 89 },
      { issue: "Theme color contrast in diff viewer", severity: "Low", count: 34 }
    ]
  },
  database: {
    product: "PostgreSQL Admin Client GUI",
    topics: ["SSL Handshake Failure", "Query Export CSV", "Connection Pooling", "Migration Runner"],
    queries: [
      '"PostgreSQL Admin Client" connection reset',
      '"PostgreSQL Admin GUI" slow export',
      '"PostgreSQL Client" schema sync error'
    ],
    issues: [
      { issue: "SSL Certificate verification failing on macOS Sequoia", severity: "High", count: 96 },
      { issue: "Large table export hangs above 500k rows", severity: "High", count: 81 },
      { issue: "Auto-completion latency on complex CTE queries", severity: "Low", count: 42 }
    ]
  },
  video: {
    product: "Desktop Video Renderer Pro",
    topics: ["GPU Acceleration", "Audio Sync Drift", "4K H.265 Export", "Color Grading"],
    queries: [
      '"Video Renderer Pro" GPU acceleration crash',
      '"Video Renderer Pro" audio lag timeline',
      '"Video Renderer Pro" export error code 104'
    ],
    issues: [
      { issue: "NVIDIA driver crash during H.265 hardware encode", severity: "High", count: 215 },
      { issue: "Audio desynchronization on 60fps footage", severity: "Medium", count: 118 },
      { issue: "LUT preset preview thumbnail rendering slow", severity: "Low", count: 57 }
    ]
  }
};

export const PipelineSimulator: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('ide');
  const [isProcessing, setIsProcessing] = useState(false);

  const scenario = sampleScenarios[selectedKey] || sampleScenarios.ide;

  const handleRunSim = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 500);
  };

  return (
    <div className="simulator-box">
      <div className="simulator-header">
        <div className="simulator-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--primary)' }}>
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          Interactive Pipeline Simulation (Local Test Mode)
        </div>
        <div className="simulator-controls">
          <label htmlFor="simScenarioSelect" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Sample Product Target:</label>
          <select 
            id="simScenarioSelect" 
            className="sim-select"
            value={selectedKey}
            onChange={(e) => setSelectedKey(e.target.value)}
          >
            <option value="ide">Cloud Code Editor IDE</option>
            <option value="database">PostgreSQL Admin Client GUI</option>
            <option value="video">Desktop Video Renderer Pro</option>
          </select>
          <button 
            onClick={handleRunSim} 
            disabled={isProcessing} 
            className="btn btn-primary btn-sm"
          >
            {isProcessing ? 'Processing API Simulation...' : 'Simulate Local Pipeline'}
          </button>
        </div>
      </div>

      <div className="sim-output">
        <div className="sim-col">
          <div className="sim-col-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Discovered Topics
          </div>
          {scenario.topics.map((t, idx) => (
            <div key={idx} className="sim-item">
              <span>{t}</span>
              <span className="sim-badge blue">Discovered</span>
            </div>
          ))}
        </div>

        <div className="sim-col">
          <div className="sim-col-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            Targeted Search Queries
          </div>
          {scenario.queries.map((q, idx) => (
            <div key={idx} className="sim-item">
              <code style={{ fontSize: '0.8rem', color: '#1e293b' }}>{q}</code>
              <span className="sim-badge green">Read-Only</span>
            </div>
          ))}
        </div>

        <div className="sim-col">
          <div className="sim-col-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            Detected Issue Clusters
          </div>
          {scenario.issues.map((item, idx) => {
            const badgeClass = item.severity === 'High' ? 'red' : item.severity === 'Medium' ? 'blue' : 'green';
            return (
              <div key={idx} className="sim-item">
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{item.issue}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{item.count} public feedback reports</div>
                </div>
                <span className={`sim-badge ${badgeClass}`}>{item.severity}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
