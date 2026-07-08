"use client";

import { useEffect, useRef, useState } from "react";
import { MEDITATION_AMBIENT_SOUNDS } from "@/lib/audio-manifest";

const DURATIONS = [5, 10, 15, 20, 30];
const FAVORITES_KEY = "keshavi-meditation-favorite-durations";

export function MeditationTimer() {
  const [selectedDuration, setSelectedDuration] = useState(10);
  const [secondsLeft, setSecondsLeft] = useState(10 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [soundId, setSoundId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    setSecondsLeft(selectedDuration * 60);
  }, [selectedDuration]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            setIsRunning(false);
            audioRef.current?.pause();
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isRunning) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isRunning, soundId]);

  function toggleRunning() {
    setIsRunning((r) => !r);
  }

  function selectSound(id: string) {
    setSoundId((prev) => (prev === id ? null : id));
  }

  function saveFavorite() {
    const next = Array.from(new Set([...favorites, selectedDuration])).sort((a, b) => a - b);
    setFavorites(next);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  }

  const activeSound = MEDITATION_AMBIENT_SOUNDS.find((s) => s.id === soundId);
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const progress = 1 - secondsLeft / (selectedDuration * 60);

  return (
    <div className="mx-auto max-w-md text-center">
      {activeSound && <audio key={activeSound.id} ref={audioRef} src={activeSound.src} loop />}

      <div className="relative mx-auto mb-8 h-56 w-56">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-marigold-100)" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="var(--color-maroon-500)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 52}
            strokeDashoffset={2 * Math.PI * 52 * (1 - progress)}
            style={{ transition: "stroke-dashoffset 1s linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-[family-name:var(--font-heading)] text-4xl text-maroon-800">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {DURATIONS.map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDuration(d)}
            disabled={isRunning}
            className={`rounded-full px-4 py-1.5 text-sm ${
              selectedDuration === d
                ? "bg-maroon-600 text-parchment-50"
                : "border border-marigold-300 text-sandalwood-700"
            }`}
          >
            {d} min
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-3 mb-8">
        <button
          onClick={toggleRunning}
          className="rounded-full bg-maroon-600 px-8 py-3 text-parchment-50 font-medium hover:bg-maroon-700"
        >
          {isRunning ? "Pause" : "Begin"}
        </button>
        <button
          onClick={saveFavorite}
          className="rounded-full border border-marigold-300 px-5 py-3 text-sm text-maroon-700 hover:bg-marigold-50"
        >
          ⭐ Save duration
        </button>
      </div>

      {favorites.length > 0 && (
        <p className="text-xs text-sandalwood-500 mb-8">
          Favorites: {favorites.map((f) => `${f} min`).join(", ")}
        </p>
      )}

      <div>
        <p className="text-sm text-sandalwood-600 mb-3">Ambient Sound</p>
        <div className="flex justify-center gap-2 flex-wrap">
          {MEDITATION_AMBIENT_SOUNDS.map((sound) => (
            <button
              key={sound.id}
              onClick={() => selectSound(sound.id)}
              className={`rounded-full px-4 py-1.5 text-sm ${
                soundId === sound.id
                  ? "bg-marigold-500 text-maroon-900"
                  : "border border-marigold-300 text-sandalwood-700"
              }`}
            >
              {sound.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
