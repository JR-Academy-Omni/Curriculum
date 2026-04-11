import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/curriculum/ai-coding-bootcamp/',
  build: {
    outDir: 'dist',
  },
})
