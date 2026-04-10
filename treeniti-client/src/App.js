import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Welcome   from "./pages/Welcome";
import Onboard   from "./pages/Onboard";
import Login     from "./pages/Login";
import Home      from "./pages/Home"; // Humne jo naya dashboard banaya

function Guard({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"          element={<Welcome />}  />
          <Route path="/onboard"   element={<Onboard />}  />
          <Route path="/login"     element={<Login />}    />
          {/* Dashboard aur Home dono ko Guard ke andar rakha hai */}
          <Route path="/home"      element={<Guard><Home /></Guard>} />
          <Route path="*"          element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}