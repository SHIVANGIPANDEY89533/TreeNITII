import React from 'react';

const TermsAndConditions = ({ onClose }) => {
  const styles = {
    // Backdrop that covers the full Login page
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dimmed background
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px',
      boxSizing: 'border-box',
    },
    // The Popup Card (Modal)
    card: {
      width: '100%',
      maxWidth: '450px',
      height: '80vh',
      backgroundColor: '#ffffff',
      borderRadius: '30px',
      border: '1px solid #064e1b',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden', // Keeps the green bar area clean
    },
    // The "Scroll Up" Handle Bar (Fixed at top)
    topHandleArea: {
      paddingTop: '20px',
      paddingBottom: '10px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    topBar: {
      width: '50px',
      height: '5px',
      backgroundColor: '#064e1b',
      borderRadius: '10px',
    },
    // Scrollable content area
    scrollArea: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 30px 30px 30px',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
    },
    section: {
      marginBottom: '30px',
    },
    heading: {
      color: '#064e1b',
      fontSize: '16px',
      fontWeight: '800',
      letterSpacing: '1px',
      marginBottom: '10px',
      textTransform: 'uppercase',
    },
    text: {
      color: '#4b5563',
      fontSize: '13px',
      lineHeight: '1.6',
      textAlign: 'justify',
    }
  };

  return (
    // Clicking the dark background closes the popup
    <div style={styles.overlay} onClick={onClose}>
      {/* StopPropagation prevents the card from closing when clicking inside it */}
      <div style={styles.card} onClick={(e) => e.stopPropagation()}>
        
        {/* Handle bar area */}
        <div style={styles.topHandleArea} onClick={onClose}>
          <div style={styles.topBar}></div>
        </div>

        <div style={styles.scrollArea}>
          <div style={styles.section}>
            <h2 style={styles.heading}>TERMS</h2>
            <p style={styles.text}>
              Welcome to TreeNITI. By using our wellness platform, you agree to
              maintain the community standards of growth and mindfulness.
              Users are responsible for the accuracy of the data provided during registration.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.heading}>CONDITIONS</h2>
            <p style={styles.text}>
              All content provided on TreeNITI is for informational purposes only.
              We reserve the right to modify services to better serve our
              community's wellness journey. Your privacy is protected under our
              standard encryption protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;