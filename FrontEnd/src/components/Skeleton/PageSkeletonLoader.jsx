import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageSkeleton from './PageSkeleton'
import { criticalAssetsForPath, preloadImage } from '../../lib/criticalAssets'
import { cn } from '../../lib/utils'

/*
 * PageSkeletonLoader — full-page Nexcarinner wireframe that covers the
 * routed page until it is genuinely ready, then fades out.
 *
 * PERFORMANCE NOTE:
 * On the initial page load (hard navigate / refresh) the skeleton must
 * never block FCP / LCP. The browser's native loading pipeline already
 * handles the first paint — adding a JS-driven overlay on top only
 * delays it. We detect "initial load" by tracking whether any client-
 * side navigation has occurred yet; if not, we skip the blocking phase
 * entirely and reveal immediately.
 *
 * On subsequent client-side navigations the overlay is still useful:
 * it covers the brief gap between a route change and the lazy chunk
 * resolving.  MIN_PAINT_MS is kept short (80 ms) so it only flashes
 * for genuine network work, not on cache hits.
 */

/** Minimum overlay time on a *client-side* navigation. Never applied on
 *  the initial load. Keep this short — just long enough to mask a brief
 *  flash between the old route unmounting and the new one painting. */
const MIN_PAINT_MS = 80

/**
 * Returns the stable initial location.key captured on mount.
 * Any subsequent key is a client-side navigation.
 */
const useIsInitialLoad = () => {
  const location = useLocation()
  const initialKeyRef = useRef(location.key)
  return location.key === initialKeyRef.current
}

const useSkeletonReady = (preloads, isInitialLoad) => {
  const location = useLocation()
  const [doneKey, setDoneKey] = useState(() =>
    // On initial load mark as already done — don't block first paint.
    isInitialLoad ? location.key : null,
  )

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

      /* All assets already in cache — reveal immediately. */
      if (cached.every(Boolean)) {
        fire()
        return
      }

      /* Network did real work — keep the wireframe just long enough to
       * look intentional, then reveal. */
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
  const isInitialLoad = useIsInitialLoad()
  const preloads = useMemo(
    () => criticalAssetsForPath(location.pathname),
    [location.pathname],
  )
  const revealing = useSkeletonReady(preloads, isInitialLoad)

  /* Drop the skeleton DOM once the fade has finished so its shimmer
   * animations don't keep running. */
  const [fadedKey, setFadedKey] = useState(() =>
    isInitialLoad ? location.key : null,
  )

  useEffect(() => {
    if (!revealing) return
    const timer = setTimeout(() => setFadedKey(location.key), 400)
    return () => clearTimeout(timer)
  }, [revealing, location.key])

  const fadedOut = revealing && fadedKey === location.key

  /* On the initial page load skip rendering the overlay entirely so
   * nothing sits between the browser and the first meaningful paint. */
  if (isInitialLoad && fadedOut) {
    return <>{children}</>
  }

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
        {!fadedOut && <PageSkeleton key={location.key} pathname={location.pathname} />}
      </div>
      <div className="relative z-0">{children}</div>
    </>
  )
}

export default PageSkeletonLoader
