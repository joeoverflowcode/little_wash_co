import { NextResponse, type NextRequest } from "next/server";

/**
 * QR ad short link. Placeholder: redirects home.
 * Ticket 1.2 adds scan logging, the first-touch cookie and per-campaign destinations.
 */
export function GET(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url), 307);
}
