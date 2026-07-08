import { PujaSearch } from "@/components/puja-guides/PujaSearch";
import { OccasionGrid } from "@/components/puja-guides/OccasionGrid";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LotusDivider } from "@/components/landing/LotusDivider";

export const metadata = {
  title: "Puja Guides | Mangalmitra",
  description: "Not sure which puja to perform for your occasion? Browse by occasion or search by name.",
};

export default function PujaGuidesPage() {
  return (
    <div className="paper-grain">
      <PageHero
        eyebrow="Find Your Puja"
        title="Not sure which puja is for you?"
        subtitle="Every ritual has a purpose. Tell us your occasion, or search by name, and we'll walk you through exactly what to do — the samagri, the steps, and the mantras."
      />

      <section className="px-6 pb-4 -mt-6">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <PujaSearch />
          </ScrollReveal>
        </div>
      </section>

      <LotusDivider />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-2 text-center">
            Browse by Occasion
          </h2>
          <p className="text-center text-sandalwood-700 mb-8">
            What's happening in your life right now?
          </p>
          <ScrollReveal>
            <OccasionGrid />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
