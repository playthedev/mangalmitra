import { ADMIN_CUSTOMERS } from "@/lib/admin-mock-data";

export default function AdminCustomersPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        Customers
      </h1>

      <div className="overflow-x-auto rounded-xl border border-marigold-200">
        <table className="w-full text-sm">
          <thead className="bg-marigold-50 text-left text-sandalwood-600">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Orders</th>
              <th className="px-4 py-3">Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {ADMIN_CUSTOMERS.map((c) => (
              <tr key={c.id} className="border-t border-marigold-100">
                <td className="px-4 py-3 text-sandalwood-900">{c.name}</td>
                <td className="px-4 py-3 text-sandalwood-600">{c.email}</td>
                <td className="px-4 py-3 text-sandalwood-800">{c.orders}</td>
                <td className="px-4 py-3 font-medium text-maroon-700">₹{c.totalSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
