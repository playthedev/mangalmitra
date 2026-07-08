"use client";

import { useMemo, useState } from "react";
import { searchPujaGuides } from "@/lib/mock-data";
import { PujaGuideCard } from "./PujaGuideCard";

export function PujaSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => (query.trim() ? searchPujaGuides(query) : []), [query]);

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by puja name — e.g. Satyanarayan Puja, Namkaran..."
          className="w-full rounded-full border border-marigold-300 bg-parchment-50 px-6 py-4 text-sandalwood-900 placeholder:text-sandalwood-400 focus:border-maroon-400 focus:outline-none focus:ring-2 focus:ring-maroon-200"
        />
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl">🔍</span>
      </div>

      {query.trim() && (
        <div className="mt-6">
          {results.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {results.map((guide) => (
                <PujaGuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          ) : (
            <p className="text-center text-sandalwood-600 py-8">
              No puja guide found for "{query}". Try browsing by occasion below instead.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
