import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";
import Btn       from "../components/Btn";

export default function Wallet() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#fef9c3,#fffbeb,#fff)", paddingBottom: 72, fontFamily: "sans-serif" }}>
      <TopHeader title="Wallet" showBack />
      <div style={{ padding: 16 }}>
        <div style={{ background: "#16a34a", borderRadius: 24, padding: 24, color: "#fff", marginBottom: 16 }}>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.8 }}>Total Balance</p>
          <h2 style={{ margin: "8px 0 4px", fontSize: 36, fontWeight: 900 }}>🪙 5000</h2>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.8 }}>₹ 50.00</p>
          <p style={{ margin: "8px 0 0", fontSize: 11, opacity: 0.7 }}>Minimum withdrawal: ₹10</p>
        </div>
        <Btn full>Withdraw via UPI →</Btn>
        <h3 style={{ fontSize: 14, margin: "20px 0 10px", color: "#374151" }}>Transaction History</h3>
        {[
          { label: "Referral Bonus",  coins: "+500", date: "Today",     color: "#16a34a" },
          { label: "Tree Harvest",    coins: "+200", date: "Yesterday", color: "#16a34a" },
          { label: "UPI Withdrawal",  coins: "-₹20", date: "2 days ago",color: "#dc2626" },
        ].map((t, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "12px 16px", marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <div>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>{t.label}</p>
              <p style={{ margin: "2px 0 0", fontSize: 11, color: "#9ca3af" }}>{t.date}</p>
            </div>
            <span style={{ fontWeight: 700, color: t.color }}>{t.coins}</span>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}