// src/pages/ArticleDetailPage.js
import { useParams, Link, Outlet } from "react-router-dom";
import { posts } from "../data/posts";

export const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = posts.find(p => String(p.id) === String(id));

  if (!article) {
    return <section className="card"><p>El artículo no existe.</p></section>;
  }

  return (
    <article className="card article">
      <h2 className="title">{article.title}</h2>
      <p className="content">{article.content}</p>

      <div className="divider" />

      <div className="mt-1">
        <Link className="btn btn-ghost" to="autor">Sobre el Autor</Link>
      </div>

      <div className="mt-2">
        <Outlet />
      </div>

      <div className="mt-2">
        <Link className="btn btn-ghost" to="/articulos">← Volver a artículos</Link>
      </div>
    </article>
  );
};
