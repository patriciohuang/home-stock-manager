import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import manifestOptions from './manifest-options.json'

// https://vitejs.dev/config/

const vitePWAOptions = { 
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true
  }, 
  manifest: manifestOptions
}

export default defineConfig({
  plugins: [
    vue(),
    VitePWA(vitePWAOptions),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
