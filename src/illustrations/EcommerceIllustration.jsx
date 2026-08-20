export default function EcommerceIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="E-commerce platform illustration">
      <rect width="280" height="200" fill="#0B1B33" />
      <circle cx="30" cy="20" r="60" stroke="#ffffff" strokeOpacity="0.06" />
      <circle cx="250" cy="180" r="70" stroke="#ffffff" strokeOpacity="0.06" />

      {/* bag */}
      <path d="M96 78 h88 l8 92 a8 8 0 0 1 -8 8 h-88 a8 8 0 0 1 -8 -8 z" fill="#12294D" stroke="#1c3a68" />
      <path d="M114 78 v-10 a26 26 0 0 1 52 0 v10" stroke="#F0A93A" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* products grid on bag */}
      <rect x="112" y="100" width="24" height="24" rx="4" fill="#F0A93A" />
      <rect x="144" y="100" width="24" height="24" rx="4" fill="#1f8a70" />
      <rect x="112" y="132" width="24" height="24" rx="4" fill="#1f8a70" />
      <rect x="144" y="132" width="24" height="24" rx="4" fill="#F0A93A" />

      {/* price tag */}
      <g transform="translate(196 46) rotate(18)">
        <path d="M0 8 L18 0 L34 16 L16 34 L0 8Z" fill="#F0A93A" />
        <circle cx="9" cy="10" r="2.6" fill="#0B1B33" />
      </g>

      {/* floating dots (cart items) */}
      <circle cx="60" cy="60" r="5" fill="#ffffff" fillOpacity="0.25" />
      <circle cx="76" cy="150" r="4" fill="#ffffff" fillOpacity="0.18" />
    </svg>
  );
}
