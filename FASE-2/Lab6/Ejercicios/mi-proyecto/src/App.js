// src/App.js
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Api from "./Api";
import Table from "./Table";
import Form from "./Form";
import "./App.css";

class App extends Component {
  // (Exp 4.a.1) Estado global de la app
  state = {
    books: [
      { title: "La ciudad y los perros", author: "Mario Vargas Llosa" },
      { title: "El zorro de arriba y el zorro de abajo", author: "José María Arguedas" },
      { title: "Tradiciones peruanas", author: "Ricardo Palma" }
    ],
  };

  // (Exp 4.a.2 y 4.a.3) eliminar libro por índice
  removeBook = (index) => {
    this.setState((prev) => ({
      books: prev.books.filter((_, i) => i !== index),
    }));
  };

  // (Exp 4.c.5) agregar libro desde <Form />
  handleSubmit = (book) => {
    this.setState((prev) => ({ books: [...prev.books, book] }));
  };

  render() {
    const { books } = this.state;

    return (
      <BrowserRouter>
        <nav className="nav">
          <div className="brand">BookVerse</div>
          <div className="links">
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/catalogo">Catálogo</NavLink>
            <NavLink to="/api">Literatura (API)</NavLink>
            <NavLink to="/about">Acerca de</NavLink>
          </div>
        </nav>

        <main className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Home>
                  <p>
                    Explora clásicos, agrega tus libros favoritos al catálogo y elimina los que no te interesen.
                    Integra JSX, props, estado, formularios, ciclo de vida y routing.
                  </p>
                  {/* Ejemplo de imagen desde /public/images */}
                  <img src="/images/portada.jpg" alt="Portada" width="240" />
                </Home>
              }
            />

            <Route
              path="/catalogo"
              element={
                <>
                  <h2>Catálogo de libros</h2>
                  <Table data={books} removeItem={this.removeBook} />
                  <Form handleSubmit={this.handleSubmit} />
                </>
              }
            />

            <Route path="/api" element={<Api />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <small>© 2025 · BookVerse · React Practices</small>
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
