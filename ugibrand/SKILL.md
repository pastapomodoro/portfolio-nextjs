---
name: ugibrand
description: Ugi's personal brand identity — a light, brutalist, monochrome design system (Geist + Instrument Serif, square corners, hairline borders, tiny uppercase eyebrows) with neon lime-green as the single accent. Triggered by /ugibrand. Use it whenever brand colors, style guidelines, visual formatting, or design standards apply — slides, docs, reports, landing pages, HTML/React/Tailwind UI, posters.
license: Custom palette derived from Ugi's portfolio style guide and a publicly viewable design reference; proprietary fonts require their own licensing.
---

# ugibrand — Brand Styling

## Overview

A **light-only, brutalist, monochrome** system: high-contrast black on white,
sharp corners, no shadows, generous whitespace, tiny uppercase labels — with a
single electric **neon lime-green** accent (carried over from the Hermes-derived
look, recolored from blue). The discipline is brutalist; the accent is the only
loud thing on the page. Use lime scarcely: CTAs, focus rings, key numbers, active
states — never as large fills.

**Keywords**: branding, visual identity, brutalist, monochrome, light theme,
neon lime, acid green, eyebrow labels, hairline borders, square corners,
post-processing, styling, brand colors, typography, design system, Tailwind, shadcn.

## Core principles

- **Light, monochrome base.** Black `#000` on white `#fff`; grays for hierarchy.
- **One loud accent.** Lime `#aaff00` only — links, CTAs, focus, key figures, live dots.
- **Square + flat.** Radius `0`, no shadows. Separate with **hairline borders**, never gaps+shadows.
- **Token-driven.** Never hard-code hex in components; use the CSS variables / Tailwind tokens below.
- **The eyebrow is the signature.** Tiny, uppercase, wide tracking, muted — every section label and category.
- **Headings are medium, not bold.** `font-medium` + `tracking-tight`.

## Color tokens (light, monochrome + lime)

All in `:root`. Grayscale base; lime is the sole chromatic accent.

| Token | Value | Use |
|-------|-------|-----|
| `--background` | `#ffffff` | page / section background |
| `--foreground` | `#000000` | primary text, icons, fills |
| `--muted` | `#fafafa` | faint surfaces |
| `--muted-foreground` | `#666666` | secondary text, eyebrows, meta |
| `--secondary` / `--accent-surface` / `--input` | `#f5f5f5` | light fills, image placeholders |
| `--border` | `#e5e5e5` | all dividers & hairlines |
| `--primary` | `#000000` | strong fills / default buttons |
| `--primary-foreground` | `#ffffff` | text on black |
| `--destructive` | `#ff0000` | errors only |
| `--surface-alt` | `#f8fafa` | alt surface |
| `--stroke-alt` | `#d1e0e0` | alt hairline |
| **`--accent`** | **`#aaff00`** | **the lime accent — links, CTAs, focus, key numbers** |
| `--accent-bright` | `#caff33` | hover / lighter variant |
| `--accent-deep` | `#7acc00` | pressed / shadow variant |
| `--accent-foreground` | `#0c0a00` | **dark text ON lime fills** (never white-on-lime) |

**Rule:** text is `text-foreground` or `text-muted-foreground`. Backgrounds are
`bg-background` or `bg-muted`. Borders are always `border-border`. Accent fills
(`bg-[--accent]`) always use dark text `--accent-foreground`.

## Typography

| Role | Family | Token | Notes |
|------|--------|-------|-------|
| Sans (default) | **Geist** | `font-sans` / `--font-geist` | weights 300/400/500/600/700 |
| Heading | **Geist** | `font-heading` | same family; `font-medium` + `tracking-tight`, not bold |
| Display / serif accent | **Instrument Serif** | `font-display` / `--font-instrument-serif` | 400 normal + italic — sparingly, editorial accents |
| Mono | system mono / Courier Prime | `font-mono` | small meta: dates, counts, codes, eyebrows, step labels |

- Body copy: **Geist 400**. Emphasis / headings: **500 (`font-medium`)**.

### Type scale (copy these class strings)

| Element | Classes |
|---------|---------|
| Hero H1 | `text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-6xl` |
| Section lead | `text-2xl font-medium leading-[1.3] tracking-tight md:text-3xl lg:text-4xl` |
| Project / big title (h3) | `text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl` |
| **Eyebrow / section label** | `text-xs uppercase tracking-[0.2em] text-muted-foreground` |
| Small eyebrow | `text-[10px] uppercase tracking-[0.18em] text-muted-foreground` (→ `sm:text-xs sm:tracking-[0.2em]`) |
| Body | `text-muted-foreground leading-relaxed` (constrain `max-w-md` / `max-w-lg`) |
| Meta / date / count | `text-xs text-muted-foreground` or `font-mono` for codes |
| Index numbers | `text-xs uppercase tracking-[0.2em] text-muted-foreground`, value `String(i+1).padStart(2,"0")` → `01` |

## Radius, shadows, spacing

- **Radius `0`** (`--radius: 0`). Square everything. `rounded-full` only for true circles (avatars, dots, nodes).
- **No shadows.** All `--shadow-*` = `none`. Use borders for separation.
- Base spacing unit `--spacing: 0.25rem` (Tailwind scale).
- **Horizontal gutter:** `px-6` mobile → `md:px-12` desktop.
- Fixed nav height `h-16` (64px); `html { scroll-padding-top: 4.5rem }`.
- Vertical stacks: `space-y-6 md:space-y-8`.

