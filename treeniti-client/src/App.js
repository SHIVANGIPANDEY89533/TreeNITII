import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";

function Guard({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" replace />;
}
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Make Welcome the landing page */}
          <Route path="/" element={<Welcome />} /> 
          
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          
          {/* Protected Dashboard */}
          <Route path="/dashboard" element={<Guard><Dashboard /></Guard>} />
          
          {/* Default fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}