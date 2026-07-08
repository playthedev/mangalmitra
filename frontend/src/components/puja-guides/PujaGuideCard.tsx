import Link from "next/link";
import type { PujaGuide } from "@/types";

export function PujaGuideCard({ guide }: { guide: PujaGuide }) {
  return (
    <Link
      href={`/puja-guides/${guide.slug}`}
      className="group flex flex-col gap-2 rounded-2xl border border-marigold-200 bg-parchment-50 p-5 transition-all hover:border-maroon-400 hover:shadow-lg hover:shadow-maroon-900/10"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-[family-name:var(--font-heading)] text-xl text-maroon-800">
          {guide.name}
        </h3>
        <span className="text-xs rounded-full bg-marigold-100 px-3 py-1 text-marigold-800 whitespace-nowrap">
          {guide.duration}
        </span>
      </div>
      <p className="text-sm text-sandalwood-700">{guide.shortDescription}</p>
      <span className="mt-2 text-sm font-medium text-maroon-600 group-hover:underline">
        View full guide →
      </span>
    </Link>
  );
}
