import { useNavigate, useLocation } from "react-router-dom";
import "./BottomNav.css";

const tabs = [
  { label: "Home",     icon: "🏠", path: "/dashboard" },
  { label: "Missions", icon: "🎯", path: "/missions"  },
  { label: "Articles", icon: "📖", path: "/articles"  },
  { label: "Team",     icon: "👥", path: "/team"      },
  { label: "More",     icon: "☰",  path: "/more"      },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="bnav">
      {tabs.map((t) => (
        <button
          key={t.path}
          className={`bnav-item ${pathname === t.path ? "bnav-active" : ""}`}
          onClick={() => navigate(t.path)}
        >
          <span className="bnav-icon">{t.icon}</span>
          <span className="bnav-label">{t.label}</span>
        </button>
      ))}
    </nav>
  );
}