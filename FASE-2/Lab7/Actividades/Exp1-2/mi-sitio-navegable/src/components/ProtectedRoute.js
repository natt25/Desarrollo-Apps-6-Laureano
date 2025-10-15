// src/components/ProtectedRoute.js
import { Navigate, useLocation } from "react-router-dom";
import { checkAuth } from "../auth";

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!checkAuth()) {
    // Redirige a /login guardando la locación objetivo
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
