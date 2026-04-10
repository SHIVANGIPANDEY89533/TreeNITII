import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboard() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #f5faf0 0%, #ffffff 50%, #fdf6f0 100%)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "'Segoe UI', sans-serif",
      padding: "60px 24px 40px",
      position: "relative", overflow: "hidden",
    }}>

      {/* Faded bg icons */}
      <span style={{ position: "absolute", top: "10%", left: "6%",  fontSize: 52, opacity: 0.07 }}>🌿</span>
      <span style={{ position: "absolute", top: "12%", right: "6%", fontSize: 44, opacity: 0.07 }}>🌱</span>
      <span style={{ position: "absolute", bottom: "16%", left: "5%",  fontSize: 60, opacity: 0.07 }}>🌳</span>
      <span style={{ position: "absolute", bottom: "10%", right: "6%", fontSize: 44, opacity: 0.07 }}>🍃</span>

      {/* Top section — logo + title */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="/logo.jpeg"
          alt="Treeniti"
          style={{ width: 130, height: 130, objectFit: "contain", marginBottom: 16 }}
        />
        <h1 style={{
          fontSize: 26, fontWeight: 900, color: "#1a3a1a",
          letterSpacing: 4, margin: "0 0 6px", textAlign: "center",
        }}>
          TREENITI
        </h1>
        <p style={{ fontSize: 13, color: "#6b7280", margin: 0, letterSpacing: 1 }}>
          Wellness | Community | Growth
        </p>
      </div>

      {/* Middle section — language toggle */}
      <div style={{
        display: "flex", gap: 0,
        background: "#f3f4f6", borderRadius: 999,
        padding: 4, width: "fit-content",
      }}>
        <button
          onClick={() => setLang("en")}
          style={{
            border: "none", borderRadius: 999,
            padding: "8px 24px", fontSize: 13, fontWeight: 600,
            cursor: "pointer", transition: "all 0.18s",
            background: lang === "en" ? "#2d5a27" : "transparent",
            color: lang === "en" ? "#fff" : "#6b7280",
          }}
        >
          English 🌐
        </button>
        <button
          onClick={() => setLang("hi")}
          style={{
            border: "none", borderRadius: 999,
            padding: "8px 24px", fontSize: 13, fontWeight: 600,
            cursor: "pointer", transition: "all 0.18s",
            background: lang === "hi" ? "#2d5a27" : "transparent",
            color: lang === "hi" ? "#fff" : "#6b7280",
          }}
        >
          हिंदी
        </button>
      </div>

      {/* Bottom section — Get Started button */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 32 }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            width: "100%", padding: "16px",
            border: "none", borderRadius: 999,
            background: "#2d5a27", color: "#fff",
            fontSize: 16, fontWeight: 700,
            cursor: "pointer", letterSpacing: 0.5,
            boxShadow: "0 4px 16px rgba(45,90,39,0.3)",
          }}
        >
          {lang === "en" ? "Get Started →" : "शुरू करें →"}
        </button>

        {/* Bottom 3 icons row */}
        <div style={{ display: "flex", justifyContent: "space-around", opacity: 0.25 }}>
          <span style={{ fontSize: 32 }}>🌱</span>
          <span style={{ fontSize: 32 }}>🌳</span>
          <span style={{ fontSize: 32 }}>🍃</span>
        </div>
      </div>

    </div>
  );
}