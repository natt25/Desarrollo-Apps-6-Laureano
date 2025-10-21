import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { isAuthenticated, user } = useContext(UserContext);

  if (!isAuthenticated) return null;

  return (
    <section className="card">
      <h2>Perfil de Usuario</h2>
      <p className="muted">
        Información visible solo cuando has iniciado sesión.
      </p>
      <hr />
      <p><strong>Nombre:</strong> {user?.name}</p>
      <p><strong>Correo:</strong> {user?.email}</p>
      <p className="muted">Membresía: Activa · Plan “Cine Arte”</p>
    </section>
  );
};

export default UserProfile;
