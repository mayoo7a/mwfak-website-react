# Mwafq — Medical Exams, Made Simple

A Next.js 14 + TypeScript port of the Mwafq landing page.

## Installation & Running

```bash
cd mwafak-react
npm install
npm run dev
```

The dev server will start at `http://localhost:3000`.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `app/` — Next.js App Router pages and layout
- `components/` — React section components (Nav, Hero, Services, etc.)
- `public/` — Static assets (images, fonts, logos)
- `app/globals.css` — Global styles (ported from original CSS)

## Key Features

- Bilingual support (EN/AR toggle)
- Custom cursor with magnetic hover effects
- Scroll reveal animations
- Count-up animations on stats
- Smooth scroll navigation
- Booking form with custom date/exam select
- Phone tilt and parallax effects
- Light mode only

## TypeScript

All components are fully typed. Run `npx tsc --noEmit` to check types.

## Deploy

This is a standard Next.js app and can be deployed to any Next-compatible host:

- **Vercel** — `vercel` (zero config; recommended).
- **Netlify** — uses the `@netlify/plugin-nextjs` adapter.
- **Self-hosted** — `npm run build && npm start` behind a reverse proxy.
