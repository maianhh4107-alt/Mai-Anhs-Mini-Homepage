# Mai Anh's Mini Homepage

An interactive personal portfolio for Nguyen Mai Anh, presented as a colorful early-2000s Korean internet homepage.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/mai-anh-homepage/src/App.tsx` — single-page homepage experience and interactions
- `artifacts/mai-anh-homepage/src/index.css` — retro visual system, room illustration, wallpaper, and responsive rules
- `attached_assets/Profile_Photo_1789185793051.jpg` — supplied profile photo used by the homepage
- `attached_assets/CV_1789185775992.pdf` — source of truth for factual portfolio content

## Architecture decisions

- The site is a frontend-only single-page experience; guestbook entries use localStorage so the interaction works without a backend.
- Portfolio copy is limited to facts present in the supplied CV; decorative copy is kept separate from biographical claims.
- The performance archive uses the three exact YouTube URLs from the brief and opens them in a retro video window.

## Product

Visitors enter through a user-initiated intro screen, explore a decorated mini room, browse Mai Anh's profile, work experience, stage archive, skills, achievements, diary, and contact details, and can leave a guestbook message with heart reactions.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
