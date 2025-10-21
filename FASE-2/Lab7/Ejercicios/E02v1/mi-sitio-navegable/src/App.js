import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <>
      <Header />

      <main className="container">
        <div className="row">
          <section className="card">
            <h1>Bienvenido a CineClub LatAm</h1>
            <p className="muted">
              Un espacio para comentar estrenos, clásicos restaurados,
              festivales y cine de autor. Inicia sesión para acceder a contenido
              exclusivo de tu membresía y guardar películas favoritas.
            </p>

            {!isAuthenticated ? (
              <div className="card" style={{ marginTop: "1rem", background:"#fafafa" }}>
                <h2>Contenido para miembros</h2>
                <p className="muted">
                  Inicia sesión para ver listas curadas, recomendaciones 
                  personalizadas y tu perfil de suscripción.
                </p>
              </div>
            ) : (
              <div className="card" style={{ marginTop: "1rem" }}>
                <h2>Destacados para ti</h2>
                <ul>
                  <li>Retrospectiva: Lucrecia Martel</li>
                  <li>Clásicos restaurados: “Memorias del Subdesarrollo”</li>
                  <li>Festival de Lima: selección de la semana</li>
                </ul>
              </div>
            )}
          </section>

          <UserProfile />
        </div>
      </main>

      <footer className="footer">
        <small>© 2025 · CineClub LatAm · Demo Context</small>
      </footer>
    </>
  );
};

export default App;
