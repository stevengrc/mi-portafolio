import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: true,
  },
  optimizeDeps: {
    include: ['tailwindcss'],
  },
})