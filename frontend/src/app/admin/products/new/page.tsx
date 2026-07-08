import { ProductForm } from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        New Product
      </h1>
      <ProductForm />
    </div>
  );
}
