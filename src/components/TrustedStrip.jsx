import "./TrustedStrip.css";

const items = [
  { icon: "bi-building", label: "SMEs" },
  { icon: "bi-hospital", label: "Clinics & Hospitals" },
  { icon: "bi-mortarboard", label: "Schools" },
  { icon: "bi-shop", label: "Retail & E-commerce" },
  { icon: "bi-briefcase", label: "Established businesses" },
];

export default function TrustedStrip() {
  return (
    <section className="pw-trusted section-tight">
      <div className="container pw-trusted-inner">
        <p className="pw-trusted-statement">
          Built for the businesses that keep Ghana running — from busy front desks to growing retail floors.
        </p>
        <ul className="pw-trusted-list">
          {items.map((it) => (
            <li key={it.label}>
              <i className={`bi ${it.icon}`}></i>
              {it.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
