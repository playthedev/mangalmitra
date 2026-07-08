import Link from "next/link";
import { MOCK_ORDERS } from "@/lib/account-mock-data";

export default function OrdersPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        My Orders
      </h1>
      <div className="space-y-3">
        {MOCK_ORDERS.map((order) => (
          <Link
            key={order.id}
            href={`/account/orders/${order.id}`}
            className="block rounded-xl border border-sandalwood-200 bg-parchment-50 p-4 hover:border-maroon-300"
          >
            <div className="flex items-center justify-between mb-1">
              <p className="font-medium text-sandalwood-900">{order.id}</p>
              <span className="font-semibold text-maroon-700">₹{order.total}</span>
            </div>
            <p className="text-xs text-sandalwood-500 mb-1">{order.date}</p>
            <p className="text-sm text-sandalwood-700">{order.items.join(", ")}</p>
            <span className="mt-2 inline-block text-xs rounded-full bg-marigold-100 px-3 py-1 text-marigold-800">
              {order.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
