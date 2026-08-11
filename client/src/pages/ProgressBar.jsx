import React from 'react';

const ProgressBar = ({ label, value }) => {
  return (
    <div className="custom-progress-wrapper my-3">
      <div className="custom-progress-label">
        <span className="fw-semibold">{label}</span>
        <span className="gradient-text font-display fw-bold">{value}%</span>
      </div>
      <div className="custom-progress-track">
        <div className="custom-progress-fill" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
