"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart-store";
import { CheckoutSteps } from "@/components/checkout/CheckoutSteps";
import { Button } from "@/components/ui/Button";

export default function CheckoutPaymentPage() {
  const router = useRouter();
  const { subtotal, clear } = useCartStore();
  const [processing, setProcessing] = useState(false);

  function handlePay() {
    setProcessing(true);
    // TODO(M3): replace with real Razorpay Checkout flow — create-order on the backend,
    // open Razorpay Checkout with the returned order id, verify signature on success.
    setTimeout(() => {
      const mockOrderId = `KSH-${Math.floor(100000 + Math.random() * 900000)}`;
      clear();
      router.push(`/checkout/confirmation/${mockOrderId}`);
    }, 1200);
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-12">
      <CheckoutSteps current="payment" />
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6 text-center">
        Payment
      </h1>

      <div className="rounded-xl border border-marigold-200 bg-parchment-50 p-6 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sandalwood-600">Order Total</span>
          <span className="font-semibold text-maroon-800">₹{subtotal()}</span>
        </div>
        <p className="text-xs text-sandalwood-500">
          Secure payments powered by Razorpay. Cards, UPI, netbanking, and wallets accepted.
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {["UPI", "Credit / Debit Card", "Net Banking", "Cash on Delivery"].map((method) => (
          <label
            key={method}
            className="flex items-center gap-3 rounded-xl border border-sandalwood-200 bg-parchment-50 p-4 cursor-pointer has-[:checked]:border-maroon-400 has-[:checked]:bg-marigold-50"
          >
            <input type="radio" name="payment-method" defaultChecked={method === "UPI"} />
            {method}
          </label>
        ))}
      </div>

      <Button onClick={handlePay} disabled={processing} variant="primary" size="lg" className="w-full">
        {processing ? "Processing…" : `Pay ₹${subtotal()}`}
      </Button>
    </div>
  );
}
