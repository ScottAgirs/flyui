import * as path from 'path';
   
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: "@flyui/core",
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
})