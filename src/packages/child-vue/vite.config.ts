import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/other/s10y10.github.io/blog/child-vue/' : '/',
    plugins: [
      vue(),
      qiankun('micro-vue', {
        useDevMode: true,
      }),
    ],
    build: {
      outDir: path.resolve(__dirname, '../../../blog/child-vue'),
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 3012,
      origin: 'http://localhost:3012',
      cors: true,
    },
  };
});
