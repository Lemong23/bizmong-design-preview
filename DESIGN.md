# Design System: Bizmong

## 1. Visual Theme & Atmosphere

Bizmong's design system is built for a business intelligence platform — clean, data-focused, and trustworthy. The visual language centers on **Bizmong Blue** (`#1774ff`) as the primary brand color, anchoring a vibrant yet professional identity across a light gray canvas (`#f2f2f5`). The system balances analytical clarity with approachable warmth: cool grays provide neutral scaffolding while a rich 13-family color palette enables expressive data visualization and semantic color coding.

The typography system uses a 14-level scale with carefully tuned line-heights and letter-spacing, progressing from compact display sizes (64px, -0.026em tracking) to relaxed body text (15–16px, -0.0002em tracking). Negative letter-spacing at headline sizes creates density and authority; positive tracking at label and caption sizes ensures legibility at small scales.

Depth is expressed through a 4-tier shadow system — from subtle `shadow-normal` (1px offset, 12% opacity) to dramatic `shadow-heavy` (16px offset, layered ambient). Each shadow uses triple-layer stacks combining directional light, soft spread, and ambient glow for natural dimensionality. The system supports light and dark themes via OKLCH color space variables, enabling perceptually uniform color transitions.

**Key Characteristics:**
- Bizmong Blue (`#1774ff`) as primary identity — confident, trustworthy, digitally native
- Light gray page background (`#f2f2f5`) — softer than white, reduces eye strain for data-heavy interfaces
- 13-color palette with 10–99 shade scale (13 stops per family) for granular color control
- 4-tier shadow system with triple-layer stacks for natural depth
- OKLCH-based theming for perceptually uniform light/dark mode transitions
- Gradient system with 5 presets — from bold brand gradients to subtle surface fades
- Radix UI + Tailwind CSS v4 component architecture — accessible by default
- Kakao integration colors for Korean market authentication

## 2. Color Palette & Roles

### Primary Brand
- **Bizmong Blue 50** (`#1774ff`): Primary actions, links, active states, brand identity.
- **Bizmong Blue 10** (`#f1f6ff`): Subtle tinted backgrounds, selected row highlights.
- **Bizmong Blue 55** (`#005fee`): Hover/pressed state for primary actions.
- **Bizmong Blue 60** (`#0047b0`): High-contrast text on light backgrounds.
- **Bizmong Blue 99** (`#03152f`): Near-black for dark theme brand surfaces.

### Secondary Blues
- **Crystal Blue 55** (`#009aff`): Secondary accent, informational highlights, chart accent.
- **Mint 55** (`#00dee6`): Tertiary accent, decorative elements, progress indicators.

### Semantic Colors
- **Green 60** (`#16d78a`): Success, positive change, completed states, growth indicators.
- **Red 60** (`#e52222`): Error, destructive actions, negative change, alerts.
- **Orange 55** (`#ff5e00`): Warning, attention-required states, moderate alerts.
- **Spring Yellow 55** (`#ffe600`): Caution, highlight, pending states.

### Accent & Special
- **Purple 60** (`#ad36e3`): Premium features, special badges, unique categories.
- **Pink 60** (`#d331b8`): Secondary decorative accent, marketing highlights.
- **Lime Yellow 50** (`#fbff1b`): High-visibility highlights, promotional callouts.

### Neutral Scale — Warm Gray
- **Warm Gray 5** (`#f1f1f1`): Lightest background surface.
- **Warm Gray 20** (`#e6e6e6`): Borders, dividers.
- **Warm Gray 50** (`#9e9e9e`): Placeholder text, disabled icons.
- **Warm Gray 70** (`#5e5e5e`): Secondary text.
- **Warm Gray 90** (`#333333`): Primary text (light theme).
- **Warm Gray 99** (`#282828`): Headings, high-emphasis text.

### Neutral Scale — Cool Gray
- **Cool Gray 5** (`#f7f7f8`): Subtle surface differentiation. sv
- **Cool Gray 15** (`#eaebec`): Card borders, input borders.
- **Cool Gray 50** (`#9da0a9`): Muted text, secondary labels.
- **Cool Gray 70** (`#46474c`): Body text (light theme).
- **Cool Gray 90** (`#171719`): Near-black for headings, primary text.
- **Cool Gray 99** (`#0f0f10`): Maximum contrast text.

