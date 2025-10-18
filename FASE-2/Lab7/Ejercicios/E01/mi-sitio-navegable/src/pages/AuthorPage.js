import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export const AuthorPage = () => {
  const { id } = useParams();
  const article = posts.find(p => String(p.id) === String(id));
  if (!article) return null;

  const { author } = article;

  return (
    <section className="author">
      {/* Avatar del autor */}
      <img className="avatar" src={author.avatar} alt={`Foto de ${author.name}`} />
      <div>
        <h3 className="h2" style={{ margin: 0 }}>{author.name}</h3>
        <p className="p-muted" style={{ margin: 0 }}>{author.bio}</p>
      </div>
    </section>
  );
};
