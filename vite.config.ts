import path from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import { defineConfig } from 'vite';

const resolve = (dir: string) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/scss/index.scss" as *;',
      },
    },
  },
});
