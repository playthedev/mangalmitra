"use client";

const PETALS = [
  { left: "5%", delay: "0s", duration: "14s", size: 14 },
  { left: "20%", delay: "3s", duration: "18s", size: 10 },
  { left: "40%", delay: "6s", duration: "16s", size: 16 },
  { left: "60%", delay: "1s", duration: "20s", size: 12 },
  { left: "75%", delay: "8s", duration: "15s", size: 14 },
  { left: "90%", delay: "4s", duration: "17s", size: 10 },
];

export function FloatingFlowers() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PETALS.map((petal, i) => (
        <svg
          key={i}
          className="animate-float-petal absolute -top-8"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
          width={petal.size}
          height={petal.size}
          viewBox="0 0 20 20"
          fill="var(--color-saffron-400)"
          opacity={0.6}
        >
          <path d="M10 0 C 14 4, 20 6, 20 10 C 20 14, 14 16, 10 20 C 6 16, 0 14, 0 10 C 0 6, 6 4, 10 0 Z" />
        </svg>
      ))}
    </div>
  );
}
