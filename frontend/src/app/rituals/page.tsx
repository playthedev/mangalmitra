import { OccasionGrid } from "@/components/puja-guides/OccasionGrid";
import { ButtonLink } from "@/components/ui/Button";
import { PUJA_GUIDES } from "@/lib/mock-data";
import { PujaGuideCard } from "@/components/puja-guides/PujaGuideCard";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { LotusDivider } from "@/components/landing/LotusDivider";

export const metadata = {
  title: "Explore Rituals | Mangalmitra",
  description: "Discover Hindu rituals and pujas, organized by occasion and life event.",
};

export default function RitualsPage() {
  return (
    <div className="paper-grain">
      <PageHero
        eyebrow="Puja & Sanskara"
        title="Explore Rituals"
        subtitle="Every ritual carries meaning. Discover pujas by occasion, or browse our most-performed rituals below."
      />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <ScrollReveal>
          <OccasionGrid />
        </ScrollReveal>

        <LotusDivider />

        <h2 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6 mt-6 text-center">
          Popular Rituals
        </h2>
        <StaggerGrid className="grid gap-4 sm:grid-cols-2 mb-10">
          {PUJA_GUIDES.slice(0, 4).map((guide) => (
            <PujaGuideCard key={guide.id} guide={guide} />
          ))}
        </StaggerGrid>

        <div className="text-center">
          <ButtonLink href="/puja-guides" variant="outline">
            Search All Puja Guides →
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
