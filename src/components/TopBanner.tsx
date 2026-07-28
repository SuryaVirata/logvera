import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <div className="status-top-banner" role="region" aria-label="Project Status Notice">
      <span className="banner-badge">Notice</span>
      <span>
        <strong>Logvera is a personal software engineering project.</strong>
        {' '}It runs in a local development environment, is not publicly accessible, and complies with YouTube API Services Policies.
      </span>
    </div>
  );
};
