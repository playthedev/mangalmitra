import { ADMIN_STATS, REVENUE_TREND, LOW_STOCK_PRODUCTS } from "@/lib/admin-mock-data";

export default function AdminOverviewPage() {
  const maxRevenue = Math.max(...REVENUE_TREND.map((r) => r.revenue));

  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        Sales Overview
      </h1>

      <div className="grid gap-4 sm:grid-cols-4 mb-10">
        <StatCard label="Total Revenue" value={`₹${ADMIN_STATS.totalRevenue.toLocaleString("en-IN")}`} />
        <StatCard label="Total Orders" value={ADMIN_STATS.totalOrders.toString()} />
        <StatCard label="Customers" value={ADMIN_STATS.totalCustomers.toString()} />
        <StatCard label="Low Stock Alerts" value={ADMIN_STATS.lowStockCount.toString()} accent />
      </div>

      <div className="rounded-2xl border border-marigold-200 bg-parchment-50 p-6 mb-10">
        <h2 className="font-medium text-sandalwood-900 mb-4">Revenue Trend (Last 6 Months)</h2>
        <div className="flex items-end gap-4 h-40">
          {REVENUE_TREND.map((entry) => (
            <div key={entry.month} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-md bg-maroon-500"
                style={{ height: `${(entry.revenue / maxRevenue) * 100}%` }}
              />
              <span className="text-xs text-sandalwood-500">{entry.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-terracotta-300 bg-terracotta-50 p-6">
        <h2 className="font-medium text-terracotta-800 mb-3">⚠ Low Stock Alerts</h2>
        <ul className="space-y-2 text-sm">
          {LOW_STOCK_PRODUCTS.map((p) => (
            <li key={p.slug} className="flex justify-between">
              <span className="text-sandalwood-800">{p.name}</span>
              <span className="text-terracotta-700 font-medium">
                {p.stock} left (threshold {p.threshold})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StatCard({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-marigold-200 bg-parchment-50 p-4">
      <p className="text-sm text-sandalwood-500">{label}</p>
      <p className={`text-2xl font-semibold ${accent ? "text-terracotta-700" : "text-maroon-800"}`}>
        {value}
      </p>
    </div>
  );
}
