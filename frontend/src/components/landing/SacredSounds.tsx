"use client";

import { useRef, useState } from "react";
import { SACRED_INSTRUMENTS } from "@/lib/audio-manifest";
import { InstrumentIcon } from "./InstrumentIcon";

export function SacredSounds() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  function toggle(id: string) {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (playingId === id) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingId(null);
      return;
    }

    if (playingId) {
      const prev = audioRefs.current[playingId];
      prev?.pause();
      if (prev) prev.currentTime = 0;
    }

    audio.currentTime = 0;
    audio.play().catch(() => {});
    setPlayingId(id);
  }

  return (
    <section className="bg-sandalwood-50 py-20 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl text-sandalwood-900 mb-2">
          Sacred Sounds
        </h2>
        <p className="text-sandalwood-700 mb-12">
          Tap an instrument to hear its resonance.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {SACRED_INSTRUMENTS.map((instrument) => {
            const isPlaying = playingId === instrument.id;
            return (
              <button
                key={instrument.id}
                onClick={() => toggle(instrument.id)}
                className={`flex flex-col items-center gap-3 rounded-2xl border p-5 transition-all ${
                  isPlaying
                    ? "border-gold-500 bg-gold-50 shadow-lg scale-105"
                    : "border-sandalwood-200 bg-white hover:border-gold-300 hover:shadow-md"
                }`}
              >
                <audio
                  ref={(el) => {
                    audioRefs.current[instrument.id] = el;
                  }}
                  src={instrument.src}
                  onEnded={() => setPlayingId(null)}
                />
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${
                    isPlaying
                      ? "bg-gold-500 border-gold-600 animate-flicker"
                      : "bg-saffron-50 border-saffron-300"
                  }`}
                >
                  <InstrumentIcon id={instrument.id} active={isPlaying} />
                </span>
                <span className="font-medium text-sandalwood-900">{instrument.name}</span>
                <span className="text-xs text-sandalwood-500">{instrument.subtitle}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
