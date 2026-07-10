# Fantastic Hair Vite App

Static React site built with Vite and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The deployable files are generated in:

```text
dist/
```

## Hostinger Deployment

1. Build the site from this folder:

   ```bash
   npm run build
   ```

2. In Hostinger File Manager, open the domain's `public_html` directory.
3. Delete the old site files from `public_html` if this is replacing a previous static site.
4. Upload the contents of `dist`, not the `dist` folder itself.
5. Confirm these files are at the top level of `public_html`:

   ```text
   index.html
   .htaccess
   assets/
   robots.txt
   sitemap.xml
   ```

The included `.htaccess` file keeps direct refreshes working, sends unknown paths back to `index.html`, and adds long cache headers for static assets.

## Notes

- `vite.config.js` is configured for hosting at the domain root with `base: '/'`.
- If the site is deployed inside a subfolder instead of the domain root, update `base` in `vite.config.js` before building.
