import { ButtonLink } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-maroon-800 to-maroon-900 px-6 py-20 text-center text-parchment-50">
      <div className="mandala-corner pointer-events-none absolute -top-16 left-1/4 h-72 w-72 opacity-10" />
      <ScrollReveal className="relative mx-auto max-w-xl">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl mb-4">
          Bring Sacred Traditions Home
        </h2>
        <p className="text-parchment-200 mb-8">
          Whatever the occasion, we'll help you find the right ritual — and everything you need
          to perform it with confidence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink href="/puja-guides" variant="gold" size="lg">
            Find Your Puja
          </ButtonLink>
          <ButtonLink
            href="/shop"
            variant="outline"
            size="lg"
            className="border-parchment-200 text-parchment-50 hover:bg-maroon-700"
          >
            Shop Essentials
          </ButtonLink>
        </div>
      </ScrollReveal>
    </section>
  );
}
