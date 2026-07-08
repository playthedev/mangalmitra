import Link from "next/link";
import { OCCASIONS } from "@/lib/mock-data";
import { ButtonLink } from "@/components/ui/Button";
import { PujaSearch } from "@/components/puja-guides/PujaSearch";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PujaFinderSection() {
  const topOccasions = OCCASIONS.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-marigold-50 via-parchment-100 to-parchment-50 px-6 py-20">
      <div className="mandala-corner pointer-events-none absolute -top-10 -left-10 h-56 w-56" />
      <div className="mandala-corner pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rotate-45" />

      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-maroon-800 mb-3">
            Not sure which puja is for you?
          </h2>
          <p className="text-sandalwood-700 mb-8">
            Every ritual has a purpose. Tell us your occasion, or search by name, and we'll walk
            you through exactly what to do.
          </p>
          <PujaSearch />
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {topOccasions.map((occasion) => (
              <Link
                key={occasion.id}
                href={`/puja-guides/occasion/${occasion.id}`}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-marigold-200 bg-parchment-50 p-4 text-center transition-all hover:border-maroon-400 hover:shadow-md hover:-translate-y-1"
              >
                <span className="text-3xl">{occasion.icon}</span>
                <span className="text-sm font-medium text-maroon-800 group-hover:text-maroon-600">
                  {occasion.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/puja-guides" variant="outline">
              See All Occasions & Puja Guides →
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
