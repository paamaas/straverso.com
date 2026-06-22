# Straverso.com

Marketing site for Straverso AS — a Norwegian tech company that builds AI-powered apps for overlooked niche problems. Single-page landing site, Norwegian-language UI (`<html lang="no">`).

Originally generated with v0.app; deployed via Vercel.

## Stack

- **Next.js 16** (App Router, RSC) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`; no `tailwind.config.*`)
- **shadcn/ui** ("new-york" style, lucide icons) under `components/ui/`
- **Resend** for the contact form (`app/api/send-email/route.ts`)
- **Framer Motion**, **@react-three/fiber + drei** for animations / 3D
- **Vercel Analytics** (production only)
- Package manager: **pnpm** (`pnpm-lock.yaml`)

## Commands

```bash
pnpm dev      # next dev
pnpm build    # next build
pnpm start    # next start
pnpm lint     # eslint .
```

## Layout

```
app/
  layout.tsx         Root layout — Playfair Display + Inter fonts, metadata, favicons
  page.tsx           Single landing page composing all sections
  globals.css        Tailwind v4 config + brand tokens (the real source of truth)
  api/send-email/    Resend POST endpoint (contact form)
components/
  navigation.tsx, hero-section.tsx, philosophy-section.tsx,
  products-section.tsx, founders-section.tsx, contact-section.tsx, footer.tsx
  ui/                shadcn primitives — don't hand-edit unless intentional
  straverso-icon.tsx
hooks/   lib/   public/   styles/
```

Path alias: `@/*` → repo root (see `tsconfig.json`). shadcn aliases in `components.json`.

## Brand & design tokens

Defined as CSS variables in `app/globals.css` and exposed to Tailwind via `@theme inline`. Use the Tailwind utility forms (`bg-indigo`, `text-coral`, `text-offwhite`, `border-lavender`, `text-charcoal`) rather than hex literals.

| Token       | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| `indigo`    | `#0F1354` | Primary background (dark mode) |
| `coral`     | `#FF6B6B` | Primary accent / CTA           |
| `lavender`  | `#8B85C1` | Secondary accent               |
| `offwhite`  | `#F5F2EB` | Foreground on dark             |
| `charcoal`  | `#2D2A33` | Foreground on light            |

Fonts: **Playfair Display** (`font-serif`) for headings, **Inter** (`font-sans`) for body — loaded via `next/font/google` in `app/layout.tsx`.

Dark mode is the default; `.light` class flips tokens.

## Conventions

- All user-facing copy is **Norwegian (bokmål)**. Keep it that way unless asked otherwise.
- App Router + Server Components by default; add `"use client"` only when needed (interactivity, hooks, framer-motion).
- Sections are composed in `app/page.tsx` with anchor IDs (`#philosophy`, `#team`, `#contact`) for in-page nav.
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true` — type errors won't fail the build, so run `pnpm lint` (and watch the editor) to catch them.

## Environment variables

Used by `app/api/send-email/route.ts`:

- `RESEND_API_KEY` — Resend API key
- `CONTACT_EMAIL` — internal notification recipient (falls back to `onboarding@resend.dev`)

Stored in `.env*.local` (gitignored). The `from:` address is currently `onboarding@resend.dev` (Resend's sandbox sender) — swap to a verified Straverso domain before production use.

## Company info (footer)

- Org nr: **937 560 834**
- D-U-N-S: **348438692**
- Support: **support@straverso.com**
