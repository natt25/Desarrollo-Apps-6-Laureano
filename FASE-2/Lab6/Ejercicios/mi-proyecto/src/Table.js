// src/Table.js
import React from "react";

const TableHeader = () => (
  <thead>
    <tr>
      <th>Título</th>
      <th>Autor</th>
      <th>Acciones</th>
    </tr>
  </thead>
);

const TableBody = ({ data, removeItem }) => (
  <tbody>
    {data.map((row, index) => (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.author}</td>
        <td>
          <button onClick={() => removeItem(index)}>Eliminar</button>
        </td>
      </tr>
    ))}
  </tbody>
);

const Table = ({ data, removeItem }) => (
  <table>
    <TableHeader />
    <TableBody data={data} removeItem={removeItem} />
  </table>
);

export default Table;