### Opacity Layers
- **Opacity Black 5–78**: Overlays from subtle hover tint (`0.05`) to modal backdrop (`0.78`).
- **Opacity White 5–90**: Glass effects, frosted surfaces, text on dark backgrounds.

### Platform-Specific
- **Kakao Yellow** (`#fee500`): Kakao login button background.
- **Kakao Text** (`#000000d9`): Kakao button label.

### Theme Variables (OKLCH)
- **Background**: `oklch(1 0 0)` light / `oklch(0.145 0 0)` dark
- **Foreground**: `oklch(0.145 0 0)` light / `oklch(0.985 0 0)` dark
- **Destructive**: `oklch(0.577 0.245 27.325)` — perceptually calibrated red
- **Border**: `oklch(0.922 0 0)` light / `oklch(0.269 0 0)` dark

## 3. Typography Rules

The type system uses **14 named scales** with coordinated font-size, line-height, and letter-spacing. Use Tailwind utility classes (`text-display-2`, `text-body-1`, etc.) to apply.

| Token | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `text-display-2` | 56px | 1.286 | -0.026em | Hero headlines, landing pages |
| `text-display-3` | 40px | 1.300 | -0.022em | Section headlines, feature titles |
| `text-title-1` | 36px | 1.334 | -0.027em | Page titles |
| `text-title-2` | 28px | 1.358 | -0.024em | Section titles |
| `text-title-3` | 24px | 1.334 | -0.015em | Card titles, modal headers |
| `text-heading-1` | 22px | 1.364 | -0.012em | Subsection headings |
| `text-heading-2` | 20px | 1.400 | -0.012em | Component headings |
| `text-headline-1` | 18px | 1.445 | -0.0002em | Emphasized body, list headers |
| `text-headline-2` | 17px | 1.412 | -0.0002em | Secondary headlines |
| `text-body-1` | 16px | 1.500 | -0.0002em | Primary body text |
| `text-body-2` | 15px | 1.467 | -0.0002em | Secondary body text |
| `text-label-1` | 14px | 1.429 | +0.015em | Form labels, button text |
| `text-label-2` | 13px | 1.385 | +0.019em | Small labels, tags |
| `text-label-3` | 12px | 1.385 | -0.011em | Compact labels |
| `text-caption-1` | 12px | 1.334 | +0.025em | Captions, helper text |
| `text-caption-2` | 11px | 1.273 | +0.031em | Fine print, timestamps |

**Font Weight Guidelines:**
- **Bold (700)**: Display, title, primary headings
- **Semibold (600)**: Headings, emphasized labels, button text
- **Medium (500)**: Headlines, active navigation, selected states
- **Regular (400)**: Body text, descriptions, form inputs

**Typography Rules:**
- Display/Title sizes use negative tracking for density and authority
- Label/Caption sizes use positive tracking for legibility at small scales
- Line-heights decrease at larger sizes (1.276) and increase at body sizes (1.5)
- Always pair the token's line-height and letter-spacing together — never mix

## 4. Component Stylings

### Buttons
- **Primary**: `bg-bizmong-blue-50 text-white` with `hover:bg-bizmong-blue-55`. Rounded with `radius-md`.
- **Secondary**: `bg-secondary text-secondary-foreground`. Subtle surface, dark text.
- **Destructive**: Uses `destructive` theme color for dangerous actions.
- **Ghost**: Transparent background, visible only on hover.
- **Outline**: Border-only with transparent fill.

### Cards
- White background (`bg-card`) with `shadow-normal` for subtle lift.
- Use `shadow-emphasize` on hover for interactive cards.
- Border radius: `radius-lg` (0.5rem base).
- Content padding: 16–24px depending on density.

### Inputs
- Border: `border-input` (oklch neutral).
- Focus: `ring` color with `outline-ring/50` offset.
- Height: 40px default, 36px compact, 48px large.
- Placeholder: `text-muted-foreground`.

