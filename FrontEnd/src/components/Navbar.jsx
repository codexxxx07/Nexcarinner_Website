import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiArrowRight, FiStar, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const Logo = ({ dark }) => (
  <Link to="/" className="flex items-center gap-3">
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-bold shadow-[0_6px_14px_-6px_rgba(124,58,237,0.7),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.1)] transition-colors duration-300 ${
        dark
          ? 'bg-white/10 text-white border border-white/15'
          : 'bg-linear-to-br from-brand-500 to-brand-700 text-white'
      }`}
    >
      NC
    </span>
    <span
      className={`font-display text-lg font-bold tracking-tight transition-colors duration-300 ${
        dark ? 'text-white' : 'text-ink-50'
      }`}
    >
      Nexcarinner
    </span>
  </Link>
)

const ThemeToggle = () => {
  const { dark, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
        dark
          ? 'border-white/15 bg-white/8 text-gray-300 hover:bg-white/15 hover:text-white'
          : 'border-ink-800/60 bg-white/80 text-ink-500 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(34,29,58,0.07)] hover:text-ink-900'
      }`}
    >
      {dark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
    </button>
  )
}

const Navbar = () => {
  const { dark } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const scrolledRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      const shouldBeScrolled = window.scrollY > 24
      if (shouldBeScrolled !== scrolledRef.current) {
        scrolledRef.current = shouldBeScrolled
        setScrolled(shouldBeScrolled)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `relative text-base font-semibold transition-all duration-200 ease-in-out ${
      isActive
        ? dark ? 'text-white' : 'text-brand-700'
        : dark ? 'text-gray-400 hover:text-white' : 'text-ink-400 hover:text-ink-900'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? dark
              ? 'border-b border-white/8 bg-[#111111]/90 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md'
              : 'border-b border-white/50 bg-white/80 shadow-[0_12px_30px_rgba(0,0,0,0.12),0_6px_12px_rgba(0,0,0,0.08),0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
          <Logo dark={dark} />

          {/* Desktop links */}
          <div
            className={`hidden items-center gap-3 rounded-full border p-1.5 lg:flex transition-colors duration-300 ${
              dark
                ? 'border-white/10 bg-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4)]'
                : 'border-ink-800/60 bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(34,29,58,0.06),0_3px_8px_-4px_rgba(34,29,58,0.1)]'
            }`}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={navLinkClass}
              >
                {({ isActive }) => (
                  <span
                    className={`rounded-full px-4 py-1.5 transition-all duration-200 ease-in-out ${
                      isActive
                        ? dark
                          ? 'bg-white/10 text-white border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                          : 'bg-white/40 text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(124,58,237,0.08),0_2px_8px_-2px_rgba(124,58,237,0.18)] border border-white/30'
                        : dark
                          ? 'border border-transparent hover:bg-white/8 hover:border-white/10 hover:text-white'
                          : 'border border-transparent hover:bg-white/30 hover:border-white/30 hover:scale-105 hover:text-ink-900'
                    }`}
                  >
                    {link.label}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <span
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 ${
                dark ? 'text-gray-500' : 'text-ink-400'
              }`}
            >
              <FiStar className={`h-3.5 w-3.5 ${dark ? 'text-gray-400' : 'text-brand-600'}`} />
              4300+ members
            </span>
            <ThemeToggle />
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            >
              Join Now
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-300 ${
                dark
                  ? 'border-white/12 bg-white/8 text-gray-300 hover:text-white'
                  : 'border-ink-800/70 bg-white/80 text-ink-500 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_3px_rgba(34,29,58,0.08)] hover:text-ink-900'
              }`}
            >
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`border-b backdrop-blur-md lg:hidden transition-colors duration-300 ${
            dark
              ? 'border-white/8 bg-[#111111]/95 shadow-[0_12px_30px_rgba(0,0,0,0.6)]'
              : 'border-white/50 bg-white/80 shadow-[0_12px_30px_rgba(0,0,0,0.12),0_6px_12px_rgba(0,0,0,0.08)]'
          }`}
        >
          <div className="flex flex-col gap-1 px-6 py-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-medium transition-colors duration-200 ${
                    isActive
                      ? dark
                        ? 'bg-white/10 text-white'
                        : 'bg-brand-500/10 text-brand-700'
                      : dark
                        ? 'text-gray-400 hover:bg-white/8 hover:text-white'
                        : 'text-ink-500 hover:bg-ink-800/40 hover:text-ink-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gradient mt-3 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white"
            >
              Join Now
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
