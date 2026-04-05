import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://ariffrahmnn.github.io/quran-react/',
  plugins: [react()],
})
