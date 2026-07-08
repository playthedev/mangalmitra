"use client";

import { CATEGORIES } from "@/lib/catalog-data";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";

export function ProductForm({ product }: { product?: Product }) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO(M5): POST/PATCH /products once the backend ProductsModule exists.
    alert("Product save isn't wired up to the backend yet.");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <input defaultValue={product?.name} placeholder="Product Name" className="input-field" required />
      <textarea
        defaultValue={product?.description}
        placeholder="Description"
        rows={3}
        className="input-field"
        required
      />
      <select defaultValue={product?.categoryName} className="input-field" required>
        <option value="" disabled>
          Select category
        </option>
        {CATEGORIES.map((c) => (
          <option key={c.slug} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-2 gap-4">
        <input
          defaultValue={product?.basePrice}
          type="number"
          placeholder="Price (₹)"
          className="input-field"
          required
        />
        <input defaultValue={product?.compareAtPrice} type="number" placeholder="Compare-at Price (₹)" className="input-field" />
      </div>
      <div className="rounded-lg border border-dashed border-marigold-300 p-6 text-center text-sm text-sandalwood-500">
        📷 Image upload — coming soon
      </div>
      <Button type="submit" variant="primary">
        Save Product
      </Button>

      <style jsx>{`
        .input-field {
          width: 100%;
          border: 1px solid var(--color-marigold-300);
          background: var(--color-parchment-50);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
        }
        .input-field:focus {
          outline: none;
          border-color: var(--color-maroon-400);
        }
      `}</style>
    </form>
  );
}
