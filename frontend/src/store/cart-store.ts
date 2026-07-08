import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartLine {
  productSlug: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  lines: CartLine[];
  addItem: (item: Omit<CartLine, "quantity">, quantity?: number) => void;
  removeItem: (productSlug: string) => void;
  setQuantity: (productSlug: string, quantity: number) => void;
  clear: () => void;
  totalItems: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      addItem: (item, quantity = 1) => {
        set((state) => {
          const existing = state.lines.find((l) => l.productSlug === item.productSlug);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.productSlug === item.productSlug
                  ? { ...l, quantity: l.quantity + quantity }
                  : l,
              ),
            };
          }
          return { lines: [...state.lines, { ...item, quantity }] };
        });
      },
      removeItem: (productSlug) => {
        set((state) => ({ lines: state.lines.filter((l) => l.productSlug !== productSlug) }));
      },
      setQuantity: (productSlug, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productSlug);
          return;
        }
        set((state) => ({
          lines: state.lines.map((l) =>
            l.productSlug === productSlug ? { ...l, quantity } : l,
          ),
        }));
      },
      clear: () => set({ lines: [] }),
      totalItems: () => get().lines.reduce((sum, l) => sum + l.quantity, 0),
      subtotal: () => get().lines.reduce((sum, l) => sum + l.quantity * l.price, 0),
    }),
    { name: "keshavi-cart" },
  ),
);
