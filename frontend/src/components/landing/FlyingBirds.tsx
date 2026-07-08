"use client";

const FLOCKS = [
  { top: "12%", delay: "0s", duration: "22s", scale: 1 },
  { top: "20%", delay: "5s", duration: "26s", scale: 0.7 },
  { top: "8%", delay: "11s", duration: "24s", scale: 0.85 },
];

function Bird() {
  return (
    <path
      d="M0 4 Q 6 -4 12 4 Q 18 -4 24 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />
  );
}

export function FlyingBirds() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden text-sandalwood-700">
      {FLOCKS.map((flock, i) => (
        <svg
          key={i}
          className="animate-fly-across absolute"
          style={{
            top: flock.top,
            left: "-10%",
            animationDelay: flock.delay,
            animationDuration: flock.duration,
            transform: `scale(${flock.scale})`,
          }}
          width="90"
          height="20"
          viewBox="0 0 90 20"
          opacity={0.5}
        >
          <g transform="translate(0,8)">
            <Bird />
          </g>
          <g transform="translate(30,0)">
            <Bird />
          </g>
          <g transform="translate(58,10)">
            <Bird />
          </g>
        </svg>
      ))}
    </div>
  );
}
