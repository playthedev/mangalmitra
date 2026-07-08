"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingCart, User, Volume2, VolumeX, X } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useHydrated } from "@/lib/use-hydrated";
import { useAmbientAudio } from "@/components/layout/AmbientAudioProvider";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/rituals", label: "Rituals" },
  { href: "/puja-guides", label: "Puja Guides" },
  { href: "/wisdom", label: "Wisdom" },
  { href: "/meditation", label: "Meditation" },
];

export function SiteHeader() {
  const totalItems = useCartStore((s) => s.totalItems());
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isPlaying, toggle: toggleAmbientAudio } = useAmbientAudio();
  // The cart is persisted in localStorage, so the badge count only exists on
  // the client — render it after hydration to avoid a mismatch.
  const hydrated = useHydrated();

  const showBadge = hydrated && totalItems > 0;

  function closeMenu() {
    setMenuOpen(false);
  }

  function isActive(href: string) {
    return pathname === href || pathname?.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-marigold-200 bg-parchment-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-visible px-4 py-1.5 sm:px-6">
        <Link
          href="/"
          className="relative z-10 flex items-center"
          aria-label="Mangalmitra home"
        >
          <Image
            src="/images/logo-header.png"
            alt="Mangalmitra"
            width={534}
            height={457}
            priority
            className="h-24 w-auto -my-5 sm:h-28 sm:-my-6"
          />
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-sandalwood-800 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "rounded-full bg-maroon-600 px-4 py-1.5 text-parchment-50 transition-colors hover:bg-maroon-700"
                  : "rounded-full px-3 py-1.5 transition-colors hover:bg-marigold-50 hover:text-maroon-700"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={toggleAmbientAudio}
            aria-label={isPlaying ? "Mute background music" : "Play background music"}
            aria-pressed={isPlaying}
            className="rounded-full p-2 text-sandalwood-800 transition-colors hover:bg-marigold-50 hover:text-maroon-700"
          >
            {isPlaying ? (
              <Volume2 className="h-5 w-5" aria-hidden="true" />
            ) : (
              <VolumeX className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <Link
            href="/cart"
            aria-label={showBadge ? `Cart, ${totalItems} items` : "Cart"}
            className="relative rounded-full p-2 text-sandalwood-800 transition-colors hover:bg-marigold-50 hover:text-maroon-700"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            {showBadge && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-maroon-600 px-1 text-[10px] font-semibold text-parchment-50">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            href="/account"
            aria-label="My account"
            className="rounded-full p-2 text-sandalwood-800 transition-colors hover:bg-marigold-50 hover:text-maroon-700"
          >
            <User className="h-5 w-5" aria-hidden="true" />
          </Link>
          {/* <Link
            href="/login"
            className="hidden rounded-full border border-marigold-400 px-4 py-1.5 text-sm font-medium text-maroon-700 transition-colors hover:bg-marigold-50 sm:inline-flex"
          >
            Sign In
          </Link> */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-full p-2 text-sandalwood-800 transition-colors hover:bg-marigold-50 hover:text-maroon-700 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-marigold-200 bg-parchment-50 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={
                    isActive(link.href)
                      ? "rounded-xl bg-maroon-600 px-4 py-2.5 font-medium text-parchment-50"
                      : "rounded-xl px-4 py-2.5 font-medium text-sandalwood-800 transition-colors hover:bg-marigold-50 hover:text-maroon-700"
                  }
                >
                  {link.label}
                </Link>
              ))}
              {/* <Link
                href="/login"
                onClick={closeMenu}
                className="mt-2 rounded-xl border border-marigold-400 px-4 py-2.5 text-center font-medium text-maroon-700 transition-colors hover:bg-marigold-50 sm:hidden"
              >
                Sign In
              </Link> */}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
