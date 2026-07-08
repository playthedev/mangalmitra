"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function RegisterPage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO(M4): wire to backend AuthModule's /auth/register once it exists.
    alert("Registration isn't wired up to the backend yet — coming in a future milestone.");
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-maroon-800 mb-2 text-center">
        Create Your Account
      </h1>
      <p className="text-sandalwood-700 mb-8 text-center">
        Join Mangalmitra to track orders, save addresses, and earn loyalty points.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input required placeholder="Full Name" className="input-field" />
        <input required type="email" placeholder="Email" className="input-field" />
        <input placeholder="Phone Number (optional)" className="input-field" />
        <input required type="password" placeholder="Password" className="input-field" />
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Create Account
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-sandalwood-600">
        Already have an account?{" "}
        <Link href="/login" className="text-maroon-700 font-medium hover:underline">
          Sign in
        </Link>
      </p>

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
