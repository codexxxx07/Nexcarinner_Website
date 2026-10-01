import { createContext, useContext, useEffect, useRef, useState } from 'react'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
    } catch { /* storage may be unavailable */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const transitionTimerRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch { /* storage may be unavailable */ }
  }, [dark])

  const toggle = () => {
    /*
     * Apply .theme-transitioning for exactly 350ms so the global
     * transition rule (scoped to that class) fires during the toggle,
     * then is removed. This avoids having active transitions on every
     * element at all times — significant style recalculation savings
     * during scroll and normal interaction.
     */
    const root = document.documentElement
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current)
    root.classList.add('theme-transitioning')
    transitionTimerRef.current = setTimeout(() => {
      root.classList.remove('theme-transitioning')
      transitionTimerRef.current = null
    }, 350)

    setDark((v) => !v)
  }

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
