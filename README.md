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
    (client)/portal  client portal: orders, tracker, messages
    (admin)/admin    staff portal: board, tags, inbox, weather, campaigns
    q/[slug]         QR ad short links (scan logging in ticket 1.2)
    api/             health check, later Twilio/Resend webhooks and cron
  config/            business defaults (Dallas location, placeholder drying thresholds)
  lib/               shared helpers
```

UI is intentionally generic until the brand pass (ticket 7.1).
