import Link from "next/link";
import { Bubbles } from "lucide-react";
import { business } from "@/config/business";

export function SiteHeader() {
  return (
    <header className="border-border bg-surface/80 sticky top-0 z-10 border-b backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label={`${business.name} home`}>
          <span className="bg-primary text-primary-foreground grid size-9 place-items-center rounded-full">
            <Bubbles className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg tracking-wide">{business.name}</span>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/service" className="hover:text-primary">
            My orders
          </Link>
        </div>
      </nav>
    </header>
  );
}
