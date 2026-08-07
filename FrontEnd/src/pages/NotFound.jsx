import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiHome } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { useTheme } from '../context/ThemeContext'
import { usePageTitle } from '../hooks/usePageTitle'

const NotFound = () => {
  const navigate = useNavigate()
  const { dark } = useTheme()
  usePageTitle('Page Not Found')

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center px-6 text-center transition-colors duration-300 ${
        dark ? 'bg-[#0f0f0f]' : 'bg-ink-950'
      }`}
    >
      {/* 404 number */}
      <Reveal>
        <span className="font-display text-[8rem] font-bold leading-none text-gradient-animate sm:text-[12rem]">
          404
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h1
          className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl transition-colors duration-300 ${
            dark ? 'text-white' : 'text-ink-50'
          }`}
        >
          Page not found
        </h1>
      </Reveal>

      <Reveal delay={150}>
        <p
          className={`mt-4 max-w-md text-base leading-relaxed transition-colors duration-300 ${
            dark ? 'text-gray-500' : 'text-ink-400'
          }`}
        >
          The page you are looking for does not exist, was moved, or you might
          have followed a broken link.
        </p>
      </Reveal>

      <Reveal delay={220}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
              dark
                ? 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10 hover:text-white'
                : 'border-ink-300/60 bg-white text-ink-400 hover:border-brand-500/40 hover:text-brand-700'
            }`}
          >
            <FiArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Go back
          </button>

          <button
            onClick={() => navigate('/')}
            className="btn-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          >
            <FiHome className="h-4 w-4" />
            Home
          </button>
        </div>
      </Reveal>
    </div>
  )
}

export default NotFound
