# Audio sources

Most files here are now real, freely-licensed recordings sourced from Wikimedia Commons / archive.org, wired in as a temporary stand-in until Keshavi has its own licensed recordings. **One file is still a silent placeholder** (see below). Swap any file for the client's own recording at any time — just keep the same path referenced in `frontend/src/lib/audio-manifest.ts`, or update that file if you rename something.

| File | Source | License | Notes |
|---|---|---|---|
| `gayatri-mantra.ogg` | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gayatri_mantra.ogg) | CC0 1.0 | Only ~21s — loops via the `loop` attribute in `TempleHero`, but a longer/instrumental version would feel more premium. |
| `instruments/shankha.ogg` | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Conch_shell.ogg) | CC BY-SA 3.0 / CC BY 2.5 | Attribution recommended: David Bolton. |
| `instruments/ghanta.wav` | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:274316_the-very-real-horst_ghanta-leather-mallet-2015-05-16.wav) | CC0 1.0 | Real ghanta struck with a leather mallet; file is large (~8.7MB) since it's uncompressed — fine for now, worth compressing to mp3/ogg later. |
| `instruments/temple-bell.ogg` | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Striking_a_bell_15cm_large.ogg) | Public Domain | Single bell strike. |
| `instruments/singing-bowl.ogg` | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:SingingBowl1.ogg) | Public Domain | |
| `instruments/damru.wav` | — | — | **Still a silent placeholder.** No freely-licensed damru (hand drum) recording could be found on Commons, archive.org, Freesound (needs an API key/OAuth to download), or Pixabay (blocks non-browser downloads). Replace with a real recording, or if you have a Freesound API key, sound id `746591` ("Sound of Damru", CC0) is a confirmed good match. |
| `meditation/om-chanting.ogg` | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Om.ogg) | CC0 1.0 | Only a single ~1.3s "Om" syllable, not a sustained chant loop — will sound abrupt looping via the `loop` attribute. A longer chant recording (any license, since a CC BY-NC-ND Jamendo track was ruled out as unsafe for commercial use) would improve this noticeably. |
| `meditation/rain.ogg` | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sound_of_light_rainfall.ogg) | CC0/Public Domain (per Commons) | |
| `meditation/river.ogg` | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_little_river.ogg) | CC BY-SA 4.0 | Attribution required. |
| `meditation/forest.ogg` | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:20090610_0_ambience.ogg) | Public Domain | Costa Rica jungle field recording. |

## Before launch

- Replace `meditation/om-chanting.ogg` with a longer, real chant recording — current file is a single ~1.3s syllable, which will sound jarring on loop (it's CC0 and license-safe, just too short to be pleasant).
- Add attribution credits somewhere on the site (e.g. a `/credits` page) for any CC-BY / CC-BY-SA tracks still in use (shankha, river) if they haven't been replaced by then.
- Replace `instruments/damru.wav` with a real recording — it's currently silent.
- Consider compressing `instruments/ghanta.wav` to mp3/ogg to shrink its file size.
