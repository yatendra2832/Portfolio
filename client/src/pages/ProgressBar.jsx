import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ label, value, color, textColor }) => {
  return (
    <div className="progress my-3" role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <div className={`progress-bar ${color} ${textColor}`} style={{ width: `${value}%` }}>
        {value}% {label}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  textColor: '',
};

export default ProgressBar;
