import React from "react";

const Home = () => (
  <section className="hero container">
    <div className="hero__copy">
      <span className="hero__eyebrow">Cine, viajes y cultura</span>
      <h1>Crónicas del CineClub</h1>
      <p>
        Descubre festivales, reseñas y experiencias cinematográficas únicas.  
        Únete al club para recibir recomendaciones personalizadas.
      </p>
      <div className="hero__actions">
        <a className="btn btn-primary" href="#/articulos">Ver cartelera</a>
        <a className="btn btn-secondary" href="#/club">Mi Club</a>
      </div>
    </div>

    <div
      className="hero__media"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1600&auto=format&fit=crop')",
      }}
      role="img"
      aria-label="Sala de cine con butacas rojas"
    />
  </section>
);

export default Home;
