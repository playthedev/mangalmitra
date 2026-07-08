import { MeditationTimer } from "@/components/meditation/MeditationTimer";
import { JaapCounter } from "@/components/meditation/JaapCounter";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LotusDivider } from "@/components/landing/LotusDivider";

export const metadata = {
  title: "Meditation | Mangalmitra",
  description: "A quiet space to breathe — meditation timer with temple bells, Om chanting, rain, river, and forest ambience.",
};

export default function MeditationPage() {
  return (
    <div className="flex-1 bg-gradient-to-b from-marigold-50 to-parchment-50 paper-grain">
      <PageHero
        eyebrow="Dhyana"
        title="Meditation Center"
        subtitle="A quiet moment, wherever you are."
      />
      <ScrollReveal className="px-6 pt-16">
        <MeditationTimer />
      </ScrollReveal>

      <LotusDivider />

      <ScrollReveal className="px-6 pb-16">
        <JaapCounter />
      </ScrollReveal>
    </div>
  );
}
