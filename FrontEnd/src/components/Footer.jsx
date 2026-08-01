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

const socials = [
  { name: 'GitHub', icon: FaGithub, url: '#' },
  { name: 'LinkedIn', icon: FaLinkedinIn, url: '#' },
  { name: 'Discord', icon: FaDiscord, url: '#' },
  { name: 'X', icon: FaXTwitter, url: '#' },
  { name: 'Instagram', icon: FaInstagram, url: '#' },
]

const Footer = () => {
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
    <footer className="relative overflow-hidden border-t border-ink-800/70 bg-gradient-to-b from-transparent to-ink-900/50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-56 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white shadow-[0_10px_20px_-10px_rgba(124,58,237,0.7),inset_0_1px_0_rgba(255,255,255,0.35)]">
                NC
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-ink-50">
                Nexcarinner
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              A modern tech community for students to learn, build, and connect.
              Where curiosity meets craft.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-800 bg-white/70 text-ink-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_5px_-2px_rgba(34,29,58,0.1)] transition-colors duration-200 hover:border-brand-600/40 hover:text-brand-700 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_12px_-4px_rgba(124,58,237,0.35)]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-500">
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
                    className="group inline-flex items-center gap-2 text-ink-400 transition-colors duration-200 hover:text-brand-700"
                  >
                    <span className="h-px w-3 bg-ink-300 transition-colors duration-200 group-hover:bg-brand-600" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-500">
              Resources
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {['Blog', 'Documentation', 'Guides', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-ink-400 transition-colors duration-200 hover:text-brand-700"
                  >
                    <span className="h-px w-3 bg-ink-300 transition-colors duration-200 group-hover:bg-brand-600" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-500">
              Stay in the loop
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-400">
              <li className="flex items-center gap-3">
                <FiMail className="h-4 w-4 text-brand-600" />
                hello@nexcarinner.com
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="h-4 w-4 text-brand-600" />
                San Francisco, CA
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="h-4 w-4 text-brand-600" />
                +1 (555) 123-4567
              </li>
            </ul>

            <form onSubmit={handleSubscribe} className="mt-6">
              {subscribed ? (
                <p className="rounded-xl border border-brand-600/30 bg-brand-500/10 px-4 py-3 text-sm text-brand-700">
                  You're in! Watch your inbox for updates.
                </p>
              ) : (
                <div className="flex overflow-hidden rounded-full border border-ink-300/60 bg-white shadow-[inset_0_1.5px_3px_rgba(34,29,58,0.06),0_1px_0_rgba(255,255,255,0.85)] focus-within:border-brand-600/50 focus-within:ring-4 focus-within:ring-brand-500/10">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    aria-label="Email address"
                    className="w-full bg-transparent px-5 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:outline-none"
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

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-800/80 pt-8 text-xs text-ink-400 sm:flex-row">
          <p>&copy; 2026 Nexcarinner. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-brand-700">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-brand-700">
              Terms of Service
            </a>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Built with passion
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
