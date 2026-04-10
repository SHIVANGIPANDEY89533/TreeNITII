import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/http";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login }         = useContext(AuthContext);
  const navigate          = useNavigate();
  const [step,  setStep]  = useState(1);
  const [phone, setPhone] = useState("");
  const [otp,   setOtp]   = useState(["", "", "", "", "", ""]);
  const [hint,  setHint]  = useState("");
  const [msg,   setMsg]   = useState("");
  const [busy,  setBusy]  = useState(false);
  const [agree, setAgree] = useState(false);

  const sendOtp = async () => {
    if (!agree) { setMsg("Please agree to Terms & Privacy Policy"); return; }
    setBusy(true); setMsg("");
    try {
      const r = await http.post("/auth/send-otp", { phone });
      setHint(r.data.devOtp || "");
      setStep(2);
    } catch (e) {
      setMsg(e.response?.data?.message || "OTP send failed");
    } finally { setBusy(false); }
  };

  const handleOtpChange = (val, i) => {
    const newOtp = [...otp];
    newOtp[i] = val.slice(-1);
    setOtp(newOtp);
    if (val && i < 5) {
      document.getElementById(`otp-${i + 1}`)?.focus();
    }
  };

  const verifyOtp = async () => {
    setBusy(true); setMsg("");
    try {
      const r = await http.post("/auth/verify-otp", { phone, otp: otp.join("") });
      login(r.data.token, r.data.user);
      navigate("/dashboard");
    } catch (e) {
      setMsg(e.response?.data?.message || "Wrong OTP");
    } finally { setBusy(false); }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#ffffff",
      fontFamily: "'Segoe UI', sans-serif",
      display: "flex", flexDirection: "column",
    }}>

      {/* Top header bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 20px",
        borderBottom: "1px solid #f3f4f6",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src="/logo.jpeg" alt="logo" style={{ width: 28, height: 28, objectFit: "contain" }} />
          <span style={{ fontSize: 14, fontWeight: 800, color: "#1a3a1a", letterSpacing: 2 }}>TREENITI</span>
        </div>
        <span style={{ fontSize: 20, color: "#6b7280", cursor: "pointer" }}>文A</span>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "32px 24px" }}>

        {/* Logo center */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <img src="/logo.jpeg" alt="Treeniti" style={{ width: 80, height: 80, objectFit: "contain" }} />
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: 28, fontWeight: 900, color: "#1a3a1a",
          margin: "0 0 8px", lineHeight: 1.2,
        }}>
          Welcome to<br />TREENITI
        </h1>
        <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 28px" }}>
          Secure your digital Garden. Login with your mobile.
        </p>

        {/* Mobile number label */}
        <p style={{ fontSize: 11, fontWeight: 600, color: "#374151", margin: "0 0 8px", letterSpacing: 1 }}>
          MOBILE NUMBER
        </p>

        {/* Phone input */}
        <div style={{
          display: "flex", alignItems: "center",
          border: "1.5px solid #d1d5db", borderRadius: 10,
          overflow: "hidden", marginBottom: 16,
          background: step === 2 ? "#f9fafb" : "#fff",
        }}>
          <span style={{
            padding: "12px 14px", fontSize: 14,
            color: "#374151", borderRight: "1.5px solid #d1d5db",
            background: "#f9fafb", fontWeight: 600,
          }}>
            +91
          </span>
          <input
            type="tel" maxLength={10}
            placeholder="98765-43210"
            value={phone}
            readOnly={step === 2}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              flex: 1, border: "none", outline: "none",
              padding: "12px 14px", fontSize: 15,
              background: step === 2 ? "#f9fafb" : "#fff",
              color: "#1a3a1a",
            }}
          />
        </div>

        {/* Send OTP button — step 1 */}
        {step === 1 && (
          <button
            onClick={sendOtp}
            disabled={busy || phone.length < 10 || !agree}
            style={{
              width: "100%", padding: "13px",
              border: "none", borderRadius: 10,
              background: phone.length < 10 || !agree ? "#e5e7eb" : "#2d5a27",
              color: phone.length < 10 || !agree ? "#9ca3af" : "#fff",
              fontSize: 14, fontWeight: 700,
              cursor: phone.length < 10 || !agree ? "not-allowed" : "pointer",
              marginBottom: 16,
            }}
          >
            {busy ? "Sending..." : "⊳ Send OTP"}
          </button>
        )}

        {/* OTP section — step 2 */}
        {step === 2 && (
          <>
            <button
              onClick={() => setStep(2)}
              style={{
                width: "100%", padding: "13px",
                border: "none", borderRadius: 10,
                background: "#f3f4f6", color: "#6b7280",
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                marginBottom: 24,
              }}
            >
              ⊳ Send OTP
            </button>

            <p style={{ fontSize: 11, fontWeight: 600, color: "#374151", margin: "0 0 10px", letterSpacing: 1 }}>
              ENTER OTP
            </p>

            {/* 6 box OTP input */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {otp.map((val, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength={1}
                  value={val}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                  style={{
                    flex: 1, height: 48, textAlign: "center",
                    fontSize: 20, fontWeight: 700,
                    border: val ? "2px solid #2d5a27" : "1.5px solid #d1d5db",
                    borderRadius: 8, outline: "none",
                    background: val ? "#f0fdf4" : "#fff",
                    color: "#1a3a1a",
                  }}
                />
              ))}
            </div>

            {hint && (
              <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 12 }}>
                Dev OTP: <strong>{hint}</strong>
              </p>
            )}

            {/* Verify & Grow button */}
            <button
              onClick={verifyOtp}
              disabled={busy || otp.join("").length < 4}
              style={{
                width: "100%", padding: "15px",
                border: "none", borderRadius: 999,
                background: otp.join("").length < 4 ? "#e5e7eb" : "#2d5a27",
                color: otp.join("").length < 4 ? "#9ca3af" : "#fff",
                fontSize: 15, fontWeight: 700,
                cursor: otp.join("").length < 4 ? "not-allowed" : "pointer",
                marginBottom: 20,
                boxShadow: otp.join("").length >= 4 ? "0 4px 14px rgba(45,90,39,0.3)" : "none",
              }}
            >
              {busy ? "Verifying..." : "Verify & Grow →"}
            </button>

            <button
              onClick={() => setStep(1)}
              style={{
                background: "none", border: "none",
                color: "#2d5a27", fontSize: 13,
                cursor: "pointer", fontWeight: 600,
                display: "block", margin: "0 auto",
              }}
            >
              ← Change number
            </button>
          </>
        )}

        {msg && (
          <p style={{ color: "#dc2626", fontSize: 12, marginTop: 8 }}>{msg}</p>
        )}

        {/* Terms checkbox */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginTop: 20 }}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            style={{ marginTop: 2, accentColor: "#2d5a27", width: 14, height: 14 }}
          />
          <p style={{ fontSize: 11, color: "#9ca3af", margin: 0, lineHeight: 1.5 }}>
            By signing in, you agree to TREENITI's Environmental Impact{" "}
            <span style={{ color: "#2d5a27", fontWeight: 600, cursor: "pointer" }}>
              Terms & Privacy Policy
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}