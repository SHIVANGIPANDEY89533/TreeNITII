import { useNavigate } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";
import Btn       from "../components/Btn";

export default function Team() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", paddingBottom: 72, fontFamily: "sans-serif" }}>
      <TopHeader title="My Team" showBack />
      <div style={{ padding: 16 }}>

        {/* Earnings card */}
        <div style={{ background: "#16a34a", borderRadius: 24, padding: 24, color: "#fff", marginBottom: 16 }}>
          <p style={{ margin: "0 0 4px", fontSize: 13, opacity: 0.85 }}>Total Referral Earnings</p>
          <h2 style={{ margin: "0 0 16px", fontSize: 32, fontWeight: 900 }}>₹ 250</h2>
          <Btn variant="outline" style={{ borderColor: "#fff", color: "#fff" }}>
            🔗 Share Invite Link
          </Btn>
        </div>

        {/* Milestones */}
        <div style={{ background: "#fff", borderRadius: 18, padding: 16, marginBottom: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: 14, margin: "0 0 12px", color: "#374151" }}>Growth Milestones</h3>
          {[
            { label: "Friend Joins",      reward: "₹5",  done: true  },
            { label: "Active 3 Days",     reward: "₹6",  done: true  },
            { label: "Active 7 Days",     reward: "₹10", done: false },
          ].map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < 2 ? "1px solid #f3f4f6" : "none" }}>
              <span style={{ fontSize: 13, color: "#374151" }}>{m.label}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: m.done ? "#16a34a" : "#9ca3af" }}>
                {m.done ? "✅ " : ""}{m.reward}
              </span>
            </div>
          ))}
        </div>

        {/* Commission levels */}
        <div style={{ background: "#fff", borderRadius: 18, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: 14, margin: "0 0 12px", color: "#374151" }}>Multi-Level Commission</h3>
          <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <div>
              <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, margin: "0 auto 6px" }}>A</div>
              <p style={{ margin: 0, fontSize: 11, color: "#6b7280" }}>You</p>
            </div>
            <div style={{ alignSelf: "center", color: "#9ca3af" }}>→ 5%</div>
            <div>
              <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, margin: "0 auto 6px" }}>B</div>
              <p style={{ margin: 0, fontSize: 11, color: "#6b7280" }}>Level 1</p>
            </div>
            <div style={{ alignSelf: "center", color: "#9ca3af" }}>→ 2%</div>
            <div>
              <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#f3e8ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, margin: "0 auto 6px" }}>C</div>
              <p style={{ margin: 0, fontSize: 11, color: "#6b7280" }}>Level 2</p>
            </div>
          </div>
        </div>

      </div>
      <BottomNav />
    </div>
  );
}