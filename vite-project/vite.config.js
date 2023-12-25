import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE.BASE.PATH || '/deploy_react_app_github_pages_vercel',
  plugins: [react()],
})
