import { CategoryNav } from "@/components/shop/CategoryNav";
import { ProductCard } from "@/components/shop/ProductCard";
import { PRODUCTS } from "@/lib/catalog-data";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata = {
  title: "Shop | Mangalmitra",
  description: "Browse puja samagri, idols, rudraksha, and temple essentials.",
};

export default function ShopPage() {
  return (
    <div className="paper-grain">
      <PageHero
        eyebrow="Samagri & Essentials"
        title="The Temple Store"
        subtitle="Everything you need for your rituals — sourced and curated with care."
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <ScrollReveal className="mb-8">
          <CategoryNav />
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </StaggerGrid>
      </div>
    </div>
  );
}
