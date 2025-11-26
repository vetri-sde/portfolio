import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3001
  },
  base: '/portfolio/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'heroicons': ['@heroicons/react/24/solid']
        }
      }
    },
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
});
