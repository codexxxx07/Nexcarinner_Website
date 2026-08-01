import { useEffect, useRef, memo } from 'react'

const CountUp = memo(({ end, duration = 1800, prefix = '', suffix = '', className = '' }) => {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rafId = null
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const animate = () => {
      started.current = true
      if (reduceMotion) {
        el.textContent = `${prefix}${end}${suffix}`
        return
      }
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        el.textContent = `${prefix}${Math.round(eased * end)}${suffix}`
        if (progress < 1) rafId = requestAnimationFrame(step)
      }
      rafId = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            observer.disconnect()
            animate()
            break
          }
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
      started.current = false
    }
  }, [end, duration, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
})

CountUp.displayName = 'CountUp'

export default CountUp
