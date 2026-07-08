import Link from "next/link";
import { notFound } from "next/navigation";
import { getPujaGuideBySlug, getOccasionInfo } from "@/lib/mock-data";
import { AddKitToCartButton } from "@/components/puja-guides/AddKitToCartButton";

export default async function PujaGuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getPujaGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/puja-guides" className="text-sm text-maroon-600 hover:underline">
        ← All puja guides
      </Link>

      <header className="mt-4 mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {guide.occasions.map((occ) => {
            const info = getOccasionInfo(occ);
            return info ? (
              <Link
                key={occ}
                href={`/puja-guides/occasion/${occ}`}
                className="text-xs rounded-full bg-marigold-100 px-3 py-1 text-marigold-800 hover:bg-marigold-200"
              >
                {info.icon} {info.label}
              </Link>
            ) : null;
          })}
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl text-maroon-800 mb-2">
          {guide.name}
        </h1>
        <p className="text-lg text-sandalwood-700">{guide.shortDescription}</p>
        <div className="mt-4 flex gap-4 text-sm text-sandalwood-600">
          <span>⏱ {guide.duration}</span>
          <span>📊 {guide.difficulty}</span>
        </div>
      </header>

      <section className="mb-10 rounded-2xl bg-marigold-50 border border-marigold-200 p-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl text-maroon-800 mb-2">
          Why this puja?
        </h2>
        <p className="text-sandalwood-700">{guide.whyThisPuja}</p>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-xl text-maroon-800 mb-4">
          Samagri (What You'll Need)
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2 mb-4">
          {guide.samagri.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between rounded-lg border border-sandalwood-200 bg-parchment-50 px-4 py-2 text-sm"
            >
              <span>{item.name}</span>
              <span className="text-sandalwood-500">{item.quantity}</span>
            </li>
          ))}
        </ul>
        <AddKitToCartButton samagri={guide.samagri} />
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-xl text-maroon-800 mb-4">
          Step-by-Step Guide
        </h2>
        <ol className="space-y-4">
          {guide.preparationSteps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-maroon-600 text-parchment-50 text-sm font-semibold">
                {i + 1}
              </span>
              <div>
                <h3 className="font-medium text-sandalwood-900">{step.title}</h3>
                <p className="text-sm text-sandalwood-700">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-heading)] text-xl text-maroon-800 mb-4">
          Mantras
        </h2>
        <div className="space-y-4">
          {guide.mantras.map((mantra, i) => (
            <div key={i} className="rounded-xl border border-gold-200 bg-gold-50 p-5">
              <p className="font-[family-name:var(--font-heading)] text-lg text-maroon-800 mb-1">
                {mantra.sanskrit}
              </p>
              <p className="text-sm italic text-sandalwood-600 mb-2">{mantra.transliteration}</p>
              <p className="text-sm text-sandalwood-700">{mantra.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 text-sm">
        <div className="rounded-xl border border-sandalwood-200 bg-parchment-50 p-4 text-sandalwood-500 italic">
          🎥 Video guide — coming soon
        </div>
        <div className="rounded-xl border border-sandalwood-200 bg-parchment-50 p-4 text-sandalwood-500 italic">
          📄 Downloadable PDF — coming soon
        </div>
      </section>
    </div>
  );
}
