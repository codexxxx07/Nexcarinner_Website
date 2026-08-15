import { useEffect } from 'react'
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiAward,
  FiCalendar,
  FiCheckCircle,
  FiExternalLink,
  FiHeart,
  FiMapPin,
  FiUsers,
} from 'react-icons/fi'
import Reveal from '../components/Reveal'
import BackButton from '../components/BackButton'
import CtaBanner from '../components/CtaBanner'
import BlurText from '../components/reactbits/BlurText'
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs'
import { useTheme } from '../context/ThemeContext'
import { usePageTitle } from '../hooks/usePageTitle'
import ImageSkeleton from '../components/Skeleton/ImageSkeleton'
import {
  galleryCategories,
  categoryMeta,
  gallerySections,
  overviewItems,
} from '../data/galleryData'

/* Event type → badge colors, matching the Events page palette. */
const eventTypeStyles = {
  Workshops: {
    light: { text: 'text-cyan-800', bg: 'bg-cyan-100/90', border: 'border-white/60' },
    dark: { text: 'text-cyan-300', bg: 'bg-cyan-900/40', border: 'border-white/15' },
  },
  Hackathons: {
    light: { text: 'text-pink-600', bg: 'bg-pink-100/90', border: 'border-white/60' },
    dark: { text: 'text-pink-300', bg: 'bg-pink-900/40', border: 'border-white/15' },
  },
  Meetups: {
    light: { text: 'text-violet-700', bg: 'bg-violet-100/90', border: 'border-white/60' },
    dark: { text: 'text-violet-300', bg: 'bg-violet-900/40', border: 'border-white/15' },
  },
  Webinars: {
    light: { text: 'text-sky-700', bg: 'bg-sky-100/90', border: 'border-white/60' },
    dark: { text: 'text-sky-300', bg: 'bg-sky-900/40', border: 'border-white/15' },
  },
}

const GalleryLink = ({ item, dark, className = '' }) => {
  const arrow = (
    <FiArrowUpRight
      className={`h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 ${
        dark ? 'text-gray-400' : 'text-brand-600'
      }`}
    />
  )

  if (item.external) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group/link inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
          dark ? 'text-gray-300 hover:text-white' : 'text-brand-700 hover:text-brand-800'
        } ${className}`}
      >
        {item.linkLabel}
        {arrow}
      </a>
    )
  }

  return (
    <Link
      to={item.link}
      className={`group/link inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
        dark ? 'text-gray-300 hover:text-white' : 'text-brand-700 hover:text-brand-800'
      } ${className}`}
    >
      {item.linkLabel}
      {arrow}
    </Link>
  )
}

/* Branded cover — image when present, otherwise a tactile gradient tile. */
const GalleryCover = ({ item, accent }) => {
  if (item.image) {
    return (
      <ImageSkeleton
        src={item.image}
        alt={item.title}
        wrapperClassName="h-full w-full"
        imgClassName="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
    )
  }

  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-linear-to-br ${accent}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(255,255,255,0.28) 0%, transparent 68%)',
        }}
      />
      <div className="absolute inset-3 rounded-2xl border border-white/20" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_20px_-8px_rgba(0,0,0,0.45)]">
        <item.icon className="h-6 w-6" />
      </span>
      <span className="absolute bottom-3 right-4 text-[10px] font-semibold uppercase tracking-widest text-white/50">
        Nexcarinner
      </span>
    </div>
  )
}

/* Shared card shell — the physical glass face with a top highlight line. */
const CardShell = ({ dark, className = '', children }) => (
  <div
    className={`glass card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1.5 ${className}`}
  >
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent ${
        dark ? 'via-white/12' : 'via-brand-500/40'
      } to-transparent`}
    />
    {children}
  </div>
)

const YearChip = ({ year, className = '' }) => (
  <span
    className={`flex h-7 items-center rounded-full border border-white/25 bg-black/20 px-2.5 text-xs font-semibold text-white backdrop-blur-md ${className}`}
  >
    {year}
  </span>
)

const CardHeading = ({ dark, children }) => (
  <h3
    className={`font-display text-lg font-bold leading-snug tracking-tight transition-colors duration-300 ${
      dark ? 'text-white' : 'text-ink-50'
    }`}
  >
    {children}
  </h3>
)

