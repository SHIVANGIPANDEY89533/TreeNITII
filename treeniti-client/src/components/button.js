import React from 'react';
import './Button.css'; // We will define styles here

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', // primary, outline, transparent
  icon: Icon,          // To pass Lucide icons or SVG components
  iconPosition = 'right', 
  className = '' 
}) => {
  return (
    <button 
      className={`custom-btn ${variant} ${className}`} 
      onClick={onClick}
    >
      {iconPosition === 'left' && Icon && <span className="btn-icon left">{Icon}</span>}
      
      <span className="btn-text">{children}</span>
      
      {iconPosition === 'right' && Icon && <span className="btn-icon right">{Icon}</span>}
    </button>
  );
};

export default Button;