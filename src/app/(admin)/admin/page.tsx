import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Admin" };

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="text-primary text-sm font-medium">
        ← Home
      </Link>
      <h1 className="mt-4 text-3xl">Admin portal</h1>
      <p className="text-muted-foreground mt-2">
        Staff portal placeholder. Role guard arrives in ticket 0.4, the order board in Phase 2.
      </p>
    </main>
  );
}
