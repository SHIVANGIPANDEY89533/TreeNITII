import { useState, useEffect, useContext } from "react"; // 1. useContext add kiya
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // 2. AuthContext import kiya
import http from "../api/http";
import "./Login.css";

const translations = {
  en: {
    welcome: "Welcome to",
    brand: "TREENITI",
    sub: "Secure your digital Garden. Login with your mobile.",
    mobileLabel: "MOBILE NUMBER",
    otpLabel: "ENTER OTP",
    sendOtp: "► Send OTP",
    verifyBtn: "Verify & Grow →",
    resend: "RESEND IN",
    agreePart1: "By signing in, you agree to TREENITI's",
    agreePart2: "Environmental Impact",
    policy: "Terms & Privacy Policy",
    errMobile: "Enter a valid 10-digit number",
    errAgree: "Please accept the Terms & Policy",
    connecting: "Connecting...",
    verifying: "Verifying...",
    invalidOtp: "Invalid OTP, please try again"
  },
  hi: {
    welcome: "TREENITI में स्वागत है",
    brand: "", 
    sub: "अपने डिजिटल गार्डन को सुरक्षित करें। मोबाइल से लॉगिन करें।",
    mobileLabel: "मोबाइल नंबर",
    otpLabel: "ओटीपी दर्ज करें",
    sendOtp: "► ओटीपी भेजें",
    verifyBtn: "सत्यापित करें और आगे बढ़ें →",
    resend: "पुनः भेजें",
    agreePart1: "साइन इन करके, आप TREENITI के",
    agreePart2: "पर्यावरण प्रभाव",
    policy: "नियम और गोपनीयता नीति से सहमत हैं",
    errMobile: "सही मोबाइल नंबर दर्ज करें",
    errAgree: "कृपया नियमों से सहमत हों",
    connecting: "जुड़ रहे हैं...",
    verifying: "जाँच हो रही है...",
    invalidOtp: "गलत ओटीपी, कृपया पुनः प्रयास करें"
  }
};

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext); // 3. Context se setToken nikala
  const [lang, setLang] = useState("en");
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [agreed, setAgreed] = useState(false);
  
  const [timer, setTimer] = useState(45);

  const t = translations[lang];
  const logoPath = "/treeniti.jpg";

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "hi" : "en");
    setMsg("");
  };

  async function handleSend(e) {
    if (e) e.preventDefault();
    if (phone.length < 10) return setMsg(t.errMobile);
    if (!agreed) return setMsg(t.errAgree);
    
    setBusy(true);
    setMsg("");
    try {
      const res = await http.post("/auth/send-otp", { phone: phone.trim() });
      if (res.data.success) {
        setStep(2);
        setTimer(45);
      }
    } catch (e) {
      setMsg(e.response?.data?.message || (lang === "en" ? "Server error" : "सर्वर त्रुटि"));
    } finally {
      setBusy(false);
    }
  }

  async function handleVerify(e) {
    if (e) e.preventDefault();
    const finalOtp = otp.join("");
    if (finalOtp.length < 4) return;
    
    setBusy(true);
    setMsg("");
    try {
      const res = await http.post("/auth/verify-otp", { 
        phone: phone.trim(), 
        otp: finalOtp 
      });
      
      if (res.data.success) {
        // --- YE LINES SABSE ZAROORI HAIN ---
        const receivedToken = res.data.token;
        localStorage.setItem("token", receivedToken); // LocalStorage mein save kiya
        setToken(receivedToken); // Context update kiya (Taaki Guard rasta de de)
        
        // Navigate to /home (App.js wala path)
        navigate("/home", { replace: true }); 
        // ----------------------------------
      }
    } catch (e) {
      const errorMsg = e.response?.data?.message || t.invalidOtp;
      setMsg(errorMsg);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="login-wrap-new">
      <div className="login-inner-container">
        <div className="login-header-new">
          <div className="header-logo-group">
            <img src={logoPath} alt="Logo" className="header-logo-new" />
            <span className="header-text-new">TREENITI</span>
          </div>
          <div className="header-icon-new" onClick={toggleLanguage} style={{ cursor: "pointer" }}>
            <div className="lang-box">{lang === "en" ? "हि" : "EN"}</div>
          </div>
        </div>

        <div className="login-content-new">
          <img src={logoPath} alt="Central Logo" className="central-logo-new" />
          <h1 className="login-heading-new">
            {lang === "en" ? <>{t.welcome} <br /> <span className="brand-accent">{t.brand}</span></> : t.welcome}
          </h1>
          <p className="login-sub-new">{t.sub}</p>

          <div className="login-form-new">
            {step === 1 ? (
              <form onSubmit={handleSend}>
                <label className="input-label-new">{t.mobileLabel}</label>
                <div className="input-group-new">
                  <span className="country-code-new">+91</span>
                  <input
                    className="input-field-new"
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  />
                </div>
                <button type="submit" className="btn-plain-text" disabled={busy || !agreed}>
                  {busy ? t.connecting : t.sendOtp}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerify}>
                <div className="row-between">
                  <label className="input-label-new">{t.otpLabel}</label>
                  <span className="resend-timer">
                    {timer > 0 
                      ? `${t.resend} 00:${timer < 10 ? `0${timer}` : timer}` 
                      : <span onClick={handleSend} style={{cursor:'pointer', color:'#144011', fontWeight:'bold'}}>RESEND NOW</span>
                    }
                  </span>
                </div>
                <div className="otp-group">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength="1"
                      className="otp-box"
                      value={digit}
                      autoFocus={i === 0}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, "");
                        let newOtp = [...otp];
                        newOtp[i] = val;
                        setOtp(newOtp);
                        if (val && e.target.nextSibling) e.target.nextSibling.focus();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !otp[i] && e.target.previousSibling) {
                          e.target.previousSibling.focus();
                        }
                      }}
                    />
                  ))}
                </div>
                <button type="submit" className="login-btn-new" disabled={busy}>
                  {busy ? t.verifying : t.verifyBtn}
                </button>
              </form>
            )}
          </div>
          {msg && <p className="login-err-new">{msg}</p>}
        </div>

        <div className="login-footer-new">
          <div className="checkbox-row-new">
            <input type="checkbox" id="agree" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            <label htmlFor="agree" style={{ cursor: "pointer" }}>
              {t.agreePart1} <br />
              {t.agreePart2} <span className="policy-link">{t.policy}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}