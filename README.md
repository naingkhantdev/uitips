# Design Style Swatchbook — React + Tailwind

A bilingual (English / မြန်မာ) visual reference for 30 design styles. Every
swatch renders the *same four elements* — an eyebrow, the word "Studio", one
line of copy, one button — so the only thing that varies across all 30 is the
styling.

Rebuilt from `design-style-swatchbook.html` (kept in the repo as the content
source of truth) as a React + Tailwind v4 app.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## The shell's own style

The brief was Neumorphism + Y2K + Modernism at once. Rather than average them
into mush, each owns a different layer:

| Layer | Style | What it contributes |
| --- | --- | --- |
| Layout | **Modernism** | Strict grid, flush-left, hairline rules under every section head, mono labels in caps, tabular numerals, one accent colour, no ornament that isn't structural. |
| Material | **Neumorphism** | One ground colour; every object extruded from it with twin light/dark shadows. Cards, chips and buttons press *in* when used — the affordance inverts, which is the one thing the style is genuinely good at. |
| Accent | **Y2K** | Chrome-gradient wordmark and signature, bevelled gloss on the active controls, silver-blue palette throughout. Kept to treatments — no free-floating chrome objects. |

Neumorphism's well-known failure is contrast: it flattens text into its
background. Modernism's discipline is the fix here — type sits on a three-step
ink scale, and the soft extrusions are reserved for surfaces, never for text.

## Structure

```
src/
  index.css            design system: theme vars, light/dark, nm-*/y2k-*/label
  styles/swatches.css  the 30 specimen colour worlds (deliberately not Tailwind)
  data/content.js      all copy, EN + MY, extracted from the original
  components/          Swatch, StyleCard, DetailSheet, Masthead, Topbar, Rail…
  App.jsx              language state, sections, modal wiring
```

**Why the swatches aren't Tailwind.** Those 30 blocks are the *content* of the
site, not its chrome — each is a self-contained design system with its own
palette, type and shadow language, several of which contradict the shell's.
Expressing them as utility strings would have destroyed both fidelity and
readability. The shell around them is Tailwind throughout.

## Preserved from the original

Bilingual toggle, all 30 specimens, the screen-style chronology rail, the
method and vocabulary lists, and the detail dialog's behaviour — Escape and
backdrop close, body scroll lock, focus moved to the close button and returned
to the card that opened it. Light and dark themes both follow the OS.
