import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaXTwitter,
  FaInstagram,
} from 'react-icons/fa6'
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const socials = [
  { name: 'GitHub', icon: FaGithub, url: '#' },
  { name: 'LinkedIn', icon: FaLinkedinIn, url: '#' },
  { name: 'Discord', icon: FaDiscord, url: '#' },
  { name: 'X', icon: FaXTwitter, url: '#' },
  { name: 'Instagram', icon: FaInstagram, url: '#' },
]

const Footer = () => {
  const { dark } = useTheme()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-300 ${
        dark
          ? 'border-white/8 bg-[#0f0f0f]'
          : 'border-ink-800/70'
      }`}
      style={
        dark
          ? undefined
          : { background: 'linear-gradient(180deg, transparent 0%, rgba(242,240,247,0.4) 100%)' }
      }
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${
          dark ? 'via-white/10' : 'via-brand-500/40'
        } to-transparent`}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-bold transition-colors duration-300 ${
                  dark
                    ? 'bg-white/10 text-white border border-white/15 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]'
                    : 'bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-[0_10px_20px_-10px_rgba(124,58,237,0.7),inset_0_1px_0_rgba(255,255,255,0.35)]'
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
            </div>
            <p
              className={`mt-5 max-w-sm text-sm leading-relaxed transition-colors duration-300 ${
                dark ? 'text-gray-500' : 'text-ink-400'
              }`}
            >
              A modern tech community for students to learn, build, and connect.
              Where curiosity meets craft.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={socials[0].url}
                aria-label="GitHub"
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-900 hover:text-white hover:shadow-md ${
                  dark ? 'bg-white/8 text-gray-400' : 'bg-gray-200 text-gray-600'
                }`}
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={socials[1].url}
                aria-label="LinkedIn"
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:bg-[#0077b5] hover:text-white hover:shadow-md ${
                  dark ? 'bg-white/8 text-gray-400' : 'bg-gray-200 text-gray-600'
                }`}
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href={socials[2].url}
                aria-label="Discord"
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:bg-[#5865F2] hover:text-white hover:shadow-md ${
                  dark ? 'bg-white/8 text-gray-400' : 'bg-gray-200 text-gray-600'
                }`}
              >
                <FaDiscord className="h-5 w-5" />
              </a>
              <a
                href={socials[3].url}
                aria-label="X"
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-900 hover:text-white hover:shadow-md ${
                  dark ? 'bg-white/8 text-gray-400' : 'bg-gray-200 text-gray-600'
                }`}
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href={socials[4].url}
                aria-label="Instagram"
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:bg-linear-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white hover:shadow-md ${
                  dark ? 'bg-white/8 text-gray-400' : 'bg-gray-200 text-gray-600'
                }`}
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4
              className={`font-display text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
                dark ? 'text-gray-500' : 'text-ink-500'
              }`}
            >
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/events', label: 'Events' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`group inline-flex items-center gap-2 transition-colors duration-200 ${
                      dark
                        ? 'text-gray-500 hover:text-white'
                        : 'text-ink-400 hover:text-brand-700'
                    }`}
                  >
                    <span
                      className={`h-px w-3 transition-colors duration-200 ${
                        dark
                          ? 'bg-gray-700 group-hover:bg-gray-400'
                          : 'bg-ink-300 group-hover:bg-brand-600'
                      }`}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4
              className={`font-display text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
                dark ? 'text-gray-500' : 'text-ink-500'
              }`}
            >
              Resources
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {['Blog', 'Documentation', 'Guides', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`group inline-flex items-center gap-2 transition-colors duration-200 ${
                      dark
                        ? 'text-gray-500 hover:text-white'
                        : 'text-ink-400 hover:text-brand-700'
                    }`}
                  >
                    <span
                      className={`h-px w-3 transition-colors duration-200 ${
                        dark
                          ? 'bg-gray-700 group-hover:bg-gray-400'
                          : 'bg-ink-300 group-hover:bg-brand-600'
                      }`}
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="lg:col-span-4">
            <h4
              className={`font-display text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
                dark ? 'text-gray-500' : 'text-ink-500'
              }`}
            >
              Stay in the loop
            </h4>
            <ul
              className={`mt-5 space-y-3 text-sm transition-colors duration-300 ${
                dark ? 'text-gray-500' : 'text-ink-400'
              }`}
            >
              <li className="flex items-center gap-3">
                <FiMail
                  className={`h-4 w-4 ${dark ? 'text-gray-400' : 'text-brand-600'}`}
                />
                hello@nexcarinner.com
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin
                  className={`h-4 w-4 ${dark ? 'text-gray-400' : 'text-brand-600'}`}
                />
                Bihar, Aurangabad 
              </li>
              <li className="flex items-center gap-3">
                <FiPhone
                  className={`h-4 w-4 ${dark ? 'text-gray-400' : 'text-brand-600'}`}
                />
                +91 62056 39470
              </li>
            </ul>

            <form onSubmit={handleSubscribe} className="mt-6">
              {subscribed ? (
                <p
                  className={`rounded-xl border px-4 py-3 text-sm transition-colors duration-300 ${
                    dark
                      ? 'border-white/15 bg-white/8 text-gray-300'
                      : 'border-brand-600/30 bg-brand-500/10 text-brand-700'
                  }`}
                >
                  You're in! Watch your inbox for updates.
                </p>
              ) : (
                <div
                  className={`flex overflow-hidden rounded-full border transition-colors duration-300 ${
                    dark
                      ? 'border-white/12 bg-white/5 focus-within:border-white/25 focus-within:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_0_0_4px_rgba(255,255,255,0.05)]'
                      : 'border-ink-300/60 bg-white shadow-[inset_0_2px_4px_rgba(34,29,58,0.07),inset_0_1px_2px_rgba(34,29,58,0.04),0_1px_0_rgba(255,255,255,0.9)] focus-within:border-brand-600/50 focus-within:shadow-[inset_0_2px_4px_rgba(34,29,58,0.05),0_0_0_4px_rgba(124,58,237,0.1)]'
                  }`}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    aria-label="Email address"
                    className={`w-full bg-transparent px-5 py-3 text-sm placeholder:text-gray-500 focus:outline-none transition-colors duration-300 ${
                      dark ? 'text-gray-200' : 'text-ink-50'
                    }`}
                    required
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="btn-gradient m-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                  >
                    <FiArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        <div
          className={`mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs transition-colors duration-300 sm:flex-row ${
            dark
              ? 'border-white/8 text-gray-600'
              : 'border-ink-800/80 text-ink-400'
          }`}
        >
          <p>&copy; 2026 Nexcarinner. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className={`transition-colors ${
                dark ? 'hover:text-white' : 'hover:text-brand-700'
              }`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`transition-colors ${
                dark ? 'hover:text-white' : 'hover:text-brand-700'
              }`}
            >
              Terms of Service
            </a>
            <span className="flex items-center gap-1.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  dark ? 'bg-gray-600' : 'bg-brand-600'
                }`}
              />
              Built with passion
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