### Badges & Tags
- Small rounded pills with tinted background from the semantic color at shade 10–20.
- Text in the same color family at shade 60–70 for contrast.
- Example: Success badge → `bg-green-10 text-green-60`.

### Dialogs & Sheets
- Overlay backdrop using `opacity-black-60` or `opacity-black-78`.
- Content surface: `bg-popover` with `shadow-heavy`.
- Corner radius: `radius-xl` or `radius-2xl` for modals.

### Sidebar
- Dedicated color tokens: `sidebar`, `sidebar-foreground`, `sidebar-primary`, `sidebar-accent`.
- Separate from main content theming for visual distinction.

### Data Visualization
- 5 chart colors: `chart-1` through `chart-5` — OKLCH-defined, theme-aware.
- Use the full 13-color palette for extended chart series.
- Gradient presets available for area charts and backgrounds.

## 5. Layout Principles

- **Page background**: `#f2f2f5` (`page-bg`) — soft gray canvas separates content from chrome.
- **Content surfaces**: White cards on gray background create natural depth without heavy shadows.
- **Spacing scale**: Tailwind's default 4px grid (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96).
- **Container width**: Standard max-width containers with responsive padding.
- **Card density**: Use tighter spacing (12–16px) for data tables, wider (24–32px) for marketing content.
- **Component gap**: Default `gap-4` (16px) between sibling components, `gap-2` (8px) for compact layouts.

### Grid Guidelines
- Primary content: 12-column grid with responsive breakpoints.
- Dashboard layouts: CSS Grid for widget placement, flexible column spans.
- Form layouts: Single column on mobile, 2-column on desktop for related fields.

## 6. Depth & Elevation

Four shadow tiers create consistent elevation hierarchy:

| Token | Values | Usage |
|-------|--------|-------|
| `shadow-normal` | `0 1px 2px rgba(23,23,23,0.12)` + `0 0 1px rgba(18,18,18,0.08)` + `0 0 1px rgba(23,23,23,0.08)` | Cards at rest, surface differentiation |
| `shadow-emphasize` | `0 2px 8px rgba(23,23,23,0.12)` + `0 1px 4px rgba(23,23,23,0.08)` + `0 0 1px rgba(23,23,23,0.08)` | Hovered cards, dropdown menus |
| `shadow-strong` | `0 6px 12px rgba(23,23,23,0.12)` + `0 4px 8px rgba(23,23,23,0.08)` + `0 0 4px rgba(23,23,23,0.08)` | Popovers, floating toolbars |
| `shadow-heavy` | `0 16px 42px rgba(23,23,23,0.12)` + `0 8px 24px rgba(23,23,23,0.08)` + `0 0 8px rgba(23,23,23,0.08)` | Modals, dialogs, toasts |

**Backdrop blur**: `20px` for frosted glass overlays (`backdrop-blur-1`).

**Elevation order** (bottom to top):
1. Page background (`page-bg`)
2. Content surfaces (cards, `shadow-normal`)
3. Interactive hover states (`shadow-emphasize`)
4. Floating elements (`shadow-strong`)
5. Modals & overlays (`shadow-heavy` + backdrop blur)

## 7. Gradients

Five gradient presets for brand expression and UI enhancement:

| Token | Definition | Usage |
|-------|-----------|-------|
| `gradient-1` | `90deg` — `#179aff` → `#00b2ff` → `#1774ff` → `#173aff` | Primary brand gradient, CTAs, hero sections |
| `gradient-2` | `90deg` — soft lime/mint/blue/green at 50–80% opacity | Decorative backgrounds, marketing sections |
| `gradient-3` | `90deg` — `#bef2b9` → `#afe0d1` → `#6fbaff` → `#3a96ff` | Secondary brand, success-to-action transitions |
| `gradient-4` | `180deg` — `#e7f3fd` → `#f5fbff` | Subtle card top-to-bottom tint |
| `gradient-5` | `180deg` — `#ffffff` → `rgba(255,255,255,0.5)` | Text fade overlays, truncation masks |

