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
            <Link to={`/articulos/${p.id}`}>
              {/* Miniatura */}
              <img className="thumb" src={p.thumb} alt={`Miniatura: ${p.title}`} />
              <div>
                <strong>{p.title}</strong>
                <div className="p-muted">por {p.author.name}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
