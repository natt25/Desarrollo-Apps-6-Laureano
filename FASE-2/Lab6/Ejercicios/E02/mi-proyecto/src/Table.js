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
    {/* (Exp 3.c.2) map + (Exp 3.c.4) key única por fila */}
    {data.map((row, index) => (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.author}</td>
        <td>
          {/* (Exp 4.b.3) usar función pasada por props */}
          <button onClick={() => removeItem(index)}>Eliminar</button>
        </td>
      </tr>
    ))}
  </tbody>
);

const Table = ({ data, removeItem }) => (
  <table>
    <TableHeader />
    {/* (Exp 3.b.3) Propagar props al hijo */}
    <TableBody data={data} removeItem={removeItem} />
  </table>
);

export default Table;
