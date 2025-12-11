import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        liquidGlass: resolve(__dirname, 'src/themes/liquid-glass.html'),
        flat: resolve(__dirname, 'src/themes/flat.html'),
        handDrawn: resolve(__dirname, 'src/themes/hand-drawn.html'),
      },
    },
  },
})
