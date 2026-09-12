import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  // Đường dẫn khớp với tên Repository GitHub của bạn
  base: "/Mai-Anhs-Mini-Homepage/", 
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    }
  },
  build: {
    // Ép Vite xuất bản code ra thư mục tên là "docs" thay vì "dist"
    outDir: 'docs', 
    emptyOutDir: true,
  }
});
