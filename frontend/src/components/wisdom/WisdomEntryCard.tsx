import type { WisdomEntry } from "@/types";

const TYPE_LABELS: Record<WisdomEntry["type"], string> = {
  gita_verse: "Bhagavad Gita",
  scripture: "Scripture",
  myth_vs_fact: "Myth vs Fact",
  quote: "Quote of the Day",
  festival: "Festival Significance",
  panchang: "Panchang Highlight",
  affirmation: "Daily Affirmation",
};

export function WisdomEntryCard({ entry }: { entry: WisdomEntry }) {
  return (
    <div className="rounded-2xl border border-gold-200 bg-parchment-50 p-6">
      <span className="text-xs uppercase tracking-widest text-marigold-700">
        {TYPE_LABELS[entry.type]}
      </span>
      {entry.title && (
        <h3 className="font-[family-name:var(--font-heading)] text-lg text-maroon-800 mt-1 mb-2">
          {entry.title}
        </h3>
      )}

      {entry.type === "myth_vs_fact" ? (
        <div className="space-y-2 text-sm mt-2">
          <p>
            <span className="font-semibold text-terracotta-700">Myth: </span>
            {entry.content.myth}
          </p>
          <p>
            <span className="font-semibold text-marigold-700">Fact: </span>
            {entry.content.fact}
          </p>
        </div>
      ) : entry.content.sanskrit ? (
        <>
          <p className="font-[family-name:var(--font-heading)] text-base text-gold-800 mt-2">
            {entry.content.sanskrit}
          </p>
          <p className="text-sm text-sandalwood-700 mt-1 italic">{entry.content.meaning}</p>
        </>
      ) : (
        <p className="text-sandalwood-800 italic mt-2">"{entry.content.text}"</p>
      )}
    </div>
  );
}
