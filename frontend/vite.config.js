import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-redirects',
      closeBundle() {
        try {
          copyFileSync('_redirects', 'dist/_redirects')
        } catch (err) {
          console.log('_redirects file not found or error copying:', err.message)
        }
      }
    }
  ],
})
