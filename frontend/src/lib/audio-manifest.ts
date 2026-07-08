// Real CC0/CC-BY/public-domain recordings sourced from Wikimedia Commons and archive.org.
// See /public/audio/README.md for exact sources, licenses, and attribution requirements,
// and for the one remaining silent placeholder (damru) that still needs a real recording.

export const HERO_AMBIENT_TRACK = "/audio/gayatri-mantra.ogg";

// Default site-wide ambient track, played from the header toggle on every page.
// Reuses an existing licensed file (see /public/audio/README.md) — swap the path
// for a dedicated upbeat bhajan/instrumental once the client has one recorded.
export const SITE_AMBIENT_TRACK = "/audio/gayatri-mantra.ogg";

export const SACRED_INSTRUMENTS = [
  {
    id: "shankha",
    name: "Shankha",
    subtitle: "Conch Shell",
    src: "/audio/instruments/shankha.ogg",
  },
  {
    id: "ghanta",
    name: "Ghanta",
    subtitle: "Temple Hand Bell",
    src: "/audio/instruments/ghanta.wav",
  },
  {
    id: "temple-bell",
    name: "Temple Bell",
    subtitle: "Large Hanging Bell",
    src: "/audio/instruments/temple-bell.ogg",
  },
  {
    id: "singing-bowl",
    name: "Singing Bowl",
    subtitle: "Tibetan Resonance",
    src: "/audio/instruments/singing-bowl.ogg",
  },
  {
    id: "damru",
    name: "Damru",
    subtitle: "Hand Drum",
    src: "/audio/instruments/damru.wav", // TODO(client): still a silent placeholder — no free-licensed damru recording exists yet.
  },
] as const;

export const MEDITATION_AMBIENT_SOUNDS = [
  { id: "om-chanting", name: "Om Chanting", src: "/audio/meditation/om-chanting.ogg" },
  { id: "rain", name: "Rain", src: "/audio/meditation/rain.ogg" },
  { id: "river", name: "River", src: "/audio/meditation/river.ogg" },
  { id: "forest", name: "Forest", src: "/audio/meditation/forest.ogg" },
] as const;
