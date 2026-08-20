import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { serviceCategories } from "../data/content";
import { DashboardIllustration } from "../illustrations";
import "./Services.css";

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Five ways we help businesses run better."
        description="From your first website to the software that runs your daily operations, each service is scoped around what your business actually needs."
        illustration={DashboardIllustration}
      />

      <nav className="pw-services-jump" aria-label="Jump to service category">
        <div className="container pw-services-jump-inner">
          {serviceCategories.map((s) => (
            <a href={`#${s.id}`} key={s.id}>{s.title}</a>
          ))}
        </div>
      </nav>

      {serviceCategories.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section pw-service-section ${i % 2 === 1 ? "bg-neutral" : ""}`}
        >
          <div className="container pw-service-detail">
            <div className="pw-service-detail-intro">
              <div className="pw-service-icon pw-service-detail-icon">
                <i className={`bi ${cat.icon}`}></i>
              </div>
              <span className="eyebrow">{`0${i + 1}`}</span>
              <h2>{cat.title}</h2>
              <p className="lead">{cat.summary}</p>
              <Link to="/contact" className="btn-pw btn-pw-outline-dark">
                Discuss this service <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <ul className="pw-service-detail-list">
              {cat.items.map((item) => (
                <li key={item}>
                  <i className="bi bi-check2"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
