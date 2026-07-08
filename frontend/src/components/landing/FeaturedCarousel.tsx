"use client";

import { useRef } from "react";
import { ProductCard } from "@/components/shop/ProductCard";
import type { Product } from "@/types";

export function FeaturedCarousel({ products }: { products: Product[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(amount: number) {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="py-20 px-6 bg-ivory-50">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-sandalwood-900">
              Featured Essentials
            </h2>
            <p className="text-sandalwood-700 mt-1">
              Curated puja kits, idols, and temple essentials.
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scrollBy(-320)}
              className="h-10 w-10 rounded-full border border-sandalwood-300 hover:bg-sandalwood-100"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy(320)}
              className="h-10 w-10 rounded-full border border-sandalwood-300 hover:bg-sandalwood-100"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none]"
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[260px] max-w-[260px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
