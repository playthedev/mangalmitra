import { DAILY_WISDOM_ENTRIES, getTodaysWisdomEntry } from "@/lib/mock-data";
import { WisdomEntryCard } from "@/components/wisdom/WisdomEntryCard";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { LotusDivider } from "@/components/landing/LotusDivider";

export const metadata = {
  title: "Ancient Vedic Wisdom | Mangalmitra",
  description: "Daily scripture, Gita verses, myths vs facts, and affirmations for spiritual inspiration.",
};

export default function WisdomPage() {
  const today = getTodaysWisdomEntry();
  const archive = DAILY_WISDOM_ENTRIES.filter((e) => e.id !== today.id);

  return (
    <div className="paper-grain">
      <PageHero
        eyebrow="Sanatana Dharma"
        title="Ancient Vedic Wisdom"
        subtitle="A daily source of scripture, reflection, and gentle guidance."
      />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 text-center">
          <span className="text-xs uppercase tracking-widest text-maroon-600 font-medium">
            Today's Wisdom
          </span>
        </div>
        <ScrollReveal className="mb-14 max-w-xl mx-auto">
          <WisdomEntryCard entry={today} />
        </ScrollReveal>

        <LotusDivider />

        <h2 className="font-[family-name:var(--font-heading)] text-xl text-maroon-800 mb-6 mt-6 text-center">
          More Reflections
        </h2>
        <StaggerGrid className="grid gap-6 sm:grid-cols-2">
          {archive.map((entry) => (
            <WisdomEntryCard key={entry.id} entry={entry} />
          ))}
        </StaggerGrid>
      </div>
    </div>
  );
}
