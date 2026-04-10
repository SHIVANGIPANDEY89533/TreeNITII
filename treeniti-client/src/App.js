import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Welcome   from "./pages/Welcome";
import Onboard   from "./pages/Onboard";
import Login     from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Wallet    from "./pages/Wallet";
import Missions  from "./pages/Missions";
import Articles  from "./pages/Articles";
import Team      from "./pages/Team";
import Profile   from "./pages/Profile";

function Guard({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"          element={<Welcome />} />
          <Route path="/onboard"   element={<Onboard />} />
          <Route path="/login"     element={<Login />} />
          <Route path="/dashboard" element={<Guard><Dashboard /></Guard>} />
          <Route path="/wallet"    element={<Guard><Wallet /></Guard>} />
          <Route path="/missions"  element={<Guard><Missions /></Guard>} />
          <Route path="/articles"  element={<Guard><Articles /></Guard>} />
          <Route path="/team"      element={<Guard><Team /></Guard>} />
          <Route path="/profile"   element={<Guard><Profile /></Guard>} />
          <Route path="*"          element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}