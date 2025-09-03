import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import mdx from '@mdx-js/rollup'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdx({
      jsxImportSource: 'vue',
      remarkPlugins: [
        remarkMath,
        remarkGfm,
      ],
      rehypePlugins: [
        rehypeKatex,
      ],
    }),
  ],
  base: './',
  server: {
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/public/image_slider/**', // Exclude image slider directories with many files
        '**/public/model3d/**', // Exclude 3D model directories
        '**/*.png', // Exclude PNG files that might be large
        '**/*.jpg', // Exclude JPG files
        '**/*.jpeg', // Exclude JPEG files
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
