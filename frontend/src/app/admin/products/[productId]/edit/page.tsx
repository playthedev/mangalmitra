import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/catalog-data";
import { ProductForm } from "@/components/admin/ProductForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) notFound();

  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        Edit Product
      </h1>
      <ProductForm product={product} />
    </div>
  );
}
