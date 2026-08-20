import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { solutions } from "../data/content";
import { SolutionsIllustration } from "../illustrations";
import "./Solutions.css";

export default function Solutions() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Specialized systems, built for specific industries."
        description="Some problems are common enough across industries that they deserve a purpose-built system rather than a generic one. These are the areas we've developed the deepest expertise in."
        illustration={SolutionsIllustration}
      />

      <section className="section">
        <div className="container">
          <div className="pw-solutions-list">
            {solutions.map((s, i) => (
              <article className="pw-solutions-row" key={s.id}>
                <span className="pw-solutions-index">{String(i + 1).padStart(2, "0")}</span>
                <div className="pw-solutions-icon">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <div className="pw-solutions-body">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
                <Link to="/contact" className="btn-pw btn-pw-ghost pw-solutions-link">
                  Get started <i className="bi bi-arrow-right"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
