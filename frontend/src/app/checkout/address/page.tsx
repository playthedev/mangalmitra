"use client";

import { useRouter } from "next/navigation";
import { CheckoutSteps } from "@/components/checkout/CheckoutSteps";
import { Button } from "@/components/ui/Button";

export default function CheckoutAddressPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: persist address via NestJS AddressesModule once built (M3/M4); guest checkout stores it with the order.
    router.push("/checkout/payment");
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-12">
      <CheckoutSteps current="address" />
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6 text-center">
        Delivery Address
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input required placeholder="Full Name" className="input-field col-span-2" />
          <input required placeholder="Phone Number" className="input-field col-span-2" />
        </div>
        <input required placeholder="Address Line 1" className="input-field" />
        <input placeholder="Address Line 2 (optional)" className="input-field" />
        <div className="grid grid-cols-3 gap-4">
          <input required placeholder="City" className="input-field" />
          <input required placeholder="State" className="input-field" />
          <input required placeholder="Pincode" className="input-field" />
        </div>

        <label className="flex items-center gap-2 text-sm text-sandalwood-600">
          <input type="checkbox" defaultChecked /> Set as default address
        </label>

        <Button type="submit" variant="primary" size="lg" className="w-full mt-4">
          Continue to Payment
        </Button>
      </form>

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
    </div>
  );
}
