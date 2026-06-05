import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('node_modules/react-dom')) return 'vendor-react-dom'
            if (id.includes('node_modules/react' + '/')) return 'vendor-react'
            if (id.includes('node_modules/react-icons')) return 'vendor-react-icons'
            if (id.includes('node_modules/@digicroz/react-floating-whatsapp')) return 'vendor-whatsapp'
            return 'vendor'
          }
          if (id.includes('/src/components/Gallery.jsx')) return 'gallery'
          if (id.includes('/src/components/About.jsx')) return 'about'
          if (id.includes('/src/components/Contact.jsx')) return 'contact'
          if (id.includes('/src/components/Testimony.jsx')) return 'testimony'
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
