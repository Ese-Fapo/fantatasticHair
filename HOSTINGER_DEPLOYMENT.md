# Fantastic Hair - Hostinger Deployment Guide

This guide walks you through deploying your Vite + React site to Hostinger.

## Prerequisites
- Hostinger account with web hosting
- FTP/SFTP access or File Manager access
- Node.js installed locally (for building)

## Build Instructions

The site has already been built and the production files are in the `dist/` folder.

To rebuild at any time, run:
```bash
npm install
npm run build
```

## Deployment Steps

### Option 1: Using Hostinger File Manager (Easiest)

1. **Access File Manager**
   - Log in to your Hostinger dashboard
   - Go to File Manager under your hosting account
   - Navigate to the `public_html` folder (or your domain's root folder)

2. **Upload Files**
   - Delete any existing files in `public_html`
   - Upload all files from the `dist/` folder to `public_html`
   - Make sure to include the `.htaccess` file (it may be hidden)

3. **Verify**
   - Visit your domain in a browser
   - The site should load correctly

### Option 2: Using FTP/SFTP

1. **Connect via FTP**
   - Use an FTP client (FileZilla, WinSCP, etc.)
   - Connect using credentials from Hostinger dashboard
   - Navigate to `public_html`

2. **Upload**
   - Drag and drop all files from `dist/` to `public_html`
   - Ensure `.htaccess` is uploaded

3. **Set Permissions**
   - Set folder permissions to 755
   - Set file permissions to 644

### Option 3: Using Git/Deployments (If Available)

1. Push your code to GitHub
2. Configure Hostinger's auto-deployment feature if available
3. Set build command: `npm run build`
4. Set output directory: `dist`

## Important Files Included

- **`.htaccess`** - Routing configuration for React Router (single-page app support)
  - Enables gzip compression
  - Sets up browser caching
  - Adds security headers
  - Routes all requests to `index.html` for SPA routing

## After Deployment

### Test Your Site
- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Images load correctly
- [ ] Forms (if any) work properly
- [ ] Mobile responsive design works
- [ ] Check browser console for errors (F12)

### Performance Checks
- Test site speed at: https://gtmetrix.com or https://pagespeed.web.dev
- Check mobile compatibility at: https://search.google.com/test/mobile-friendly

### SEO & Search Engines
1. Update `public/robots.txt` if needed
2. Update `public/sitemap.xml` with your domain
3. Submit to Google Search Console
4. Submit to Bing Webmaster Tools

### SSL Certificate
- Hostinger provides free SSL certificates
- Enable SSL in Hostinger dashboard
- Redirect HTTP to HTTPS

## Troubleshooting

### Blank Page or 404 Errors
- Ensure `.htaccess` is in `public_html` root
- Check that RewriteEngine is enabled (enable Apache mod_rewrite)

### Images Not Loading
- Check image paths in the app
- Ensure image files are in the uploaded assets

### Slow Performance
- Enable gzip compression (`.htaccess` does this)
- Enable browser caching (`.htaccess` does this)
- Consider upgrading hosting plan if needed

### CSS/JS Not Loading
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check file permissions (should be 644)

## Development & Updates

To make changes:
1. Update code locally
2. Run `npm run build`
3. Upload new files from `dist/` folder to `public_html`
4. Clear browser cache to see changes

## Environment Variables

If you need environment variables:
1. Create a `.env` file locally
2. They must be prefixed with `VITE_` to be exposed
3. Example: `VITE_API_URL=https://api.example.com`
4. Rebuild with `npm run build` to include them in production

## Support Resources

- [Hostinger Documentation](https://support.hostinger.com)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
