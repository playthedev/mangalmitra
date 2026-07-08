import Link from "next/link";

const ACCOUNT_NAV = [
  { href: "/account", label: "Overview" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/addresses", label: "Addresses" },
  { href: "/account/wishlist", label: "Wishlist" },
  { href: "/account/loyalty", label: "Loyalty Points" },
  { href: "/account/profile", label: "Profile" },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-[220px_1fr]">
      <aside>
        <nav className="flex flex-col gap-1">
          {ACCOUNT_NAV.map((link) => (
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
