"use client";

export function InstrumentIcon({ id, active }: { id: string; active: boolean }) {
  const stroke = active ? "var(--color-ivory-50)" : "var(--color-saffron-700)";
  const common = { stroke, strokeWidth: 1.6, fill: "none" } as const;

  switch (id) {
    case "shankha":
      return (
        <svg width="26" height="26" viewBox="0 0 26 26">
          <path
            d="M6 20 C 4 14 6 6 14 4 C 20 3 23 8 20 12 C 17 15 12 13 12 9"
            {...common}
          />
        </svg>
      );
    case "ghanta":
      return (
        <svg width="26" height="26" viewBox="0 0 26 26">
          <line x1="13" y1="2" x2="13" y2="7" {...common} />
          <path d="M8 7 C 5 12 5 17 4 19 C 8 21 18 21 22 19 C 21 17 21 12 18 7 Z" {...common} />
          <circle cx="13" cy="21" r="1.4" fill={stroke} />
        </svg>
      );
    case "temple-bell":
      return (
        <svg width="26" height="26" viewBox="0 0 26 26">
          <path d="M13 3 C 8 3 7 9 7 13 C 7 17 5 19 5 19 H21 C21 19 19 17 19 13 C19 9 18 3 13 3 Z" {...common} />
          <line x1="13" y1="19" x2="13" y2="23" {...common} />
        </svg>
      );
    case "singing-bowl":
      return (
        <svg width="26" height="26" viewBox="0 0 26 26">
          <path d="M4 14 C 4 19 9 22 13 22 C 17 22 22 19 22 14" {...common} />
          <ellipse cx="13" cy="14" rx="9" ry="3" {...common} />
        </svg>
      );
    case "damru":
      return (
        <svg width="26" height="26" viewBox="0 0 26 26">
          <ellipse cx="7" cy="7" rx="5" ry="3" {...common} />
          <ellipse cx="19" cy="19" rx="5" ry="3" {...common} />
          <path d="M10 9 L16 17" {...common} />
          <path d="M4 8 L10 9" {...common} />
          <path d="M16 17 L22 18" {...common} />
        </svg>
      );
    default:
      return null;
  }
}
