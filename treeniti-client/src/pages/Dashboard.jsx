import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";

export default function Dashboard() {
  const { user }  = useContext(AuthContext);
  const navigate  = useNavigate();

  const tiles = [
    { icon: "🌱", label: "Plant Tree",  path: "/dashboard", bg: "#dcfce7", color: "#166534" },
    { icon: "🪙", label: "Wallet",      path: "/wallet",    bg: "#fef9c3", color: "#854d0e" },
    { icon: "📖", label: "Articles",    path: "/articles",  bg: "#dbeafe", color: "#1e40af" },
    { icon: "🎯", label: "Missions",    path: "/missions",  bg: "#f3e8ff", color: "#6b21a8" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg,#dcfce7 0%,#f0fdf4 40%,#fff 100%)",
      paddingBottom: 72, fontFamily: "sans-serif",
    }}>
      <TopHeader showLogo />

      <main style={{ padding: 16 }}>

        {/* Greeting */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ margin: 0, fontSize: 13, color: "#6b7280" }}>Hello,</p>
          <h2 style={{ margin: "2px 0 0", fontSize: 20, fontWeight: 800, color: "#14532d" }}>
            {user?.name || user?.phone || "User"} 👋
          </h2>
        </div>

        {/* Tree card */}
        <div style={{
          background: "#bbf7d0", borderRadius: 24, padding: 16,
          display: "flex", alignItems: "center", gap: 14, marginBottom: 16,
        }}>
          <img src="/logo.jpeg" alt="tree"
            style={{ width: 72, height: 72, objectFit: "contain" }} />
          <div style={{ flex: 1 }}>
            <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 15, color: "#064e3b" }}>
              Nature Buddy
            </p>
            <p style={{ margin: "0 0 6px", fontSize: 11, color: "#065f46" }}>
              Stage: Seed → Sprout
            </p>
            <div style={{
              width: "100%", height: 7,
              background: "rgba(255,255,255,0.5)", borderRadius: 999,
            }}>
              <div style={{
                width: "22%", height: "100%",
                background: "#16a34a", borderRadius: 999,
              }} />
            </div>
            <p style={{ margin: "4px 0 0", fontSize: 11, color: "#065f46" }}>22% growth</p>
          </div>
          <button style={{
            border: "none", background: "#16a34a", color: "#fff",
            borderRadius: 999, padding: "8px 14px",
            fontSize: 13, cursor: "pointer", whiteSpace: "nowrap",
          }}>
            💧 Water
          </button>
        </div>

        {/* Quick tiles */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 10, marginBottom: 16,
        }}>
          {tiles.map((t) => (
            <div key={t.path} onClick={() => navigate(t.path)} style={{
              borderRadius: 18, padding: "14px 6px",
              textAlign: "center", fontSize: 11,
              fontWeight: 600, cursor: "pointer",
              background: t.bg, color: t.color, lineHeight: 1.8,
            }}>
              <div style={{ fontSize: 22 }}>{t.icon}</div>
              {t.label}
            </div>
          ))}
        </div>

        {/* Notice board */}
        <div style={{
          background: "#fff", borderRadius: 18,
          padding: "14px 16px", marginBottom: 14,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}>
          <h3 style={{ fontSize: 14, margin: "0 0 8px", color: "#374151" }}>
            📢 Notice Board
          </h3>
          <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>
            Ravi ने आज 2 पेड़ लगाए 🌱
          </p>
          <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>
            Priya completed daily mission ✅
          </p>
        </div>

        {/* Articles preview */}
        <div>
          <h3 style={{ fontSize: 14, margin: "0 0 10px", color: "#374151" }}>
            Popular Articles
          </h3>
          {[
            "🌿 Best oxygen plants for home",
            "🌍 How trees save the environment",
          ].map((a, i) => (
            <div key={i} onClick={() => navigate("/articles")} style={{
              background: "#fff", borderRadius: 14,
              padding: "12px 16px", marginBottom: 8,
              fontSize: 13, color: "#374151",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)", cursor: "pointer",
            }}>
              {a}
            </div>
          ))}
        </div>

      </main>
      <BottomNav />
    </div>
  );
}