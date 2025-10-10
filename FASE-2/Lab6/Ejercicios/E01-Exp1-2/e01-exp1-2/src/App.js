// src/App.js
function App() {
  // (b.2) Variable de JavaScript incrustada en JSX
  const nombre = 'Estudiante';

  return (
    <div className="contenedor">
      {/* (b.1) Usar className en lugar de class */}
      <h1 className="titulo">¡Hola, {nombre}!</h1>
      <p>
        Bienvenido al mundo de React.  
        Aquí aprendemos sobre la sintaxis JSX.
      </p>

      {/* (b.3) Etiqueta autocerrada con barra final */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="Logo de React"
        width="120"
      />
      <br />
      <p>Esta imagen fue insertada con una etiqueta autocerrada &lt;img /&gt;.</p>
    </div>
  );
}

export default App;
