"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border-border bg-surface inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold hover:opacity-90"
    >
      <Printer className="size-4" aria-hidden="true" />
      Print flyer
    </button>
  );
}
