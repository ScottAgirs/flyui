import * as path from "path";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'FlyUI',
      fileName: (format) => `index.${format}.js`,
    },
    // lib: {
    //   entry: './src/index.tsx',
    //   formats: ['cjs', 'es'],
    //   fileName: (format) => `index.${format}.js`,
    // },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
})