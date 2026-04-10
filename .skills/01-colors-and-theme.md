# Bizmong Colors & Theme Skill

## Objective
Apply the correct Bizmong color palette, shadows, and gradient presets to UI components.

## Knowledge & Rules
1. **Primary Brand**:
   - `bizmong-blue-50` (`#1774ff`): Primary actions, links, brand anchor.
   - Use `bizmong-blue-55` for hover states.
2. **Gray Scales**:
   - **Warm Gray**: Use for text and borders (`warm-gray-5` to `99`).
   - **Cool Gray**: Use for surfaces and chrome (`cool-gray-5` to `99`).
   - **CRITICAL**: Do NOT mix Warm Gray and Cool Gray within the same component surface.
3. **Semantic Colors**:
   - Success: `green-60` (`#16d78a`)
   - Error: `red-60` (`#e52222`)
   - Warning: `orange-55` (`#ff5e00`)
4. **Shadow System**:
   - `shadow-normal`: Default card rest state.
   - `shadow-emphasize`: Interactive / Hover states.
   - `shadow-strong`: Popovers / Dropdowns / Floating toolbars.
   - `shadow-heavy`: Modals / Dialogs / Toasts (with `backdrop-blur-1`).
5. **Gradients**:
   - `gradient-1`: Primary brand gradient (for CTAs, hero sections).
   - `gradient-2` to `gradient-5`: Subtle/decorative or masking gradients.
   - `text-gradient-1`: Apply gradient specifically as text fill.
6. **Theming variables**:
   - Always prefer theme variables like `bg-background`, `text-foreground`, `bg-card`, and `border-input` instead of hardcoding light/dark hexes, to naturally support dark mode via OKLCH.
