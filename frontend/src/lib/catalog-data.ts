import type { Product } from "@/types";

export interface Category {
  slug: string;
  name: string;
  description: string;
  imageUrl?: string;
}

// TODO: replace with real data fetched from the NestJS Products/Categories modules once built (M2).
// Product/category photos are real CC-licensed stock photos from Wikimedia Commons (see
// public/images/README.md for sources/licenses) — a temporary stand-in for the client's own
// product photography, not final imagery.
export const CATEGORIES: Category[] = [
  { slug: "daily-puja", name: "Daily Puja", description: "Agarbatti, dhoop, kapoor, and cotton wicks for everyday worship." },
  { slug: "festivals", name: "Festivals", description: "Curated kits for Diwali, Navratri, Ganesh Chaturthi, and more.", imageUrl: "/images/categories/festivals.jpg" },
  { slug: "temple-essentials", name: "Temple Essentials", description: "Bells, ghanta, shankha, kalash, and panchapatra.", imageUrl: "/images/categories/temple-essentials.jpg" },
  { slug: "idols", name: "Idols", description: "Ganesha, Krishna, Shiva, Durga, Lakshmi, Saraswati, and Hanuman idols.", imageUrl: "/images/categories/idols.jpg" },
  { slug: "rudraksha", name: "Rudraksha", description: "Certified authentic Mukhi varieties." },
  { slug: "havan-samagri", name: "Havan Samagri", description: "Complete havan kits for fire rituals." },
  { slug: "vastu", name: "Vastu Products", description: "Items to bring balance and positive energy to your space." },
  { slug: "meditation", name: "Meditation", description: "Singing bowls, incense, mala, and meditation cushions." },
  { slug: "puja-kits", name: "Puja Kits", description: "Complete curated kits for specific rituals." },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Brass Diya Set (Pack of 5)",
    slug: "brass-diya-set",
    description: "Handcrafted brass diyas for daily aarti and festive lighting.",
    categoryName: "Temple Essentials",
    basePrice: 449,
    compareAtPrice: 599,
    images: ["/images/products/brass-diya-set.jpg"],
    isFeatured: true,
  },
  {
    id: "2",
    name: "Complete Satyanarayan Puja Kit",
    slug: "satyanarayan-puja-kit",
    description: "Everything you need for a Satyanarayan Puja, curated by our pandits.",
    categoryName: "Puja Kits",
    basePrice: 899,
    images: ["/images/products/satyanarayan-puja-kit.jpg"],
    isFeatured: true,
  },
  {
    id: "3",
    name: "5 Mukhi Rudraksha Mala (108 beads)",
    slug: "5-mukhi-rudraksha-mala",
    description: "Certified authentic 5 Mukhi Rudraksha mala for daily japa.",
    categoryName: "Rudraksha",
    basePrice: 1299,
    images: ["/images/products/5-mukhi-rudraksha-mala.jpg"],
    isFeatured: true,
  },
  {
    id: "4",
    name: "Panchdhatu Ganesha Idol",
    slug: "panchdhatu-ganesha-idol",
    description: "A five-metal alloy Ganesha idol for your home temple.",
    categoryName: "Idols",
    basePrice: 1899,
    images: ["/images/products/panchdhatu-ganesha-idol.jpg"],
    isFeatured: true,
  },
  {
    id: "5",
    name: "Premium Sandalwood Incense (Box of 100)",
    slug: "sandalwood-incense-box",
    description: "Pure sandalwood agarbatti, slow-burning and long-lasting.",
    categoryName: "Daily Puja",
    basePrice: 299,
    images: ["/images/products/sandalwood-incense-box.jpg"],
    isFeatured: true,
  },
  {
    id: "6",
    name: "Copper Kalash with Coconut",
    slug: "copper-kalash-coconut",
    description: "Traditional copper kalash set for auspicious ceremonies.",
    categoryName: "Temple Essentials",
    basePrice: 649,
    images: ["/images/products/copper-kalash-coconut.jpg"],
    isFeatured: true,
  },
  {
    id: "7",
    name: "Diwali Puja Kit (Lakshmi-Ganesh)",
    slug: "diwali-puja-kit",
    description: "Complete Diwali puja essentials including idols, diyas, and rangoli colors.",
    categoryName: "Festivals",
    basePrice: 1199,
    images: ["/images/products/diwali-puja-kit.jpg"],
  },
  {
    id: "8",
    name: "Navratri Kalash Sthapana Kit",
    slug: "navratri-kalash-kit",
    description: "Everything needed for Kalash Sthapana on the first day of Navratri.",
    categoryName: "Festivals",
    basePrice: 799,
    images: ["/images/products/navratri-kalash-kit.jpg"],
  },
  {
    id: "9",
    name: "Panchapatra & Spoon Set",
    slug: "panchapatra-spoon-set",
    description: "Traditional silver-plated panchapatra with spoon for daily rituals.",
    categoryName: "Temple Essentials",
    basePrice: 549,
    images: [], // TODO: no free stock photo found for this specific item — needs real product photography.
  },
  {
    id: "10",
    name: "Temple Bell (Ghanta) — Medium",
    slug: "temple-bell-medium",
    description: "Brass temple bell with rich resonant tone for aarti.",
    categoryName: "Temple Essentials",
    basePrice: 899,
    images: ["/images/products/temple-bell-medium.jpg"],
  },
  {
    id: "11",
    name: "Conch Shell (Shankha)",
    slug: "conch-shell-shankha",
    description: "Natural conch shell for puja and aarti, produces a deep resonant sound.",
    categoryName: "Temple Essentials",
    basePrice: 699,
    images: ["/images/products/conch-shell-shankha.jpg"],
  },
  {
    id: "12",
    name: "Complete Havan Kit",
    slug: "complete-havan-kit",
    description: "All samagri needed for a havan — herbs, wood, ghee, and camphor.",
    categoryName: "Havan Samagri",
    basePrice: 549,
    images: ["/images/products/complete-havan-kit.jpg"],
  },
  {
    id: "13",
    name: "7 Mukhi Rudraksha Bead",
    slug: "7-mukhi-rudraksha-bead",
    description: "Single certified 7 Mukhi Rudraksha bead with authenticity certificate.",
    categoryName: "Rudraksha",
    basePrice: 1499,
    images: ["/images/products/7-mukhi-rudraksha-bead.jpg"],
  },
  {
    id: "14",
    name: "Tibetan Singing Bowl",
    slug: "tibetan-singing-bowl",
    description: "Hand-hammered singing bowl for meditation and sound healing.",
    categoryName: "Meditation",
    basePrice: 1699,
    images: ["/images/products/tibetan-singing-bowl.jpg"],
  },
  {
    id: "15",
    name: "Rudraksha Meditation Mala (108 beads)",
    slug: "rudraksha-meditation-mala",
    description: "A simple, comfortable mala for daily japa and meditation.",
    categoryName: "Meditation",
    basePrice: 599,
    images: ["/images/products/rudraksha-meditation-mala.jpg"],
  },
  {
    id: "16",
    name: "Vastu Pyramid Set",
    slug: "vastu-pyramid-set",
    description: "A set of copper pyramids to balance energy across your home.",
    categoryName: "Vastu Products",
    basePrice: 899,
    images: [], // TODO: no free stock photo found for this specific item — needs real product photography.
  },
  {
    id: "17",
    name: "Cotton Wicks (Batti) — Pack of 200",
    slug: "cotton-wicks-pack",
    description: "Hand-rolled cotton wicks for daily diya lighting.",
    categoryName: "Daily Puja",
    basePrice: 99,
    images: ["/images/products/cotton-wicks-pack.jpg"],
  },
  {
    id: "18",
    name: "Camphor (Kapoor) Tablets — 100g",
    slug: "camphor-tablets",
    description: "Pure camphor tablets for aarti and puja.",
    categoryName: "Daily Puja",
    basePrice: 149,
    images: ["/images/products/camphor-tablets.jpg"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return PRODUCTS.filter((p) => p.categoryName === category.name);
}
