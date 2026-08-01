import { useEffect, useRef } from 'react'

const variantClass = (variant) => {
  switch (variant) {
    case 'left': return 'reveal-left'
    case 'right': return 'reveal-right'
    case 'zoom': return 'reveal-zoom'
    default: return 'reveal-up'
  }
}

const Reveal = ({ children, className = '', variant = 'up', delay = 0, as: Tag = 'div' }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
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
