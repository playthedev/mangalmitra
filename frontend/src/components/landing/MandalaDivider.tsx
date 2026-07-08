/**
 * A section divider with a slowly rotating mandala at its centre,
 * flanked by thin gold rules — a more premium counterpart to LotusDivider.
 */
export function MandalaDivider() {
  const petals = Array.from({ length: 16 });
  return (
    <div aria-hidden className="flex items-center justify-center gap-4 py-8">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/60 sm:w-28" />
      <svg
        className="animate-spin-slow"
        width="52"
        height="52"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="6" fill="var(--color-marigold-500)" />
        <circle
          cx="50"
          cy="50"
          r="14"
          stroke="var(--color-gold-500)"
          strokeWidth="1.5"
          fill="none"
        />
        <g stroke="var(--color-terracotta-400)" strokeWidth="1.2">
          {petals.map((_, i) => {
            const angle = (i * (360 / petals.length) * Math.PI) / 180;
            const round = (n: number) => Math.round(n * 1000) / 1000;
            const x1 = round(50 + Math.cos(angle) * 16);
            const y1 = round(50 + Math.sin(angle) * 16);
            const x2 = round(50 + Math.cos(angle) * 30);
            const y2 = round(50 + Math.sin(angle) * 30);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeLinecap="round"
              />
            );
          })}
        </g>
        <g fill="var(--color-gold-500)">
          {petals.map((_, i) => {
            const angle = (i * (360 / petals.length) * Math.PI) / 180;
            const round = (n: number) => Math.round(n * 1000) / 1000;
            const cx = round(50 + Math.cos(angle) * 36);
            const cy = round(50 + Math.sin(angle) * 36);
            return <circle key={i} cx={cx} cy={cy} r="2" opacity={0.8} />;
          })}
        </g>
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="var(--color-gold-400)"
          strokeWidth="0.8"
          strokeDasharray="2 4"
          fill="none"
          opacity={0.6}
        />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/60 sm:w-28" />
    </div>
  );
}
