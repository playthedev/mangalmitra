"use client";

import { MOCK_USER } from "@/lib/account-mock-data";
import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO(M4): PATCH /users/me once the backend UsersModule exists.
    alert("Profile updates aren't wired up to the backend yet.");
  }

  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        Profile
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input defaultValue={MOCK_USER.name} className="input-field" />
        <input defaultValue={MOCK_USER.email} type="email" className="input-field" />
        <input defaultValue={MOCK_USER.phone} className="input-field" />
        <Button type="submit" variant="primary">
          Save Changes
        </Button>
      </form>

      <style jsx>{`
        .input-field {
          width: 100%;
          border: 1px solid var(--color-marigold-300);
          background: var(--color-parchment-50);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
        }
        .input-field:focus {
          outline: none;
          border-color: var(--color-maroon-400);
        }
      `}</style>
    </div>
  );
}
