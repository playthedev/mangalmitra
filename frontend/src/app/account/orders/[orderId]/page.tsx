import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_ORDERS } from "@/lib/account-mock-data";
import { OrderTracker } from "@/components/orders/OrderTracker";
import { Button } from "@/components/ui/Button";

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const order = MOCK_ORDERS.find((o) => o.id === orderId);
  if (!order) notFound();

  return (
    <div>
      <Link href="/account/orders" className="text-sm text-maroon-600 hover:underline">
        ← All orders
      </Link>

      <div className="mt-4 mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800">
            {order.id}
          </h1>
          <p className="text-sm text-sandalwood-500">Placed on {order.date}</p>
        </div>
        <Button variant="outline" size="sm">
          Download Invoice
        </Button>
      </div>

      <div className="rounded-2xl border border-marigold-200 bg-parchment-50 p-8 mb-8">
        <OrderTracker currentStatus={order.status} />
      </div>

      <div className="rounded-xl border border-sandalwood-200 bg-parchment-50 p-4 mb-6">
        <h2 className="font-medium text-sandalwood-900 mb-2">Items</h2>
        <ul className="text-sm text-sandalwood-700 space-y-1">
          {order.items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <p className="mt-3 font-semibold text-maroon-700">Total: ₹{order.total}</p>
      </div>

      <Button variant="primary">Reorder</Button>
    </div>
  );
}
