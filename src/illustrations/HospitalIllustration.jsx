export default function HospitalIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hospital management system illustration">
      <rect width="280" height="200" fill="#0B1B33" />
      <circle cx="240" cy="30" r="70" stroke="#ffffff" strokeOpacity="0.06" />
      <circle cx="20" cy="180" r="50" stroke="#ffffff" strokeOpacity="0.06" />

      {/* monitor */}
      <rect x="60" y="46" width="160" height="104" rx="8" fill="#12294D" stroke="#1c3a68" />
      <rect x="76" y="60" width="128" height="16" rx="3" fill="#1c3a68" />
      <rect x="76" y="84" width="80" height="8" rx="2" fill="#F0A93A" />
      <rect x="76" y="98" width="128" height="6" rx="2" fill="#ffffff" fillOpacity="0.18" />
      <rect x="76" y="110" width="100" height="6" rx="2" fill="#ffffff" fillOpacity="0.12" />

      {/* heartbeat line */}
      <polyline
        points="76,132 96,132 104,118 114,144 122,124 132,132 204,132"
        fill="none"
        stroke="#1f8a70"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* stand */}
      <rect x="130" y="150" width="20" height="14" fill="#1c3a68" />
      <rect x="112" y="164" width="56" height="8" rx="4" fill="#1c3a68" />

      {/* cross badge */}
      <circle cx="222" cy="146" r="20" fill="#F0A93A" />
      <rect x="218" y="136" width="8" height="20" rx="2" fill="#0B1B33" />
      <rect x="212" y="142" width="20" height="8" rx="2" fill="#0B1B33" />
    </svg>
  );
}
