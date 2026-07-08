"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [justAdded, setJustAdded] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const discountPercent = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.basePrice) / product.compareAtPrice) * 100,
      )
    : 0;

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addItem({
      productSlug: product.slug,
      name: product.name,
      price: product.basePrice,
      image: product.images[0],
    });
    setJustAdded(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Link
        href={`/shop/product/${product.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-marigold-200 bg-parchment-50 transition-shadow hover:shadow-xl hover:shadow-maroon-900/15"
      >
        <div className="relative aspect-square overflow-hidden">
          {product.images[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <ImagePlaceholder label={product.name} className="h-full w-full" />
          )}
          {discountPercent > 0 && (
            <span className="absolute left-3 top-3 rounded-full bg-maroon-600 px-2.5 py-1 text-xs font-semibold text-parchment-50 shadow-sm">
              {discountPercent}% off
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-1 p-4">
          <span className="text-xs uppercase tracking-wide text-marigold-700">
            {product.categoryName}
          </span>
          <h3 className="font-medium text-sandalwood-900">{product.name}</h3>
          <div className="mt-auto flex items-center justify-between gap-2 pt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-maroon-700">
                ₹{product.basePrice}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-sandalwood-400 line-through">
                  ₹{product.compareAtPrice}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              aria-label={`Add ${product.name} to cart`}
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-parchment-50 transition-all active:scale-90 ${
                justAdded
                  ? "bg-marigold-600"
                  : "bg-maroon-600 hover:bg-maroon-700"
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  Added
                </>
              ) : (
                "Add"
              )}
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
