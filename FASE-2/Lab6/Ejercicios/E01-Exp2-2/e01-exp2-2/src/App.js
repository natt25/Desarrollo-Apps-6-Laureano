// src/App.js
function App() {
  // (2) Variable JavaScript incrustada en JSX
  const nombre = 'Estudiante de UCSM';

  return (
    <div className="contenedor">
      {/* (1) Uso correcto de className en lugar de class */}
      <h1 className="titulo">Hola, {nombre}!</h1>

      <p className="descripcion">
        Ejemplo práctico con reglas básicas de JSX en React.
      </p>

      {/* (3) Etiqueta autocerrada: <img /> */}
      <img
        src="https://ucsm.edu.pe/wp-content/uploads/2022/11/web-ucsm-escudo.png"
        alt="Logo de UCSM"
        width="100"
      />

      <br />

      <p>La imagen y el salto de línea se insertaron utilizando etiquetas autocerradas.</p>
    </div>
  );
}

export default App;
