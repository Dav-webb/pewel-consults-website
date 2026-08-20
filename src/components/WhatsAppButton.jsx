import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      className="pw-whatsapp"
      href="https://wa.me/233544717479"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
