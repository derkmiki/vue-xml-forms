import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    // Exclude vuetify since it has an issue with vite dev - TypeError: makeVExpansionPanelTextProps is not a function - the makeVExpansionPanelTextProps is used before it is defined
    exclude: ['vuetify'],
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
