import logoImg from '../assets/images/NCW_Logo.jpg'

/*
 * Critical images that gate the full-page skeleton. The navbar logo
 * appears on every route; the Home hero image is above the fold.
 * Everything below the fold is handled by ImageSkeleton and does not
 * block the page reveal.
 */
const ASSETS_BY_PATH = {
  '/': [logoImg],
  default: [logoImg],
}

const normalizePath = (pathname) => pathname.replace(/\/+$/, '') || '/'

export const criticalAssetsForPath = (pathname) =>
  ASSETS_BY_PATH[normalizePath(pathname)] || ASSETS_BY_PATH.default

/* Preloads one image. Resolves true immediately when it's already in
 * the browser cache (repeat visits) so cached loads skip any wait. */
export const preloadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image()
    img.src = src
    if (img.decode) {
      img
        .decode()
        .then(() => resolve(true))
        .catch(() => resolve(false))
    } else {
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
    }
  })
