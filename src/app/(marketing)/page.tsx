import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Clean, sun-dried hockey gear.</h1>
      <p className="text-muted-foreground max-w-2xl text-lg">
        We pick up your bag, deep-clean every piece, dry it in the Texas sun, and bring it back
        fresh. Placeholder copy until the brand pass.
      </p>
      <Link
        href="/portal"
        className="bg-primary text-primary-foreground inline-flex rounded-md px-5 py-3 font-medium"
      >
        Book a clean
      </Link>
    </section>
  );
}
