export default function SolutionsIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Industry solutions illustration">
      <rect width="280" height="200" fill="#0B1B33" />
      <circle cx="250" cy="170" r="70" stroke="#ffffff" strokeOpacity="0.06" />
      <circle cx="24" cy="20" r="50" stroke="#ffffff" strokeOpacity="0.06" />

      {/* central connecting lines */}
      <g stroke="#1c3a68" strokeWidth="1.5">
        <line x1="140" y1="100" x2="80" y2="56" />
        <line x1="140" y1="100" x2="200" y2="56" />
        <line x1="140" y1="100" x2="80" y2="144" />
        <line x1="140" y1="100" x2="200" y2="144" />
      </g>
      <circle cx="140" cy="100" r="10" fill="#F0A93A" />

      {/* healthcare tile */}
      <rect x="52" y="32" width="56" height="48" rx="10" fill="#12294D" stroke="#1c3a68" />
      <path d="M80 46 v20 M70 56 h20" stroke="#F0A93A" strokeWidth="3" strokeLinecap="round" />

      {/* business tile */}
      <rect x="172" y="32" width="56" height="48" rx="10" fill="#12294D" stroke="#1c3a68" />
      <rect x="188" y="48" width="24" height="18" rx="3" fill="#1f8a70" />
      <rect x="192" y="44" width="16" height="6" rx="2" fill="#1f8a70" />

      {/* inventory tile */}
      <rect x="52" y="120" width="56" height="48" rx="10" fill="#12294D" stroke="#1c3a68" />
      <rect x="66" y="134" width="12" height="12" rx="2" fill="#F0A93A" />
      <rect x="80" y="134" width="12" height="12" rx="2" fill="#1f8a70" fillOpacity="0.7" />
      <rect x="66" y="148" width="12" height="12" rx="2" fill="#1f8a70" fillOpacity="0.7" />
      <rect x="80" y="148" width="12" height="12" rx="2" fill="#F0A93A" />

      {/* ecommerce tile */}
      <rect x="172" y="120" width="56" height="48" rx="10" fill="#12294D" stroke="#1c3a68" />
      <path d="M188 138 h24 l-3 18 h-18 z" fill="#F0A93A" />
      <path d="M194 138 v-4 a6 6 0 0 1 12 0 v4" stroke="#1f8a70" strokeWidth="3" fill="none" />
    </svg>
  );
}
