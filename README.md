# Fantastic Hair

React + Vite website for Fantastic Hair, with Tailwind CSS, product sections, cart state, and WhatsApp contact flows.

## Project Structure

- `vite-project/` - main frontend app
- `vite-project/src/` - React source code and components
- `vite-project/public/` - static assets copied into production builds
- `dist/` - root production build output for Hostinger after running `npm run build`
- `vite-project/dist/` - app-local build output after running `npm run build` inside `vite-project`

## Quick Start

From the repository root:

```bash
npm install
cd vite-project
npm install
npm run dev
```

You can also run common app scripts from the repository root:

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

Do not upload the source files, `node_modules`, or the `vite-project` folder to Hostinger for a static deployment.

## Hostinger Git / Node Settings

Use these settings if Hostinger builds from the repository:

```text
Install command: npm install
Build command: npm run build
Publish directory: dist
Node version: 20.19+ or 22.12+
```

## Vercel Deployment

The repository includes `vercel.json`, so Vercel should use:

```text
Framework preset: Vite
Install command: npm install
Build command: npm run build
Output directory: dist
Node version: 24.x
```

If deployment still fails, open the failed Vercel deployment and copy the first red error block from the Build Logs.
