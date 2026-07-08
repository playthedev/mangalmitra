"use client";

import { useEffect, useState } from "react";

/**
 * A single ornate golden temple-gate panel (swarg dwar / heaven's door).
 * `side` decides which way it hinges. Rendered as a fixed full-height half.
 */
function DoorPanel({ side, open }: { side: "left" | "right"; open: boolean }) {
  const isLeft = side === "left";
  return (
    <div
      className="pointer-events-none fixed top-0 z-[70] h-full w-1/2"
      style={{
        left: isLeft ? 0 : "50%",
        transformOrigin: isLeft ? "left center" : "right center",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        animation: open
          ? `${isLeft ? "door-open-left" : "door-open-right"} 2.2s cubic-bezier(0.33, 0, 0.15, 1) forwards`
          : "none",
        animationDelay: "0.6s",
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden border-gold-700"
        style={{
          borderRightWidth: isLeft ? 3 : 0,
          borderLeftWidth: isLeft ? 0 : 3,
          background:
            "linear-gradient(135deg, var(--color-maroon-700), var(--color-maroon-800) 45%, var(--color-maroon-900))",
        }}
      >
        {/* Ornamental gold border frame */}
        <div className="absolute inset-3 rounded-t-[999px] border-2 border-gold-500/70" />
        <div className="absolute inset-6 rounded-t-[999px] border border-gold-400/40" />

        {/* Vertical brass studs down the seam */}
        <div
          className={`absolute inset-y-8 flex flex-col justify-around ${
            isLeft ? "right-4" : "left-4"
          }`}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_6px_rgba(212,175,55,0.8)]"
            />
          ))}
        </div>

        {/* Central Om medallion near the seam */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            isLeft ? "right-8" : "left-8"
          }`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-500 bg-maroon-800/60">
            <span className="font-[family-name:var(--font-heading)] text-3xl text-marigold-400">
              ॐ
            </span>
          </div>
        </div>

        {/* Door handle ring */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            isLeft ? "right-1" : "left-1"
          }`}
        >
          <div className="h-10 w-10 rounded-full border-4 border-gold-600" />
        </div>
      </div>
    </div>
  );
}

/**
 * Heaven's doors. When `open` becomes true the two panels swing outward,
 * a warm light blooms through the widening seam, then `onOpened` fires and
 * the whole overlay fades away.
 *
 * Respects prefers-reduced-motion by resolving instantly.
 */
export function HeavenDoors({
  open,
  onOpened,
}: {
  open: boolean;
  onOpened?: () => void;
}) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!open) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const total = reduce ? 200 : 3600; // doors swing + approach + divine bloom settle
    const timer = window.setTimeout(() => {
      setGone(true);
      onOpened?.();
    }, total);
    return () => window.clearTimeout(timer);
  }, [open, onOpened]);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[60] overflow-hidden"
      style={{ perspective: "1600px" }}
    >
      {/* Everything within drifts gently forward, so parting the doors feels
          like being drawn through the gate into Swarg rather than watching it. */}
      <div
        className="absolute inset-0"
        style={{
          transformOrigin: "50% 45%",
          animation: open
            ? "gate-approach 3s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            : "none",
          animationDelay: "0.6s",
        }}
      >
        {/* Divine light behind the doors, revealed as they part */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, var(--color-marigold-100), var(--color-marigold-300) 30%, var(--color-gold-500) 70%, var(--color-maroon-700))",
          }}
        />
        {/* Soft radiant beams glowing at the seam, blooming toward the viewer */}
        <div
          className="absolute left-1/2 top-1/2 h-[140vh] w-[140vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,246,223,0.95), rgba(255,214,112,0.4) 40%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            animation: open
              ? "gate-glow-fade 3.4s ease-in-out forwards"
              : "none",
          }}
        />

        <DoorPanel side="left" open={open} />
        <DoorPanel side="right" open={open} />
      </div>

      {/* Final divine bloom — a soft white radiance that eases the crossfade
          into the destination page instead of a hard cut. */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#fffaf0,#fff6df_45%,rgba(255,246,223,0.6))]"
        style={{
          animation: open ? "gate-bloom 3.6s ease-in forwards" : "none",
        }}
      />
    </div>
  );
}
