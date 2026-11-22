import { business } from "@/config/business";

/**
 * Site-wide footer with the non-affiliation disclaimer. Lives in the footer
 * (not a banner) because that is where trademark and affiliation notices
 * conventionally go: always present and easy to find, never in the way.
 */
export function SiteFooter() {
  return (
    <footer className="border-border text-muted-foreground border-t px-4 py-8 text-center text-sm">
      <p>
        © {new Date().getFullYear()} {business.name} · {business.city}, {business.region}
      </p>
      <Disclaimer className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed" />
    </footer>
  );
}

export function Disclaimer({ className }: { className?: string }) {
  return (
    <p className={className}>
      {business.name} is an independently owned small business hockey equipment cleaning service. We
      are not affiliated with, endorsed by, or sponsored by the Dallas Stars, the StarCenter rinks,
      the NHL, or any of their franchises. All team and venue names are trademarks of their
      respective owners and are used for identification only.
    </p>
  );
}
