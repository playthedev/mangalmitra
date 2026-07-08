"use client";

function Bell({ delay }: { delay: string }) {
  return (
    <div
      className="animate-bell-sway origin-top"
      style={{ animationDelay: delay }}
    >
      <svg width="26" height="52" viewBox="0 0 26 52" fill="none">
        <line x1="13" y1="0" x2="13" y2="12" stroke="var(--color-gold-600)" strokeWidth="2" />
        <path
          d="M13 12 C 4 12 4 30 2 34 C 8 38 18 38 24 34 C 22 30 22 12 13 12 Z"
          fill="var(--color-gold-500)"
          stroke="var(--color-gold-700)"
          strokeWidth="1"
        />
        <circle cx="13" cy="40" r="2.5" fill="var(--color-gold-700)" />
        <line x1="13" y1="40" x2="13" y2="46" stroke="var(--color-gold-700)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function HangingBells() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-16 sm:gap-28"
    >
      <Bell delay="0s" />
      <Bell delay="0.4s" />
      <Bell delay="0.8s" />
    </div>
  );
}
