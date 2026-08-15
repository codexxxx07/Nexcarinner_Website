import { useCallback, useEffect, useRef, useState } from 'react'

/*
 * React Bits — BlurText (adapted).
 * React Bits distributes via copy-paste (shadcn/jsrepo); you own the code.
 * Words/letters start blurred and resolve crisply when scrolled into view.
 *
 * Adapted to run on IntersectionObserver + CSS transitions instead of a
 * motion dependency — identical visual effect, zero added bundle weight.
 *
 * Props:
 *   text          – string to reveal
 *   delay         – ms between each word/letter
 *   className     – applied to the root element
 *   animateBy     – "words" (default) | "letters"
 *   direction     – "top" (default) | "bottom"
 *   threshold     – IntersectionObserver threshold
 *   as            – root element tag (default "p")
 *   wordClassNames – optional array of classes, one per word (words mode)
 */
const BlurText = ({
  text = '',
  delay = 80,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.15,
  as: Tag = 'p',
  wordClassNames = null,
}) => {
  const containerRef = useRef(null)
  const spansRef = useRef([])
  const [started, setStarted] = useState(() => {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch { return false }
  })

  const begin = useCallback(() => {
    if (started) return
    setStarted(true)
    const spans = spansRef.current
    const duration = 0.5
    spans.forEach((el, i) => {
      if (!el) return
      el.style.transitionDelay = `${i * delay}ms`
      el.style.transitionDuration = `${duration}s`
      el.style.transitionTimingFunction = 'cubic-bezier(0.22, 1, 0.36, 1)'
      el.style.opacity = '1'
      el.style.filter = 'blur(0px)'
      el.style.transform = 'translate3d(0, 0, 0)'
    })
  }, [started, delay])

  useEffect(() => {
    if (started) return
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          begin()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started, begin, threshold])

  const words = text.split(' ')

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {animateBy === 'letters' ? (
            word.split('').map((char, ci) => (
              <span
                key={ci}
                ref={(node) => (spansRef.current[wi * 40 + ci] = node)}
                className="inline-block"
                style={{
                  opacity: started ? undefined : 0,
                  filter: started ? undefined : 'blur(8px)',
                  transform: started
                    ? undefined
                    : direction === 'top'
                      ? 'translate3d(0, 16px, 0)'
                      : 'translate3d(0, -16px, 0)',
                  transitionProperty: 'opacity, filter, transform',
                }}
              >
                {char}
              </span>
            ))
          ) : (
            <span
              ref={(node) => (spansRef.current[wi] = node)}
              className={`inline-block ${wordClassNames?.[wi] ?? ''}`}
              style={{
                opacity: started ? undefined : 0,
                filter: started ? undefined : 'blur(8px)',
                transform: started
                  ? undefined
                  : direction === 'top'
                    ? 'translate3d(0, 16px, 0)'
                    : 'translate3d(0, -16px, 0)',
                transitionProperty: 'opacity, filter, transform',
              }}
            >
              {word}
            </span>
          )}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}

export default BlurText
