import Link from "next/link";
import { CATEGORIES } from "@/lib/catalog-data";

export function CategoryNav({ activeSlug }: { activeSlug?: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/shop"
        className={`rounded-full px-4 py-1.5 text-sm ${
          !activeSlug
            ? "bg-maroon-600 text-parchment-50"
            : "border border-marigold-300 text-sandalwood-700 hover:bg-marigold-50"
        }`}
      >
        All
      </Link>
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.slug}
          href={`/shop/${cat.slug}`}
          className={`rounded-full px-4 py-1.5 text-sm ${
            activeSlug === cat.slug
              ? "bg-maroon-600 text-parchment-50"
              : "border border-marigold-300 text-sandalwood-700 hover:bg-marigold-50"
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
