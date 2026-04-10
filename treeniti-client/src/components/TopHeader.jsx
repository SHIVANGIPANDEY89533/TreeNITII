import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Logo from "./Logo";

export default function TopHeader({ title, showBack = false, showLogo = false }) {
  const { user }  = useContext(AuthContext);
  const navigate  = useNavigate();

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", justifyContent: "space-between",
      alignItems: "center", padding: "12px 16px",
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid #f0f0f0",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {showBack && (
          <button onClick={() => navigate(-1)} style={{
            background: "none", border: "none",
            fontSize: 20, cursor: "pointer", color: "#374151",
          }}>
            ←
          </button>
        )}
        {showLogo && <Logo size={34} />}
        {title && (
          <span style={{ fontSize: 16, fontWeight: 700, color: "#14532d" }}>
            {title}
          </span>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{
          fontSize: 13, fontWeight: 700,
          background: "#fef9c3", color: "#854d0e",
          padding: "4px 10px", borderRadius: 999,
        }}>
          🪙 {user?.coins || 0}
        </span>
        <span
          onClick={() => navigate("/team")}
          style={{
            fontSize: 12, fontWeight: 600,
            color: "#16a34a", cursor: "pointer",
          }}
        >
          🔗 Refer
        </span>
      </div>
    </header>
  );
}