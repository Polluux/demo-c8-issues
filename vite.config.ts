/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    reporters: ['verbose'],
    watch: false,
    coverage: {
      provider: 'c8',
      enabled: true,
      reporter: ['text', 'text-summary']
    }
  }
});
