import { useEffect, useState } from 'react'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'

/*
 * LenisProvider — wraps the app with ReactLenis for smooth scrolling.
 *
 * PERFORMANCE: ReactLenis initializes its scroll engine, RAF ticker, and
 * event listeners synchronously on mount. Mounting it at the root during
 * the initial render adds unnecessary main-thread work before FCP/LCP.
 *
 * We defer the ReactLenis mount until after the first animation frame so
 * the browser completes the first meaningful paint before Lenis starts.
 * Children render immediately with native scrolling — useLenis() returns
 * null until Lenis is ready, and all callers (ScrollToTop etc.) already
 * handle null gracefully with a window.scrollTo fallback.
 */
const LenisProvider = ({ children }) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  if (!ready) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        lerp: 0.1,
        smoothWheel: true,
        touchMultiplier: 2,
        autoResize: true,
        anchors: true,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default LenisProvider
