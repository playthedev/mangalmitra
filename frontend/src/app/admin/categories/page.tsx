import { CATEGORIES, getProductsByCategory } from "@/lib/catalog-data";
import { Button } from "@/components/ui/Button";

export default function AdminCategoriesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800">
          Categories
        </h1>
        <Button variant="primary" size="sm">
          + New Category
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {CATEGORIES.map((cat) => (
          <div key={cat.slug} className="rounded-xl border border-marigold-200 bg-parchment-50 p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-sandalwood-900">{cat.name}</span>
              <span className="text-xs text-sandalwood-500">
                {getProductsByCategory(cat.slug).length} products
              </span>
            </div>
            <p className="text-sm text-sandalwood-700">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
