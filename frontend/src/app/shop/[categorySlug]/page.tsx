import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/shop/CategoryNav";
import { ProductCard } from "@/components/shop/ProductCard";
import { CATEGORIES, getProductsByCategory } from "@/lib/catalog-data";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) notFound();

  const products = getProductsByCategory(categorySlug);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {category.imageUrl && (
        <div className="mb-8 h-48 overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={category.imageUrl}
            alt={category.name}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <h1 className="font-[family-name:var(--font-heading)] text-4xl text-maroon-800 mb-2">
        {category.name}
      </h1>
      <p className="text-sandalwood-700 mb-8">{category.description}</p>

      <div className="mb-8">
        <CategoryNav activeSlug={categorySlug} />
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-sandalwood-600">No products in this category yet — check back soon.</p>
      )}
    </div>
  );
}
