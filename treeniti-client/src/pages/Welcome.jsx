import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/onboard"), 3000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div style={{
      minHeight: "100vh", width: "100%",
      background: "linear-gradient(180deg, #f5faf0 0%, #ffffff 60%, #fdf6f0 100%)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
    }}>

      {/* Faded background icons */}
      <span style={{ position: "absolute", top: "12%", left: "8%", fontSize: 56, opacity: 0.08 }}>🌿</span>
      <span style={{ position: "absolute", top: "15%", right: "8%", fontSize: 44, opacity: 0.07 }}>🌱</span>
      <span style={{ position: "absolute", bottom: "18%", left: "6%", fontSize: 60, opacity: 0.07 }}>🌳</span>
      <span style={{ position: "absolute", bottom: "12%", right: "8%", fontSize: 44, opacity: 0.07 }}>🍃</span>

      {/* Logo */}
      <img
        src="/logo.jpeg"
        alt="Treeniti"
        style={{ width: 150, height: 150, objectFit: "contain", marginBottom: 24 }}
      />

      {/* App name */}
      <h1 style={{
        fontSize: 28, fontWeight: 900, color: "#1a3a1a",
        letterSpacing: 4, margin: "0 0 8px", textAlign: "center",
      }}>
        TREENITI
      </h1>

      {/* Tagline */}
      <p style={{
        fontSize: 13, color: "#6b7280",
        letterSpacing: 1.2, margin: 0,
      }}>
        Wellness | Community | Growth
      </p>

      <style>{`
        @keyframes blink {
          0%,80%,100% { opacity:0.2; transform:scale(0.7); }
          40% { opacity:1; transform:scale(1.2); }
        }
      `}</style>
    </div>
  );
}