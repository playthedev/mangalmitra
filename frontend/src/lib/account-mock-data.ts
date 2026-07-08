// TODO: replace with real data once NextAuth + the backend Users/Orders/Addresses/Wishlist/Loyalty modules exist (M4).
export const MOCK_USER = {
  name: "Priya Sharma",
  email: "priya.sharma@example.com",
  phone: "+91 98765 43210",
  loyaltyPoints: 320,
};

export const MOCK_ORDERS = [
  {
    id: "KSH-104582",
    date: "2026-06-18",
    status: "Delivered",
    total: 1348,
    items: ["Complete Satyanarayan Puja Kit", "Brass Diya Set (Pack of 5)"],
  },
  {
    id: "KSH-104210",
    date: "2026-05-02",
    status: "Out for Delivery",
    total: 899,
    items: ["5 Mukhi Rudraksha Mala (108 beads)"],
  },
  {
    id: "KSH-103987",
    date: "2026-03-14",
    status: "Delivered",
    total: 649,
    items: ["Copper Kalash with Coconut"],
  },
];

export const MOCK_ADDRESSES = [
  {
    id: "a1",
    label: "Home",
    fullName: "Priya Sharma",
    phone: "+91 98765 43210",
    line1: "12 Lotus Enclave",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411001",
    isDefault: true,
  },
  {
    id: "a2",
    label: "Parents' House",
    fullName: "Priya Sharma",
    phone: "+91 98765 43210",
    line1: "45 Temple Road",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422001",
    isDefault: false,
  },
];

export const MOCK_WISHLIST_SLUGS = ["tibetan-singing-bowl", "7-mukhi-rudraksha-bead"];
