import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { clerkAppearance, clerkUrl } from '../lib/clerkAppearance'

/*
 * Neumorphic navbar. All surface / shadow / colour work lives in the
 * scoped `.nx-nav*` rules at the bottom of index.css, so this file only
 * keeps the layout, the routes and the behaviour.
 *
 * Vertical rhythm: the island is pt/pb 8px (mobile) / 12px (lg) around a
 * 48px / 56px nav row = the 64px / 80px of clearance Layout reserves with
 * pt-16 lg:pt-20, so the floating bar never overlaps page content.
 */

const links = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const ThemeToggle = () => {
  const { dark, toggle } = useTheme()
  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="nx-nav__icon flex h-10 w-10 cursor-target items-center justify-center rounded-2xl border"
          >
            {dark ? <FiSun className="h-[18px] w-[18px]" /> : <FiMoon className="h-[18px] w-[18px]" />}
          </button>
        </TooltipTrigger>
        <TooltipContent>{dark ? 'Light mode' : 'Dark mode'}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const Navbar = () => {
  const { dark } = useTheme()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const scrolledRef = useRef(false)
  const openRef = useRef(false)

  // Rebuilt every render without useMemo, so Clerk re-parsed this appearance
  // object on every Navbar render.
  const userButtonAppearance = useMemo(
    () => ({
      ...clerkAppearance(dark),
      elements: {
        avatarBox: {
          width: '2.25rem',
          height: '2.25rem',
          borderRadius: '9999px',
          border: dark
            ? '1px solid rgba(255,255,255,0.14)'
            : '1px solid rgba(34,29,58,0.18)',
        },
      },
    }),
    [dark],
  )

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

  // Browser back/forward never fires a click, so the mobile sheet stayed open
  // across history navigation.
  useEffect(() => {
    if (openRef.current) {
      openRef.current = false
      setOpen(false)
    }
  }, [pathname])

  return (
    <header className="nx-nav fixed inset-x-0 top-0 z-50">
      <div
        className={`nx-nav__island mx-auto max-w-7xl rounded-3xl border px-3 pt-2 pb-2 sm:px-4 lg:px-5 lg:pt-3 lg:pb-3 ${
          scrolled ? 'nx-nav__island--pinned' : ''
        } ${open ? 'overflow-hidden' : ''}`}
      >
        <nav className="flex h-12 items-center justify-between gap-3 lg:h-14">
          <Link
            to="/"
            className="nx-nav__brand flex cursor-target items-center gap-3"
          >
            <Logo />
            <span
              className={`font-display text-lg font-bold tracking-tight transition-colors duration-300 ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            >
              Nexcarinner
            </span>
          </Link>

          {/* Desktop links — a single neumorphic tray, not separate buttons */}
          <div className="nx-nav__rail hidden items-center gap-1 rounded-full border p-1 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="nx-nav__link inline-flex h-9 cursor-target items-center rounded-full px-4 text-base font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            <ThemeToggle />
            <SignedOut>
              <Link
                to="/sign-in"
                className="btn-outline nx-nav__auth inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="btn-gradient nx-nav__auth inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold text-white"
              >
                Sign Up
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton
                afterSignOutUrl={clerkUrl('/')}
                appearance={userButtonAppearance}
              />
            </SignedIn>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => {
                openRef.current = !open
                setOpen((v) => !v)
              }}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="nx-nav__icon flex h-10 w-10 cursor-target items-center justify-center rounded-2xl border"
            >
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu — shares the island surface so the two read as one piece */}
        {open && (
          <div className="px-1 pt-1 pb-1 lg:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className="nx-nav__menu-link flex items-center rounded-xl px-4 py-3 font-medium cursor-target"
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="my-2 h-px w-full bg-linear-to-r from-transparent via-ink-800/60 to-transparent dark:via-white/12" />
              <SignedOut>
                <Link
                  to="/sign-in"
                  onClick={() => setOpen(false)}
                  className="btn-outline nx-nav__auth mt-1 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  onClick={() => setOpen(false)}
                  className="btn-gradient nx-nav__auth mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white"
                >
                  Sign Up
                </Link>
              </SignedOut>
              <SignedIn>
                <div className="nx-nav__account mt-1 flex items-center justify-between rounded-full border px-4 py-2.5">
                  <UserButton
                    afterSignOutUrl={clerkUrl('/')}
                    appearance={userButtonAppearance}
                  />
                  <Link
                    to="/app"
                    onClick={() => setOpen(false)}
                    className="btn-gradient inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white"
                  >
                    Dashboard
                  </Link>
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
