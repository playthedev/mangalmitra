import Link from "next/link";
import { ADMIN_ORDERS } from "@/lib/admin-mock-data";

export default function AdminOrdersPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        Orders
      </h1>
      <div className="overflow-x-auto rounded-xl border border-marigold-200">
        <table className="w-full text-sm">
          <thead className="bg-marigold-50 text-left text-sandalwood-600">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {ADMIN_ORDERS.map((o) => (
              <tr key={o.id} className="border-t border-marigold-100">
                <td className="px-4 py-3">
                  <Link href={`/admin/orders/${o.id}`} className="text-maroon-700 hover:underline font-medium">
                    {o.id}
                  </Link>
                </td>
                <td className="px-4 py-3 text-sandalwood-800">{o.customer}</td>
                <td className="px-4 py-3 text-sandalwood-500">{o.date}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-marigold-100 px-3 py-1 text-xs text-marigold-800">
                    {o.status}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-maroon-700">₹{o.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
