import Link from "next/link";
import { notFound } from "next/navigation";
import { ADMIN_ORDERS } from "@/lib/admin-mock-data";
import { OrderTracker } from "@/components/orders/OrderTracker";
import { OrderStatusUpdater } from "@/components/admin/OrderStatusUpdater";

export default async function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const order = ADMIN_ORDERS.find((o) => o.id === orderId);
  if (!order) notFound();

  return (
    <div>
      <Link href="/admin/orders" className="text-sm text-maroon-600 hover:underline">
        ← All orders
      </Link>

      <div className="mt-4 mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800">
            {order.id}
          </h1>
          <p className="text-sm text-sandalwood-500">
            {order.customer} · {order.date}
          </p>
        </div>
        <span className="text-xl font-semibold text-maroon-700">₹{order.total}</span>
      </div>

      <div className="rounded-2xl border border-marigold-200 bg-parchment-50 p-8 mb-8">
        <OrderTracker currentStatus={order.status} />
      </div>

      <div className="rounded-xl border border-sandalwood-200 bg-parchment-50 p-4">
        <h2 className="font-medium text-sandalwood-900 mb-3">Update Status</h2>
        <OrderStatusUpdater currentStatus={order.status} />
      </div>
    </div>
  );
}
