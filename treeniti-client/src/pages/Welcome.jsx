import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import "./Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/onboard"), 2800);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="wlc-wrap">

      {/* Background decorative blobs */}
      <div className="wlc-blob wlc-blob-1" />
      <div className="wlc-blob wlc-blob-2" />

      {/* Background faded icons */}
      <span className="wlc-bg-icon" style={{ top: "8%",  left: "6%"  }}>🌿</span>
      <span className="wlc-bg-icon" style={{ top: "10%", right: "6%" }}>🌱</span>
      <span className="wlc-bg-icon" style={{ bottom: "10%", left: "6%" }}>🌳</span>
      <span className="wlc-bg-icon" style={{ bottom: "7%", right: "6%" }}>🍃</span>

      {/* Center card */}
      <div className="wlc-center">

        {/* Logo — shared component */}
        <div className="wlc-logo-wrap">
          <Logo size={160} />
        </div>

        {/* App name */}
        <h1 className="wlc-title">TREENITI</h1>
        <p className="wlc-tagline">Wellness | Community | Growth</p>

        {/* Animated loading dots */}
        <div className="wlc-dots">
          <span className="wlc-dot" />
          <span className="wlc-dot" />
          <span className="wlc-dot" />
        </div>
      </div>

    </div>
  );
}