import React, { createContext, useContext, useState } from "react";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const InitialAuthUser = localStorage.getItem("Users");
  const [AuthUser, setAuthUser] = useState(
    InitialAuthUser ? JSON.parse(InitialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[AuthUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
