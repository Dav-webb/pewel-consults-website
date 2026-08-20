import "./ProjectCard.css";
import { portfolioIllustrations } from "../illustrations";

export default function ProjectCard({ id, tag, title, description, metrics }) {
  const Illustration = portfolioIllustrations[id];

  return (
    <article className="pw-project-card">
      <div className="pw-project-visual" aria-hidden={!Illustration}>
        {Illustration ? (
          <Illustration />
        ) : (
          <div className="pw-project-visual-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.15}s` }}></span>
            ))}
          </div>
        )}
      </div>
      <div className="pw-project-body">
        <span className="tag">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="pw-project-metrics">
          {metrics.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
