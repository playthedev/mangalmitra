"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";

// TODO: replace with a real upcoming-festival lookup once the Wisdom/Panchang module exists.
const NEXT_FESTIVAL = { name: "Ganesh Chaturthi", date: "2026-08-14", guideSlug: "ganesh-chaturthi-puja" };

function getCountdown(targetDate: string) {
  const diff = new Date(targetDate).getTime() - Date.now();
  const days = Math.max(0, Math.floor(diff / 86400000));
  const hours = Math.max(0, Math.floor((diff % 86400000) / 3600000));
  return { days, hours };
}

export function FestivalBanner() {
  const [countdown, setCountdown] = useState(() => getCountdown(NEXT_FESTIVAL.date));

  useEffect(() => {
    const interval = setInterval(() => setCountdown(getCountdown(NEXT_FESTIVAL.date)), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-maroon-700 px-6 py-6">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 text-parchment-50">
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-flicker">🪔</span>
          <p>
            <span className="font-[family-name:var(--font-heading)] text-lg">
              {NEXT_FESTIVAL.name}
            </span>{" "}
            is in{" "}
            <span className="font-semibold text-marigold-300">
              {countdown.days}d {countdown.hours}h
            </span>
          </p>
        </div>
        <ButtonLink href={`/puja-guides/${NEXT_FESTIVAL.guideSlug}`} variant="gold" size="sm">
          Prepare Now →
        </ButtonLink>
      </div>
    </section>
  );
}
