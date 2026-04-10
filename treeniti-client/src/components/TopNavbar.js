import React from 'react';

const TopNavbar = () => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'transparent',
    },
    profileSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#1a2e35',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    brandName: {
      color: '#064e1b',
      fontWeight: '900',
      fontSize: '18px',
      letterSpacing: '1px',
    },
    stats: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
    },
    pointsBadge: {
      backgroundColor: '#f3faf4',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      padding: '5px 12px',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#064e1b',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.profileSection}>
        <div style={styles.avatar}>
          <img src="/avatar-placeholder.png" alt="User" style={{ width: '100%', borderRadius: '50%' }} />
        </div>
        <span style={styles.brandName}>TREENITI</span>
      </div>
      <div style={styles.stats}>
        <div style={styles.pointsBadge}>• 4500</div>
        <div style={{ ...styles.pointsBadge, padding: '5px' }}>📖</div>
      </div>
    </header>
  );
};

export default TopNavbar;