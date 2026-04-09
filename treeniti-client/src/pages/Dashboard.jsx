import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Dashboard.css";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dash-wrap">
      <header className="dash-header">
        <div>
          <span className="dash-greet">Hello,</span>
          <span className="dash-name"> {user?.phone}</span>
        </div>
        <div className="dash-coins">🪙 320</div>
        <button className="dash-logout" onClick={logout}>Logout</button>
      </header>

      <main className="dash-main">
        {/* Tree card */}
        <section className="tree-card">
          <div className="tree-icon">🌳</div>
          <div className="tree-info">
            <p className="tree-name">Nature Buddy</p>
            <p className="tree-stage">Seed → Sprout</p>
            <div className="tree-bar-bg">
              <div className="tree-bar-fill" style={{ width: "22%" }} />
            </div>
            <p className="tree-pct">22% growth</p>
          </div>
          <button className="tree-water">💧 Water</button>
        </section>

        {/* Quick tiles */}
        <div className="dash-tiles">
          <div className="tile green">🌱<br />Plant Tree</div>
          <div className="tile yellow">🪙<br />Earn Coins</div>
          <div className="tile blue">📖<br />Articles</div>
          <div className="tile purple">🎯<br />Missions</div>
        </div>

        {/* Notice board */}
        <section className="notice-board">
          <h3>📢 Notice Board</h3>
          <p>Ravi ने आज 2 पेड़ लगाए 🌱</p>
          <p>Priya completed daily mission ✅</p>
        </section>

        {/* Articles */}
        <section className="articles">
          <h3>Popular Articles</h3>
          <div className="article-card">🌿 Best oxygen plants for home</div>
          <div className="article-card">🌍 How trees save the environment</div>
        </section>
      </main>

      {/* Bottom nav */}
      <nav className="bottom-nav">
        <span>🏠<br/>Home</span>
        <span>🎯<br/>Missions</span>
        <span>📖<br/>Articles</span>
        <span>👥<br/>Team</span>
        <span>☰<br/>More</span>
      </nav>
    </div>
  );
}