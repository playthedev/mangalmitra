import Link from "next/link";
import { OCCASIONS } from "@/lib/mock-data";

export function OccasionGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {OCCASIONS.map((occasion) => (
        <Link
          key={occasion.id}
          href={`/puja-guides/occasion/${occasion.id}`}
          className="group flex flex-col items-center gap-2 rounded-2xl border border-marigold-200 bg-parchment-50 p-4 text-center transition-all hover:border-maroon-400 hover:shadow-md"
        >
          <span className="text-3xl">{occasion.icon}</span>
          <span className="text-sm font-medium text-maroon-800 group-hover:text-maroon-600">
            {occasion.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
