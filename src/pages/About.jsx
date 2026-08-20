import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { values } from "../data/content";
import { TeamIllustration } from "../illustrations";
import "./About.css";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Pewel Consults"
        title="Technology that fits the way your business actually works."
        description="We're a digital solutions and technology consulting company based in Ghana, helping businesses build, digitize, automate and grow."
      />

      <section className="section">
        <div className="container">
          <div className="pw-about-intro">
            <div>
              <div className="section-head">
                <span className="eyebrow">Who We Are</span>
                <h2>We exist for businesses that are ready to stop running on paper and guesswork.</h2>
              </div>
              <div className="pw-about-intro-body">
                <p>
                  Pewel Consults was started to close the gap between what modern software can do and what most
                  Ghanaian businesses actually have access to. Too many hospitals, schools and growing companies
                  are still tracking critical information in notebooks and scattered spreadsheets, not because they
                  don't want better systems, but because those systems have never been built for them.
                </p>
                <p>
                  We work as a technology partner rather than a one-off vendor: understanding your operation first,
                  then building websites, software and digital systems that hold up under daily, real-world use.
                </p>
              </div>
            </div>
            <div className="pw-about-illustration">
              <TeamIllustration />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral">
        <div className="container pw-about-mv">
          <div className="pw-about-mv-card">
            <span className="tag">Mission</span>
            <h3>Help businesses build, digitize, automate, and grow through technology.</h3>
            <p>
              We take the manual, repetitive and error-prone parts of running a business and turn them into
              systems that save time and reduce risk.
            </p>
          </div>
          <div className="pw-about-mv-card">
            <span className="tag">Vision</span>
            <h3>A Ghana where every serious business runs on systems it can trust.</h3>
            <p>
              We want reliable, well-built software to be the standard for SMEs, clinics, schools and growing
              companies, not a luxury reserved for large corporations.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our Values</span>
            <h2>What guides how we build.</h2>
          </div>
          <div className="pw-about-values-grid">
            {values.map((v, i) => (
              <div className="pw-about-value" key={v.title}>
                <span className="pw-about-value-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
