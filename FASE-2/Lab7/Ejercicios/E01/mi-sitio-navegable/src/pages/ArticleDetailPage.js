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
      {/* Banner grande del artículo */}
      <img className="banner" src={article.banner} alt={`Banner: ${article.title}`} />
      <div className="figure-note">{article.figureNote}</div>

      <h2 className="title">{article.title}</h2>
      <p className="content">{article.content}</p>

      <div className="mt-1">
        <Link className="btn-ghost" to="autor">Sobre el Autor</Link>
      </div>

      <div className="mt-2">
        <Outlet />
      </div>

      <div className="mt-2">
        <Link className="btn-ghost" to="/articulos">← Volver a artículos</Link>
      </div>
    </article>
  );
};
