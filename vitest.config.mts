import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    globals: true,
    environment: 'jsdom',
    watch: false,
  },
});
