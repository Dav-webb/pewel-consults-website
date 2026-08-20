import "./PageHeader.css";

export default function PageHeader({ eyebrow, title, description, illustration: Illustration }) {
  return (
    <section className="pw-page-header">
      <div className={`container ${Illustration ? "pw-page-header-grid" : ""}`}>
        <div>
          {eyebrow && <span className="eyebrow pw-page-header-eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {description && <p className="lead pw-page-header-desc">{description}</p>}
        </div>
        {Illustration && (
          <div className="pw-page-header-visual">
            <Illustration />
          </div>
        )}
      </div>
    </section>
  );
}
