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
        <div className="relative overflow-hidden rounded-[2rem] border border-ink-800/60 bg-gradient-to-b from-white via-white to-ink-900/60 p-10 shadow-[0_2px_4px_rgba(34,29,58,0.04),0_24px_60px_-28px_rgba(34,29,58,0.28),inset_0_1px_0_rgba(255,255,255,0.95)] sm:p-16 text-center">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-24 h-72 w-72 rounded-full bg-flare-pink/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-24 h-72 w-72 rounded-full bg-flare-cyan/10 blur-3xl" />

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
