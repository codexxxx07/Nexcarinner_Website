import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler|@radix-ui)[\\/]/,
            },
            {
              name: 'vendor-clerk',
              test: /node_modules[\\/]@clerk[\\/]/,
            },
            {
              name: 'vendor-animation',
              test: /node_modules[\\/](gsap|lenis)[\\/]/,
            },
            {
              name: 'vendor-icons',
              test: /node_modules[\\/]react-icons[\\/]/,
            },
            {
              name: 'vendor-utils',
              test: /node_modules[\\/](clsx|tailwind-merge|class-variance-authority)[\\/]/,
            },
            {
              name: 'vendor',
              test: /node_modules/,
            },
          ],
        },
      },
    },
  },
})
