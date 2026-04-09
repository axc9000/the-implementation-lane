# The Implementation Lane

Professional website for The Implementation Lane — AI implementation consulting by Amanda Crawford.

**Live:** [theimplementationlane.com](https://theimplementationlane.com)

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Content:** Static/SSG — no CMS, no database

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

This repo is connected to Vercel for automatic deployments.

1. Push to `main` — Vercel deploys automatically
2. Preview deployments on pull requests

### DNS Configuration

- Root domain (`theimplementationlane.com`) → Vercel
- `www` → Vercel
- `newsletter` subdomain → Beehiiv (do not change)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, Lane Two positioning |
| `/consulting` | Service areas, booking CTA |
| `/about` | Amanda's practitioner story |
| `/portfolio` | Four shipped projects |
| `/newsletter` | Redirects to Beehiiv subscribe page |
| `/subscribe` | Redirects to Beehiiv subscribe page |
