import Link from "next/link";
import { MOCK_USER, MOCK_ORDERS } from "@/lib/account-mock-data";

export default function AccountOverviewPage() {
  const recentOrders = MOCK_ORDERS.slice(0, 3);

  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-maroon-800 mb-1">
        Welcome, {MOCK_USER.name.split(" ")[0]}
      </h1>
      <p className="text-sandalwood-600 mb-8">{MOCK_USER.email}</p>

      <div className="grid gap-4 sm:grid-cols-3 mb-10">
        <div className="rounded-xl border border-marigold-200 bg-parchment-50 p-4">
          <p className="text-sm text-sandalwood-500">Total Orders</p>
          <p className="text-2xl font-semibold text-maroon-800">{MOCK_ORDERS.length}</p>
        </div>
        <div className="rounded-xl border border-marigold-200 bg-parchment-50 p-4">
          <p className="text-sm text-sandalwood-500">Loyalty Points</p>
          <p className="text-2xl font-semibold text-maroon-800">{MOCK_USER.loyaltyPoints}</p>
        </div>
        <div className="rounded-xl border border-marigold-200 bg-parchment-50 p-4">
          <p className="text-sm text-sandalwood-500">Wishlist Items</p>
          <p className="text-2xl font-semibold text-maroon-800">2</p>
        </div>
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-xl text-maroon-800 mb-4">
        Recent Orders
      </h2>
      <div className="space-y-3">
        {recentOrders.map((order) => (
          <Link
            key={order.id}
            href={`/account/orders/${order.id}`}
            className="flex items-center justify-between rounded-xl border border-sandalwood-200 bg-parchment-50 p-4 hover:border-maroon-300"
          >
            <div>
              <p className="font-medium text-sandalwood-900">{order.id}</p>
              <p className="text-xs text-sandalwood-500">{order.date}</p>
            </div>
            <span className="text-sm text-marigold-700">{order.status}</span>
            <span className="font-semibold text-maroon-700">₹{order.total}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
