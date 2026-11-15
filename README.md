# Little Wash Co

Web app for Little Wash Co, a sun-dried hockey equipment cleaning service in Dallas, TX: marketing site with QR ad tracking, client portal, and staff admin portal.

The full technical spec and the phased ticket list live in the project; tickets are filed as GitHub issues and built one PR at a time.

## Stack

Next.js 15 (App Router, TypeScript strict) · Tailwind CSS v4 · Supabase · Vercel · Resend · Twilio · Claude API · Open-Meteo

## Local setup

Requires Node 22+ and pnpm 10.

```bash
pnpm install
cp .env.example .env.local   # fill in values as tickets need them
pnpm dev                     # http://localhost:3000
```

## Scripts

| Command                             | What it does         |
| ----------------------------------- | -------------------- |
| `pnpm dev`                          | Start the dev server |
| `pnpm build`                        | Production build     |
| `pnpm lint`                         | ESLint               |
| `pnpm typecheck`                    | TypeScript, no emit  |
| `pnpm format` / `pnpm format:check` | Prettier             |

## Layout

```
src/
  app/
    (marketing)/     public site: home, how it works, pricing, FAQ
    (client)/service client portal (/service): orders, tracker, messages
    (admin)/admin    staff portal: board, tags, inbox, weather, campaigns
    q/[slug]         QR ad short links (scan logging in ticket 1.2)
    api/             health check, later Twilio/Resend webhooks and cron
  config/            business defaults (Dallas location, placeholder drying thresholds)
  lib/               shared helpers
```

UI is intentionally generic until the brand pass (ticket 7.1).

## Colour themes and fonts

All colours are semantic tokens (`--primary`, `--accent`, `--muted`, ...) defined per theme in `src/app/globals.css` as `[data-theme="name"]` blocks, with light and dark values. Components only use token classes such as `bg-primary`. To try a new style, copy a theme block, change the values, add its name to `src/config/theme.ts`, and set `activeTheme`. Themes included: `rink` (default), `sunny`, `fresh`.

Fonts load with `next/font`: Montserrat for body text, Bungee for headings (`src/app/fonts.ts`).

The "Dev only" buttons on the home page (`src/components/dev-nav.tsx`) are temporary shortcuts to `/admin` and `/service`; remove them before launch.
