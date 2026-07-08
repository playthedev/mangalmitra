"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO(M4): wire to NextAuth CredentialsProvider once the backend AuthModule exists.
    alert("Sign-in isn't wired up to the backend yet — coming in a future milestone.");
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-maroon-800 mb-2 text-center">
        Welcome Back
      </h1>
      <p className="text-sandalwood-700 mb-8 text-center">Sign in to continue your journey.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input required type="email" placeholder="Email" className="input-field" />
        <input required type="password" placeholder="Password" className="input-field" />
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Sign In
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs text-sandalwood-400">
        <div className="h-px flex-1 bg-sandalwood-200" /> OR <div className="h-px flex-1 bg-sandalwood-200" />
      </div>

      <button
        onClick={() => alert("Google sign-in isn't wired up to the backend yet.")}
        className="w-full rounded-full border border-marigold-300 py-3 text-sm font-medium text-sandalwood-800 hover:bg-marigold-50"
      >
        Continue with Google
      </button>
      <button
        onClick={() => alert("OTP sign-in isn't wired up to the backend yet.")}
        className="mt-3 w-full rounded-full border border-marigold-300 py-3 text-sm font-medium text-sandalwood-800 hover:bg-marigold-50"
      >
        Continue with OTP
      </button>

      <p className="mt-8 text-center text-sm text-sandalwood-600">
        New to Mangalmitra?{" "}
        <Link href="/register" className="text-maroon-700 font-medium hover:underline">
          Create an account
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
