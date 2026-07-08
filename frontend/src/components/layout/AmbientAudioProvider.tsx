"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SITE_AMBIENT_TRACK } from "@/lib/audio-manifest";

type AmbientAudioContextValue = {
  isPlaying: boolean;
  toggle: () => void;
};

const AmbientAudioContext = createContext<AmbientAudioContextValue | null>(null);

/**
 * Mounted once in the root layout, so the <audio> element (and its playback
 * state) survives client-side navigation between pages instead of restarting.
 */
export function AmbientAudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Attempt autoplay on mount; browsers may block this until the user
    // interacts with the page, in which case the header button starts it.
    audioRef.current?.play().then(
      () => setIsPlaying(true),
      () => setIsPlaying(false),
    );
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }

  return (
    <AmbientAudioContext.Provider value={{ isPlaying, toggle }}>
      <audio ref={audioRef} src={SITE_AMBIENT_TRACK} loop />
      {children}
    </AmbientAudioContext.Provider>
  );
}

export function useAmbientAudio() {
  const ctx = useContext(AmbientAudioContext);
  if (!ctx) {
    throw new Error("useAmbientAudio must be used within AmbientAudioProvider");
  }
  return ctx;
}
