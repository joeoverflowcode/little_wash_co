import type { Metadata } from "next";

export const metadata: Metadata = { title: "My orders" };

export default function PortalPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold">My orders</h1>
      <p className="text-muted-foreground mt-2">
        Client portal placeholder. Sign-in arrives in ticket 0.4, orders in Phase 3.
      </p>
    </main>
  );
}
