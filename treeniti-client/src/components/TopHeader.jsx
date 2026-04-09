import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Logo from "./Logo";
import "./TopHeader.css";

export default function TopHeader({ title, showBack = false, showLogo = false }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="thead">
      <div className="thead-left">
        {showBack && (
          <button className="thead-back" onClick={() => navigate(-1)}>←</button>
        )}
        {showLogo && <Logo size={32} />}
        {title && <span className="thead-title">{title}</span>}
      </div>
      <div className="thead-right">
        <span className="thead-coins">🪙 {user?.coins || 0}</span>
        <span className="thead-refer">🔗 Refer</span>
      </div>
    </header>
  );
}