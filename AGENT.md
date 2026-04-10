# Bizmong Agent Instructions

You are an AI coding assistant working on the Bizmong application.

## Primary Directive (CRITICAL)
Your core behavior and knowledge related to the Bizmong design system and tech stack are separated into modular ".skills." 

**Before making any design decisions, writing code, or generating UI components, you MUST read and follow the files in the `.skills/` directory:**

- **`.skills/01-colors-and-theme.md`**: Bizmong color palette, shadows, gradients, and dark mode theming guidelines.
- **`.skills/02-typography.md`**: The 14-level named typography scale, tracking, and font-weight rules.
- **`.skills/03-components-layout.md`**: Card layouts, badge patterns, spacing, and dialog structures.
- **`.skills/04-tech-stack.md`**: Permitted frameworks (Vite/Next.js), styling (Tailwind v4), state (Jotai/React Query), and form elements.

**Do not guess or invent your own hex colors, spacing values, or component libraries. Always refer to the `.skills/` folder for the exact implementation details.**
