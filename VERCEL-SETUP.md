# MARK — Vercel deployment setup

This project now uses Vinext's Vercel/Nitro build path when Vercel sets `VERCEL=1`.
The Cloudflare Vite plugin remains available for local/Workers development, but is not loaded during a Vercel build.

## Deploy

```bash
npm install
npx vercel --prod
```

The included `vercel.json` sets:

- Framework: Other
- Build command: `vite build`
- Output directory: `.output`

## Contact database

The enquiry API now uses Postgres via `@neondatabase/serverless` and expects:

```text
DATABASE_URL=postgresql://...
```

On Vercel, connect a Neon Postgres database to the `mark-defense` project. The Neon integration can create and expose `DATABASE_URL` automatically.

The `enquiries` table and indexes are created automatically on the first form submission.
