# AGK Fire Inc — agkfire.com

Next.js company site for AGK Fire Inc. Source of truth for the live
site; the live site itself is plain static files on the Plesk box.

## Pages

Home, About, Ventures, Capabilities, Leadership, Investors, Contact. Ventures are
defined in `lib/site.ts` — add a venture there and it appears on the
Ventures page (and in the home feature grid when `featured: true`).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
```

## Deploy (Plesk, static)

The site builds to a static export — no Node server runs on the box.

1. `npm run build` — output lands in `out/`.
2. Back up the current files in the docroot first.
3. Upload the *contents* of `out/` into the docroot
   `/var/www/vhosts/socialnews.xyz/agkfire.com/`, replacing the old
   files. Pages are real URLs: `/`, `/about/`, `/ventures/`,
   `/capabilities/`, `/leadership/`, `/investors/`, `/contact/`.
   (Or pull the `deploy` branch on the box — it holds the built site
   at its root — and copy it into the same docroot.)
4. Verify live: homepage plus `/ventures/` (Telugu AI card) load.

Vercel auto-deploy stays OFF (`vercel.json`:
`"git": { "deploymentEnabled": false }`). Do not re-enable it — deploys
go through the Plesk upload above.
