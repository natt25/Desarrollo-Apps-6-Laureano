import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Login from "./Login";

const Header = () => {
  const { isAuthenticated, user, logout } = useContext(UserContext);

  return (
    <header className="nav">
      <div className="brand">
        <span className="brand-badge">CC</span>
        CineClub LatAm
      </div>

      <div>
        {!isAuthenticated ? (
          <Login />
        ) : (
          <>
            <span className="badge" style={{ marginRight: ".5rem" }}>
              Hola, {user?.name}
            </span>
            <button className="btn btn-danger" onClick={logout}>
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
