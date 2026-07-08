"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** One full mala is traditionally 108 beads. */
const MALA_BEADS = 108;
const STORAGE_KEY = "keshavi-jaap-counter";

const MANTRAS = [
  "Om Namah Shivaya",
  "Om Namo Bhagavate Vasudevaya",
  "Hare Krishna",
  "Om Gam Ganapataye Namaha",
  "Gayatri Mantra",
  "Om",
];

type JaapState = {
  count: number;
  malas: number;
  mantra: string;
};

const DEFAULT_STATE: JaapState = { count: 0, malas: 0, mantra: MANTRAS[0] };

export function JaapCounter() {
  const [state, setState] = useState<JaapState>(DEFAULT_STATE);
  const [hydrated, setHydrated] = useState(false);
  // A short-lived pulse key so each tap can retrigger the ripple animation.
  const [pulse, setPulse] = useState(0);
  const [justCompletedMala, setJustCompletedMala] = useState(false);
  const completionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load any saved progress once, on the client, to avoid an SSR mismatch.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setState({ ...DEFAULT_STATE, ...JSON.parse(stored) });
    } catch {
      // Corrupt/unavailable storage — start fresh.
    }
    setHydrated(true);
  }, []);

  // Persist whenever the count changes (but only after the initial load).
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  useEffect(() => {
    return () => {
      if (completionTimer.current) clearTimeout(completionTimer.current);
    };
  }, []);

  function increment() {
    setPulse((p) => p + 1);
    setState((prev) => {
      const nextCount = prev.count + 1;
      if (nextCount >= MALA_BEADS) {
        // Completed a full mala — roll over and celebrate briefly.
        setJustCompletedMala(true);
        if (completionTimer.current) clearTimeout(completionTimer.current);
        completionTimer.current = setTimeout(() => setJustCompletedMala(false), 1800);
        return { ...prev, count: 0, malas: prev.malas + 1 };
      }
      return { ...prev, count: nextCount };
    });
  }

  function decrement() {
    setState((prev) => {
      if (prev.count === 0 && prev.malas === 0) return prev;
      if (prev.count === 0) {
        return { ...prev, count: MALA_BEADS - 1, malas: prev.malas - 1 };
      }
      return { ...prev, count: prev.count - 1 };
    });
  }

  function reset() {
    setState((prev) => ({ ...prev, count: 0, malas: 0 }));
  }

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const progress = state.count / MALA_BEADS;
  const totalRepetitions = state.malas * MALA_BEADS + state.count;

  return (
    <div className="mx-auto max-w-md rounded-3xl border border-marigold-200 bg-parchment-50/70 p-6 text-center shadow-sm sm:p-8">
      <p className="mb-1 text-xs font-medium uppercase tracking-[0.25em] text-maroon-600">
        Jaap Counter
      </p>
      <h3 className="mb-6 font-[family-name:var(--font-heading)] text-2xl text-maroon-800">
        Count Your Mantras
      </h3>

      {/* Mantra picker */}
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {MANTRAS.map((m) => (
          <button
            key={m}
            onClick={() => setState((prev) => ({ ...prev, mantra: m }))}
            className={`rounded-full px-3 py-1 text-xs transition-colors ${
              state.mantra === m
                ? "bg-maroon-600 text-parchment-50"
                : "border border-marigold-300 text-sandalwood-700 hover:bg-marigold-50"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* The tap target — a mala progress ring with the live count in the centre */}
      <div className="relative mx-auto mb-6 h-60 w-60">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="var(--color-marigold-100)"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="var(--color-maroon-500)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            style={{ transition: "stroke-dashoffset 0.35s ease-out" }}
          />
        </svg>

        {/* Ripple that fires on every tap */}
        <AnimatePresence>
          <motion.span
            key={pulse}
            aria-hidden
            className="pointer-events-none absolute inset-3 rounded-full border-2 border-gold-400"
            initial={{ opacity: 0.5, scale: 0.85 }}
            animate={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </AnimatePresence>

        <button
          onClick={increment}
          aria-label={`Count one repetition of ${state.mantra}`}
          className="absolute inset-3 flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-marigold-50 to-parchment-100 transition-transform active:scale-95"
        >
          <motion.span
            key={state.count}
            initial={{ scale: 0.8, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="font-[family-name:var(--font-heading)] text-6xl text-maroon-800"
          >
            {state.count}
          </motion.span>
          <span className="mt-1 text-xs uppercase tracking-widest text-sandalwood-500">
            of {MALA_BEADS} · tap
          </span>
        </button>
      </div>

      {/* Mala completion toast */}
      <div className="mb-4 h-6">
        <AnimatePresence>
          {justCompletedMala && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-medium text-maroon-700"
            >
              🌸 Mala complete — {state.malas} {state.malas === 1 ? "round" : "rounds"} done
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Stats */}
      <div className="mb-6 flex justify-center gap-8 text-sandalwood-700">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800">
            {state.malas}
          </p>
          <p className="text-xs uppercase tracking-wider text-sandalwood-500">Malas</p>
        </div>
        <div>
          <p className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800">
            {totalRepetitions}
          </p>
          <p className="text-xs uppercase tracking-wider text-sandalwood-500">Total</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3">
        <button
          onClick={decrement}
          className="rounded-full border border-marigold-300 px-5 py-2 text-sm text-maroon-700 transition-colors hover:bg-marigold-50"
        >
          − Undo
        </button>
        <button
          onClick={reset}
          className="rounded-full border border-marigold-300 px-5 py-2 text-sm text-sandalwood-600 transition-colors hover:bg-marigold-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
