import React, { Component } from "react";

/* (a) Componentes simples (funcionales) */
const TableHeader = () => (
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Trabajo</th>
    </tr>
  </thead>
);

const TableBody = ({ characterData = [] }) => (
  <tbody>
    {characterData.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.job}</td>
      </tr>
    ))}
  </tbody>
);

/* (a) Componente de clase que anida Header y Body */
class Table extends Component {
  render() {
    const { characterData = [] } = this.props; // (b) acceder via this.props
    return (
      <table className="table" style={{ width: "100%", borderCollapse: "collapse" }}>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default Table;
