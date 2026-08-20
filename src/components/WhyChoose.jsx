import { whyPoints } from "../data/content";
import "./WhyChoose.css";

export default function WhyChoose() {
  return (
    <section className="section bg-neutral">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Why Pewel Consults</span>
          <h2>Technology decisions your business won't outgrow.</h2>
        </div>

        <div className="pw-why-grid">
          {whyPoints.map((p) => (
            <div className="pw-why-item" key={p.title}>
              <i className={`bi ${p.icon}`}></i>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