**Rhythm utilities** (`@layer components`):

| Utility | Padding | Use |
|---------|---------|-----|
| `.site-rhythm-header` | `px-6 py-6 md:px-12 md:py-8` | section title bars |
| `.site-rhythm-block` | `px-6 py-12 md:px-12 md:py-16` | main text / media columns |
| `.site-rhythm-block-tight` | `px-6 py-10 md:px-12 md:py-14` | dense lists / secondary blocks |

## Section skeleton

```tsx
<section id="my-section" className="bg-background">
  {/* Header bar */}
  <div className="border-b border-border">
    <div className="site-rhythm-header flex items-center justify-between">
      <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">My Section</h2>
      <span className="text-xs text-muted-foreground">3 Items</span>
    </div>
  </div>
  {/* Two-column split with hairline divider */}
  <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
    <div className="site-rhythm-block border-b lg:border-b-0 lg:border-r border-border">…</div>
    <div className="site-rhythm-block">…</div>
  </div>
</section>
```

- Sections separate with `border-b border-border`, never gaps + shadows.
- Two columns: `grid grid-cols-1 lg:grid-cols-2`; divider is `lg:border-r` on the left column (mobile `border-b`).

## Links, buttons, hover

- **Text link:** `text-sm underline underline-offset-4 hover:opacity-60 transition-opacity`. For the accent link: `text-[--accent] hover:text-[--accent-bright]`.
- **Inline CTA arrow:** label + `→` (`Open project →`); can fade in on hover `md:opacity-0 → md:opacity-100`, `transition-opacity duration-200`.
- **shadcn buttons** (`@/components/ui/button`): default black on white. Brutalist look: `variant="outline"` + `rounded-none`. Accent CTA: `bg-[--accent] text-[--accent-foreground] rounded-none hover:bg-[--accent-bright]`.
- **Focus ring (accent):** `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }`.
- Hover language: opacity shift (`hover:opacity-60`) or color. Images zoom: `transition-transform duration-500` + `scale-105`.
- Don't hard-code contact email; mailto only, import from your contact lib.

## Motion

Keep motion **functional and subtle**. Durations: `200ms` UI feedback · `300ms`
state changes · `500ms` media/zoom · `700ms` large positional. Default easing;
long loops `linear` (e.g. marquee `animate-marquee-x` 38s). Live dots may use
`animate-pulse` / `animate-ping` — color them lime. Respect reduced motion.

## CSS variables (drop-in :root)

```css
:root {
  /* base — light monochrome */
  --background: #ffffff;
  --foreground: #000000;
  --muted: #fafafa;
  --muted-foreground: #666666;
  --secondary: #f5f5f5;
  --input: #f5f5f5;
  --border: #e5e5e5;
  --primary: #000000;
  --primary-foreground: #ffffff;
  --destructive: #ff0000;
  --surface-alt: #f8fafa;
  --stroke-alt: #d1e0e0;

  /* accent — neon lime (single chromatic accent) */
  --accent: #aaff00;
  --accent-bright: #caff33;
  --accent-deep: #7acc00;
  --accent-foreground: #0c0a00;

  /* type */
  --font-geist: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-instrument-serif: "Instrument Serif", Georgia, serif;
  --font-mono: ui-monospace, "Courier Prime", "Courier New", monospace;

  /* shape */
  --radius: 0;
  --spacing: 0.25rem;
}
```

### Component cues

```css
body { background: var(--background); color: var(--foreground); font-family: var(--font-geist); }
.eyebrow { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .2em; font-size: .75rem; color: var(--muted-foreground); }
h1, h2, h3 { font-weight: 500; letter-spacing: -0.02em; }
a, .link { color: var(--accent); }
a:hover { color: var(--accent-bright); }
.btn-accent { background: var(--accent); color: var(--accent-foreground); border-radius: 0; font-weight: 500; text-transform: uppercase; }
.btn-accent:active { background: var(--accent-deep); }
.hr { border: none; border-top: 1px solid var(--border); }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
```

## Office artifacts (pptx / docx)

- Background white `#ffffff`, text black `#000000`, secondary `#666666`.
- Headings: Geist (or system sans), weight 500, tight tracking — not bold.
- Eyebrows / labels: mono, uppercase, wide tracking, gray.
- Square shapes, hairline `#e5e5e5` dividers, no drop shadows.
- Accent fills / key figures: lime `RGBColor(0xAA,0xFF,0x00)` with dark text `RGBColor(0x0C,0x0A,0x00)`.

## Do / Don't

**Do**
- Use tokens (`bg-background`, `text-muted-foreground`, `border-border`, `--accent`).
- Square corners; hairline borders to divide.
- Lead blocks with a tiny uppercase eyebrow.
- Reuse `.site-rhythm-*` and `px-6 / md:px-12` gutters.
- Use lime as the single accent; dark text on lime fills.

**Don't**
- No `shadow-*`, no `rounded-*` (except true circles).
- No new colors beyond the grayscale + lime accent; extend tokens, don't inline hex.
- No bold headings — `font-medium` + `tracking-tight`.
- Never white-on-lime; never lime as a large background fill.
