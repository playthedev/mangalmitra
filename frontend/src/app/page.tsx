import { TempleHero } from "@/components/landing/TempleHero";
import { FestivalBanner } from "@/components/landing/FestivalBanner";
import { PujaFinderSection } from "@/components/landing/PujaFinderSection";
import { FeaturedCarousel } from "@/components/landing/FeaturedCarousel";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SacredSounds } from "@/components/landing/SacredSounds";
import { DailyWisdomCard } from "@/components/landing/DailyWisdomCard";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCta } from "@/components/landing/FinalCta";
import { LotusDivider } from "@/components/landing/LotusDivider";
import { MandalaDivider } from "@/components/landing/MandalaDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FEATURED_PRODUCTS, getTodaysWisdomEntry } from "@/lib/mock-data";

export default function Home() {
  return (
    <>
      <TempleHero />
      <FestivalBanner />

      <PujaFinderSection />
      <MandalaDivider />

      <ScrollReveal>
        <FeaturedCarousel products={FEATURED_PRODUCTS} />
      </ScrollReveal>
      <MandalaDivider />

      <HowItWorks />
      <LotusDivider />

      <ScrollReveal>
        <SacredSounds />
      </ScrollReveal>
      <LotusDivider />

      <ScrollReveal>
        <DailyWisdomCard entry={getTodaysWisdomEntry()} />
      </ScrollReveal>
      <LotusDivider />

      <Testimonials />

      <FinalCta />
    </>
  );
}
