import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
  { label: "Home",     icon: "🏠", path: "/dashboard" },
  { label: "Missions", icon: "🎯", path: "/missions"  },
  { label: "Articles", icon: "📖", path: "/articles"  },
  { label: "Team",     icon: "👥", path: "/team"      },
  { label: "More",     icon: "☰",  path: "/profile"   },
];

export default function BottomNav() {
  const navigate      = useNavigate();
  const { pathname }  = useLocation();

  return (
    <nav style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      height: 64, background: "#fff",
      borderTop: "1px solid #e5e7eb",
      display: "flex", justifyContent: "space-around",
      alignItems: "center", zIndex: 100,
    }}>
      {tabs.map((t) => {
        const active = pathname === t.path;
        return (
          <button
            key={t.path}
            onClick={() => navigate(t.path)}
            style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", background: "none",
              border: "none", cursor: "pointer", padding: "6px 10px",
            }}
          >
            <span style={{ fontSize: 20 }}>{t.icon}</span>
            <span style={{
              fontSize: 10, marginTop: 2,
              color:      active ? "#16a34a" : "#6b7280",
              fontWeight: active ? 700 : 400,
            }}>
              {t.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}