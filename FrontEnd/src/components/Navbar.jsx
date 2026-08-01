import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiArrowRight, FiStar } from 'react-icons/fi'

const links = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const navLinkClass = ({ isActive }) =>
  `relative text-sm font-semibold transition-colors duration-200 ${
    isActive ? 'text-brand-700' : 'text-ink-400 hover:text-ink-900'
  }`

const Logo = () => (
  <Link to="/" className="flex items-center gap-3">
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white shadow-[0_6px_14px_-6px_rgba(124,58,237,0.7),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.1)]">
      NC
    </span>
    <span className="font-display text-lg font-bold tracking-tight text-ink-50">
      Nexcarinner
    </span>
  </Link>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // Use a ref for the scroll handler to avoid recreating it on every render
  const scrolledRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      const shouldBeScrolled = window.scrollY > 24
      // Only trigger a state update when the value actually changes
      if (shouldBeScrolled !== scrolledRef.current) {
        scrolledRef.current = shouldBeScrolled
        setScrolled(shouldBeScrolled)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? 'border-b border-ink-800/70 bg-white/90 shadow-[0_1px_2px_rgba(34,29,58,0.06),0_6px_20px_-8px_rgba(34,29,58,0.14),inset_0_-1px_0_rgba(34,29,58,0.05)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
          <Logo />

          {/* Desktop links */}
          <div className="hidden items-center gap-1 rounded-full border border-ink-800/60 bg-white/80 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(34,29,58,0.06),0_3px_8px_-4px_rgba(34,29,58,0.1)] lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={navLinkClass}
              >
                {({ isActive }) => (
                  <span
                    className={`rounded-full px-4 py-2 transition-colors duration-200 ${
                      isActive
                        ? 'bg-brand-500/10 text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(124,58,237,0.08)]'
                        : 'hover:bg-ink-800/40 hover:text-ink-900'
                    }`}
                  >
                    {link.label}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <span className="flex items-center gap-1.5 text-xs font-medium text-ink-400">
              <FiStar className="h-3.5 w-3.5 text-brand-600" />
              500+ members
            </span>
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            >
              Join Now
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-800/70 bg-white/80 text-ink-500 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_3px_rgba(34,29,58,0.08)] transition-colors hover:text-ink-900 lg:hidden"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-ink-800/70 bg-white/95 shadow-[0_6px_20px_-8px_rgba(34,29,58,0.2)] backdrop-blur-xl lg:hidden">
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
                      ? 'bg-brand-500/10 text-brand-700'
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
