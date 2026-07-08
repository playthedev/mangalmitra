import { ADMIN_COUPONS } from "@/lib/admin-mock-data";
import { Button } from "@/components/ui/Button";

export default function AdminCouponsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800">
          Coupons
        </h1>
        <Button variant="primary" size="sm">
          + New Coupon
        </Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-marigold-200">
        <table className="w-full text-sm">
          <thead className="bg-marigold-50 text-left text-sandalwood-600">
            <tr>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Discount</th>
              <th className="px-4 py-3">Usage</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {ADMIN_COUPONS.map((c) => (
              <tr key={c.code} className="border-t border-marigold-100">
                <td className="px-4 py-3 font-mono font-medium text-sandalwood-900">{c.code}</td>
                <td className="px-4 py-3 text-sandalwood-700">
                  {c.type === "PERCENT" ? `${c.value}%` : `₹${c.value}`} off
                </td>
                <td className="px-4 py-3 text-sandalwood-600">
                  {c.usedCount} / {c.usageLimit}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      c.isActive ? "bg-marigold-100 text-marigold-800" : "bg-sandalwood-100 text-sandalwood-500"
                    }`}
                  >
                    {c.isActive ? "Active" : "Expired"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
