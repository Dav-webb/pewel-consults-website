import { Link } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({ id, icon, title, summary, items, compact = false }) {
  return (
    <article className="pw-service-card" id={id}>
      <div className="pw-service-icon">
        <i className={`bi ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>

      {!compact && items && (
        <ul className="pw-service-items">
          {items.slice(0, 4).map((it) => (
            <li key={it}><i className="bi bi-check2"></i>{it}</li>
          ))}
        </ul>
      )}

      <Link to={`/services#${id}`} className="btn-pw btn-pw-ghost pw-service-link">
        Learn more <i className="bi bi-arrow-right"></i>
      </Link>
    </article>
  );
}
