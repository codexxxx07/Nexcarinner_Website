import { useEffect, useRef, useState } from 'react'

/*
 * TypeWriter — lightweight character-by-character typing loop for a
 * single phrase inside a larger heading. No animation library needed.
 *
 * The longest phrase is rendered invisibly inside an inline grid, so the
 * heading keeps a constant width and never jumps or reflows while shorter
 * phrases type in and delete out.
 *
 * Reduced-motion users get the first phrase shown statically (no caret).
 *
 * Props:
 *   phrases       – strings to rotate through (e.g. ['together', 'with us'])
 *   className     – applied to the visible typed text (e.g. text-gradient-animate)
 *   typingSpeed   – ms per character while typing
 *   deletingSpeed – ms per character while deleting
 *   holdDelay     – pause after a phrase is fully typed
 *   phraseGap     – pause before the next phrase starts typing
 *   startDelay    – delay before the first character appears
 */
const TypeWriter = ({
  phrases = [],
  className = '',
  typingSpeed = 65,
  deletingSpeed = 35,
  holdDelay = 1700,
  phraseGap = 220,
  startDelay = 0,
}) => {
  const containerRef = useRef(null)
  const [reduced] = useState(() => {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch { return false }
  })
  const [started, setStarted] = useState(() => reduced)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState(() => (reduced ? phrases[0] ?? '' : ''))
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (started) return
    const el = containerRef.current
    if (!el || phrases.length === 0) return

    let timeout
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          timeout = setTimeout(() => setStarted(true), startDelay)
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [started, phrases, startDelay])

  useEffect(() => {
    if (!started || reduced || phrases.length === 0) return
    const full = phrases[phraseIndex]
    let timeout

    if (!deleting) {
      if (text.length < full.length) {
        timeout = setTimeout(() => {
          setText(full.slice(0, text.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setDeleting(true), holdDelay)
      }
    } else if (text.length > 0) {
      timeout = setTimeout(() => {
        setText(text.slice(0, -1))
      }, deletingSpeed)
    } else {
      timeout = setTimeout(() => {
        setDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }, phraseGap)
    }

    return () => clearTimeout(timeout)
  }, [
    started,
    reduced,
    text,
    deleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    holdDelay,
    phraseGap,
  ])

  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), '')

  return (
    <span
      ref={containerRef}
      className="relative inline-grid whitespace-nowrap"
      aria-label={phrases[phraseIndex] || ''}
    >
      <span aria-hidden="true" className="invisible">{longest}</span>
      <span className={`col-start-1 row-start-1 justify-self-start whitespace-nowrap ${className}`}>
        {text}
        {started && !reduced && (
          <span className="typewriter-caret" aria-hidden="true" />
        )}
      </span>
    </span>
  )
}

export default TypeWriter
