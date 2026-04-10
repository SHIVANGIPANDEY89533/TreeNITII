import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";

const articles = [
  { title: "Best oxygen plants for home",       coins: 30, time: "3 min read" },
  { title: "How trees save the environment",    coins: 30, time: "4 min read" },
  { title: "Benefits of planting trees",        coins: 30, time: "2 min read" },
  { title: "How to grow plants indoors",        coins: 40, time: "5 min read" },
  { title: "Tree species found in India",       coins: 50, time: "6 min read" },
];

export default function Articles() {
  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", paddingBottom: 72, fontFamily: "sans-serif" }}>
      <TopHeader title="Articles" showBack />
      <div style={{ padding: 16 }}>
        {articles.map((a, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 18, padding: 16, marginBottom: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", cursor: "pointer" }}>
            <div style={{ background: "#dcfce7", borderRadius: 12, height: 80, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, marginBottom: 10 }}>
              🌿
            </div>
            <h4 style={{ margin: "0 0 6px", fontSize: 14, color: "#14532d" }}>{a.title}</h4>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#9ca3af" }}>{a.time}</span>
              <span style={{ fontSize: 12, background: "#dcfce7", color: "#16a34a", padding: "3px 10px", borderRadius: 999 }}>
                +{a.coins} coins
              </span>
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}