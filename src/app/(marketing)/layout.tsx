import Link from "next/link";

export default function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-border border-b">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-semibold">
            Little Wash Co
          </Link>
          <div className="flex gap-4 text-sm">
            <Link href="/portal">My orders</Link>
            <Link href="/admin" className="text-muted-foreground">
              Staff
            </Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12">{children}</main>
      <footer className="border-border text-muted-foreground border-t py-6 text-center text-sm">
        Little Wash Co · Dallas, TX
      </footer>
    </div>
  );
}
