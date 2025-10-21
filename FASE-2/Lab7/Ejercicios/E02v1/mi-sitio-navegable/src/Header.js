import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import Login from "./components/Login";

/** Header condicional según el estado global */
const Header = () => {
  const { isAuthenticated, user, logout } = useContext(UserContext);

  return (
    <header className="nav">
      <div className="brand">
        <span className="brand-badge">CV</span> CineClub
      </div>
      <nav className="links">
        <a href="#/" className="active">Inicio</a>
        <a href="#/articulos">Cartelera</a>
        <a href="#/club">Mi Club</a>
      </nav>

      <div className="session">
        {!isAuthenticated ? (
          <Login />
        ) : (
          <div className="welcome">
            <span className="greet">Hola, {user?.name}</span>
            <button className="btn btn-ghost" onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
