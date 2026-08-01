import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'

const CtaBanner = ({
  title,
  description,
  primaryLabel = 'Join Now',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-24">
      <Reveal variant="zoom">
        <div
          className="relative overflow-hidden rounded-4xl border border-ink-800/50 p-10 sm:p-16 text-center"
          style={{
            background: 'linear-gradient(160deg, #ffffff 0%, #faf9fc 45%, #f3f0ff 100%)',
            boxShadow: [
              'inset 0 1px 0 rgba(255,255,255,1)',
              '0 1px 2px rgba(34,29,58,0.05)',
              '0 12px 32px -12px rgba(34,29,58,0.16)',
              '0 36px 72px -32px rgba(34,29,58,0.2)',
              '0 40px 80px -40px rgba(124,58,237,0.12)',
            ].join(', '),
          }}
        >
          {/* Top highlight line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 tracking-tight">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-ink-400 leading-relaxed">
              {description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to={primaryTo}
                className="btn-gradient inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold text-white"
              >
                {primaryLabel}
                <FiArrowRight className="h-4 w-4" />
              </Link>
              {secondaryLabel && secondaryTo && (
                <Link
                  to={secondaryTo}
                  className="btn-outline px-8 py-3.5 text-sm font-semibold text-ink-300 hover:text-brand-700"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default CtaBanner
