# Style Guide — Eugenio Bellini Portfolio

A practical reference for building **consistent** UI in this project. Copy the
recipes below instead of inventing new values. The system is **brutalist,
light‑only, monochrome**: high contrast black on white, sharp corners, no
shadows, generous whitespace, tiny uppercase labels.

Source of truth: [`src/app/globals.css`](src/app/globals.css) (tokens) and
[`src/app/layout.tsx`](src/app/layout.tsx) (fonts). Tailwind **v4** + shadcn
(new‑york). Always use the design tokens (`bg-background`, `text-foreground`,
`border-border`, …) — never hard‑code hex in components.

---

## 1. Fonts

| Role | Family | Tailwind / var | Notes |
|------|--------|----------------|-------|
| Sans (default) | **Geist** | `font-sans` / `--font-geist` | weights 300/400/500/600/700 |
| Heading | **Geist** | `font-heading` | same as sans (no separate display weight) |
| Display / serif accent | **Instrument Serif** | `font-display` / `--font-instrument-serif` | 400, normal + italic — use sparingly for editorial accents |
| Mono | system mono | `font-mono` | small meta: dates, counts, codes |

- Body copy: **Geist 400**. Emphasis / headings: **500 (`font-medium`)**.
- Headings are `font-medium` + `tracking-tight`, **not** bold.

---

## 2. Color tokens (light, monochrome)

All defined in `:root` in `globals.css`. The palette is intentionally grayscale —
"teal"/chart vars exist but currently resolve to black/gray.

| Token | Value | Use |
|-------|-------|-----|
| `--background` | `#ffffff` | page / section background |
| `--foreground` | `#000000` | primary text, icons, fills |
| `--muted` | `#fafafa` | faint surfaces |
| `--muted-foreground` | `#666666` | secondary text, eyebrows, meta |
| `--secondary` / `--accent` / `--input` | `#f5f5f5` | light fills, image placeholders (`bg-muted`) |
| `--border` | `#e5e5e5` | all dividers & hairlines |
| `--primary` | `#000000` | buttons / strong fills |
| `--primary-foreground` | `#ffffff` | text on black |
| `--destructive` | `#ff0000` | errors only |
| `--color-surface` | `#f8fafa` | alt surface |
| `--color-stroke` | `#d1e0e0` | alt hairline |
| **`--brand`** | **`#aaff00`** | **neon lime accent — the single chromatic accent** |
| `--brand-bright` | `#caff33` | hover / lighter variant |
| `--brand-deep` | `#7acc00` | pressed variant |
| `--brand-foreground` | `#0c0a00` | dark text ON lime fills (never white-on-lime) |

**Rule:** text is `text-foreground` or `text-muted-foreground`. Backgrounds are
`bg-background` or `bg-muted`. Borders are always `border-border`.

**Accent (`ugibrand`).** Lime is the only chromatic color and is used **scarcely**:
primary CTAs (`bg-brand text-brand-foreground hover:bg-brand-bright`), the keyboard
focus ring, section eyebrow markers (`<span className="size-1.5 bg-brand" />`), link
underlines (`decoration-brand`), and live dots. Never lime as a large fill, never lime
text on white (poor contrast — use it as a fill or underline instead). Full brand spec
lives in [`ugibrand/SKILL.md`](ugibrand/SKILL.md).

---

## 3. Radius & shadows

- **Radius: `0`** (`--radius: 0`). Everything is square. Don't add `rounded-*`
  except for genuinely circular elements (avatars, orbital nodes → `rounded-full`).
- **Shadows: none** (all `--shadow-*` are `none`). Use borders for separation,
  never `shadow-*`.

---

## 4. Spacing & layout rhythm

Base spacing unit `--spacing: 0.25rem` (Tailwind default scale).

**Horizontal gutter:** `px-6` mobile → `px-12` (`md:`) desktop. Use the shared
rhythm utilities (defined in `globals.css @layer components`) for padding so every
section lines up:

| Utility | Padding | Use |
|---------|---------|-----|
| `.site-rhythm-header` | `px-6 py-6 md:px-12 md:py-8` | section title bars |
| `.site-rhythm-block` | `px-6 py-12 md:px-12 md:py-16` | main text / media columns |
| `.site-rhythm-block-tight` | `px-6 py-10 md:px-12 md:py-14` | dense lists / secondary blocks |

