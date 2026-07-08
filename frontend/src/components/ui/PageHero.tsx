"use client";

import { motion } from "framer-motion";

/**
 * A shared, gently animated page header — a warm marigold→parchment gradient
 * banner with a paper-grain texture and a small gold lotus glyph. Gives every
 * content page the same devotional, professional opening as the landing page.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-marigold-100 via-parchment-100 to-parchment-50 px-6 py-16 text-center paper-grain">
      {/* Soft radial glow behind the title */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 w-56 -translate-y-1/3 rounded-full bg-marigold-300/30 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-2xl"
      >
        <LotusMark />

        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-maroon-600">
            {eyebrow}
          </p>
        )}

        <h1 className="mb-3 font-[family-name:var(--font-heading)] text-4xl text-maroon-800 sm:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto max-w-xl text-sandalwood-700">{subtitle}</p>
        )}
      </motion.div>
    </section>
  );
}

function LotusMark() {
  return (
    <div aria-hidden className="mb-4 flex justify-center">
      <motion.svg
        width="44"
        height="26"
        viewBox="0 0 56 32"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      >
        <g fill="var(--color-gold-500)">
          <path d="M28 32 C 20 24 20 12 28 4 C 36 12 36 24 28 32 Z" opacity={0.9} />
          <path d="M28 32 C 14 26 6 16 10 6 C 20 8 26 18 28 32 Z" opacity={0.7} />
          <path d="M28 32 C 42 26 50 16 46 6 C 36 8 30 18 28 32 Z" opacity={0.7} />
          <path d="M28 32 C 10 30 2 22 4 14 C 16 14 24 22 28 32 Z" opacity={0.5} />
          <path d="M28 32 C 46 30 54 22 52 14 C 40 14 32 22 28 32 Z" opacity={0.5} />
        </g>
      </motion.svg>
    </div>
  );
}
