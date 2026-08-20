import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import { portfolioProjects } from "../data/content";
import { WebsiteIllustration } from "../illustrations";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="A sample of the systems we've built."
        description="Every project starts from the same place: understanding how a business actually works before writing a single line of code. Below are representative examples of that approach."
        illustration={WebsiteIllustration}
      />

      <section className="section">
        <div className="container">
          <div className="pw-portfolio-grid">
            {portfolioProjects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
          <p className="pw-portfolio-note">
            <i className="bi bi-info-circle"></i>
            Case studies shown here are illustrative examples of project types — get in touch to see detailed
            work samples relevant to your industry.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
