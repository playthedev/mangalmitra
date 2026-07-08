import Link from "next/link";
import { PRODUCTS } from "@/lib/catalog-data";
import { Button, ButtonLink } from "@/components/ui/Button";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800">
          Products
        </h1>
        <ButtonLink href="/admin/products/new" variant="primary" size="sm">
          + New Product
        </ButtonLink>
      </div>

      <div className="overflow-x-auto rounded-xl border border-marigold-200">
        <table className="w-full text-sm">
          <thead className="bg-marigold-50 text-left text-sandalwood-600">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.id} className="border-t border-marigold-100">
                <td className="px-4 py-3 text-sandalwood-900">{p.name}</td>
                <td className="px-4 py-3 text-sandalwood-600">{p.categoryName}</td>
                <td className="px-4 py-3 text-maroon-700 font-medium">₹{p.basePrice}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/products/${p.id}/edit`} className="text-maroon-600 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
