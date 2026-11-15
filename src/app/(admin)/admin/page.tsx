import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin" };

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <p className="text-muted-foreground mt-2">
        Staff portal placeholder. Role guard arrives in ticket 0.4, the order board in Phase 2.
      </p>
    </main>
  );
}
