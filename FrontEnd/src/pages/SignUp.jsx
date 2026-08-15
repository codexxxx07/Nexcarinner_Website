import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import BackButton from '../components/BackButton'
import { Button } from '../components/ui/button'
import { useTheme } from '../context/ThemeContext'
import { usePageTitle } from '../hooks/usePageTitle'

const SignUp = () => {
  const { dark } = useTheme()
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [submitted, setSubmitted] = useState(false)

  usePageTitle('Sign Up')

  // Every auth route opens from the top — same pattern as the gallery.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark ? 'bg-[#0f0f0f]' : 'bg-ink-950'
      }`}
    >
      <div className="mx-auto max-w-md px-6 pb-24 pt-16 lg:px-8">
        <Reveal>
          <BackButton to="/" />
        </Reveal>

        <Reveal delay={60}>
          <span className="chip mt-8">Join the community</span>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className={`mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            Create your <span className="text-gradient-animate">account</span>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p
            className={`mt-5 text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            Free forever. Learn, build, and connect with students across every
            domain track.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="glass relative mt-10 overflow-hidden rounded-3xl p-8 sm:p-10">
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${
                dark ? 'via-white/12' : 'via-brand-500/50'
              } to-transparent`}
            />

            {submitted ? (
              <div className="relative flex min-h-96 flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-[0_18px_34px_-14px_rgba(124,58,237,0.8),inset_0_1px_0_rgba(255,255,255,0.35)]">
                  <FiCheck className="h-8 w-8" />
                </span>
                <h3
                  className={`mt-6 font-display text-2xl font-bold transition-colors duration-300 ${
                    dark ? 'text-white' : 'text-ink-50'
                  }`}
                >
                  Welcome, {formData.name || 'friend'}!
                </h3>
                <p
                  className={`mt-3 max-w-sm transition-colors duration-300 ${
                    dark ? 'text-gray-400' : 'text-ink-400'
                  }`}
                >
                  Your account is ready. Come say hi on Discord and start building.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  size="md"
                  className={dark ? 'text-gray-300' : 'text-ink-300'}
                >
                  Create another account
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className={`mb-2 block text-sm font-medium transition-colors duration-300 ${
                      dark ? 'text-gray-400' : 'text-ink-600'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="field"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`mb-2 block text-sm font-medium transition-colors duration-300 ${
                      dark ? 'text-gray-400' : 'text-ink-600'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="field"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className={`mb-2 block text-sm font-medium transition-colors duration-300 ${
                      dark ? 'text-gray-400' : 'text-ink-600'
                    }`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="field"
                    placeholder="Create a password"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Create account
                  <FiArrowRight className="h-4 w-4" />
                </Button>

                <p
                  className={`pt-1 text-center text-sm transition-colors duration-300 ${
                    dark ? 'text-gray-500' : 'text-ink-400'
                  }`}
                >
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className={`font-semibold transition-colors duration-200 ${
                      dark
                        ? 'text-gray-200 hover:text-white'
                        : 'text-brand-700 hover:text-brand-600'
                    }`}
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default SignUp
