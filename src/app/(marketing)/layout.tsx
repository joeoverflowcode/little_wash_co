import { SiteHeader } from "@/components/site-header";
import { business } from "@/config/business";

export default function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <footer className="border-border text-muted-foreground border-t py-6 text-center text-sm">
        {business.name} · {business.city}, {business.region}
      </footer>
    </div>
  );
}
