import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Api from "./Api";
import Table from "./Table";
import Form from "./Form";
import "./App.css";

class App extends Component {
  // (Exp 4.a.1) Estado inicial en componente de clase
  state = {
    // Catálogo básico de libros (título/autor)
    books: [
      { title: "La ciudad y los perros", author: "Mario Vargas Llosa" },
      { title: "El zorro de arriba y el zorro de abajo", author: "José María Arguedas" },
      { title: "Tradiciones peruanas", author: "Ricardo Palma" }
    ],
  };

  // (Exp 4.a.2 y 4.a.3) Remover por índice usando filter + setState
  removeBook = (index) => {
    this.setState((prev) => ({
      books: prev.books.filter((_, i) => i !== index),
    }));
  };

  // (Exp 4.c.5) Agregar libro desde <Form /> con operador spread
  handleSubmit = (book) => {
    this.setState((prev) => ({
      books: [...prev.books, book],
    }));
  };

  render() {
    const { books } = this.state;

    return (
      <BrowserRouter>
        {/* (Exp 6.a.3) Navegación con NavLink sin recarga */}
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
          {/* (Exp 6.a.2) Emparejamiento de rutas */}
          <Routes>
            <Route
              path="/"
              element={
                // (Exp 2/3) JSX + props.children
                <Home>
                  <p>
                    Explora clásicos de la literatura peruana, agrega tus libros favoritos al
                    catálogo y elimina los que no te interesen. Esta app integra JSX, props,
                    estado, formularios, ciclo de vida y routing.
                  </p>
                </Home>
              }
            />

            {/* (Exp 3 + 4) Tabla (props) + Form (state lifting y función como prop) */}
            <Route
              path="/catalogo"
              element={
                <>
                  <h2>Catálogo de libros</h2>
                  <Table
                    // (Exp 3.b/4.b) Pasar datos y función como props
                    data={books}
                    removeItem={this.removeBook}
                  />
                  {/* (Exp 4.c) Form controlado (título/autor) */}
                  <Form handleSubmit={this.handleSubmit} />
                </>
              }
            />

            {/* (Exp 5) Ciclo de vida + fetch a Wikipedia */}
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
