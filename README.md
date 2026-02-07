# Job Portfolio (Astro + Tailwind + Cloudflare Pages)

3-page static portfolio site for job search, based on design comps.

## Stack

- Astro (build tool: Vite, included in Astro)
- Tailwind CSS
- Cloudflare Pages

## Pages

- `/` : portfolio summary landing page
- `/experience` : professional experience details
- `/skills` : skills and professional mindset

## Local development

Node.js 20 LTS is required.

```bash
nvm use
npm install
npm run dev
```

## Build

```bash
nvm use
npm run build
```

## Cloudflare Pages setup

1. Push this directory to a GitHub repository.
2. In Cloudflare Dashboard, create a new Pages project from that GitHub repository.
3. Build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy.

## Search indexing control

This project is configured to discourage indexing:

- `public/robots.txt` -> `Disallow: /`
- `<meta name="robots" content="noindex,nofollow">` in layout
- `public/_headers` -> `X-Robots-Tag: noindex, nofollow, noarchive`

Note: noindex is a strong request to crawlers, but not an authentication mechanism.
