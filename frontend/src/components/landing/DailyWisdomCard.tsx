import { ButtonLink } from "@/components/ui/Button";
import type { WisdomEntry } from "@/types";

function renderContent(entry: WisdomEntry) {
  switch (entry.type) {
    case "gita_verse":
      return (
        <>
          <p className="font-[family-name:var(--font-heading)] text-xl text-gold-800">
            {entry.content.sanskrit}
          </p>
          <p className="mt-2 text-sandalwood-700 italic">{entry.content.meaning}</p>
        </>
      );
    case "myth_vs_fact":
      return (
        <div className="space-y-2 text-left">
          <p>
            <span className="font-semibold text-saffron-700">Myth: </span>
            {entry.content.myth}
          </p>
          <p>
            <span className="font-semibold text-gold-700">Fact: </span>
            {entry.content.fact}
          </p>
        </div>
      );
    case "affirmation":
    default:
      return <p className="text-xl italic text-sandalwood-800">"{entry.content.text}"</p>;
  }
}

export function DailyWisdomCard({ entry }: { entry: WisdomEntry }) {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gold-50 to-ivory-50">
      <div className="mx-auto max-w-2xl rounded-3xl border border-gold-200 bg-white p-10 text-center shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl text-sandalwood-900 mb-1">
          {entry.title ?? "Today's Wisdom"}
        </h2>
        <p className="text-xs uppercase tracking-widest text-gold-600 mb-6">
          Ancient Vedic Wisdom
        </p>
        {renderContent(entry)}
        <div className="mt-8">
          <ButtonLink href="/wisdom" variant="outline" size="sm">
            Explore More Wisdom
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
