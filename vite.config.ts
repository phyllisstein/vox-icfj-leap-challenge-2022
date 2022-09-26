// noinspection JSUnusedGlobalSymbols

import path from 'path'

import resolve from '@rollup/plugin-node-resolve'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        callouts: path.resolve(__dirname, 'callouts/index.html'),
        sidebar: path.resolve(__dirname, 'sidebar/index.html'),
      },
    },
  },
  plugins: [
    resolve({
      extensions: ['.ts', '.js'],
      modulePaths: [path.resolve(__dirname, 'src')],
    }),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          ['@emotion/babel-plugin', { sourceMap: true }],
        ],
      },
    }),
  ],
})
