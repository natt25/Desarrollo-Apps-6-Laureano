import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  const handleLogin = () => {
    // Datos de ejemplo (temática CineClub)
    login({
      name: "Natalia Mendoza",
      email: "natalia@cineclub.lat"
    });
  };

  return (
    <button className="btn btn-primary" onClick={handleLogin}>
      Iniciar Sesión
    </button>
  );
};

export default Login;