- Fixed nav height: **`h-16`** (64px). `html` has `scroll-padding-top: 4.5rem`
  so anchor jumps clear the nav.
- Vertical stacks inside blocks: `space-y-6 md:space-y-8`.

---

## 5. Typography scale (copy these class strings)

| Element | Classes |
|---------|---------|
| Hero H1 | `text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-6xl` |
| Section lead | `text-2xl font-medium leading-[1.3] tracking-tight md:text-3xl lg:text-4xl` |
| Project / big title (h3) | `text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl` |
| **Eyebrow / section label** | `text-xs uppercase tracking-[0.2em] text-muted-foreground` |
| Small eyebrow | `text-[10px] uppercase tracking-[0.18em] text-muted-foreground` (→ `sm:text-xs sm:tracking-[0.2em]`) |
| Body | `text-muted-foreground leading-relaxed` (constrain with `max-w-md` / `max-w-lg`) |
| Meta / date / count | `text-xs text-muted-foreground` or `font-mono` for codes |
| Index numbers | `text-xs uppercase tracking-[0.2em] text-muted-foreground`, value `String(i+1).padStart(2,"0")` → `01` |

The signature detail is the **eyebrow**: tiny, uppercase, wide `tracking-[0.2em]`,
muted. Use it for every section label and category.

---

## 6. Section skeleton (use for any new section)

```tsx
<section id="my-section" className="bg-background">
  {/* Header bar */}
  <div className="border-b border-border">
    <div className="site-rhythm-header flex items-center justify-between">
      <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        My Section
      </h2>
      <span className="text-xs text-muted-foreground">3 Items</span>
    </div>
  </div>

  {/* Content — two-column split with a hairline divider */}
  <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
    <div className="site-rhythm-block border-b lg:border-b-0 lg:border-r border-border">
      …
    </div>
    <div className="site-rhythm-block">…</div>
  </div>
</section>
```

- Sections separate with **`border-b border-border`**, never gaps + shadows.
- Two columns: `grid grid-cols-1 lg:grid-cols-2`; the divider is `lg:border-r`
  on the left column (mobile uses `border-b`).

---

## 7. Links, buttons, hover

- **Text link:** `text-sm underline underline-offset-4 hover:opacity-60 transition-opacity`.
- **Inline CTA arrow:** label + `→` (e.g. `Open project →`). On desktop it can fade
  in on hover: `transition-opacity duration-200`, hidden `md:opacity-0` → `md:opacity-100`.
- **Email CTA:** reuse [`EmailMeButton`](src/components/EmailMeButton.tsx); contact
  mail/CV come from [`src/lib/site-contact.ts`](src/lib/site-contact.ts) — never
  hard‑code the address (mailto only).
- **shadcn buttons** (`@/components/ui/button`): default is black on white. For the
  brutalist look use `variant="outline"` + `rounded-none`.
- Hover language: opacity shift (`hover:opacity-60`) or color (`hover:text-foreground`).
  Images zoom on hover: `transition-transform duration-500` + `scale-105`.

---

## 8. Motion

Defined in `globals.css`. Keep motion **functional and subtle**.

| Animation | Class | Use |
|-----------|-------|-----|
| Scroll indicator | `animate-scroll-down` | hero scroll hint |
| Role word fade | `animate-role-fade-in` | swapping text |
| Marquee | `animate-marquee-x` (38s linear) | sliding banner |
| Pulse / ping | `animate-pulse`, `animate-ping` | Tailwind defaults (orbital hub, live dots) |

**Durations:** `200ms` UI feedback · `300ms` state changes · `500ms` media/zoom ·
`700ms` large positional transitions. Default easing; long loops use `linear`.

Respect reduced motion when adding new animations.

---

## 9. Do / Don't

**Do**
- Use tokens (`bg-background`, `text-muted-foreground`, `border-border`).
- Keep corners square, use hairline borders to divide.
- Lead blocks with a tiny uppercase eyebrow.
- Reuse `.site-rhythm-*` for padding and `px-6 / md:px-12` gutters.

**Don't**
- No `shadow-*`, no `rounded-*` (except true circles).
- No new colors / hex in components — extend `globals.css` tokens instead.
- No bold headings — use `font-medium` + `tracking-tight`.
- Don't hard‑code the contact email; import from `site-contact.ts`.
