# Copilot instructions for this repository

## Project shape and architecture
- This is a **Next.js 13 App Router** site in `app/`, primarily a marketing/content experience for Tanzania travel.
- Global app shell is in `app/layout.tsx`: it wraps every page with `LanguageProvider`, `Navigation`, `Footer`, and `Toaster`.
- Most route pages are client-rendered (`'use client'`) because they depend on `useLanguage()` from `contexts/LanguageContext.tsx`.
- There is **no backend/service layer** in this repo (no API routes, no fetch/axios data flows); content is embedded in TS/TSX objects.
- `next.config.js` sets `output: 'export'` and `images.unoptimized: true` → treat this as a static-export build.

## Key conventions (important for AI edits)
- **Do not duplicate global shell components** (`Navigation`, `Footer`) inside page components; they are already in `app/layout.tsx`.
- Bilingual content uses local `translations` objects (`en`/`de`) inside each page/component (example: `app/travel-compass/page.tsx`).
- Language state comes from `useLanguage()`; switching persists to `localStorage` in `LanguageContext`.
- If a component uses hooks/browser APIs/events, keep it as a client component with `'use client'`.
- Keep route anchors and nav links aligned: many menu links target section IDs (for example `/travel-compass/#why-choose-us` and IDs in the corresponding page).

## UI/styling patterns
- Tailwind is the default styling approach; shared brand tokens are in `tailwind.config.ts` under `theme.extend.colors.brand`.
- Use existing UI primitives from `components/ui/*` (shadcn/Radix style) before creating new base controls.
- Use `cn()` from `lib/utils.ts` for class merging when conditional class logic is needed.
- Existing code mixes `next/image` and `img`; preserve the local style of the file you edit unless there is a clear reason to refactor.

## Routing/content organization
- Top-level pages live in `app/*/page.tsx` (for example `app/road-map/page.tsx`, `app/experience/page.tsx`, `app/impact/page.tsx`).
- Reusable sections live in `components/` and `components/compass/`.
- Navigation structure is centralized in `components/Navigation.tsx`; update it when adding/removing significant sections.

## Developer workflows
- Install deps: `npm install`
- Run dev server: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`
- Serve production build locally: `npm run start`

## Practical guardrails for changes
- Keep changes content-first and minimal; this repo is heavily copy-driven and design-sensitive.
- Preserve bilingual parity: when editing user-facing text, update both `en` and `de` entries in that file.
- Prefer extending existing arrays/objects/section components over introducing new architecture.
- There is currently no test suite configured; validate via `npm run lint` and focused manual route checks.