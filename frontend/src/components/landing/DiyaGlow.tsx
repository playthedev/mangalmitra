"use client";

export function DiyaGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center ${className}`} aria-hidden>
      <svg
        className="animate-flicker"
        width="28"
        height="40"
        viewBox="0 0 28 40"
        fill="none"
      >
        <ellipse cx="14" cy="34" rx="4" ry="6" fill="var(--color-diya-glow)" />
        <path
          d="M14 34 C 10 26, 18 20, 14 10 C 12 16, 8 20, 10 26 C 11 29, 12 32, 14 34 Z"
          fill="var(--color-diya-ember)"
        />
      </svg>
      <svg width="70" height="26" viewBox="0 0 70 26" fill="none">
        <defs>
          <radialGradient id="brassBody" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="var(--color-gold-300)" />
            <stop offset="55%" stopColor="var(--color-gold-500)" />
            <stop offset="100%" stopColor="var(--color-sandalwood-700)" />
          </radialGradient>
        </defs>
        <ellipse cx="35" cy="10" rx="33" ry="9" fill="var(--color-sandalwood-800)" opacity={0.4} />
        <ellipse cx="35" cy="8" rx="27" ry="7" fill="url(#brassBody)" />
        <ellipse cx="35" cy="6" rx="16" ry="3.4" fill="var(--color-gold-200)" opacity={0.7} />
      </svg>
    </div>
  );
}
