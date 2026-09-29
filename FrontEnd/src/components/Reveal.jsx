import { useEffect, useRef } from 'react'

const variantClass = (variant) => {
  switch (variant) {
    case 'left': return 'reveal-left'
    case 'right': return 'reveal-right'
    case 'zoom': return 'reveal-zoom'
    default: return 'reveal-up'
  }
}

// One observer shared by every Reveal on the page. A page like About mounts
// ~30 of them, and a per-instance observer meant 30 observers each firing
// its own callback for the same scroll position.
let sharedObserver = null

const getObserver = () => {
  if (sharedObserver || typeof IntersectionObserver === 'undefined') return sharedObserver

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        sharedObserver.unobserve(entry.target)
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )

  return sharedObserver
}

const Reveal = ({ children, className = '', variant = 'up', delay = 0, as: Tag = 'div' }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = el && getObserver()
    if (!el || !observer) return

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass(variant)} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
