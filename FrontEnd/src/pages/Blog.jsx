import { FiBell } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import BackButton from '../components/BackButton'
import { useTheme } from '../context/ThemeContext'
import { usePageTitle } from '../hooks/usePageTitle'

const Blog = () => {
  const { dark } = useTheme()
  usePageTitle('Blog')

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-[#0f0f0f]' : 'bg-ink-950'}`}>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">

        {/* Back button */}
        <Reveal>
          <BackButton />
        </Reveal>

        {/* Header */}
        <Reveal delay={60}>
          <span className="chip">From the team</span>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className={`mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            The Nexcarinner{' '}
            <span className="text-gradient-animate">Blog</span>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            Stories, tutorials, and insights from the community — written by the
            students building with us.
          </p>
        </Reveal>

        {/* Coming soon */}
        <Reveal delay={240}>
          <div
            className={`mx-auto mt-16 max-w-2xl rounded-2xl px-6 py-14 text-center transition-colors duration-300 sm:px-12 sm:py-16 ${
              dark
                ? 'border border-white/8 bg-[#1a1a1a] shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
                : 'glass card-lift'
            }`}
          >
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand-500 to-flare-pink text-white shadow-[0_8px_18px_-8px_rgba(124,58,237,0.6),inset_0_1px_0_rgba(255,255,255,0.35)]">
              <FiBell className="h-6 w-6" />
            </span>
            <h2
              className={`mt-6 font-display text-2xl font-bold tracking-tight transition-colors duration-300 sm:text-3xl ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            >
              Coming Soon
            </h2>
            <p
              className={`mx-auto mt-3 max-w-md text-sm leading-relaxed transition-colors duration-300 sm:text-base ${
                dark ? 'text-gray-500' : 'text-ink-400'
              }`}
            >
              We're working on something interesting. Stay tuned!
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Blog
