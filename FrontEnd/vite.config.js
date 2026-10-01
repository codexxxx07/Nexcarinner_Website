import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    /*
     * Don't spend time computing gzip sizes during CI / local builds.
     * Lighthouse measures the actual network transfer, not this number.
     */
    reportCompressedSize: false,

    /*
     * Keep CSS per-chunk so the initial page only loads the CSS it needs.
     * (This is the Vite default; explicit here for clarity.)
     */
    cssCodeSplit: true,

    rolldownOptions: {
      output: {
        /*
         * Vendor chunk splitting.
         * Groups run in order; the first matching group wins.
         * The catch-all `vendor` group at the bottom absorbs anything
         * from node_modules not matched by a more specific group.
         *
         * Why these groups:
         *  vendor-react    — React + DOM + router: always needed, cache-stable
         *  vendor-clerk    — Clerk auth: large (~91KB), changes independently
         *  vendor-animation — GSAP + Lenis: deferred until after first paint
         *  vendor-icons    — react-icons: large tree, rarely changes
         *  vendor-utils    — small utility libs: clsx, twMerge, cva
         *  vendor          — everything else from node_modules
         */
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
