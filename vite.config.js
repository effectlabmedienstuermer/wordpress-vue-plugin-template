import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'VuePlugin',
      formats: ['iife'],
      fileName: () => 'vue-plugin.js',
    },
    outDir: 'wordpress-vue-plugin-template/assets',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: () => 'vue-plugin.[ext]',
      },
    },
  },
})