Use `text-gradient-1` utility to apply gradient-as-text-fill for display headings.

## 8. Do's and Don'ts

### Do
- Use `bizmong-blue-50` for primary actions and links — it's the brand anchor.
- Apply semantic colors consistently: green for success, red for error, orange for warning.
- Use the shade scale (10–99) for tints and shades — never manually opacity-hack a color.
- Pair shadow tiers with interaction states: `normal` at rest → `emphasize` on hover.
- Use OKLCH theme variables for surfaces that need to adapt to dark mode.
- Apply `text-gradient-1` sparingly for hero/display text only.
- Use Cool Gray for UI chrome (borders, backgrounds) and Warm Gray for text.
- Use opacity layers (`opacity-black-*`, `opacity-white-*`) for overlays, not arbitrary rgba.

### Don't
- Don't use pure black (`#000000`) for text — use `cool-gray-90` (`#171719`) or the theme `foreground`.
- Don't mix Warm Gray and Cool Gray within the same component surface.
- Don't apply gradients to small UI elements (buttons, badges, inputs).
- Don't skip shadow tiers — jumping from `normal` to `heavy` creates jarring depth.
- Don't use more than 2 accent colors in a single view (excluding data visualization).
- Don't hardcode light/dark colors — always reference theme variables for theme-sensitive surfaces.
- Don't use `shadow-heavy` for non-floating elements — it signals "above the page."
- Don't apply negative letter-spacing to body or label text — it's reserved for display/title sizes.

## 9. Responsive Behavior

- **Breakpoints**: Follow Tailwind defaults — `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px).
- **Typography scaling**: Display sizes may reduce 1–2 steps on mobile (e.g., `text-display-2` → `text-title-1`).
- **Card layouts**: Stack vertically on mobile, grid on desktop.
- **Sidebar**: Collapsible with dedicated sidebar tokens — transitions from persistent to overlay on mobile.
- **Touch targets**: Minimum 44px hit area on mobile for all interactive elements.
- **Spacing compression**: Reduce page padding from 32–48px (desktop) to 16–20px (mobile).
- **Shadow reduction**: Consider using `shadow-normal` instead of `shadow-emphasize` on mobile where hover states don't apply.

## 10. Agent Prompt Guide

When generating UI for the Bizmong platform, follow these rules:

1. **Framework**: Use Next.js with React, Tailwind CSS v4, and Radix UI primitives via `@repo/ui`.
2. **Colors**: Always use the design token classes (`bg-bizmong-blue-50`, `text-cool-gray-70`, etc.) — never hardcode hex values.
3. **Typography**: Apply the named utility classes (`text-body-1`, `text-heading-2`, etc.) — they bundle size, line-height, and letter-spacing together.
4. **Shadows**: Use `shadow-normal`, `shadow-emphasize`, `shadow-strong`, `shadow-heavy` utilities — never write raw box-shadow.
5. **Theming**: Use semantic tokens (`bg-background`, `text-foreground`, `bg-primary`, etc.) for surfaces and text that must adapt to dark mode.
6. **Components**: Import from `@repo/ui` — the library provides 150+ accessible components built on Radix UI.
7. **State management**: Use Jotai for client state, TanStack React Query for server state.
8. **Forms**: Use react-hook-form with zod validation schemas.
9. **Icons**: Use Lucide React as the primary icon set.
10. **Layout**: White card surfaces on `bg-page-bg` gray canvas. Use `shadow-normal` for card rest state.
11. **Gradients**: Apply `gradient-1` for primary brand moments, `gradient-2`/`gradient-3` for decorative backgrounds. Use `text-gradient-1` for gradient text.
12. **Data viz**: Use chart tokens (`chart-1` through `chart-5`) for Recharts components. Extend with the full color palette for series > 5.
13. **Radius**: Use `rounded-lg` (0.5rem) as default. `rounded-xl`/`rounded-2xl` for modals. `rounded-sm`/`rounded-md` for compact elements.
14. **Korean market**: Kakao login uses `bg-kakao-bg` with `text-kakao-text` — follow Kakao design guidelines for button sizing.
