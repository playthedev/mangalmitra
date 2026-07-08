"use client";

const STRANDS = [
  { left: "10%", delay: "0s", duration: "6s" },
  { left: "30%", delay: "1.4s", duration: "7s" },
  { left: "55%", delay: "0.6s", duration: "6.5s" },
  { left: "78%", delay: "2s", duration: "7.5s" },
];

export function IncenseSmoke() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {STRANDS.map((strand, i) => (
        <svg
          key={i}
          className="animate-drift-up absolute bottom-0"
          style={{
            left: strand.left,
            animationDelay: strand.delay,
            animationDuration: strand.duration,
          }}
          width="60"
          height="160"
          viewBox="0 0 60 160"
          fill="none"
        >
          <path
            d="M30 160 C 20 140, 40 120, 30 100 C 20 80, 40 60, 30 40 C 22 24, 36 12, 30 0"
            stroke="rgba(232, 195, 158, 0.35)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ))}
    </div>
  );
}
