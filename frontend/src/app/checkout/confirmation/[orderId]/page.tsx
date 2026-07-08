import { ButtonLink } from "@/components/ui/Button";
import { OrderTracker } from "@/components/orders/OrderTracker";

export default async function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-center">
      <p className="text-5xl mb-4">🪔</p>
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-maroon-800 mb-2">
        Thank you — your order is confirmed
      </h1>
      <p className="text-sandalwood-700 mb-2">
        Order <span className="font-mono font-semibold">{orderId}</span>
      </p>
      <p className="text-sm text-sandalwood-500 mb-10">
        A confirmation email is on its way. You'll receive updates as your order moves through
        each stage.
      </p>

      <div className="rounded-2xl border border-marigold-200 bg-parchment-50 p-8 mb-10">
        <OrderTracker currentStatus="Confirmed" />
      </div>

      <div className="flex justify-center gap-4">
        <ButtonLink href="/account/orders" variant="primary">
          View My Orders
        </ButtonLink>
        <ButtonLink href="/shop" variant="outline">
          Continue Shopping
        </ButtonLink>
      </div>
    </div>
  );
}
