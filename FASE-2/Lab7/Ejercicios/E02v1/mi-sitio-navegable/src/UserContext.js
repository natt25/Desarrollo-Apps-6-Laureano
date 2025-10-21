import React, { createContext, useMemo, useState, useCallback } from "react";

/** (1) Crear el UserContext */
export const UserContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

/** (2) UserProvider: gestiona estado y expone login / logout */
export const UserProvider = ({ children }) => {
  const [session, setSession] = useState({
    isAuthenticated: false,
    user: null,
  });

  const login = useCallback((userData) => {
    setSession({ isAuthenticated: true, user: userData });
  }, []);

  const logout = useCallback(() => {
    setSession({ isAuthenticated: false, user: null });
  }, []);

  const value = useMemo(
    () => ({ ...session, login, logout }),
    [session, login, logout]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
