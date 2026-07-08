import Link from "next/link";

const ADMIN_NAV = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/inventory", label: "Inventory" },
  { href: "/admin/coupons", label: "Coupons" },
  { href: "/admin/reviews", label: "Reviews" },
  { href: "/admin/customers", label: "Customers" },
  { href: "/admin/notifications", label: "Notifications" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-[220px_1fr]">
      <aside>
        <p className="font-[family-name:var(--font-heading)] text-xl text-maroon-800 mb-4">
          Admin
        </p>
        <nav className="flex flex-col gap-1">
          {ADMIN_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-sandalwood-700 hover:bg-marigold-50 hover:text-maroon-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div>{children}</div>
    </div>
  );
}
