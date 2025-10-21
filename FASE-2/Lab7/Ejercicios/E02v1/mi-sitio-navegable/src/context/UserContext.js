import React, { createContext, useMemo, useState } from "react";

/**
 * 1) UserContext:
 *    - isAuthenticated: boolean
 *    - user: { name, email } | null
 *    - login(userData), logout()
 */
export const UserContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {}
});

/**
 * 2) UserProvider:
 *    Maneja el estado global y expone login/logout.
 */
export const UserProvider = ({ children }) => {
  const [isAuthenticated, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setAuth(true);
    setUser(userData);
  };

  const logout = () => {
    setAuth(false);
    setUser(null);
  };

  const value = useMemo(
    () => ({ isAuthenticated, user, login, logout }),
    [isAuthenticated, user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
