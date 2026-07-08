import { MOCK_WISHLIST_SLUGS } from "@/lib/account-mock-data";
import { getProductBySlug } from "@/lib/catalog-data";
import { ProductCard } from "@/components/shop/ProductCard";

export default function WishlistPage() {
  const products = MOCK_WISHLIST_SLUGS.map(getProductBySlug).filter(Boolean);

  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        My Wishlist
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product!.id} product={product!} />
          ))}
        </div>
      ) : (
        <p className="text-sandalwood-600">Your wishlist is empty.</p>
      )}
    </div>
  );
}
