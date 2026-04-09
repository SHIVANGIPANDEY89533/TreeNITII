import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Btn  from "../components/Btn";
import "./Onboard.css";

export default function Onboard() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");

  return (
    <div className="ob-wrap">

      {/* Same background blobs as Welcome */}
      <div className="ob-blob ob-blob-1" />
      <div className="ob-blob ob-blob-2" />
      <span className="ob-bg-icon" style={{ top: "8%",  left: "6%"  }}>🌿</span>
      <span className="ob-bg-icon" style={{ top: "10%", right: "6%" }}>🌱</span>
      <span className="ob-bg-icon" style={{ bottom: "10%", left: "6%" }}>🌳</span>
      <span className="ob-bg-icon" style={{ bottom: "7%", right: "6%" }}>🍃</span>

      <div className="ob-center">

        {/* Shared Logo component */}
        <Logo size={150} />

        <h1 className="ob-title">TREENITI</h1>
        <p className="ob-tagline">Wellness | Community | Growth</p>

        {/* Language toggle */}
        <div className="ob-lang-row">
          <button
            className={`ob-lang-btn ${lang === "en" ? "ob-lang-active" : ""}`}
            onClick={() => setLang("en")}
          >
            🌐 English
          </button>
          <button
            className={`ob-lang-btn ${lang === "hi" ? "ob-lang-active" : ""}`}
            onClick={() => setLang("hi")}
          >
            🇮🇳 हिंदी
          </button>
        </div>

        {/* Shared Btn component */}
        <Btn full onClick={() => navigate("/login")}>
          {lang === "en" ? "Get Started  →" : "शुरू करें  →"}
        </Btn>

      </div>
    </div>
  );
}