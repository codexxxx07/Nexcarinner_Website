const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '')

/**
 * Resolve an app route to a full pathname that respects Vite's `base`.
 * Clerk navigates to absolute paths, so `/sign-in` must become
 * `/Nexcarinner_Website/sign-in` when the app is served under that base.
 */
export const clerkUrl = (path) => `${BASE_URL}/${String(path).replace(/^\//, '')}`

const BRAND = '#7c3aed'

/**
 * Shared Clerk appearance so the auth UI follows the site's own light/dark
 * design tokens instead of Clerk's defaults.
 */
export const clerkAppearance = (dark) => ({
  variables: {
    colorPrimary: BRAND,
    colorText: dark ? '#e5e7eb' : '#221d3a',
    colorTextSecondary: dark ? '#9ca3af' : '#5b5668',
    colorBackground: dark ? '#1a1a1a' : '#ffffff',
    colorInputBackground: dark ? '#111111' : '#ffffff',
    colorInputText: dark ? '#f3f4f6' : '#221d3a',
    colorInputBorder: dark ? 'rgba(255,255,255,0.14)' : 'rgba(34,29,58,0.22)',
    colorBorder: dark ? 'rgba(255,255,255,0.10)' : 'rgba(34,29,58,0.14)',
    colorDanger: '#dc2626',
    borderRadius: '0.75rem',
  },
})