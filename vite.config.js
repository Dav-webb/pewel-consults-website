import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from /<repo-name>/, so the base path
  // must match your repository name exactly (including capitalisation).
  // If you deploy to a user/organization page (e.g. yourname.github.io),
  // change this back to '/'.

})
