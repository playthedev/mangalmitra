const STEPS = [
  { key: "address", label: "Address" },
  { key: "payment", label: "Payment" },
  { key: "confirmation", label: "Confirmation" },
];

export function CheckoutSteps({ current }: { current: "address" | "payment" | "confirmation" }) {
  const currentIndex = STEPS.findIndex((s) => s.key === current);

  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      {STEPS.map((step, i) => (
        <div key={step.key} className="flex items-center gap-2">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
              i <= currentIndex
                ? "bg-maroon-600 text-parchment-50"
                : "border border-sandalwood-300 text-sandalwood-400"
            }`}
          >
            {i + 1}
          </span>
          <span className={i <= currentIndex ? "text-maroon-800" : "text-sandalwood-400"}>
            {step.label}
          </span>
          {i < STEPS.length - 1 && <span className="mx-2 text-sandalwood-300">—</span>}
        </div>
      ))}
    </div>
  );
}
