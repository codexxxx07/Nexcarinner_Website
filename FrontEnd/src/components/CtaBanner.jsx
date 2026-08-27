import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'
import { Button } from './ui/button'
import { useTheme } from '../context/ThemeContext'

const CtaBanner = ({
  title,
  description,
  primaryLabel = 'Join Now',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}) => {
  const { dark } = useTheme()

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
      <Reveal variant="zoom">
        <div
          className="relative overflow-hidden rounded-4xl border p-8 sm:p-12 text-center transition-colors duration-300"
          style={
            dark
              ? {
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: [
                    'inset 0 1px 0 rgba(255,255,255,0.06)',
                    '0 1px 2px rgba(0,0,0,0.5)',
                    '0 14px 36px -12px rgba(0,0,0,0.6)',
                    '0 40px 80px -36px rgba(0,0,0,0.5)',
                  ].join(', '),
                }
              : {
                  background: 'linear-gradient(160deg, #ffffff 0%, #faf9fc 45%, #f3f0ff 100%)',
                  border: undefined,
                  boxShadow: [
                    'inset 0 1px 0 rgba(255,255,255,1)',
                    '0 1px 2px rgba(34,29,58,0.05)',
                    '0 12px 32px -12px rgba(34,29,58,0.16)',
                    '0 36px 72px -32px rgba(34,29,58,0.2)',
                    '0 40px 80px -40px rgba(124,58,237,0.12)',
                  ].join(', '),
                }
          }
        >
          {/* Top highlight line */}
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${
              dark ? 'via-white/15' : 'via-brand-500/50'
            } to-transparent`}
          />

          <div className="relative">
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300 ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            >
              {title}
            </h2>
            <p
              className={`mx-auto mt-4 max-w-xl text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                dark ? 'text-gray-400' : 'text-ink-400'
              }`}
            >
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to={primaryTo}>
                  {primaryLabel}
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {secondaryLabel && secondaryTo && (
                <Button asChild variant="outline" size="lg">
                  <Link to={secondaryTo} className={dark ? 'text-gray-300 hover:text-white' : 'text-ink-300 hover:text-brand-700'}>
                    {secondaryLabel}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default CtaBanner
