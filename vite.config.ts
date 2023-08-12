import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ exportAsDefault: true })],
  server: {
    host: true,
  },
  // base: '/dist',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/variable.scss";',
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[local]_[hash:hex:5]',
    },
  },
});
