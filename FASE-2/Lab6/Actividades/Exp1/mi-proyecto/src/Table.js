// src/Table.js
import React, { Component } from "react";

const TableHeader = () => (
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Trabajo</th>
      <th>Acciones</th>
    </tr>
  </thead>
);

const TableBody = ({ characterData, removeCharacter }) => (
  <tbody>
    {characterData.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.job}</td>
        <td>
          {/* (b.3) botón delete */}
          <button onClick={() => removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
);

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table
        className="table"
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
      >
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;

///////////////////////////////////////////////// ACT3
// import React, { Component } from "react";

// /* (a) Componentes simples (funcionales) */
// const TableHeader = () => (
//   <thead>
//     <tr>
//       <th>Nombre</th>
//       <th>Trabajo</th>
//     </tr>
//   </thead>
// );

// const TableBody = ({ characterData = [] }) => (
//   <tbody>
//     {characterData.map((item, index) => (
//       <tr key={index}>
//         <td>{item.name}</td>
//         <td>{item.job}</td>
//       </tr>
//     ))}
//   </tbody>
// );

// /* (a) Componente de clase que anida Header y Body */
// class Table extends Component {
//   render() {
//     const { characterData = [] } = this.props; // (b) acceder via this.props
//     return (
//       <table className="table" style={{ width: "100%", borderCollapse: "collapse" }}>
//         <TableHeader />
//         <TableBody characterData={characterData} />
//       </table>
//     );
//   }
// }

// export default Table;
