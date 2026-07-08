"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";

export function ProductDetailActions({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(
      {
        productSlug: product.slug,
        name: product.name,
        price: product.basePrice,
        image: product.images[0],
      },
      quantity,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center rounded-full border border-marigold-300">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-3 py-2 text-maroon-700"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="px-3 py-2 text-maroon-700"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <Button onClick={handleAdd} variant="primary" size="md">
        {added ? "Added ✓" : "Add to Cart"}
      </Button>
      <button className="text-2xl" aria-label="Add to wishlist" title="Wishlist (coming soon)">
        ♡
      </button>
    </div>
  );
}
