<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Workspace Stack

- Framework: Next.js 16 App Router
- UI: React 19 + TypeScript
- Styling: Tailwind CSS 4
- Data layer: Prisma 7 + PostgreSQL
- Component utilities already present: `@base-ui/react`, `class-variance-authority`, `lucide-react`, `clsx`, `tailwind-merge`

## Current Project Shape

- App routes live under `src/app`
- Shared UI primitives live under `src/components/ui`
- Prisma schema lives in `prisma/schema.prisma`
- Generated Prisma client output is configured at `src/generated/prisma`
- This repo is currently a single integrated Next.js app, not a split frontend/backend monorepo

## Implementation Rules For This Repo

- Do not introduce a separate Express backend unless the user explicitly asks for that architecture change
- Do not assume React Router; use Next.js App Router conventions
- Prefer server components by default; use client components only when interactivity requires them
- For mutations and server-side data work, prefer Next.js-native patterns appropriate for this version: route handlers, server actions, and server-side Prisma access
- Keep data access centralized and consistent instead of scattering raw Prisma calls across many UI files
- When changing auth, routing, data fetching, caching, forms, or mutations, verify the relevant Next 16 docs first
- Keep changes aligned with the existing stack; do not plan work around Sequelize, Redux, Axios, or separate API servers unless those are intentionally added later

## Product Context

- The product is a Leave Management System with Employee, Manager, and HR Admin roles
- Source planning documents in the repo are `LMS_DRD.docx` and `LMS_TaskAssignment_v1.1.docx`
- In-scope modules are Profile, Salary, Leave, and Admin Panel
- Online Services is explicitly out of scope for this version

## Data Model Guidance

- The current Prisma schema is only a starting point and will need expansion for the LMS domain
- Reuse and extend the existing `User` and `LeaveRequest` models instead of replacing them casually
- Prefer enums and explicit relations when modeling leave status, roles, balances, holidays, approvals, and salary records
- When schema changes are made, update migrations and any generated client usage consistently

## UI And Design Guidance

- Follow the DRD before inventing new layouts or flows
- Preserve a consistent design system across employee, manager, and admin screens
- Build responsive layouts for mobile, tablet, desktop, and wide breakpoints
- Maintain accessibility basics: labels, visible focus states, keyboard navigation, and feedback states
- Reuse the UI primitives in `src/components/ui` before adding new design patterns

## Editing Guidance

- Prefer focused, incremental changes over broad scaffolding rewrites
- Do not rewrite the project into a different architecture just because a source document mentions another stack
- If you need to introduce a new dependency, justify it against what is already installed
- If repo instructions and generic framework assumptions conflict, follow the repo instructions and the installed Next.js docs
<!-- END:nextjs-agent-rules -->
