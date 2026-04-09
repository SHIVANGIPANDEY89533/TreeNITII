import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/http";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [hint, setHint] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSend() {
    if (phone.length < 10) return setMsg("Enter a valid 10-digit number");
    setBusy(true); setMsg("");
    try {
      const r = await http.post("/auth/send-otp", { phone });
      setHint(r.data.devOtp || "");
      setStep(2);
    } catch (e) {
      setMsg(e.response?.data?.message || "Could not send OTP");
    } finally { setBusy(false); }
  }

  async function handleVerify() {
    setBusy(true); setMsg("");
    try {
      const r = await http.post("/auth/verify-otp", { phone, otp });
      login(r.data.token, r.data.user);
      navigate("/dashboard");
    } catch (e) {
      setMsg(e.response?.data?.message || "Wrong OTP, try again");
    } finally { setBusy(false); }
  }

  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="login-logo">🌳</div>
        <h1 className="login-title">TREENITI</h1>
        <p className="login-sub">Grow your digital forest</p>

        {step === 1 ? (
          <>
            <label className="login-label">Mobile Number</label>
            <div className="login-row">
              <span className="login-code">+91</span>
              <input
                className="login-input"
                type="tel"
                maxLength={10}
                placeholder="10-digit number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <button className="login-btn" onClick={handleSend} disabled={busy}>
              {busy ? "Sending…" : "Send OTP →"}
            </button>
          </>
        ) : (
          <>
            <p className="login-label">OTP sent to +91 {phone}</p>
            <input
              className="login-input full"
              type="text"
              maxLength={6}
              placeholder="Enter OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
            />
            {hint && <p className="login-hint">Dev OTP: <b>{hint}</b></p>}
            <button className="login-btn" onClick={handleVerify} disabled={busy}>
              {busy ? "Verifying…" : "Verify & Grow →"}
            </button>
            <button className="login-back" onClick={() => setStep(1)}>
              ← Change number
            </button>
          </>
        )}

        {msg && <p className="login-err">{msg}</p>}
      </div>
    </div>
  );
}