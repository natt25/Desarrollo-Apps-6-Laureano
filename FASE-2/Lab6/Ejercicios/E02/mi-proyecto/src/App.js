import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Api from "./Api";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  // Estado inicial (Práctica 4.a.1)
  state = {
    characters: [
      { name: "Ana", job: "Desarrolladora" },
      { name: "Luis", job: "Diseñador UX" },
      { name: "Rosa", job: "QA Analyst" }
    ]
  };

  // Eliminar por índice (Práctica 4.a.2 y 4.a.3)
  removeCharacter = (index) => {
    this.setState(({ characters }) => ({
      characters: characters.filter((_, i) => i !== index)
    }));
  };

  // Agregar desde el formulario (Práctica 4.c.5)
  handleSubmit = (character) => {
    this.setState(({ characters }) => ({
      characters: [...characters, character]
    }));
  };

  render() {
    const { characters } = this.state;

    return (
      <>
        {/* NAV - Routing (Práctica 6.a.3 con Link / NavLink) */}
        <nav style={{ padding: ".75rem 1rem", borderBottom: "1px solid #e5e7eb" }}>
          <NavLink to="/home" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/api" className={({isActive}) => isActive ? "active" : ""}>API</NavLink>
        </nav>

        <main className="container">
          {/* Rutas (Práctica 6.a.2) */}
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <Home />
                  <h2 className="mt">Equipo del Proyecto</h2>
                  {/* Tabla con props + botón Delete (Prácticas 3 y 4.b) */}
                  <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                  />
                  <h3>Agregar nuevo miembro</h3>
                  {/* Form controlado (Práctica 4.c) */}
                  <Form handleSubmit={this.handleSubmit} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            {/* Página que demuestra ciclo de vida + fetch (Práctica 5) */}
            <Route path="/api" element={<Api />} />
            {/* Redirección básica al home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
