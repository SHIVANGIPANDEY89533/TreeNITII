import React from 'react';

const BottomNavbar = () => {
  const styles = {
    navBar: {
      height: '75px',
      backgroundColor: 'white',
      borderTopLeftRadius: '30px',
      borderTopRightRadius: '30px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      boxShadow: '0 -5px 15px rgba(0,0,0,0.05)',
      padding: '0 10px',
    },
    navItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      color: '#6b7280',
      fontSize: '10px',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    active: {
      color: '#064e1b',
    }
  };

  return (
    <nav style={styles.navBar}>
      <div style={{ ...styles.navItem, ...styles.active }}>
        <span style={{ fontSize: '20px' }}>🏠</span>
        <span>Home</span>
      </div>
      <div style={styles.navItem}>
        <span style={{ fontSize: '20px' }}>✔️</span>
        <span>Missions</span>
      </div>
      <div style={styles.navItem}>
        <span style={{ fontSize: '20px' }}>📚</span>
        <span>Articles</span>
      </div>
      <div style={styles.navItem}>
        <span style={{ fontSize: '20px' }}>👥</span>
        <span>Team</span>
      </div>
      <div style={styles.navItem}>
        <span style={{ fontSize: '20px' }}>☰</span>
        <span>Menu</span>
      </div>
    </nav>
  );
};

export default BottomNavbar;