const CardBody = ({ dark, children }) => (
  <p
    className={`mt-2.5 flex-1 text-sm leading-relaxed transition-colors duration-300 ${
      dark ? 'text-gray-400' : 'text-ink-400'
    }`}
  >
    {children}
  </p>
)

/* ---------------------------------------------------------------- Overview */
const OverviewCard = ({ item, size, dark }) => {
  const meta = categoryMeta[item.category]
  const badge = dark ? meta.badge.dark : meta.badge.light
  const isHero = size === 'hero'

  const chip = (
    <>
      <span
        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm ${badge}`}
      >
        {meta.label}
      </span>
      <span className="flex h-7 items-center rounded-full border border-white/25 bg-black/20 px-2.5 text-xs font-semibold text-white backdrop-blur-md">
        {item.year}
      </span>
    </>
  )

  if (isHero) {
    return (
      <div className="glass card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1.5 sm:col-span-2 lg:col-span-3">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent ${
            dark ? 'via-white/12' : 'via-brand-500/40'
          } to-transparent`}
        />

        <div className="grid flex-1 lg:grid-cols-2">
          <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:h-full">
            <GalleryCover item={item} accent={item.accent} />
            <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">{chip}</div>
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <h3
              className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 sm:text-3xl ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`mt-3 max-w-md leading-relaxed transition-colors duration-300 ${
                dark ? 'text-gray-400' : 'text-ink-400'
              }`}
            >
              {item.description}
            </p>
            {item.link && <GalleryLink item={item} dark={dark} className="mt-6" />}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`glass card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1.5 ${size === 'wide' ? 'sm:col-span-2' : ''}`}>
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent ${
          dark ? 'via-white/12' : 'via-brand-500/40'
        } to-transparent`}
      />

      <div className={`relative overflow-hidden ${size === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <GalleryCover item={item} accent={item.accent} />
        <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">{chip}</div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <CardHeading dark={dark}>{item.title}</CardHeading>
        <CardBody dark={dark}>{item.description}</CardBody>
        {item.link && (
          <div
            className={`mt-5 flex items-center justify-between border-t pt-4 transition-colors duration-300 ${
              dark ? 'border-white/8' : 'border-ink-800/70'
            }`}
          >
            <GalleryLink item={item} dark={dark} />
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ Projects */
const ProjectCard = ({ item, size, dark }) => {
  const badge = dark ? categoryMeta.projects.badge.dark : categoryMeta.projects.badge.light
  const wide = size === 'wide'

  return (
    <CardShell dark={dark} className={wide ? 'sm:col-span-2' : ''}>
      <div className={`relative overflow-hidden ${wide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <GalleryCover item={item} accent={item.accent} />
        <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm ${badge}`}
          >
            {item.tech}
          </span>
          <YearChip year={item.year} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <CardHeading dark={dark}>{item.title}</CardHeading>
        <CardBody dark={dark}>{item.description}</CardBody>
        {(item.creator || item.link) && (
          <div className="mt-auto pt-5">
            <div
              className={`flex items-center justify-between gap-3 border-t pt-4 transition-colors duration-300 ${
                dark ? 'border-white/8' : 'border-ink-800/70'
              }`}
            >
              {item.creator ? (
                <span
                  className={`flex min-w-0 items-center gap-2 text-xs font-semibold ${
                    dark ? 'text-gray-500' : 'text-ink-400'
                  }`}
                >
                  <FiUsers className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{item.creator}</span>
                </span>
              ) : (
                <span />
              )}
              {item.link && <GalleryLink item={item} dark={dark} />}
            </div>
          </div>
        )}
      </div>
    </CardShell>
  )
}

/* ------------------------------------------------------------ Community Collab */
const CollabCard = ({ item, size, dark }) => {
  const wide = size === 'wide'

  return (
    <CardShell dark={dark} className={wide ? 'sm:col-span-2' : ''}>
      <div className={`relative overflow-hidden ${wide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        {item.image ? (
          <ImageSkeleton
            src={item.image}
            alt={item.name}
            wrapperClassName="h-full w-full"
            imgClassName="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-linear-to-br from-flare-cyan to-brand-500">
            <FiUsers className="h-12 w-12 text-white/90" />
          </div>
        )}

        {/* Nexcarinner × partner connector */}
        <div className="absolute left-4 top-4 z-10">
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold shadow-sm backdrop-blur-md ${
              dark
                ? 'border-white/20 bg-black/50 text-brand-300'
                : 'border-brand-500/30 bg-white/90 text-brand-700'
            }`}
          >
            <FiUsers className="h-3.5 w-3.5" />
            Nexcarinner
            <span className={`text-[10px] ${dark ? 'text-gray-500' : 'text-ink-400'}`}>×</span>
          </span>
        </div>
        <YearChip year={item.year} className="absolute right-4 top-4 z-10" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p
          className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
            dark ? 'text-cyan-300' : 'text-cyan-700'
          }`}
        >
          Community Collab
        </p>
        <h3
          className={`mt-1.5 font-display text-lg font-bold leading-snug tracking-tight transition-colors duration-300 ${
            dark ? 'text-white' : 'text-ink-50'
          }`}
        >
          Nexcarinner <span className={dark ? 'text-brand-400' : 'text-brand-600'}>×</span> {item.name}
        </h3>
        <CardBody dark={dark}>{item.description}</CardBody>
        <div className="mt-auto pt-5">
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-300 ${
              dark ? 'text-gray-500' : 'text-ink-400'
            }`}
          >
            <FiUsers className="h-3.5 w-3.5" />
            Partnership · {item.year}
          </span>
        </div>
      </div>
    </CardShell>
  )
}

/* ----------------------------------------------------------- Certifications */
const CertificationCard = ({ item, size, dark }) => {
  const wide = size === 'wide'

  return (
    <CardShell dark={dark} className={wide ? 'sm:col-span-2' : ''}>
      <div className={`relative overflow-hidden ${wide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <GalleryCover item={item} accent={item.accent} />
        <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold shadow-sm backdrop-blur-md ${
              dark
                ? 'border-emerald-300/20 bg-emerald-400/10 text-emerald-300'
                : 'border-emerald-500/30 bg-emerald-500/15 text-emerald-700'
            }`}
          >
            <FiCheckCircle className="h-3.5 w-3.5" />
            Verified
          </span>
          <YearChip year={item.year} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p
          className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
            dark ? 'text-pink-300' : 'text-pink-600'
          }`}
        >
          {item.memberName}
        </p>
        <CardHeading dark={dark}>{item.certificateTitle}</CardHeading>
        <p
          className={`mt-2 text-sm font-medium transition-colors duration-300 ${
            dark ? 'text-gray-500' : 'text-ink-400'
          }`}
        >
          {item.issuer}
        </p>

        <div className="mt-auto pt-5">
          {item.verificationUrl ? (
            <a
              href={item.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/verify inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                dark ? 'text-emerald-300 hover:text-emerald-200' : 'text-emerald-700 hover:text-emerald-800'
              }`}
            >
              Verify Certificate
              <FiExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/verify:translate-x-0.5 group-hover/verify:-translate-y-0.5" />
            </a>
          ) : (
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                dark ? 'text-gray-500' : 'text-ink-400'
              }`}
            >
              <FiCheckCircle className="h-3.5 w-3.5" />
              Certificate on file
            </span>
          )}
        </div>
      </div>
    </CardShell>
  )
}

/* ------------------------------------------------------------------- Awards */
const FeaturedBadge = ({ dark }) => (
  <span
    className={`absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold shadow-sm backdrop-blur-md ${
      dark
        ? 'border-amber-300/25 bg-amber-300/10 text-amber-300'
        : 'border-amber-500/40 bg-amber-400/20 text-amber-700'
    }`}
  >
    <FiAward className="h-3.5 w-3.5" />
    Featured recognition
  </span>
)

const AwardCard = ({ item, size, dark }) => {
  const isHero = size === 'hero'
  const wide = size === 'wide'
  const featured = Boolean(item.featured)
  const orgBadge = dark ? categoryMeta.awards.badge.dark : categoryMeta.awards.badge.light
  const ring = featured
    ? 'ring-2 ring-amber-500/25 dark:ring-amber-400/20'
    : ''

  const topLine = (
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent ${
        featured
          ? dark
            ? 'via-amber-300/60'
            : 'via-amber-500/70'
          : dark
            ? 'via-white/12'
            : 'via-brand-500/40'
      } to-transparent`}
    />
  )

  const chip = (
    <>
      <span
        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm ${orgBadge}`}
      >
        {item.organization}
      </span>
      <span className="flex h-7 items-center rounded-full border border-white/25 bg-black/20 px-2.5 text-xs font-semibold text-white backdrop-blur-md">
        {item.year}
      </span>
    </>
  )

  if (isHero) {
    return (
      <div
        className={`glass card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1.5 sm:col-span-2 lg:col-span-3 ${ring}`}
      >
        {topLine}
        <div className="grid flex-1 lg:grid-cols-2">
          <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:h-full">
            <GalleryCover item={item} accent={item.accent} />
            <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">{chip}</div>
            <FeaturedBadge dark={dark} />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p
              className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                dark ? 'text-amber-300' : 'text-amber-600'
              }`}
            >
              Featured recognition
            </p>
            <h3
              className={`mt-2 font-display text-2xl font-bold tracking-tight transition-colors duration-300 sm:text-3xl ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`mt-3 max-w-md leading-relaxed transition-colors duration-300 ${
                dark ? 'text-gray-400' : 'text-ink-400'
              }`}
            >
              {item.description}
            </p>
            {item.link && <GalleryLink item={item} dark={dark} className="mt-6" />}
          </div>
        </div>
      </div>
    )
  }

  return (
    <CardShell dark={dark} className={`${wide ? 'sm:col-span-2' : ''} ${ring}`}>
      {topLine}
      <div className={`relative overflow-hidden ${wide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <GalleryCover item={item} accent={item.accent} />
        <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">{chip}</div>
        <div className="absolute bottom-4 left-4 z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_20px_-8px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <FiAward className="h-5 w-5" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <CardHeading dark={dark}>{item.title}</CardHeading>
        <CardBody dark={dark}>{item.description}</CardBody>
        <div className="mt-auto pt-5">
          {item.link ? (
            <div
              className={`flex items-center justify-between border-t pt-4 transition-colors duration-300 ${
                dark ? 'border-white/8' : 'border-ink-800/70'
              }`}
            >
              <GalleryLink item={item} dark={dark} />
            </div>
          ) : (
            <div
              className={`flex items-center justify-between border-t pt-4 transition-colors duration-300 ${
                dark ? 'border-white/8' : 'border-ink-800/70'
              }`}
            >
              <span
                className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  dark ? 'text-amber-300' : 'text-amber-600'
                }`}
              >
                {item.organization}
              </span>
            </div>
          )}
        </div>
      </div>
    </CardShell>
  )
}

/* -------------------------------------------------------------------- Events */
const EventCard = ({ item, size, dark }) => {
  const wide = size === 'wide'
  const styleSet = eventTypeStyles[item.type] || eventTypeStyles.Workshops
  const style = dark ? styleSet.dark : styleSet.light

  return (
    <CardShell dark={dark} className={wide ? 'sm:col-span-2' : ''}>
      <div className={`relative overflow-hidden ${wide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <GalleryCover item={item} accent={item.accent} />
        <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm ${style.bg} ${style.border} ${style.text}`}
          >
            {item.type}
          </span>
          <YearChip year={item.year} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <CardHeading dark={dark}>{item.title}</CardHeading>
        <CardBody dark={dark}>{item.description}</CardBody>
        <div className="mt-auto pt-5">
          <div
            className={`flex items-center justify-between gap-3 border-t pt-4 text-sm transition-colors duration-300 ${
              dark ? 'border-white/8 text-gray-500' : 'border-ink-800/70 text-ink-400'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <FiCalendar className={`h-4 w-4 ${dark ? 'text-gray-400' : 'text-brand-600'}`} />
              {item.date}
            </span>
            <span className="flex min-w-0 items-center gap-1.5 truncate">
              <FiMapPin className={`h-4 w-4 shrink-0 ${dark ? 'text-gray-400' : 'text-brand-600'}`} />
              <span className="truncate">{item.location}</span>
            </span>
          </div>
          {item.link && (
            <div className="mt-4 flex justify-end">
              <GalleryLink item={item} dark={dark} />
            </div>
          )}
        </div>
      </div>
    </CardShell>
  )
}

/* ------------------------------------------------------- Community Moments */
const MomentCard = ({ item, size, dark }) => {
  const wide = size === 'wide'

  return (
    <CardShell dark={dark} className={wide ? 'sm:col-span-2' : ''}>
      <div className={`relative overflow-hidden ${wide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <GalleryCover item={item} accent={item.accent} />
        <YearChip year={item.year} className="absolute left-4 top-4 z-10" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <CardHeading dark={dark}>{item.title}</CardHeading>
        <CardBody dark={dark}>{item.description}</CardBody>
        <div className="mt-auto pt-5">
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
              dark ? 'text-fuchsia-300' : 'text-fuchsia-600'
            }`}
          >
            <FiHeart className="h-3.5 w-3.5" />
            Community Moment · {item.year}
          </span>
        </div>
      </div>
    </CardShell>
  )
}

const cardBySlug = {
  projects: ProjectCard,
  'community-collab': CollabCard,
  certifications: CertificationCard,
  awards: AwardCard,
  events: EventCard,
  'community-moments': MomentCard,
}

const Gallery = () => {
  const { dark } = useTheme()
  const { category = 'all' } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const activeCategory = galleryCategories.some((c) => c.slug === category) ? category : 'all'
  const meta = categoryMeta[activeCategory]

  usePageTitle(meta.label)

  // Every gallery route opens from the top — handled here for the single
  // /gallery/:category? route, so no duplicate global scroll logic is needed.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const sizeFor = (item, index) => {
    if (activeCategory === 'all') {
      if (item.featured === 'hero') return 'hero'
      if (item.featured === 'wide') return 'wide'
      return undefined
    }
    if (activeCategory === 'awards') {
      if (item.featured === 'hero') return 'hero'
      if (item.featured === 'wide') return 'wide'
      return undefined
    }
    return index === 0 ? 'wide' : undefined
  }

  const renderGrid = () => {
    if (activeCategory === 'all') {
      return overviewItems.map((item, index) => (
        <Reveal key={item.id} delay={(index % 3) * 80} className="h-full">
          <OverviewCard item={item} size={sizeFor(item, index)} dark={dark} />
        </Reveal>
      ))
    }

    const Card = cardBySlug[activeCategory]
    return gallerySections[activeCategory].map((item, index) => (
      <Reveal key={item.id} delay={(index % 3) * 80} className="h-full">
        <Card item={item} size={sizeFor(item, index)} dark={dark} />
      </Reveal>
    ))
  }

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-20 text-center lg:px-8 lg:pt-28">
        {activeCategory !== 'all' && (
          <Reveal className="mb-10 flex justify-start">
            <BackButton to="/gallery" />
          </Reveal>
        )}

        <Reveal>
          <span className="chip">{meta.chip}</span>
        </Reveal>

        <Reveal delay={100}>
          {activeCategory === 'all' ? (
            <BlurText
              as="h1"
              text="Inside Nexcarinner"
              wordClassNames={['', 'text-gradient-animate']}
              delay={60}
              className={`mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl transition-colors duration-300 ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            />
          ) : (
            <h1
              className={`mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl transition-colors duration-300 ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            >
              {meta.heading}
            </h1>
          )}
        </Reveal>

        <Reveal delay={200}>
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            {meta.description}
          </p>
        </Reveal>
      </section>

      {/* Category navigation */}
      <section className="mx-auto max-w-7xl px-6 pt-4 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center">
            <Tabs
              value={activeCategory}
              onValueChange={(value) =>
                navigate(value === 'all' ? '/gallery' : `/gallery/${value}`)
              }
            >
              <TabsList className="h-auto flex-wrap py-1.5">
                {galleryCategories.map((c) => (
                  <TabsTrigger key={c.slug} value={c.slug}>
                    {c.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </Reveal>
      </section>

      {/* Gallery grid */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-flow-dense grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {renderGrid()}
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Your work belongs <span className="text-gradient">here next</span>
          </>
        }
        description="Every project, collaboration, certification, and win in this gallery started with someone showing up. That could be you next."
        primaryLabel="Join the Community"
        primaryTo="/contact"
        secondaryLabel="Explore Events"
        secondaryTo="/events"
      />
    </>
  )
}

export default Gallery
