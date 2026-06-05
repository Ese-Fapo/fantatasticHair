import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'gallery': ['./src/components/Gallery.jsx'],
          'about': ['./src/components/About.jsx'],
          'contact': ['./src/components/Contact.jsx'],
          'testimony': ['./src/components/Testimony.jsx'],
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      }
    }
  },
  server: {
    preTransformRequests: true,
  }
})
