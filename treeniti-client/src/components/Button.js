import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', // primary, transparent
  icon: Icon,          
  iconPosition = 'right', 
  style = {} // To allow passing extra custom styles
}) => {

  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 28px',
    borderRadius: '50px', // Capsule shape for TreeNITI
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s ease',
    gap: '8px',
    width: 'fit-content',
    fontFamily: '"Segoe UI", Roboto, sans-serif',
  };

  // Logic for different button variants
  const variants = {
    primary: {
      backgroundColor: '#064e1b', // TreeNITI Dark Green
      color: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    transparent: {
      backgroundColor: 'transparent',
      color: '#666', // Greyish text for secondary options
    }
  };

  // Combine base styles, variant styles, and any manual overrides
  const finalStyle = { 
    ...baseStyles, 
    ...variants[variant], 
    ...style 
  };

  return (
    <button style={finalStyle} onClick={onClick}>
      {iconPosition === 'left' && Icon && (
        <span style={{ display: 'flex', alignItems: 'center' }}>{Icon}</span>
      )}
      
      <span>{children}</span>
      
      {iconPosition === 'right' && Icon && (
        <span style={{ display: 'flex', alignItems: 'center' }}>{Icon}</span>
      )}
    </button>
  );
};

export default Button;