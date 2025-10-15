// src/auth.js
let isAuthenticated = false;

// Simula llamada async de login
export const login = (callback) => {
  isAuthenticated = true;
  setTimeout(callback, 100); // pequeña espera para simular async
};

export const logout = (callback) => {
  isAuthenticated = false;
  setTimeout(callback, 100);
};

export const checkAuth = () => isAuthenticated;
