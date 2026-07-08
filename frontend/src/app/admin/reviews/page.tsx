import { ADMIN_REVIEWS } from "@/lib/admin-mock-data";

export default function AdminReviewsPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        Review Moderation
      </h1>

      <div className="space-y-3">
        {ADMIN_REVIEWS.map((r) => (
          <div
            key={r.id}
            className={`rounded-xl border p-4 ${
              r.isApproved ? "border-sandalwood-200 bg-parchment-50" : "border-terracotta-300 bg-terracotta-50"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-sandalwood-900">{r.product}</span>
              <span className="text-sm text-marigold-700">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
            </div>
            <p className="text-sm text-sandalwood-500 mb-2">{r.customer}</p>
            <p className="text-sm text-sandalwood-700 mb-3">{r.body}</p>
            {!r.isApproved && (
              <div className="flex gap-3 text-sm">
                <button className="text-marigold-700 hover:underline">Approve</button>
                <button className="text-terracotta-700 hover:underline">Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
