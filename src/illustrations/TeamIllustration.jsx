export default function TeamIllustration() {
  return (
    <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a team collaborating around a shared digital system">
      <rect width="420" height="340" rx="20" fill="#0B1B33" />
      <circle cx="360" cy="40" r="90" stroke="#ffffff" strokeOpacity="0.05" />
      <circle cx="40" cy="300" r="70" stroke="#ffffff" strokeOpacity="0.05" />

      {/* table */}
      <ellipse cx="210" cy="248" rx="150" ry="18" fill="#12294D" />

      {/* shared screen */}
      <rect x="140" y="90" width="140" height="96" rx="8" fill="#12294D" stroke="#1c3a68" strokeWidth="1.5" />
      <rect x="152" y="102" width="80" height="10" rx="2" fill="#F0A93A" />
      <rect x="152" y="120" width="116" height="6" rx="2" fill="#ffffff" fillOpacity="0.25" />
      <rect x="152" y="132" width="90" height="6" rx="2" fill="#ffffff" fillOpacity="0.16" />
      <rect x="152" y="150" width="34" height="24" rx="4" fill="#1f8a70" />
      <rect x="192" y="150" width="34" height="24" rx="4" fill="#F0A93A" fillOpacity="0.8" />
      <rect x="232" y="150" width="34" height="24" rx="4" fill="#1c3a68" />
      <rect x="200" y="186" width="20" height="16" fill="#1c3a68" />
      <rect x="182" y="200" width="56" height="8" rx="4" fill="#1c3a68" />

      {/* person 1 */}
      <circle cx="96" cy="176" r="22" fill="#F0A93A" />
      <path d="M60 248 q0 -40 36 -40 t36 40" fill="#1c3a68" />

      {/* person 2 */}
      <circle cx="324" cy="176" r="22" fill="#1f8a70" />
      <path d="M288 248 q0 -40 36 -40 t36 40" fill="#12294D" stroke="#1c3a68" />

      {/* person 3, smaller, behind table */}
      <circle cx="210" cy="150" r="16" fill="#ffffff" fillOpacity="0.5" />
      <path d="M182 208 q0 -32 28 -32 t28 32" fill="#12294D" />

      {/* floating check bubbles */}
      <g transform="translate(76 100)">
        <circle r="16" fill="#1f8a70" />
        <path d="M-6 0 L-1 5 L7 -7" stroke="#0B1B33" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(346 118)">
        <circle r="14" fill="#F0A93A" />
        <path d="M-5 0 L-1 4 L6 -6" stroke="#0B1B33" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
