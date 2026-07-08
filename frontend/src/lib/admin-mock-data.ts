// TODO: replace with real data from the NestJS AdminModule analytics endpoints once built (M5).
export const ADMIN_STATS = {
  totalRevenue: 486230,
  totalOrders: 812,
  totalCustomers: 341,
  lowStockCount: 4,
};

export const REVENUE_TREND = [
  { month: "Jan", revenue: 32000 },
  { month: "Feb", revenue: 28500 },
  { month: "Mar", revenue: 41200 },
  { month: "Apr", revenue: 38900 },
  { month: "May", revenue: 52300 },
  { month: "Jun", revenue: 61400 },
];

export const ADMIN_ORDERS = [
  { id: "KSH-104582", customer: "Priya Sharma", date: "2026-06-18", status: "Delivered", total: 1348 },
  { id: "KSH-104210", customer: "Rohan Mehta", date: "2026-05-02", status: "Out for Delivery", total: 899 },
  { id: "KSH-104099", customer: "Ananya Iyer", date: "2026-06-25", status: "Packed", total: 2450 },
  { id: "KSH-104088", customer: "Vikram Nair", date: "2026-06-24", status: "Confirmed", total: 649 },
];

export const LOW_STOCK_PRODUCTS = [
  { slug: "7-mukhi-rudraksha-bead", name: "7 Mukhi Rudraksha Bead", stock: 3, threshold: 5 },
  { slug: "tibetan-singing-bowl", name: "Tibetan Singing Bowl", stock: 2, threshold: 5 },
  { slug: "temple-bell-medium", name: "Temple Bell (Ghanta) — Medium", stock: 4, threshold: 5 },
  { slug: "complete-havan-kit", name: "Complete Havan Kit", stock: 1, threshold: 5 },
];

export const ADMIN_COUPONS = [
  { code: "DIWALI25", type: "PERCENT", value: 25, usedCount: 143, usageLimit: 500, isActive: true },
  { code: "WELCOME100", type: "FLAT", value: 100, usedCount: 89, usageLimit: 1000, isActive: true },
  { code: "FESTIVE10", type: "PERCENT", value: 10, usedCount: 302, usageLimit: 300, isActive: false },
];

export const ADMIN_REVIEWS = [
  {
    id: "r1",
    product: "Complete Satyanarayan Puja Kit",
    customer: "Priya Sharma",
    rating: 5,
    body: "Everything was exactly as described, very fresh samagri.",
    isApproved: true,
  },
  {
    id: "r2",
    product: "Brass Diya Set (Pack of 5)",
    customer: "Rohan Mehta",
    rating: 4,
    body: "Good quality but delivery took a bit long.",
    isApproved: true,
  },
  {
    id: "r3",
    product: "5 Mukhi Rudraksha Mala (108 beads)",
    customer: "Anonymous",
    rating: 2,
    body: "Contains a promotional link, flagged for review.",
    isApproved: false,
  },
];

export const ADMIN_CUSTOMERS = [
  { id: "c1", name: "Priya Sharma", email: "priya.sharma@example.com", orders: 6, totalSpent: 8420 },
  { id: "c2", name: "Rohan Mehta", email: "rohan.mehta@example.com", orders: 3, totalSpent: 3120 },
  { id: "c3", name: "Ananya Iyer", email: "ananya.iyer@example.com", orders: 9, totalSpent: 15230 },
];
