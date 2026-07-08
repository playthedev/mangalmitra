import Link from "next/link";
import { notFound } from "next/navigation";
import { getOccasionInfo, getGuidesForOccasion } from "@/lib/mock-data";
import { PujaGuideCard } from "@/components/puja-guides/PujaGuideCard";

export default async function OccasionPage({
  params,
}: {
  params: Promise<{ occasion: string }>;
}) {
  const { occasion } = await params;
  const info = getOccasionInfo(occasion);
  if (!info) notFound();

  const guides = getGuidesForOccasion(occasion);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/puja-guides" className="text-sm text-maroon-600 hover:underline">
        ← All occasions
      </Link>

      <div className="mt-4 mb-10 flex items-center gap-4">
        <span className="text-5xl">{info.icon}</span>
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl text-maroon-800">
            {info.label}
          </h1>
          <p className="text-sandalwood-700">{info.description}</p>
        </div>
      </div>

      {guides.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <PujaGuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      ) : (
        <p className="text-sandalwood-600">
          We're still curating guides for this occasion. Check back soon, or{" "}
          <Link href="/puja-guides" className="text-maroon-600 underline">
            search by name
          </Link>{" "}
          instead.
        </p>
      )}
    </div>
  );
}
