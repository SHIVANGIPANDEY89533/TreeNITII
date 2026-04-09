import { createContext, useState } from "react";
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("tr_token") || "");

  const login = (tok, usr) => {
    localStorage.setItem("tr_token", tok);
    setToken(tok);
    setUser(usr);
  };

  const logout = () => {
    localStorage.removeItem("tr_token");
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}