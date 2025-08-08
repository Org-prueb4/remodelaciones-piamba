import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necesario para GitHub Pages: el repo se publica bajo /remodelaciones-piamba/
  base: '/remodelaciones-piamba/',
  build: {
    // Generar el build en /docs para que Pages sirva desde main/docs
    outDir: 'docs',
    emptyOutDir: true,
  },
})
