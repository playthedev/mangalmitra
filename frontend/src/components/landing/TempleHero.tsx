"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { IncenseSmoke } from "./IncenseSmoke";
import { DiyaGlow } from "./DiyaGlow";
import { FloatingFlowers } from "./FloatingFlowers";
import { TempleSilhouette } from "./TempleSilhouette";
import { RisingSun } from "./RisingSun";
import { FlyingBirds } from "./FlyingBirds";
import { HangingBells } from "./HangingBells";
import { OmGlow } from "./OmGlow";
import { EnterTempleButton } from "./EnterTempleButton";
import { AnnouncementSlider } from "./AnnouncementSlider";

export function TempleHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-b from-saffron-100 via-ivory-100 to-ivory-50 flex flex-col items-center justify-center text-center px-6">
      {/* Always-present temple backdrop: rising sun, bells, birds, temple entrance silhouette */}
      <RisingSun />
      <HangingBells />
      <FlyingBirds />
      <TempleSilhouette />

      {/* Foreground devotional atmosphere */}
      <IncenseSmoke />
      <FloatingFlowers />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.18),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-3xl"
      >
        <OmGlow size={56} className="mb-1" />

        <DiyaGlow />

        <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-sandalwood-900">
          Mangalmitra
        </h1>
        <p className="text-lg sm:text-xl text-sandalwood-700 italic">
          Sacred Traditions Delivered to Your Doorstep
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <EnterTempleButton href="/shop">Enter the Temple</EnterTempleButton>
          <ButtonLink href="/shop" variant="primary" size="md">
            Shop Now
          </ButtonLink>
          <ButtonLink href="/rituals" variant="outline" size="md">
            Explore Rituals
          </ButtonLink>
          <ButtonLink href="/wisdom" variant="ghost" size="md">
            Daily Wisdom
          </ButtonLink>
        </div>

        <div className="mt-8 w-full flex justify-center">
          <AnnouncementSlider />
        </div>
      </motion.div>
    </section>
  );
}
