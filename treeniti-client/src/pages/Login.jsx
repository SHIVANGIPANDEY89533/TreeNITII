import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/http";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Path from your public folder
  const logoPath = "/treeniti.jpg"; 

  async function handleSend() {
    if (phone.length < 10) return setMsg("Enter a valid 10-digit number");
    if (!agreed) return setMsg("Please accept the Terms & Policy");
    
    setBusy(true); 
    setMsg("");
    
    try {
      await http.post("/auth/send-otp", { phone });
      navigate("/otp-verify", { state: { phone } }); 
    } catch (e) {
      if (e.code === "ERR_NETWORK") {
        setMsg("Backend server is not running (Port 5000)");
      } else {
        setMsg(e.response?.data?.message || "Could not send OTP");
      }
    } finally { 
      setBusy(false); 
    }
  }

  return (
    <div className="login-wrap-new">
      <div className="login-inner-container">
        
        {/* TOP HEADER SECTION */}
        <div className="login-header-new">
          <div className="header-logo-group">
            <img src={logoPath} alt="Header Logo" className="header-logo-new" />
            <span className="header-text-new">TREENITI</span>
          </div>
        </div>

        {/* MAIN CONTENT SECTION */}
        <div className="login-content-new">
          <img src={logoPath} alt="Central Logo" className="central-logo-new" />
          
          <h1 className="login-heading-new">Welcome to <br/> TREENITI</h1>
          <p className="login-sub-new">Secure your digital Garden. Login with your mobile.</p>

          <div className="login-form-new">
            <label className="input-label-new">MOBILE NUMBER</label>
            <div className="input-group-new">
              <span className="country-code-new">+91</span>
              <input
                className="input-field-new"
                type="tel"
                maxLength={10}
                placeholder="98765 43210"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
              />
            </div>

            {/* NEW STYLED BUTTON */}
            <button className="login-btn-new" onClick={handleSend} disabled={busy || !agreed}>
              {busy ? "Connecting..." : "Send OTP"}
            </button>
          </div>

          {msg && <p className="login-err-new">{msg}</p>}
        </div>

        {/* FOOTER SECTION */}
        <div className="login-footer-new">
           <div className="checkbox-row-new">
              <input 
                type="checkbox" 
                id="agree" 
                checked={agreed} 
                onChange={e => setAgreed(e.target.checked)} 
              />
              <label htmlFor="agree">
                By signing in, you agree to TREENITI's <br/>
                Environmental Impact <span className="policy-link">Terms & Privacy Policy</span>
              </label>
           </div>
        </div>
        
      </div>
    </div>
  );
}