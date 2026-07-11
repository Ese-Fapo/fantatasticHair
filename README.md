# Fantastic Hair

React + Vite website for Fantastic Hair, with Tailwind CSS, product sections, cart state, and WhatsApp contact flows.

## Project Structure

- `src/` - React source code and components
- `public/` - static assets copied into production builds
- `dist/` - root production build output for Hostinger after running `npm run build`

## Quick Start

From the repository root:

```bash
npm install
npm run dev
```

Common app scripts:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Deploy To Hostinger

1. Build the production site:

   ```bash
   npm run build
   ```

2. Open Hostinger File Manager and go to the domain's `public_html` folder.
3. Upload the contents of `dist` into `public_html`.
4. Make sure `public_html` contains `index.html`, `.htaccess`, `assets/`, `robots.txt`, and `sitemap.xml`.

Do not upload the source files or `node_modules` to Hostinger for a static deployment.

## Hostinger Git / Node Settings

Use these settings if Hostinger builds from the repository:

```text
Install command: npm install
Build command: npm run build
Publish directory: dist
Node version: 20.19.0+ or 22.12.0+
```

## Vercel Deployment

The repository includes `vercel.json`, so Vercel should use:

```text
Framework preset: Vite
Install command: npm install
Build command: npm run build
Output directory: dist
Node version: 20.19.0+ or 22.12.0+
```

If deployment still fails, open the failed Vercel deployment and copy the first red error block from the Build Logs.
