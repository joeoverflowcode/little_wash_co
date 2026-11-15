import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Service" };

export default function ServicePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="text-primary text-sm font-medium">
        ← Home
      </Link>
      <h1 className="mt-4 text-3xl">Service portal</h1>
      <p className="text-muted-foreground mt-2">
        Client portal placeholder: book a clean and track your orders. Sign-in arrives in ticket
        0.4, orders in Phase 3.
      </p>
    </main>
  );
}
