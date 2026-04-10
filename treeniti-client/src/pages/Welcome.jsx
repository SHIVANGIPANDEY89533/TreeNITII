import React, { useState } from 'react';

const Welcome = () => {
  const [lang, setLang] = useState('en');

  // --- Style Objects ---
  const styles = {
    container: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #f3faf4 0%, #ffffff 100%)',
      margin: 0,
      padding: '20px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    main: {
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '400px',
    },
    logo: {
      width: '500px',
      height: 'auto',
      marginBottom: '20px'
    },
    title: {
      color: '#064e1b',
      fontSize: '36px',
      fontWeight: '800',
      letterSpacing: '3px',
      margin: 0,
      textTransform: 'uppercase'
    },
    tagline: {
      color: '#4a4a4a',
      fontSize: '15px',
      marginTop: '8px',
      fontWeight: '500',
      opacity: 0.8
    },
    languageCapsule: {
      marginTop: '50px',
      backgroundColor: '#eeeeee',
      padding: '6px',
      borderRadius: '50px',
      display: 'flex',
      gap: '5px'
    },
    footerAction: {
      marginTop: '60px',
      width: '100%'
    }
  };

  return (
    <div style={styles.container}>
      {/* Centered Main Content */}
      <main style={styles.main}>
        
        {/* Branding */}
        <div style={{ textAlign: 'center' }}>
          <img src="/logo.png" alt="TreeNITI Logo" style={styles.logo} />
        </div>
      </main>
    </div>
  );
};

export default Welcome; 