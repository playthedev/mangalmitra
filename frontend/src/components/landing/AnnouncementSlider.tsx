"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";

type Announcement = {
  id: string;
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

// TODO: source these from the Wisdom/Panchang module + admin-managed announcements once available.
const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ganesh-chaturthi",
    icon: "🪔",
    eyebrow: "Upcoming Festival",
    title: "Ganesh Chaturthi is near",
    description: "Prepare your home puja with our curated Ganesh Chaturthi kit and step-by-step guide.",
    ctaLabel: "Prepare Now",
    href: "/puja-guides/ganesh-chaturthi-puja",
  },
  {
    id: "shop-offer",
    icon: "🌼",
    eyebrow: "Temple Store",
    title: "Fresh puja essentials in stock",
    description: "Idols, diyas, incense and complete kits — sacred traditions delivered to your doorstep.",
    ctaLabel: "Shop Now",
    href: "/shop",
  },
];

const ROTATE_MS = 6000;

export function AnnouncementSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = ANNOUNCEMENTS.length;
  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => setIndex((i) => (i + 1) % count), ROTATE_MS);
    return () => clearInterval(timer);
  }, [paused, count]);

  const current = ANNOUNCEMENTS[index];

  return (
    <div
      className="relative w-full max-w-2xl rounded-2xl border border-gold-300/50 bg-maroon-700/90 px-5 py-4 text-parchment-50 shadow-lg backdrop-blur-sm sm:px-6 sm:py-5"
      role="region"
      aria-roledescription="carousel"
      aria-label="Announcements"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="flex items-center gap-3">
        {/* Prev */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-300/40 text-parchment-50/80 transition hover:bg-maroon-600 hover:text-parchment-50 sm:flex"
          aria-label="Previous announcement"
        >
          ←
        </button>

        <div className="min-h-[4.5rem] flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-left"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-2xl animate-flicker" aria-hidden>
                  {current.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-marigold-300">
                    {current.eyebrow}
                  </p>
                  <p className="font-[family-name:var(--font-heading)] text-lg leading-tight">
                    {current.title}
                  </p>
                  <p className="mt-0.5 text-sm text-parchment-200">{current.description}</p>
                </div>
              </div>
              <ButtonLink href={current.href} variant="gold" size="sm" className="shrink-0">
                {current.ctaLabel} →
              </ButtonLink>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={() => go(index + 1)}
          className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-300/40 text-parchment-50/80 transition hover:bg-maroon-600 hover:text-parchment-50 sm:flex"
          aria-label="Next announcement"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {ANNOUNCEMENTS.map((a, i) => (
          <button
            key={a.id}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to announcement ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-marigold-300" : "w-2 bg-parchment-50/40 hover:bg-parchment-50/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
