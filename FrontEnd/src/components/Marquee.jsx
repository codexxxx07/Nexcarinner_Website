import { useEffect, useRef } from 'react'

const Marquee = ({ children, reverse = false, duration = 36, className = '' }) => {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const inViewRef = useRef(true)
  const hoveredRef = useRef(false)

  /*
   * Play state is driven entirely through the DOM rather than React state.
   * Hover fires on every pointer move across the band, and a re-render on
   * each one was pure waste — the marquee has hundreds of children, so it
   * re-rendered the whole row twice per pass.
   *
   * It must stay imperative for BOTH conditions, not just hover: a render
   * driven by `inView` would rewrite the inline style and silently resume a
   * marquee the user was hovering.
   */
  const applyPlayState = () => {
    if (!trackRef.current) return
    trackRef.current.style.animationPlayState =
      inViewRef.current && !hoveredRef.current ? 'running' : 'paused'
  }

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting
        applyPlayState()
      },
      { rootMargin: '200px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const setHovered = hovered => {
    hoveredRef.current = hovered
    applyPlayState()
  }

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={trackRef}
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Marquee
