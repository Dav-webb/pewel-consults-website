import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="pw-hero">
      <div className="container pw-hero-grid">
        <div className="pw-hero-copy">
          <span className="eyebrow pw-hero-eyebrow">Digital Solutions &amp; Technology Consulting — Ghana</span>
          <h1>
            Build. Digitize.
            <br />
            Automate. Grow.
          </h1>
          <p className="lead pw-hero-lead">
            Pewel Consults helps businesses transform their ideas and everyday operations into modern digital
            solutions.
          </p>
          <div className="pw-hero-actions">
            <Link to="/contact" className="btn-pw btn-pw-primary">
              Start a Project <i className="bi bi-arrow-right"></i>
            </Link>
            <Link to="/services" className="btn-pw btn-pw-outline-dark">
              Explore Our Services
            </Link>
          </div>

          <div className="pw-hero-stats">
            <div>
              <strong>05</strong>
              <span>Service categories</span>
            </div>
            <div>
              <strong>4-step</strong>
              <span>Delivery process</span>
            </div>
            <div>
              <strong>End-to-end</strong>
              <span>Build to support</span>
            </div>
          </div>
        </div>

        <div className="pw-hero-visual" aria-hidden="true">
          <div className="pw-dash-card pw-dash-main">
            <div className="pw-dash-header">
              <span className="pw-dash-dot" />
              <span className="pw-dash-dot" />
              <span className="pw-dash-dot" />
              <span className="pw-dash-title">operations.dashboard</span>
            </div>
            <div className="pw-dash-body">
              <div className="pw-dash-row">
                <div className="pw-dash-label">Digital records</div>
                <div className="pw-dash-bar"><span style={{ width: "86%" }} /></div>
              </div>
              <div className="pw-dash-row">
                <div className="pw-dash-label">Automated workflow</div>
                <div className="pw-dash-bar"><span style={{ width: "64%" }} /></div>
              </div>
              <div className="pw-dash-row">
                <div className="pw-dash-label">Staff efficiency</div>
                <div className="pw-dash-bar"><span style={{ width: "92%" }} /></div>
              </div>

              <svg className="pw-dash-graph" viewBox="0 0 240 70" preserveAspectRatio="none">
                <polyline
                  points="0,55 30,48 60,50 90,32 120,38 150,20 180,24 210,10 240,14"
                  fill="none"
                  stroke="#F0A93A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="pw-dash-card pw-dash-float-1">
            <i className="bi bi-check-circle-fill"></i>
            <div>
              <strong>System live</strong>
              <span>Real-time sync</span>
            </div>
          </div>

          <div className="pw-dash-card pw-dash-float-2">
            <span className="pw-dash-ring" />
            <div>
              <strong>+38%</strong>
              <span>Reporting speed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
