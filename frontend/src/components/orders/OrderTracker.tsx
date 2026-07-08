const STATUSES = ["Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered"];

export function OrderTracker({ currentStatus = "Confirmed" }: { currentStatus?: string }) {
  const currentIndex = Math.max(0, STATUSES.indexOf(currentStatus));

  return (
    <div className="flex items-center justify-between">
      {STATUSES.map((status, i) => (
        <div key={status} className="flex flex-1 flex-col items-center relative">
          {i > 0 && (
            <div
              className={`absolute top-3 right-1/2 h-0.5 w-full -z-10 ${
                i <= currentIndex ? "bg-maroon-500" : "bg-sandalwood-200"
              }`}
            />
          )}
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
              i <= currentIndex
                ? "bg-maroon-600 text-parchment-50"
                : "border border-sandalwood-300 bg-parchment-50 text-sandalwood-400"
            }`}
          >
            {i <= currentIndex ? "✓" : i + 1}
          </span>
          <span
            className={`mt-2 text-center text-xs ${
              i <= currentIndex ? "text-maroon-800 font-medium" : "text-sandalwood-400"
            }`}
          >
            {status}
          </span>
        </div>
      ))}
    </div>
  );
}
