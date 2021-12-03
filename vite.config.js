import { defineConfig } from 'vite'
import path, { join } from 'path'

import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['> 0.5%', 'not IE 11', 'last 2 versions'],
      polyfills: true
    })
  ],
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: path.resolve(__dirname, './src') + '/'
      },
      {
        find: /^~/,
        replacement: path.resolve(__dirname, join('./node_modules')) + '/'
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/assets/scss/variable';
          @import '~bootstrap/scss/functions';
          @import '~bootstrap/scss/variables';
        `
      }
    }
  },
  build: {
    rollupOptions: {
      plugins: [visualizer({ gzipSize: true, filename: 'dist/stats.html', brotliSize: true })]
    }
  }
})
