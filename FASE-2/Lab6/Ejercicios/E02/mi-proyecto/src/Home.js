import React from "react";

const Home = ({ children }) => (
  <section>
    <h1 className="titulo">BookVerse · Librería online</h1>
    <p>
      Administra tu propio catálogo: agrega títulos, elimina registros y explora
      recursos externos de literatura. Navega sin recargar gracias a React Router.
    </p>
    <hr />
    {children /* (Exp 2/3) props.children */}
  </section>
);

export default Home;
