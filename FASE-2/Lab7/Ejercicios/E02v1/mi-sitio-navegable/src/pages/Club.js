import React, { useContext } from "react";
import { UserContext } from "../UserContext";

/** Página que muestra contenido distinto si hay sesión */
const Club = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <section className="container">
      <h2>Mi Club</h2>
      {!isAuthenticated ? (
        <div className="note card">
          <div className="card__body">
            <p className="card__text">
              Inicia sesión para ver tus reseñas, películas guardadas y beneficios del club.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid">
          <article className="card">
            <div className="card__body">
              <h3 className="card__title">Tus próximos estrenos</h3>
              <p className="card__text">Aún no tienes funciones agendadas.</p>
            </div>
          </article>
          <article className="card">
            <div className="card__body">
              <h3 className="card__title">Lista de favoritos</h3>
              <p className="card__text">Agrega películas desde la cartelera.</p>
            </div>
          </article>
        </div>
      )}
    </section>
  );
};

export default Club;
