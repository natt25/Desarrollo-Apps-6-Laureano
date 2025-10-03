///////////////////////////////////////// ACT6
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div style={{ padding: "1rem" }}>
        <h1>Práctica 6: Routing y Despliegue</h1>

        {/* Navegación */}
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/home" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* Emparejamiento de rutas */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

///////////////////////////////////////// ACT 5
// import React, { Component } from "react";
// import Api from "./Api";

// class App extends Component {
//   render() {
//     return (
//       <div className="container" style={{ padding: "1.5rem" }}>
//         <h1>Práctica 5: Ciclo de Vida y API</h1>
//         <Api />
//       </div>
//     );
//   }
// }

// export default App;

/////////////////////////////////////// ACT 4
// import React, { Component } from "react";
// import Table from "./Table";
// import Form from "./Form";

// class App extends Component {
//   // (a.1) inicializar el estado con characters
//   state = {
//     characters: [
//       { name: "Ana", job: "Desarrolladora" },
//       { name: "Luis", job: "Diseñador UX" },
//       { name: "Rosa", job: "QA Analyst" }
//     ]
//   };

//   // (a.2) método removeCharacter
//   removeCharacter = (index) => {
//     const { characters } = this.state;
//     // (a.3) setState con filter
//     this.setState({
//       characters: characters.filter((character, i) => i !== index)
//     });
//   };

//   // (c.5) agregar nuevo character
//   handleSubmit = (character) => {
//     this.setState({ characters: [...this.state.characters, character] });
//   };

//   render() {
//     return (
//       <div className="container" style={{ padding: "1.5rem" }}>
//         <h1>Equipo del Proyecto</h1>
//         <p>Ejemplo de manejo de estado y formularios en React.</p>

//         {/* (b.1) pasar removeCharacter como prop */}
//         <Table
//           characterData={this.state.characters}
//           removeCharacter={this.removeCharacter}
//         />

//         {/* (c) formulario */}
//         <h2>Agregar nuevo miembro</h2>
//         <Form handleSubmit={this.handleSubmit} />
//       </div>
//     );
//   }
// }

// export default App;

////////////////////////////////////// ACT 3
// import React from "react";
// import Table from "./Table"; // (a.4) importar el componente Table

// /* (b) Definir arreglo de objetos y pasarlo por props */
// function App() {
//   const characters = [
//     { name: "Ana",  job: "Desarrolladora" },
//     { name: "Luis", job: "Diseñador UX" },
//     { name: "Rosa", job: "QA Analyst" },
//     { name: "Diego", job: "DevOps" }
//   ];

//   return (
//     <div className="container" style={{ padding: "1.5rem" }}>
//       <h1>Equipo del Proyecto</h1>
//       <p>Ejemplo de arquitectura por componentes y flujo de datos con <em>props</em>.</p>

//       {/* (b.2) Pasar arreglo como prop characterData */}
//       <Table characterData={characters} />
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////// ACT 2
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const nombre = "estudiante"
//   return (
//     <div className="container">
//       <h1>{"Hola, ${nombre}!"}</h1>
//       <img src={logo} className="App-logo" alt="logo" />
//       <br />
//     </div>
//     // <div className="App">
//     //   <h1 className="titulo">Bienvenido a React con JSX</h1>
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   )
// }

// export default App;
