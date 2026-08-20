import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header className={`pw-nav ${scrolled ? "pw-nav-scrolled" : ""}`}>
      <div className="container pw-nav-inner">
        <Link to="/" className="pw-brand" onClick={() => setOpen(false)}>
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#0B1B33" />
            <circle cx="20" cy="32" r="5" fill="#F0A93A" />
            <circle cx="44" cy="20" r="5" fill="#F0A93A" />
            <circle cx="44" cy="44" r="5" fill="#F0A93A" />
            <path d="M20 32 L44 20 M20 32 L44 44" stroke="#F0A93A" strokeWidth="2.5" fill="none" />
          </svg>
          <span className="pw-brand-text">
            PEWEL <strong>CONSULTS</strong>
          </span>
        </Link>

        <nav className={`pw-links ${open ? "pw-links-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `pw-link ${isActive ? "pw-link-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-pw btn-pw-primary pw-nav-cta" onClick={() => setOpen(false)}>
            Start a Project
          </Link>
        </nav>

        <button
          className={`pw-burger ${open ? "pw-burger-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
