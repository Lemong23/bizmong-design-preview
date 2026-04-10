# Bizmong Tech Stack & Implementation Skill

## Objective
Use the officially approved technology stack and ecosystem when writing business logic or UI code for Bizmong.

## Knowledge & Rules
1. **Core Framework**: 
   - Check `package.json` to verify workspace. The design-preview runs on **React 19 + Vite**. Other workspaces use **Next.js**. 
   - Styling engine is **Tailwind CSS v4**.
2. **Components**:
   - Rely on **Radix UI** for accessible primitives (Dialog, Select, Checkbox, etc.).
   - Import from the internal `@repo/ui` library if working within the monorepo context.
3. **Icons**:
   - Strictly use **Lucide React** (`lucide-react`).
4. **Data & State**:
   - Global/Client state: `jotai`
   - Server state, fetching, mutations: `@tanstack/react-query` (TanStack Query)
5. **Form Management**:
   - Use `react-hook-form` paired with `zod` for declarative schema validation.
6. **Data Visualization**:
   - Use `recharts` for charts.
   - Colors should be mapped directly to `chart-1` through `chart-5` CSS variables to adapt automatically to dark mode.
