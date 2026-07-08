"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { getProductBySlug } from "@/lib/catalog-data";
import type { SamagriItem } from "@/types";
import { Button } from "@/components/ui/Button";

export function AddKitToCartButton({ samagri }: { samagri: SamagriItem[] }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const availableItems = samagri
    .filter((item) => item.productSlug)
    .map((item) => ({ item, product: getProductBySlug(item.productSlug!) }))
    .filter((entry) => entry.product);

  function handleAddAll() {
    for (const { product } of availableItems) {
      if (!product) continue;
      addItem({
        productSlug: product.slug,
        name: product.name,
        price: product.basePrice,
        image: product.images[0],
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  if (availableItems.length === 0) {
    return (
      <p className="text-sm text-sandalwood-500 italic">
        Samagri kit for this puja is being curated — check individual items in the Shop for now.
      </p>
    );
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <Button onClick={handleAddAll} variant="primary" size="md">
        {added ? "Added to cart ✓" : `Add Entire Samagri Kit to Cart (${availableItems.length} items)`}
      </Button>
      <p className="text-xs text-sandalwood-500">
        Only items available in our shop are added; the rest you may already have at home.
      </p>
    </div>
  );
}
