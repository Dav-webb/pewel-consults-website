import "./DigitalTransformation.css";

const before = ["Paper records", "Manual reporting", "Spreadsheets", "Repetitive tasks"];
const after = ["Digital systems", "Centralized databases", "Automated workflows", "Real-time reports"];

export default function DigitalTransformation() {
  return (
    <section className="section pw-transform">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Digital Transformation</span>
          <h2>Turn Manual Processes Into Smart Digital Systems.</h2>
        </div>

        <div className="pw-transform-panels">
          <div className="pw-transform-panel pw-transform-before">
            <span className="pw-transform-tag">Before</span>
            <div className="pw-transform-visual" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <div className="pw-paper-sheet" key={i} style={{ "--i": i }}>
                  <span></span><span></span><span className="short"></span>
                </div>
              ))}
            </div>
            <ul>
              {before.map((b) => (
                <li key={b}><i className="bi bi-dash"></i>{b}</li>
              ))}
            </ul>
          </div>

          <div className="pw-transform-arrow" aria-hidden="true">
            <i className="bi bi-arrow-right"></i>
          </div>

          <div className="pw-transform-panel pw-transform-after">
            <span className="pw-transform-tag pw-transform-tag-gold">After</span>
            <div className="pw-transform-visual pw-transform-grid-visual" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.08}s` }}></span>
              ))}
            </div>
            <ul>
              {after.map((a) => (
                <li key={a}><i className="bi bi-check2"></i>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="pw-transform-note">Better decision making follows naturally once the underlying data is trustworthy.</p>
      </div>
    </section>
  );
}
