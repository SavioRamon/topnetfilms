import { defineConfig } from 'vite'
import legacy from "@vitejs/plugin-legacy";
import react from '@vitejs/plugin-react'
import eslint from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    eslint()
  ]
})
