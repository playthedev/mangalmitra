import { MOCK_ADDRESSES } from "@/lib/account-mock-data";
import { Button } from "@/components/ui/Button";

export default function AddressesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800">
          Saved Addresses
        </h1>
        <Button variant="primary" size="sm">
          + Add Address
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {MOCK_ADDRESSES.map((addr) => (
          <div key={addr.id} className="rounded-xl border border-sandalwood-200 bg-parchment-50 p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-sandalwood-900">{addr.label}</span>
              {addr.isDefault && (
                <span className="text-xs rounded-full bg-marigold-100 px-2 py-0.5 text-marigold-800">
                  Default
                </span>
              )}
            </div>
            <p className="text-sm text-sandalwood-700">{addr.fullName}</p>
            <p className="text-sm text-sandalwood-700">{addr.phone}</p>
            <p className="text-sm text-sandalwood-700">
              {addr.line1}, {addr.city}, {addr.state} {addr.pincode}
            </p>
            <div className="mt-3 flex gap-3 text-sm">
              <button className="text-maroon-600 hover:underline">Edit</button>
              <button className="text-sandalwood-400 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
