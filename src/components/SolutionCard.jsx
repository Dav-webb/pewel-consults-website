import "./SolutionCard.css";

export default function SolutionCard({ icon, title, description }) {
  return (
    <article className="pw-solution-card">
      <i className={`bi ${icon}`}></i>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
