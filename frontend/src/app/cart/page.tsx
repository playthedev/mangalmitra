"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useHydrated } from "@/lib/use-hydrated";
import { ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export default function CartPage() {
  const { lines, setQuantity, removeItem, subtotal, totalItems } = useCartStore();
  // The cart is restored from localStorage after hydration — wait for it so
  // the server-rendered empty state doesn't mismatch the client.
  const hydrated = useHydrated();

  if (!hydrated) {
    return <div className="mx-auto max-w-4xl px-6 py-24" aria-busy="true" />;
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-marigold-100">
          <ShoppingCart className="h-9 w-9 text-maroon-600" aria-hidden="true" />
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl text-maroon-800 mb-2">
          Your cart is empty
        </h1>
        <p className="text-sandalwood-700 mb-8">
          Browse the shop or find the right puja kit for your occasion.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/shop" variant="primary">
            Shop Now
          </ButtonLink>
          <ButtonLink href="/puja-guides" variant="outline">
            Find a Puja Guide
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-maroon-800 mb-1">
        Your Cart
      </h1>
      <p className="text-sm text-sandalwood-600 mb-8">
        {totalItems()} {totalItems() === 1 ? "item" : "items"} in your cart
      </p>

      <div className="space-y-4 mb-8">
        {lines.map((line) => (
          <div
            key={line.productSlug}
            className="flex flex-wrap items-center gap-4 rounded-xl border border-marigold-200 bg-parchment-50 p-4 sm:flex-nowrap"
          >
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg">
              {line.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={line.image} alt={line.name} className="h-full w-full object-cover" />
              ) : (
                <ImagePlaceholder label={line.name} className="h-full w-full text-xs" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <Link
                href={`/shop/product/${line.productSlug}`}
                className="font-medium text-sandalwood-900 hover:text-maroon-700"
              >
                {line.name}
              </Link>
              <p className="text-sm text-sandalwood-500">₹{line.price} each</p>
            </div>
            <div className="flex items-center rounded-full border border-marigold-300">
              <button
                onClick={() => setQuantity(line.productSlug, line.quantity - 1)}
                aria-label={`Decrease quantity of ${line.name}`}
                className="rounded-l-full px-3 py-1.5 text-maroon-700 transition-colors hover:bg-marigold-50"
              >
                <Minus className="h-4 w-4" aria-hidden="true" />
              </button>
              <span className="w-8 text-center text-sm font-medium" aria-live="polite">
                {line.quantity}
              </span>
              <button
                onClick={() => setQuantity(line.productSlug, line.quantity + 1)}
                aria-label={`Increase quantity of ${line.name}`}
                className="rounded-r-full px-3 py-1.5 text-maroon-700 transition-colors hover:bg-marigold-50"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <span className="w-20 text-right font-medium text-maroon-700">
              ₹{line.price * line.quantity}
            </span>
            <button
              onClick={() => removeItem(line.productSlug)}
              aria-label={`Remove ${line.name} from cart`}
              className="rounded-full p-2 text-sandalwood-400 transition-colors hover:bg-maroon-50 hover:text-maroon-600"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-xl bg-marigold-50 border border-marigold-200 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-sandalwood-600">Subtotal</p>
          <p className="text-2xl font-semibold text-maroon-800">₹{subtotal()}</p>
          <p className="text-xs text-sandalwood-500">
            Shipping and taxes calculated at checkout
          </p>
        </div>
        <ButtonLink href="/checkout/address" variant="primary" size="lg">
          Proceed to Checkout
        </ButtonLink>
      </div>
    </div>
  );
}
