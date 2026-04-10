import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";

const missions = [
  { icon: "✅", label: "Daily Login",    coins: 50,  done: true  },
  { icon: "📖", label: "Read Article",   coins: 30,  done: false },
  { icon: "💧", label: "Water Tree",     coins: 20,  done: false },
  { icon: "🎰", label: "Spin Wheel",     coins: 100, done: false },
  { icon: "👥", label: "Invite Friend",  coins: 150, done: false },
];

export default function Missions() {
  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", paddingBottom: 72, fontFamily: "sans-serif" }}>
      <TopHeader title="Daily Missions" showBack />
      <div style={{ padding: 16 }}>

        {/* Lucky spin */}
        <div style={{ background: "linear-gradient(135deg,#14532d,#16a34a)", borderRadius: 24, padding: 20, color: "#fff", marginBottom: 20, textAlign: "center" }}>
          <p style={{ margin: "0 0 4px", fontSize: 13, opacity: 0.85 }}>Lucky Forest Spin 🛞</p>
          <p style={{ margin: "0 0 16px", fontSize: 11, opacity: 0.7 }}>Daily chance to multiply your impact</p>
          <button style={{ background: "#fff", color: "#16a34a", border: "none", borderRadius: 999, padding: "10px 32px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            SPIN
          </button>
        </div>

        <h3 style={{ fontSize: 14, margin: "0 0 12px", color: "#374151" }}>Today's Tasks</h3>
        {missions.map((m, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "14px 16px", marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>{m.icon}</span>
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>{m.label}</p>
                <p style={{ margin: "2px 0 0", fontSize: 11, color: "#16a34a" }}>+{m.coins} coins</p>
              </div>
            </div>
            <button style={{ border: "none", borderRadius: 999, padding: "6px 16px", fontSize: 12, fontWeight: 700, cursor: m.done ? "not-allowed" : "pointer", background: m.done ? "#f3f4f6" : "#dcfce7", color: m.done ? "#9ca3af" : "#16a34a" }}>
              {m.done ? "Done ✓" : "Claim"}
            </button>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}