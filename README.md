# Fantastic Hair

React + Vite website for Fantastic Hair, with Tailwind CSS, product sections, cart state, and WhatsApp contact flows.

## Project Structure

- `vite-project/` - main frontend app
- `vite-project/src/` - React source code and components
- `vite-project/public/` - static assets copied into production builds
- `vite-project/dist/` - production build output after running `npm run build`

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
3. Upload the contents of `vite-project/dist` into `public_html`.
4. Make sure `public_html` contains `index.html`, `.htaccess`, `assets/`, `robots.txt`, and `sitemap.xml`.

Do not upload the source files, `node_modules`, or the `vite-project` folder to Hostinger for a static deployment.
