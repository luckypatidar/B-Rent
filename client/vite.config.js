import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BRent/',
  plugins: [react(
    { fastRefresh: false }
  )],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
