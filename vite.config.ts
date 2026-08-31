import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        support: resolve(__dirname, 'support.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        guide: resolve(__dirname, 'how-to-control-your-phone-with-shimano-di2-buttons.html'),
      },
    },
  },
})
