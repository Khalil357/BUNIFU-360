# Xcelliance — Tech Company Homepage

A static rebuild of the **Xcelliance** Elementor Template Kit homepage, built with
**Next.js (App Router)**. Design tokens (colors, fluid `clamp()` typography, button
styles, spacing) are extracted directly from the kit's `global.json`, so the look is
faithful to the original — not an approximation.

## Tech stack

- **Next.js 16** (App Router, fully static output)
- **React 19**
- Hand-written CSS with CSS custom properties (no Tailwind)
- **Urbanist** font via `next/font/google`

## Requirements

- **Node.js** 18+ (tested on v24)

## Getting started

```bash
# install dependencies (only needed if node_modules is missing)
npm install

# start the dev server (hot reload)
npm run dev
```

Then open **http://localhost:3000** in your browser.

## Production build

```bash
# create the optimized static site
npm run build

# serve it locally
npm run start
```

The build produces fully static output, so it deploys as-is to Vercel, Netlify, or any
static host.

## Project structure

```
xcelliance-site/
├── app/
│   ├── layout.js        # Urbanist font + metadata
│   ├── page.js          # composes the 11 homepage sections
│   └── globals.css      # design tokens + all section styles
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── IconRow.js
│   ├── WhoWeAre.js
│   ├── Transform.js
│   ├── WhatWeOffer.js
│   ├── Stats.js         # animated counters (client component)
│   ├── WhyChooseUs.js
│   ├── Pricing.js
│   ├── Cta.js
│   ├── Projects.js
│   ├── Testimonials.js
│   └── Footer.js
└── components/ui/
    ├── Button.js
    ├── Icon.js          # inline SVG icon set
    ├── Placeholder.js   # grayscale image placeholder
    └── SectionHeading.js
```

## Design tokens

Defined as CSS custom properties in `app/globals.css`:

| Token | Value |
|-------|-------|
| `--color-primary` | `#05314b` |
| `--color-secondary` | `#021520` |
| `--color-accent` | `#0d8bd7` |
| `--color-accent-2` | `#8bd70d` |
| `--color-accent-3` | `#0d26d7` |
| `--color-text` | `#6a6a6a` |
| `--color-bg-light` | `#f6f6f6` |
| `--color-border` | `#dddddd` |

Typography uses fluid `clamp()` sizes identical to the original kit (e.g. H1
`clamp(2rem, 1.5842rem + 1.8478vw, 3.0625rem)`, hero
`clamp(2.375rem, 1.8125rem + 2.5vw, 3.8125rem)`), so type scales smoothly across
mobile and desktop.

## Swapping in real images

Every image slot currently uses a grayscale `<Placeholder label="…" />`. To use a real
image, replace it with an `<img>` (or Next's `<Image>`), for example:

```jsx
import Image from "next/image";

// replace <Placeholder label="Team photo" ratio="4 / 3" />
// with:
<Image
  src="/images/team.jpg"
  alt="Team photo"
  width={800}
  height={600}
  className="who__media-img"
/>
```

The placeholder labels name each slot (Team photo, Lottie animation, each project,
Avatar, etc.) so you can find them quickly.

## Notes

- Icons are inline-SVG stand-ins for the licensed Skyboot icon set — visually
  consistent, but not the identical glyphs.
- The auto-generated `AGENTS.md` / `CLAUDE.md` files are from Next.js and can be ignored.
