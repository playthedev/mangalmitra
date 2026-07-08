"use client";

export function RisingSun() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2"
      width="240"
      height="240"
      viewBox="0 0 240 240"
    >
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-gold-400)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="var(--color-saffron-400)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-saffron-400)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="120" fill="url(#sunGlow)" />
      <circle cx="120" cy="120" r="46" fill="var(--color-gold-500)" opacity="0.9" />
      <g stroke="var(--color-gold-400)" strokeWidth="3" opacity="0.6">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const round = (n: number) => Math.round(n * 1000) / 1000;
          const x1 = round(120 + Math.cos(angle) * 58);
          const y1 = round(120 + Math.sin(angle) * 58);
          const x2 = round(120 + Math.cos(angle) * 78);
          const y2 = round(120 + Math.sin(angle) * 78);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />;
        })}
      </g>
    </svg>
  );
}
