import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";
import Btn       from "../components/Btn";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate         = useNavigate();

  const menu = [
    { icon: "👥", label: "My Team",            path: "/team"      },
    { icon: "🪙", label: "My Wallet",          path: "/wallet"    },
    { icon: "🎯", label: "Daily Mission",      path: "/missions"  },
    { icon: "📖", label: "Articles",           path: "/articles"  },
    { icon: "🏆", label: "Leaderboard",        path: "/dashboard" },
    { icon: "🌳", label: "Plant a Real Tree",  path: "/dashboard" },
    { icon: "📜", label: "Tree Certificate",   path: "/dashboard" },
    { icon: "❓", label: "Help & Feedback",    path: "/dashboard" },
    { icon: "📋", label: "Terms & Privacy",    path: "/dashboard" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", paddingBottom: 72, fontFamily: "sans-serif" }}>
      <TopHeader title="Profile" showBack />
      <div style={{ padding: 16 }}>

        {/* Avatar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 24 }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, marginBottom: 10 }}>
            👤
          </div>
          <h3 style={{ margin: 0, fontWeight: 700, color: "#14532d" }}>
            {user?.name || "User"}
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: "#6b7280" }}>
            {user?.phone}
          </p>
        </div>

        {/* Menu items */}
        {menu.map((m, i) => (
          <div key={i} onClick={() => navigate(m.path)} style={{ background: "#fff", borderRadius: 14, padding: "14px 16px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12, cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <span style={{ fontSize: 20 }}>{m.icon}</span>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#374151" }}>{m.label}</span>
            <span style={{ color: "#9ca3af", fontSize: 18 }}>›</span>
          </div>
        ))}

        <div style={{ marginTop: 20 }}>
          <Btn variant="danger" full onClick={() => { logout(); navigate("/"); }}>
            🚪 Logout
          </Btn>
        </div>

      </div>
      <BottomNav />
    </div>
  );
}