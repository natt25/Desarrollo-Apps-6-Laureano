// src/pages/AuthorPage.js
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export const AuthorPage = () => {
  const { id } = useParams();
  const article = posts.find(p => String(p.id) === String(id));
  if (!article) return null;

  const { author } = article;

  return (
    <section className="card">
      <h3 className="h2">Sobre {author.name}</h3>
      <p className="p-muted">{author.bio}</p>
    </section>
  );
};
