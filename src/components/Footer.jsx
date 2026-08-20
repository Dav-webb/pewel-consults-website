import { Link } from "react-router-dom";
import { serviceCategories } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="pw-footer">
      <div className="container pw-footer-top">
        <div className="pw-footer-brand">
          <div className="pw-brand">
            <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
              <rect width="64" height="64" rx="14" fill="#F0A93A" />
              <circle cx="20" cy="32" r="5" fill="#0B1B33" />
              <circle cx="44" cy="20" r="5" fill="#0B1B33" />
              <circle cx="44" cy="44" r="5" fill="#0B1B33" />
              <path d="M20 32 L44 20 M20 32 L44 44" stroke="#0B1B33" strokeWidth="2.5" fill="none" />
            </svg>
            <span className="pw-brand-text">
              PEWEL <strong>CONSULTS</strong>
            </span>
          </div>
          <p className="pw-footer-tagline">Digital Solutions for Modern Businesses.</p>
          <div className="pw-footer-social">
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="#" aria-label="X / Twitter"><i className="bi bi-twitter-x"></i></a>
          </div>
        </div>

        <div className="pw-footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="pw-footer-col">
          <h4>Service Categories</h4>
          <ul>
            {serviceCategories.map((s) => (
              <li key={s.id}><Link to={`/services#${s.id}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="pw-footer-col">
          <h4>Contact</h4>
          <ul className="pw-footer-contact">
            <li><i className="bi bi-geo-alt"></i> Accra, Ghana</li>
            <li><i className="bi bi-envelope"></i> <a href="mailto:pewelconsults@gmail.com">pewelconsults@gmail.com</a></li>
            <li><i className="bi bi-telephone"></i> <a href="tel:+233544717479">+233 54 471 7479</a> / <a href="tel:+233593676619">+233 59 367 6619</a></li>
            <li><i className="bi bi-whatsapp"></i> <a href="https://wa.me/233544717479" target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
          </ul>
        </div>
      </div>

      <div className="container pw-footer-bottom">
        <p>© 2026 Pewel Consults. All rights reserved.</p>
        <div className="pw-footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
