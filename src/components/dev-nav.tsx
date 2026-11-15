import Link from "next/link";

/**
 * TEMPORARY development shortcuts to the portals.
 * Remove this component (and its use on the home page) before launch.
 */
export function DevNav() {
  return (
    <aside
      aria-label="Development shortcuts"
      className="border-accent bg-accent/10 rounded-lg border-2 border-dashed p-4"
    >
      <p className="text-xs font-semibold tracking-widest uppercase">
        Dev only · remove before launch
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <Link
          href="/admin"
          className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 text-sm font-semibold"
        >
          Go to /admin
        </Link>
        <Link
          href="/service"
          className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 text-sm font-semibold"
        >
          Go to /service
        </Link>
      </div>
    </aside>
  );
}
