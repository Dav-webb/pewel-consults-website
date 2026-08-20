export default function DashboardIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Custom operations dashboard illustration">
      <rect width="280" height="200" fill="#0B1B33" />
      <circle cx="20" cy="170" r="60" stroke="#ffffff" strokeOpacity="0.06" />

      {/* panel frame */}
      <rect x="50" y="38" width="180" height="128" rx="8" fill="#12294D" stroke="#1c3a68" />

      {/* sidebar */}
      <rect x="50" y="38" width="34" height="128" rx="8" fill="#0e213d" />
      <rect x="62" y="54" width="10" height="10" rx="2" fill="#F0A93A" />
      <rect x="62" y="72" width="10" height="10" rx="2" fill="#ffffff" fillOpacity="0.25" />
      <rect x="62" y="90" width="10" height="10" rx="2" fill="#ffffff" fillOpacity="0.25" />

      {/* bar chart */}
      <rect x="98" y="112" width="14" height="34" rx="2" fill="#F0A93A" />
      <rect x="118" y="98" width="14" height="48" rx="2" fill="#1f8a70" />
      <rect x="138" y="120" width="14" height="26" rx="2" fill="#F0A93A" />
      <rect x="158" y="88" width="14" height="58" rx="2" fill="#1f8a70" />
      <rect x="178" y="104" width="14" height="42" rx="2" fill="#F0A93A" />

      {/* line trend */}
      <polyline
        points="98,70 118,64 138,72 158,54 178,58 198,44"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* stat pill */}
      <rect x="196" y="106" width="24" height="40" rx="6" fill="#0e213d" />
    </svg>
  );
}
