////////////////////////////////////////// ACT5 v1
// import React, { Component } from "react";

// class Api extends Component {
//   // (a.1) estado inicial vacío
//   state = {
//     data: []
//   };

//   // (a.2) ciclo de vida: se ejecuta después de montar el componente
//   componentDidMount() {
//     // (a.3) usar fetch para conectarse a una API pública de Wikipedia
//     // Ejemplo: búsqueda de "React" en la API de Wikipedia
//     fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=React&limit=5&namespace=0&format=json&origin=*")
//       .then((response) => response.json())
//       .then((result) => {
//         // (a.4) guardar datos en el estado
//         this.setState({ data: result[1] }); // result[1] es la lista de títulos
//       })
//       .catch((error) => console.error("Error al obtener datos:", error));
//   }

//   render() {
//     const { data } = this.state;

//     return (
//       <div>
//         <h2>Resultados desde Wikipedia</h2>
//         {/* (a.5) mapear los datos en una lista */}
//         <ul>
//           {data.length > 0 ? (
//             data.map((item, index) => <li key={index}>{item}</li>)
//           ) : (
//             <li>Cargando datos...</li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Api;

/////////////////////////////////////////////// ACT5 (versión con Hooks)
import React, { useState, useEffect } from "react";

const Api = () => {
  // (b.2) useState en lugar de this.state
  const [data, setData] = useState([]);

  // (b.3) useEffect en lugar de componentDidMount
  useEffect(() => {
    fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=React&limit=5&namespace=0&format=json&origin=*")
      .then((response) => response.json())
      .then((result) => setData(result[1]))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []); // arreglo vacío = se ejecuta solo una vez

  return (
    <div>
      <h2>Resultados desde Wikipedia (Hooks)</h2>
      <ul>
        {data.length > 0 ? (
          data.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>Cargando datos...</li>
        )}
      </ul>
    </div>
  );
};

export default Api;
