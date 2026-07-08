import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Pune",
    quote:
      "I had no idea what to do for my Griha Pravesh until I found Mangalmitra. The step-by-step guide made me feel confident performing it myself.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    location: "Mumbai",
    quote:
      "Ordered the entire Satyanarayan Puja kit in one click. Everything arrived fresh and exactly as listed.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    location: "Bengaluru",
    quote:
      "The meditation timer and daily wisdom have become part of my morning routine. Didn't expect a shopping site to feel this calming.",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-parchment-50 to-marigold-50">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-maroon-800 mb-2">
            Voices from Our Community
          </h2>
          <p className="text-sandalwood-700">Real stories from people rediscovering their rituals.</p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-marigold-200 bg-parchment-50 p-6">
                <span className="text-marigold-600 mb-2">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</span>
                <p className="text-sandalwood-700 italic mb-4 flex-1">"{t.quote}"</p>
                <p className="text-sm font-medium text-maroon-800">
                  {t.name} <span className="text-sandalwood-500 font-normal">· {t.location}</span>
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
