import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    heading: "Shop",
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/shop/puja-kits", label: "Puja Kits" },
      { href: "/shop/idols", label: "Idols & Murtis" },
      { href: "/shop/temple-essentials", label: "Temple Essentials" },
      { href: "/cart", label: "Your Cart" },
    ],
  },
  {
    heading: "Experiences",
    links: [
      { href: "/puja-guides", label: "Puja Guides" },
      { href: "/rituals", label: "Explore Rituals" },
      { href: "/wisdom", label: "Daily Wisdom" },
      { href: "/meditation", label: "Meditation" },
    ],
  },
  {
    heading: "Account",
    links: [
      { href: "/account", label: "My Account" },
      { href: "/account/orders", label: "Order History" },
      { href: "/account/wishlist", label: "Wishlist" },
      { href: "/account/loyalty", label: "Loyalty Points" },
      { href: "/login", label: "Sign In" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gold-700/40 bg-sandalwood-900 text-sandalwood-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div
              className="inline-flex rounded-full p-4"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,250,240,0.95) 0%, rgba(255,250,240,0.7) 55%, rgba(255,250,240,0) 80%)",
              }}
            >
              <Image
                src="/images/logo-header.png"
                alt="Mangalmitra"
                width={534}
                height={457}
                className="h-24 w-auto"
              />
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-sandalwood-300">
              Sacred traditions delivered to your doorstep — ritual essentials,
              step-by-step puja guidance, Vedic wisdom, and meditation, all in
              one sacred space.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-sandalwood-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                <a href="tel:+911234567890" className="transition-colors hover:text-gold-300">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                <a
                  href="mailto:namaste@mangalmitra.in"
                  className="transition-colors hover:text-gold-300"
                >
                  namaste@mangalmitra.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                <span>Varanasi, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-gold-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-sandalwood-800 pt-6 text-sm text-sandalwood-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Mangalmitra. All rights reserved.</p>
          <p className="font-[family-name:var(--font-heading)] text-gold-400">
            ॐ शान्तिः शान्तिः शान्तिः
          </p>
        </div>
      </div>
    </footer>
  );
}
