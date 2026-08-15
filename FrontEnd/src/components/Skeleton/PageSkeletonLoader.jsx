import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageSkeleton from './PageSkeleton'
import { criticalAssetsForPath, preloadImage } from '../../lib/criticalAssets'
import { cn } from '../../lib/utils'

/*
 * PageSkeletonLoader — full-page Nexcarinner wireframe that covers the
 * freshly routed page until it is genuinely ready, then fades out.
 *
 * Readiness is driven by real state, never fake timers:
 *   1. The page module and styles are already fetched (doc readyState).
 *   2. Critical above-the-fold images for the current route have decoded.
 *   3. A very short paint window only when the network actually did work —
 *      if everything came from cache the wireframe is dismissed instantly.
 *
 * Navigation re-arms the overlay (location.key) so every route change
 * shows the matching wireframe and reveals cleanly.
 */
const MIN_PAINT_MS = 260

const useSkeletonReady = (preloads) => {
  const location = useLocation()
  /* Which navigation key has finished loading. A navigation changes the
   * key, so a stale key here means "loading" for the current route —
   * no explicit reset step required. */
  const [doneKey, setDoneKey] = useState(null)

  useEffect(() => {
    if (doneKey === location.key) return

    let cancelled = false
    let timer = null

    const fire = () => {
      if (cancelled) return
      if (timer) clearTimeout(timer)
      setDoneKey(location.key)
    }

    const run = async () => {
      const cached = await Promise.all(preloads.map(preloadImage))
      if (cancelled) return

      if (typeof document !== 'undefined' && document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => fire(), { once: true })
        return
      }

      /* Everything resolved from the cache — reveal immediately. */
      if (cached.every(Boolean)) {
        fire()
        return
      }

      /* The network did real work; keep the wireframe on screen just
       * long enough to read as a page loading, then reveal. */
      timer = setTimeout(fire, MIN_PAINT_MS)
    }

    run()
    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [doneKey, location.key, preloads])

  return doneKey === location.key
}

const PageSkeletonLoader = ({ children }) => {
  const location = useLocation()
  const preloads = useMemo(
    () => criticalAssetsForPath(location.pathname),
    [location.pathname],
  )
  const revealing = useSkeletonReady(preloads)

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[60] overflow-y-auto bg-ink-950 dark:bg-[#0f0f0f]',
          revealing && 'skeleton-overlay pointer-events-none',
        )}
        aria-hidden={revealing ? 'true' : undefined}
        aria-busy={revealing ? undefined : 'true'}
        role={revealing ? undefined : 'status'}
        aria-label={revealing ? undefined : 'Loading page'}
      >
        <PageSkeleton key={location.key} pathname={location.pathname} />
      </div>
      <div className="relative z-0">{children}</div>
    </>
  )
}

export default PageSkeletonLoader
