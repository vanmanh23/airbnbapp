import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import generouted from '@generouted/react-router/plugin'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react(), generouted()],
  // vite.config.ts
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
