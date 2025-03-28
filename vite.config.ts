import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        // Disable code splitting: all code goes into a single chunk.
        manualChunks: () => 'index',
        // Specify the output file name.
        entryFileNames: 'index.js',
        chunkFileNames: 'index.js',
      },
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@model': path.resolve(__dirname, 'src/model'),
    },
  },
});
