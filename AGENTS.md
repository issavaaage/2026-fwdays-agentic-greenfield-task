<!-- BEGIN:design-system-rules -->
# Design system
Read `DESIGN.md` before writing any UI code — it is the brand contract.
All DS components live in `src/components/ds/`; import from `@/components/ds`.
No raw hex colors or px values in source — use DS tokens via `var()`.
<!-- END:design-system-rules -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
