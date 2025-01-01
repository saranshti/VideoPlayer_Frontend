import React, { useContext, useState } from "react";
export const AuthContext = React.createContext();
export function AuthContextProvider({ children }) {
  const [userRole, setUserRole] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [agentId, setAgentId] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        userRole,
        setUserRole,
        userDetails,
        setUserDetails,
        agentId,
        setAgentId,
        token,
        setToken,
        loading,
        setLoading,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
