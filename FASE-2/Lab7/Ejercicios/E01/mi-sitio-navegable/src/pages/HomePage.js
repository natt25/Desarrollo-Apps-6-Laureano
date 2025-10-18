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
    <section className="hero">
      {/* hero.jpg */}
      <img className="hero-img" src="/images/hero.jpg" alt="Paisaje andino con montañas y cielo" />
      <div className="hero-content">
        <h1 className="hero-title">Crónicas de Viaje y Cultura</h1>
        <p className="hero-sub">Relatos de ciudades, sabores y fiestas del altiplano y la sierra.</p>
        <div className="mt-1">
          <button className="btn" onClick={goRandom}>Leer un Artículo Aleatorio</button>
        </div>
      </div>
    </section>
  );
};
