import Link from "next/link";
import { Bubbles, Sun, Truck } from "lucide-react";
import { DevNav } from "@/components/dev-nav";

const steps = [
  { icon: Truck, title: "We pick up", text: "Leave your bag out. We grab it from your door." },
  { icon: Bubbles, title: "Deep clean", text: "Every piece is washed and deodorized." },
  { icon: Sun, title: "Sun-dried", text: "Dried in the Texas sun, then brought back fresh." },
];

export default function HomePage() {
  return (
    <>
      <section className="from-hero-from to-hero-to bg-gradient-to-b">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:py-24">
          <div className="max-w-2xl space-y-6">
            <p className="bg-accent text-accent-foreground inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase">
              Dallas hockey gear cleaning
            </p>
            <h1 className="text-4xl leading-tight md:text-6xl">
              Fresh gear. <span className="text-primary">No stink.</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We pick up your hockey bag, deep-clean every piece, dry it in the Texas sun, and bring
              it back ready for your next skate.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/service"
                className="bg-primary text-primary-foreground inline-flex rounded-md px-6 py-3 font-semibold shadow-sm hover:opacity-90"
              >
                Book a clean
              </Link>
              <a
                href="#how-it-works"
                className="border-border bg-surface inline-flex rounded-md border px-6 py-3 font-semibold hover:opacity-90"
              >
                How it works
              </a>
            </div>
          </div>

          <ul id="how-it-works" className="grid gap-4 sm:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }) => (
              <li key={title} className="border-border bg-surface rounded-lg border p-5">
                <Icon className="text-primary size-6" aria-hidden="true" />
                <h2 className="mt-3 text-lg">{title}</h2>
                <p className="text-muted-foreground mt-1 text-sm">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10">
        <DevNav />
      </div>
    </>
  );
}
