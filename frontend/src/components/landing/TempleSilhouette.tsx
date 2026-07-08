"use client";

export function TempleSilhouette() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 w-full text-sandalwood-800"
      viewBox="0 0 1440 420"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
    >
      {/* distant temple towers (gopuram-style silhouette) */}
      <g fill="currentColor" opacity={0.16}>
        <path d="M120 420 V300 L160 260 L200 300 V420Z" />
        <path d="M180 420 V240 L260 150 L340 240 V420Z" />
        <path d="M320 420 V280 L360 245 L400 280 V420Z" />
        <path d="M1040 420 V280 L1080 245 L1120 280 V420Z" />
        <path d="M1100 420 V240 L1180 150 L1260 240 V420Z" />
        <path d="M1240 420 V300 L1280 260 L1320 300 V420Z" />
      </g>

      {/* central archway (main temple entrance) */}
      <path
        d="M560 420 V220 C560 140 620 90 720 90 C820 90 880 140 880 220 V420 Z"
        fill="currentColor"
        opacity={0.28}
      />
      <path
        d="M600 420 V225 C600 160 650 120 720 120 C790 120 840 160 840 225 V420 Z"
        fill="var(--color-ivory-50)"
      />

      {/* arch ornamental trim */}
      <path
        d="M560 220 C560 140 620 90 720 90 C820 90 880 140 880 220"
        stroke="var(--color-gold-500)"
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M600 225 C600 160 650 120 720 120 C790 120 840 160 840 225"
        stroke="var(--color-gold-400)"
        strokeWidth="3"
        fill="none"
      />

      {/* lotus motif above the arch */}
      <g transform="translate(720 70)" fill="var(--color-gold-500)" opacity={0.85}>
        <path d="M0 0 C 8 -14 22 -14 24 0 C 22 8 8 8 0 0 Z" />
        <path d="M0 0 C -8 -14 -22 -14 -24 0 C -22 8 -8 8 0 0 Z" />
        <path d="M0 -4 C 4 -20 -4 -20 0 -4 Z" />
      </g>
    </svg>
  );
}
