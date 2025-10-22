import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/reef-foundation-website/', // اسم المستودع على GitHub
  server: {
    port: 3000
  }
})