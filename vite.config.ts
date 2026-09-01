import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [preact()],
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
