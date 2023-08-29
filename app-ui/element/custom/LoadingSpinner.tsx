// LoadingSpinner.js

import React from 'react';

const spinnerStyles = {
  display: 'inline-block',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: '5px solid rgba(255, 255, 255, .3)',
  borderColor: 'rgba(0, 0, 0, .3) transparent transparent transparent',
  animation: 'spin 1.2s linear infinite',
};

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const LoadingSpinner = () => (
  <div style={containerStyles}>
    <div style={spinnerStyles}></div>
    <style jsx global>{`
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
