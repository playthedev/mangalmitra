import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/catalog-data";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ProductDetailActions } from "@/components/shop/ProductDetailActions";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-2xl border border-marigold-200">
          {product.images[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
          ) : (
            <ImagePlaceholder label={product.name} className="h-full w-full" />
          )}
        </div>

        <div>
          <span className="text-xs uppercase tracking-wide text-marigold-700">
            {product.categoryName}
          </span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl text-maroon-800 mt-1 mb-3">
            {product.name}
          </h1>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-2xl font-semibold text-maroon-700">₹{product.basePrice}</span>
            {product.compareAtPrice && (
              <span className="text-lg text-sandalwood-400 line-through">
                ₹{product.compareAtPrice}
              </span>
            )}
          </div>
          <p className="text-sandalwood-700 mb-8">{product.description}</p>

          <ProductDetailActions product={product} />

          <div className="mt-10 rounded-xl border border-sandalwood-200 bg-parchment-50 p-4 text-sm text-sandalwood-600">
            🚚 Delivery tracking and secure checkout available at checkout.
          </div>
        </div>
      </div>
    </div>
  );
}
