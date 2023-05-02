import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "~", replacement: "/src" },
      {
        find: '~/components',
        replacement: resolve(__dirname, 'src/components'),
      },
    ]
  },
  plugins: [react(), tsconfigPaths()],
})
