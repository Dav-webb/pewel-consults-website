# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Deploying to GitHub Pages

This project is pre-configured for GitHub Pages under a repository named
**`pewel-consults-website`**. It includes:

- `vite.config.js` — `base: '/pewel-consults-website/'`
- `src/main.jsx` — `<BrowserRouter basename="/pewel-consults-website">`
- `public/404.html` + a small script in `index.html` — makes client-side
  routes (e.g. `/about`, `/services`) work on refresh/deep-link, since
  GitHub Pages has no built-in SPA rewrite support
- `.github/workflows/deploy.yml` — builds and deploys automatically on
  every push to `main`

### Steps

1. Create a new **public** GitHub repository named exactly `pewel-consults-website`
   (or update the two base-path values above to match whatever name you use).
2. From this project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/pewel-consults-website.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Push (or re-run the workflow from the **Actions** tab) — after ~1 minute your
   site is live at `https://<your-username>.github.io/pewel-consults-website/`.

If you deploy under a **user/organization page** instead (a repo named
`<your-username>.github.io`), set both base paths back to `/` and drop the
`basename` prop entirely.
