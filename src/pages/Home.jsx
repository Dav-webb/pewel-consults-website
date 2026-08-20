import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import TrustedStrip from "../components/TrustedStrip";
import ServiceCard from "../components/ServiceCard";
import SolutionCard from "../components/SolutionCard";
import ProjectCard from "../components/ProjectCard";
import DigitalTransformation from "../components/DigitalTransformation";
import WhyChoose from "../components/WhyChoose";
import ProcessTimeline from "../components/ProcessTimeline";
import CTASection from "../components/CTASection";
import { serviceCategories, solutions, portfolioProjects } from "../data/content";
import { SolutionsIllustration } from "../illustrations";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedStrip />

      <section className="section">
        <div className="container">
          <div className="pw-home-head">
            <div className="section-head">
              <span className="eyebrow">What We Do</span>
              <h2>Services built around how your business runs.</h2>
            </div>
            <Link to="/services" className="btn-pw btn-pw-outline-dark pw-home-head-link">
              View all services <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="pw-home-services-grid">
            {serviceCategories.map((s) => (
              <ServiceCard key={s.id} {...s} compact />
            ))}
          </div>
        </div>
      </section>

      <DigitalTransformation />

      <section className="section bg-neutral">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Featured Solutions</span>
            <h2>Specialized systems for specific industries.</h2>
          </div>
          <div className="pw-home-solutions-grid">
            <div className="pw-home-solutions-visual">
              <SolutionsIllustration />
            </div>
            <div className="pw-home-solutions">
              {solutions.map((s) => (
                <SolutionCard key={s.id} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
      <ProcessTimeline />

      <section className="section">
        <div className="container">
          <div className="pw-home-head">
            <div className="section-head">
              <span className="eyebrow">Our Work</span>
              <h2>A look at what we build.</h2>
            </div>
            <Link to="/portfolio" className="btn-pw btn-pw-outline-dark pw-home-head-link">
              View portfolio <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="pw-home-portfolio-grid">
            {portfolioProjects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
