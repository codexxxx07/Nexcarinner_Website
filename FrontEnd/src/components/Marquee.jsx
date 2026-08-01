import { useEffect, useRef, useState } from 'react'

const Marquee = ({ children, reverse = false, duration = 36, className = '' }) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(true)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: inView && !hovered ? 'running' : 'paused',
        }}
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
