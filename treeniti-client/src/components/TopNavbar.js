import React from 'react';

const TopNavbar = () => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: 'transparent',
      /* Subtle lift to separate from background */
      zIndex: 100,
    },
    profileSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
    },
    avatarWrapper: {
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      padding: '2px', // Border gap
      background: 'linear-gradient(135deg, #064e1b, #15803d)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 10px rgba(6, 78, 27, 0.2)',
    },
    avatar: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: '#1a2e35',
      overflow: 'hidden',
      border: '2px solid white',
    },
    brandGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    brandName: {
      color: '#064e1b',
      fontWeight: '900',
      fontSize: '18px',
      letterSpacing: '1.5px',
      lineHeight: '1',
      textShadow: '0.5px 0.5px 0px rgba(0,0,0,0.05)',
    },
    brandTagline: {
      fontSize: '8px',
      color: '#15803d',
      fontWeight: '600',
      letterSpacing: '1px',
      marginTop: '2px',
    },
    stats: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
    },
    pointsBadge: {
      background: 'rgba(255, 255, 255, 0.7)', // Semi-transparent glass effect
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      borderRadius: '12px', // Slightly more modern radius
      padding: '6px 12px',
      fontSize: '12px',
      fontWeight: '800',
      color: '#064e1b',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
    },
    iconBadge: {
      backgroundColor: '#064e1b',
      width: '32px',
      height: '32px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      boxShadow: '0 4px 8px rgba(6, 78, 27, 0.3)',
      cursor: 'pointer',
    }
  };

  return (
    <header style={styles.header}>
      {/* Brand & Profile */}
      <div style={styles.profileSection}>
        <div style={styles.avatarWrapper}>
          <div style={styles.avatar}>
            <img 
              src="/avatar-placeholder.png" 
              alt="User" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
        <div style={styles.brandGroup}>
          <span style={styles.brandName}>TREENITI</span>
          <span style={styles.brandTagline}>GROW TOGETHER</span>
        </div>
      </div>

      {/* Points & Stats */}
      <div style={styles.stats}>
        <div style={styles.pointsBadge}>
          <span style={{ color: '#fbbf24' }}>★</span>
          4,500
        </div>
        <div style={styles.iconBadge}>
          <span style={{ filter: 'brightness(0) invert(1)', fontSize: '14px' }}>📖</span>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;