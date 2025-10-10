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
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;
