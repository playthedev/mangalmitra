import { MOCK_USER } from "@/lib/account-mock-data";

const MOCK_TRANSACTIONS = [
  { id: "t1", date: "2026-06-18", points: 27, type: "Earned", note: "Order KSH-104582" },
  { id: "t2", date: "2026-05-02", points: 18, type: "Earned", note: "Order KSH-104210" },
  { id: "t3", date: "2026-04-10", points: -50, type: "Redeemed", note: "₹50 off coupon" },
];

export default function LoyaltyPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        Loyalty Points
      </h1>

      <div className="rounded-2xl bg-marigold-50 border border-marigold-200 p-6 mb-8">
        <p className="text-sm text-sandalwood-600">Available Balance</p>
        <p className="text-4xl font-semibold text-maroon-800">{MOCK_USER.loyaltyPoints} pts</p>
      </div>

      <h2 className="font-medium text-sandalwood-900 mb-3">History</h2>
      <div className="space-y-2">
        {MOCK_TRANSACTIONS.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between rounded-lg border border-sandalwood-200 bg-parchment-50 px-4 py-3 text-sm"
          >
            <div>
              <p className="text-sandalwood-900">{t.note}</p>
              <p className="text-xs text-sandalwood-500">{t.date}</p>
            </div>
            <span className={t.points > 0 ? "text-marigold-700 font-medium" : "text-terracotta-700 font-medium"}>
              {t.points > 0 ? "+" : ""}
              {t.points} pts
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
