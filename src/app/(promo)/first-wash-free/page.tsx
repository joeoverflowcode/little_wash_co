import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Disclaimer } from "@/components/site-footer";
import { business } from "@/config/business";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "First wash free",
  description: `New customers get their first hockey gear wash free from ${business.name} in ${business.city}, ${business.region}.`,
};

const perks = [
  "Full bag: pads, gloves, helmet, skates",
  "Hand washed, deodorized, sun-dried",
  "Rink drop-off and pickup",
];

/**
 * Single-page promo flyer. Works as a web page (QR target) and prints to one
 * US Letter sheet. Colours are fixed brand values so the printout looks the
 * same whatever theme or dark mode the viewer has.
 */
export default function FirstWashFreePage() {
  return (
    <div className="flyer-page min-h-dvh bg-[#e0f2fe] px-4 py-8 print:bg-white print:p-0">
      <div className="mx-auto mb-4 flex max-w-[8.5in] justify-between print:hidden">
        <Link href="/" className="text-sm font-semibold text-[#0b2a5b] hover:underline">
          ← {business.name}
        </Link>
        <PrintButton />
      </div>

      <article className="flyer-sheet mx-auto flex max-w-[8.5in] flex-col overflow-hidden rounded-3xl bg-white text-[#0b2a5b] shadow-xl print:rounded-none print:shadow-none">
        <header className="relative bg-gradient-to-b from-[#38bdf8] to-[#1d4ed8] px-6 pt-10 pb-28 text-center text-white sm:px-12">
          <p className="font-display text-lg tracking-widest sm:text-xl">{business.name}</p>
          <h1 className="mt-4 text-6xl leading-none drop-shadow-[0_4px_0_#0b2a5b] sm:text-8xl">
            First wash
            <span className="block text-[#fde047]">free</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg font-semibold sm:text-xl">
            Big stink. Little wash. Your hockey bag, cleaned on us.
          </p>
        </header>

        <div className="relative -mt-24 flex justify-center">
          <Image
            src="/brand/mascot-badge.png"
            alt="Little Wash Co. mascot, a grinning blue monster in soap bubbles"
            width={640}
            height={640}
            priority
            className="size-48 rounded-full shadow-lg ring-8 ring-white sm:size-56"
          />
        </div>

        <div className="grid gap-8 px-6 py-8 sm:grid-cols-2 sm:px-12">
          <ul className="space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-lg font-semibold">
                <CheckCircle2
                  className="mt-0.5 size-6 shrink-0 text-[#1d4ed8]"
                  aria-hidden="true"
                />
                {perk}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border-4 border-dashed border-[#f472b6] p-5 text-center">
            <p className="font-display text-2xl">How to claim</p>
            <p className="mt-2">
              Book online and mention <strong>FIRSTWASH</strong>. We&apos;ll meet you at the rink.
            </p>
            <Link
              href="/service"
              className="mt-4 inline-flex rounded-full bg-[#ec4899] px-6 py-3 font-bold text-white shadow-md hover:opacity-90 print:shadow-none"
            >
              Book your free wash
            </Link>
          </div>
        </div>

        <footer className="mt-auto space-y-2 bg-[#0b2a5b] px-6 py-5 text-center text-xs text-[#cbd5e1] sm:px-12">
          <p>
            New customers only. One free wash per player. Subject to drying weather and scheduling
            availability. {business.name} · {business.city}, {business.region}.
          </p>
          <Disclaimer className="text-[10px] leading-snug opacity-80" />
        </footer>
      </article>
    </div>
  );
}
