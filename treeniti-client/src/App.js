import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Welcome   from "./pages/Welcome";
import Onboard   from "./pages/Onboard";
import Login     from "./pages/Login";
import Dashboard from "./pages/Dashboard";
function Guard({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />

          {/* Add this line here */}
          <Route path="/termandconditions" element={<TermsAndConditions />} />
          <Route path="/allplants" element={<AllPlants />} />

          <Route path="/dashboard" element={<Guard><Dashboard /></Guard>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}