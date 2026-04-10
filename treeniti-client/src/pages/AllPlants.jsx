import React from 'react';
import TopNavbar from '../components/TopNavbar';
import BottomNavbar from '../components/BottomNavbar';
import Button from '../components/Button'; 

const AllPlants = () => {
  const handleEdit = (plantName) => {
    alert(`Editing ${plantName}...`);
  };

  const styles = {
    container: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #f3faf4 0%, #ffffff 100%)',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    },
    mainTitle: {
      textAlign: 'center',
      color: '#1a1a1a',
      fontSize: '18px',
      fontWeight: '800',
      letterSpacing: '2px',
      margin: '15px 0',
      textTransform: 'uppercase',
    },
    plantList: {
      flex: 1,
      padding: '0 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      overflowY: 'auto',
      paddingBottom: '100px',
    },
    plantItem: {
      backgroundColor: '#064e1b',
      borderRadius: '50px',
      padding: '12px 25px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'white',
      boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    },
    levelBadge: {
      width: '40px',
      height: '40px',
      backgroundColor: 'white',
      color: '#064e1b',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      fontWeight: 'bold',
      marginRight: '12px',
    },
    iconButton: {
      background: 'none',
      border: 'none',
      padding: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      opacity: 0.6,
      transition: 'opacity 0.2s ease',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: '90px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
    }
  };

  /**
   * POINT -> FACING LEFT
   * HEAD -> FACING RIGHT
   */
  const EditIconGraphic = () => (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ transform: 'rotate(-90deg) scaleY(-1)' }} // Rotates and flips to point left exactly
    >
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  );

  return (
    <div style={styles.container}>
      <TopNavbar />

      <h2 style={styles.mainTitle}>PLANTS</h2>

      <div style={styles.plantList}>
        <div style={styles.plantItem}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={styles.levelBadge}>
              <span>Lv.</span>
              <span style={{ fontSize: '15px' }}>3</span>
            </div>
            <span style={{ fontWeight: '600', fontSize: '14px' }}>Money Plant</span>
          </div>
          
          <button 
            style={styles.iconButton} 
            onClick={() => handleEdit('Money Plant')}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
          >
            <EditIconGraphic />
          </button>
        </div>

        <div style={styles.plantItem}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={styles.levelBadge}>
              <span>Lv.</span>
              <span style={{ fontSize: '15px' }}>7</span>
            </div>
            <span style={{ fontWeight: '600', fontSize: '14px' }}>Tingu Plant</span>
          </div>
          
          <button 
            style={styles.iconButton} 
            onClick={() => handleEdit('Tingu Plant')}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
          >
            <EditIconGraphic />
          </button>
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <div style={{ pointerEvents: 'auto' }}>
          <Button 
            variant="primary" 
            icon={<span style={{ fontSize: '20px' }}>+</span>} 
            iconPosition="left"
            onClick={() => alert("Planting new seed!")}
          >
            Plant a New Seed
          </Button>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default AllPlants;