// src/pages/ArticlesPage.js
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export const ArticlesPage = () => {
  return (
    <section className="card">
      <h2 className="h2">Artículos</h2>
      <p className="p-muted">Selecciona un título para leer la crónica completa.</p>
      <ul className="list">
        {posts.map(p => (
          <li key={p.id}>
            <Link to={`/articulos/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
