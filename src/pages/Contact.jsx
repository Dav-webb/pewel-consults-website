import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { serviceCategories } from "../data/content";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ready for backend/API integration — wire this up to an endpoint or form service later.
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your business, and we'll take it from there."
        description="Whether you already know exactly what you need or you're just exploring what's possible, start the conversation here."
      />

      <section className="section">
        <div className="container pw-contact-grid">
          <div className="pw-contact-form-wrap">
            {submitted ? (
              <div className="pw-contact-success">
                <i className="bi bi-check-circle"></i>
                <h3>Message received.</h3>
                <p>Thanks for reaching out — a member of our team will get back to you shortly.</p>
                <button className="btn-pw btn-pw-outline-dark" onClick={() => { setForm(initialForm); setSubmitted(false); }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="pw-contact-form" onSubmit={handleSubmit}>
                <div className="pw-form-row">
                  <div className="pw-form-field">
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Ama Mensah" />
                  </div>
                  <div className="pw-form-field">
                    <label htmlFor="email">Email address</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="ama@company.com" />
                  </div>
                </div>

                <div className="pw-form-row">
                  <div className="pw-form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+233 00 000 0000" />
                  </div>
                  <div className="pw-form-field">
                    <label htmlFor="company">Company / organization</label>
                    <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Company name" />
                  </div>
                </div>

                <div className="pw-form-field">
                  <label htmlFor="service">Service required</label>
                  <select id="service" name="service" required value={form.service} onChange={handleChange}>
                    <option value="" disabled>Select a service</option>
                    {serviceCategories.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div className="pw-form-field">
                  <label htmlFor="message">Project details</label>
                  <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Tell us a little about what you're trying to build or fix..." />
                </div>

                <button type="submit" className="btn-pw btn-pw-primary pw-form-submit">
                  Send message <i className="bi bi-arrow-right"></i>
                </button>
              </form>
            )}
          </div>

          <aside className="pw-contact-info">
            <div className="pw-contact-info-card">
              <h3>Talk to us directly</h3>
              <ul>
                <li>
                  <i className="bi bi-geo-alt"></i>
                  <div><strong>Location</strong><span>Accra, Ghana</span></div>
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  <div><strong>Email</strong><span>pewelconsults@gmail.com</span></div>
                </li>
                <li>
                  <i className="bi bi-telephone"></i>
                  <div><strong>Phone</strong><span>+233 54 471 7479 / +233 59 367 6619</span></div>
                </li>
                <li>
                  <i className="bi bi-clock"></i>
                  <div><strong>Hours</strong><span>Mon – Fri, 8am – 6pm GMT</span></div>
                </li>
              </ul>
              <a
                href="https://wa.me/233544717479"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pw btn-pw-primary pw-contact-whatsapp"
              >
                <i className="bi bi-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
