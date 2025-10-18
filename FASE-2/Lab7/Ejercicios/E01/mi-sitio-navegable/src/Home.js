// src/Home.js
import React from "react";

const Home = ({ children }) => {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section
        className="hero"
        aria-label="Destacado"
      >
        <div className="hero__copy">
          <span className="hero__eyebrow">Nuevo · Colecciones</span>
          <h1>BookVerse — Tu biblioteca curada</h1>
          <p>
            Descubre autores peruanos, clásicos latinoamericanos y nuevas voces.
            Guarda tus favoritos en el catálogo y explora referencias en Wikipedia.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="/#/catalogo">Ver catálogo</a>
            <a className="btn btn-secondary" href="/#/api">Explorar en Wikipedia</a>
            <a className="btn btn-ghost" href="/#/about">Acerca de</a>
          </div>
        </div>

        {/* Imagen de hero — cámbiala por la tuya si deseas */}
        <div
          className="hero__media"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop')"
          }}
          role="img"
          aria-label="Estante de libros y notas"
        />
      </section>

      {/* ---------- CONTENIDO INFERIOR (Children opcional) ---------- */}
      <div className="container">
        {children && <div style={{marginTop:'.8rem'}}>{children}</div>}

        {/* ---------- TARJETAS RECOMENDADAS ---------- */}
        <h2 style={{marginTop:'1rem'}}>Recomendados</h2>
        <div className="grid">
          <article className="card">
            <img
              className="card__media"
              src="https://images.unsplash.com/photo-1457694587812-e8bf29a43845?q=80&w=1200&auto=format&fit=crop"
              alt="Clásicos peruanos"
            />
            <div className="card__body">
              <h3 className="card__title">Clásicos peruanos</h3>
              <p className="card__text">Arguedas, Palma, Vargas Llosa y más autores fundamentales.</p>
            </div>
          </article>

          <article className="card">
            <img
              className="card__media"
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop"
              alt="Narrativa latinoamericana"
            />
            <div className="card__body">
              <h3 className="card__title">Narrativa latinoamericana</h3>
              <p className="card__text">Macondo, el Boom y nuevas generaciones de narradores.</p>
            </div>
          </article>

          <article className="card">
            <img
              className="card__media"
              src="https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=1200&auto=format&fit=crop"
              alt="Ensayo y crónica"
            />
            <div className="card__body">
              <h3 className="card__title">Ensayo y crónica</h3>
              <p className="card__text">Pensamiento crítico, historia y periodismo literario.</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
