// src/Home.js
import React from "react";

const Home = ({ children }) => (
  <section>
    <h1 className="titulo">BookVerse · Librería online</h1>
    <p>Administra tu catálogo y navega sin recargar gracias a React Router.</p>
    <hr />
    {children}
  </section>
);

export default Home;
