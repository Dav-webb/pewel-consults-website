import { processSteps } from "../data/content";
import "./ProcessTimeline.css";

export default function ProcessTimeline() {
  return (
    <section className="section pw-process bg-navy">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow pw-process-eyebrow">Our Process</span>
          <h2 className="pw-process-title">A clear path from problem to working system.</h2>
        </div>

        <div className="pw-process-grid">
          {processSteps.map((step, i) => (
            <div className="pw-process-step" key={step.number}>
              <span className="pw-process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p className="pw-process-line">{step.description}</p>
              <p>{step.detail}</p>
              {i < processSteps.length - 1 && <span className="pw-process-connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
