# Bizmong Components & Layout Skill

## Objective
Construct accessible, standard Bizmong layouts and complex components.

## Knowledge & Rules
1. **Base Layout**:
   - Page background should use the soft gray canvas: `bg-page-bg` (`#f2f2f5`).
   - Content surfaces should be white cards (`bg-card`) resting on the page background.
2. **Card Structure**:
   - Rest state: `shadow-normal` with `radius-lg`.
   - Hover state: `shadow-emphasize` (for interactive cards).
   - Padding depends on density (typically 16-24px, tighter for tables).
3. **Buttons**:
   - Primary: `bg-bizmong-blue-50 text-white hover:bg-bizmong-blue-55 radius-md`.
   - Kakao Login: explicitly use `bg-kakao-bg text-kakao-text`.
4. **Badges / Tags**:
   - Pattern: Tinted background (10-20 shade) + Contrast text (60-70 shade) from the same color family.
   - Example: `bg-green-10 text-green-60` for success tags.
5. **Modals & Dialogs**:
   - Content wrapper uses `bg-popover radius-xl` or `radius-2xl`.
   - Popover elevation uses `shadow-heavy` and an `opacity-black-60` overlay backdrop.
6. **Spacing**:
   - Rely on Tailwind's 4px grid (`gap-4` for siblings, `gap-2` for compact). 
   - Ensure minimum `44px` touch target areas for mobile-first interactivity.
