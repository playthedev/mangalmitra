"use client";

/**
 * A breathing, softly glowing Om (ॐ) — the primordial sound.
 * Uses the devotional heading font so the glyph matches the brand.
 */
export function OmGlow({
  size = 64,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`animate-om-breathe inline-block select-none font-[family-name:var(--font-heading)] leading-none text-marigold-500 ${className}`}
      style={{ fontSize: size }}
    >
      ॐ
    </span>
  );
}
