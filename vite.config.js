import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [
    react(),
    viteSingleFile(),
  ],
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000, // Увеличьте лимит инлайнинга
    cssCodeSplit: false, // Объединить весь CSS в один файл
  },
});