// src/App.js
import React from "react";
import Table from "./Table"; // (a.4) importar el componente Table

/* (b) Definir arreglo de objetos y pasarlo por props */
function App() {
  const characters = [
    { name: "Ana",  job: "Desarrolladora" },
    { name: "Luis", job: "Diseñador UX" },
    { name: "Rosa", job: "QA Analyst" },
    { name: "Diego", job: "DevOps" }
  ];

  return (
    <div className="container" style={{ padding: "1.5rem" }}>
      <h1>Equipo del Proyecto</h1>
      <p>Ejemplo de arquitectura por componentes y flujo de datos con <em>props</em>.</p>

      {/* (b.2) Pasar arreglo como prop characterData */}
      <Table characterData={characters} />
    </div>
  );
}

export default App;

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
