import { Link } from "react-router-dom";
import { GrowthIllustration } from "../illustrations";
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="pw-cta">
      <div className="container pw-cta-inner">
        <div>
          <h2>Ready to take your business digital?</h2>
          <p>Let's build a smarter way to work.</p>
        </div>
        <div className="pw-cta-visual" aria-hidden="true">
          <GrowthIllustration />
        </div>
        <Link to="/contact" className="btn-pw btn-pw-primary">
          Start Your Project <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
}
