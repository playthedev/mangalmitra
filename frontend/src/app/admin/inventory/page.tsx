import { PRODUCTS } from "@/lib/catalog-data";
import { LOW_STOCK_PRODUCTS } from "@/lib/admin-mock-data";

export default function AdminInventoryPage() {
  const lowStockSlugs = new Set(LOW_STOCK_PRODUCTS.map((p) => p.slug));

  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        Inventory
      </h1>

      <div className="overflow-x-auto rounded-xl border border-marigold-200">
        <table className="w-full text-sm">
          <thead className="bg-marigold-50 text-left text-sandalwood-600">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => {
              const lowStock = lowStockSlugs.has(p.slug);
              const stockInfo = LOW_STOCK_PRODUCTS.find((l) => l.slug === p.slug);
              return (
                <tr key={p.id} className="border-t border-marigold-100">
                  <td className="px-4 py-3 text-sandalwood-900">{p.name}</td>
                  <td className="px-4 py-3 text-sandalwood-600">{p.categoryName}</td>
                  <td className="px-4 py-3 text-sandalwood-800">{stockInfo?.stock ?? "—"}</td>
                  <td className="px-4 py-3">
                    {lowStock ? (
                      <span className="rounded-full bg-terracotta-100 px-3 py-1 text-xs text-terracotta-700">
                        Low Stock
                      </span>
                    ) : (
                      <span className="rounded-full bg-marigold-100 px-3 py-1 text-xs text-marigold-800">
                        In Stock
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
