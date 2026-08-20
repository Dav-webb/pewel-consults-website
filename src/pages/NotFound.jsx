import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="pw-404">
      <div className="container pw-404-inner">
        <span className="tag">404</span>
        <h1>This page took a wrong turn.</h1>
        <p className="lead">The page you're looking for doesn't exist or may have moved.</p>
        <Link to="/" className="btn-pw btn-pw-primary">
          Back to home <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
}
