import React from 'react';
import { FaBars, FaCoins, FaPaperPlane, FaHome, FaTint, FaPlus, FaLeaf, FaEllipsisH, FaStar } from 'react-icons/fa';

export default function Home() {
  const userName = "Alok Chaudhary";

  // --- INTERNAL STYLES ---
  const styles = {
    homeWrap: {
      backgroundColor: '#f6fdf6',
      minHeight: '100vh',
      paddingBottom: '100px',
      fontFamily: 'Inter, sans-serif',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: 'white',
    },
    statPill: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      backgroundColor: '#f0f0f0',
      padding: '5px 12px',
      borderRadius: '20px',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    heroBanner: {
      height: '160px',
      margin: '15px',
      backgroundImage: 'url("https://images.unsplash.com/photo-1542601906-913b0d81c559?auto=format&fit=crop&w=800&q=80")',
      backgroundSize: 'cover',
      borderRadius: '20px',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      padding: '15px'
    },
    hiBadge: {
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(5px)',
      color: 'white',
      padding: '6px 15px',
      borderRadius: '15px',
      fontWeight: 'bold',
      border: '1px solid rgba(255,255,255,0.4)',
    },
    actionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      padding: '15px',
    },
    actionCard: {
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '15px 10px',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
      border: '1px solid #eef7ee',
    },
    noticeItem: {
      display: 'flex',
      gap: '12px',
      marginBottom: '10px',
      backgroundColor: '#f9f9f9',
      padding: '10px',
      borderRadius: '50px',
    },
    plusBtn: {
      backgroundColor: '#0D330A',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      border: '4px solid white',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      position: 'absolute',
      top: '-35px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '70px',
      backgroundColor: '#66BB6A',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: '25px 25px 0 0',
      padding: '0 10px',
      zIndex: 1000
    }
  };

  return (
    <div style={styles.homeWrap}>
      {/* 1. HEADER */}
      <div style={styles.header}>
        <FaBars color="#144011" size={20} />
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={styles.statPill}><FaCoins color="#FFD700" /> 4500</div>
          <div style={{ ...styles.statPill, backgroundColor: '#E8F5E9' }}><FaPaperPlane color="#2E7D32" /> Refer</div>
        </div>
        <div style={{ width: 35, height: 35, borderRadius: '50%', backgroundColor: '#333' }}></div>
      </div>

      {/* 2. HERO BANNER */}
      <div style={styles.heroBanner}>
        <span style={styles.hiBadge}>HI , {userName}</span>
      </div>

      {/* 3. QUICK ACTIONS */}
      <div style={styles.actionsGrid}>
        {["Plant A Tree", "Daily Check In", "Weekly Loot", "Certificate", "Real Tree", "Follow & Earn"].map((label, i) => (
          <div key={i} style={styles.actionCard}>
            <div style={{ fontSize: '24px', marginBottom: '5px' }}>🍃</div>
            <p style={{ fontSize: '10px', fontWeight: '800', margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>

      {/* 4. NOTICE BOARD */}
      <div style={{ background: 'white', margin: '15px', borderRadius: '20px', padding: '15px' }}>
        <p style={{ fontSize: '14px', fontWeight: '800', color: '#144011', marginBottom: '15px' }}>📢 Notice Board (Scroll)</p>
        <div style={styles.noticeItem}>
          <div style={{ width: 35, height: 35, borderRadius: '50%', background: '#ffe4e6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>AC</div>
          <div style={{ fontSize: '12px' }}>
            <strong>Alok</strong> earned 20 coins <br/> <span style={{ color: '#999' }}>2m ago</span>
          </div>
        </div>
      </div>

      {/* 5. LEADERBOARD */}
      <div style={{ margin: '15px', background: '#FFCCBC', borderRadius: '20px', padding: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#BF360C', fontWeight: '900' }}>
          <span>Leaderboard</span> <FaStar />
        </div>
        <div style={{ marginTop: '10px', fontSize: '13px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>1. Avinash</span> <strong>700</strong></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>2. Harish</span> <strong>600</strong></div>
        </div>
      </div>

      {/* 6. FOUNDER */}
      <div style={{ background: 'white', margin: '15px', padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{ width: 70, height: 70, borderRadius: '50%', border: '3px solid #144011', backgroundColor: '#ddd' }}></div>
          <span style={{ position: 'absolute', bottom: -5, left: '50%', transform: 'translateX(-50%)', background: '#144011', color: 'white', fontSize: '8px', padding: '2px 8px', borderRadius: '10px' }}>FOUNDER</span>
        </div>
        <p style={{ fontWeight: '800', fontSize: '13px', marginTop: '15px', marginBottom: '0' }}>MR. ALOK CHAUDHARY</p>
        <p style={{ fontSize: '10px', color: '#666' }}>CEO @ TREENITI</p>
      </div>

      {/* 7. BOTTOM NAVIGATION */}
      <div style={styles.bottomNav}>
        <div style={{ color: 'white', textAlign: 'center' }}><FaHome size={20}/><p style={{fontSize: 8, margin: 0}}>Home</p></div>
        <div style={{ color: 'white', textAlign: 'center' }}><FaTint size={20}/><p style={{fontSize: 8, margin: 0}}>Add Water</p></div>
        <div style={{ position: 'relative', width: 70 }}>
          <div style={styles.plusBtn}>
            <FaPlus size={20} />
            <p style={{ fontSize: '7px', margin: '4px 0 0 0', fontWeight: 'bold' }}>PHOTO</p>
          </div>
        </div>
        <div style={{ color: 'white', textAlign: 'center' }}><FaLeaf size={20}/><p style={{fontSize: 8, margin: 0}}>Fertilizer</p></div>
        <div style={{ color: 'white', textAlign: 'center' }}><FaEllipsisH size={20}/><p style={{fontSize: 8, margin: 0}}>More</p></div>
      </div>
    </div>
  );
}