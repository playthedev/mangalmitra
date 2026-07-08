"use client";

import { useEffect, useState } from "react";
import { HeavenDoors } from "./HeavenDoors";

const SEEN_KEY = "keshavi:gate-seen";

/**
 * First-visit only: the heaven's doors open once when a new visitor lands,
 * revealing the site behind them. Persists in localStorage so returning
 * visitors are never interrupted. Renders nothing after it has played.
 */
function hasSeenGate() {
  // SSR renders nothing; on the client, decide once at mount.
  if (typeof window === "undefined") return true;
  try {
    return window.localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    // localStorage blocked (private mode) — treat as seen and skip the splash
    return true;
  }
}

export function TempleGateSplash() {
  // Start hidden so SSR and the first client render agree (no hydration
  // mismatch); the effect decides on mount whether to play the gates.
  const [phase, setPhase] = useState<"hidden" | "opening" | "done">("hidden");

  useEffect(() => {
    // Returning visitors: stay hidden, never interrupt.
    if (hasSeenGate()) return;

    try {
      window.localStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }

    // Lock scroll while the gates are on screen
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Small beat on the closed doors before they swing open
    const t = window.setTimeout(() => setPhase("opening"), 450);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (phase === "hidden" || phase === "done") return null;

  return (
    <HeavenDoors
      open={phase === "opening"}
      onOpened={() => {
        document.body.style.overflow = "";
        setPhase("done");
      }}
    />
  );
}
