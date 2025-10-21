import React from "react";

const Articles = () => (
  <section className="container">
    <h2>Cartelera Destacada</h2>
    <div className="grid">
      {[
        {
          title: "Festival del Cine Andino",
          img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1600&auto=format&fit=crop",
          text: "Documentales sobre comunidades y paisaje del altiplano.",
        },
        {
          title: "Retrospectiva Clásicos",
          img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1600&auto=format&fit=crop",
          text: "Proyecciones restauradas en 35mm de los años 70 y 80.",
        },
        {
          title: "Cine y Café",
          img: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=1600&auto=format&fit=crop",
          text: "Conversatorios con críticos y directores peruanos.",
        },
      ].map((a, i) => (
        <article key={i} className="card">
          <img className="card__media" src={a.img} alt={a.title} />
          <div className="card__body">
            <h3 className="card__title">{a.title}</h3>
            <p className="card__text">{a.text}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Articles;
