import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'props-listing',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
