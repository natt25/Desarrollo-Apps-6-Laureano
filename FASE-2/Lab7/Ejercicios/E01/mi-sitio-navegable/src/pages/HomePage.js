// src/pages/HomePage.js
import { useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export const HomePage = () => {
  const navigate = useNavigate();

  const goRandom = () => {
    const ids = posts.map(p => p.id);
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    navigate(`/articulos/${randomId}`);
  };

  return (
    <section className="card">
      <h1 className="h1">Bienvenido a Crónicas de Viaje y Cultura</h1>
      <p className="p-muted">
        Relatos breves sobre ciudades, sabores y fiestas del altiplano y la sierra.
      </p>
      <button className="btn" onClick={goRandom}>Leer un Artículo Aleatorio</button>
    </section>
  );
};
