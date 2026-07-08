import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    icon: "🔍",
    title: "Find Your Ritual",
    description: "Search by occasion or puja name — we'll show you exactly what it's for.",
  },
  {
    icon: "🪔",
    title: "Learn the Steps",
    description: "Samagri list, step-by-step guide, and mantras with meaning — all in one place.",
  },
  {
    icon: "🛍️",
    title: "Get the Samagri",
    description: "Add the entire kit to your cart in one click, or shop items individually.",
  },
  {
    icon: "🚚",
    title: "Track Your Order",
    description: "Real-time delivery tracking from confirmation to your doorstep.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-20 bg-parchment-50">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-maroon-800 mb-2">
            How Mangalmitra Works
          </h2>
          <p className="text-sandalwood-700">From confusion to clarity, in four simple steps.</p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center gap-3 rounded-2xl border border-marigold-200 bg-gradient-to-b from-marigold-50 to-parchment-50 p-6 h-full">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-maroon-600 text-2xl text-parchment-50">
                  {step.icon}
                </span>
                <h3 className="font-medium text-maroon-800">{step.title}</h3>
                <p className="text-sm text-sandalwood-700">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
