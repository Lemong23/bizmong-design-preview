# Bizmong Typography Skill

## Objective
Ensure the AI strictly uses the 14-level named typography scale for all text rendering.

## Knowledge & Rules
1. **Never use standard Tailwind text sizes independently**
   - WRONG: `text-lg tracking-tight leading-relaxed font-bold`
   - CORRECT: `text-heading-2 font-bold`
2. **Scale Categories**:
   - **Display** (`text-display-2`, `3`): Hero headlines. Uses dense negative tracking.
   - **Title** (`text-title-1` to `3`): Page, section, and card titles.
   - **Heading** (`text-heading-1`, `2`): Subsection or component headings.
   - **Headline** (`text-headline-1`, `2`): Emphasized body text.
   - **Body** (`text-body-1`, `2`): Primary and secondary body text (`-0.0002em` tracking).
   - **Label** (`text-label-1` to `3`): Forms, tags, buttons (Positive tracking for legibility).
   - **Caption** (`text-caption-1`, `2`): Helper text, timestamps.
3. **Font Weights**:
   - Bold (`700`): Display, title, primary headings.
   - Semibold (`600`): Component headings, emphasized labels, buttons.
   - Medium (`500`): Active navigation, headlines.
   - Regular (`400`): Default body text, descriptions.
4. **Rule of Thumb**: Always pair the token's defined line-height and letter-spacing together. The predefined classes in Tailwind v4 already bundle these; just use the token class natively.
