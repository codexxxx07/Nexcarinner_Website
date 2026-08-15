import {
  Skeleton,
  SkeletonParagraph,
  SkeletonChip,
  SkeletonHeroHeading,
  SkeletonButton,
} from './Skeleton'
import CardSkeleton from './CardSkeleton'
import { cn } from '../../lib/utils'

/* ============================================================
 * Reusable wireframe fragments. Every block is aria-hidden and
 * sized to the real page structure so there is no layout jump
 * when the real content mounts underneath.
 * ============================================================ */

const NAV_LINKS = ['Home', 'Events', 'Gallery', 'About', 'Contact']

export const PageSkeletonNavbar = () => (
  <header className="fixed inset-x-0 top-0 z-50" aria-hidden="true">
    <div className="border-b border-white/50 bg-white/80 backdrop-blur-md dark:border-white/8 dark:bg-[#111111]/90">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-9 rounded-xl" />
          <Skeleton className="h-5 w-32 rounded-md" />
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-ink-800/60 bg-white/80 p-1.5 lg:flex dark:border-white/10 dark:bg-white/5">
          {NAV_LINKS.map((label) => (
            <Skeleton key={label} className="h-8 w-16 rounded-full" />
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Skeleton className="h-8 w-32 rounded-full" />
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-10 w-28 rounded-full" />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-xl" />
        </div>
      </nav>
    </div>
  </header>
)

export const PageSkeletonFooter = () => (
  <footer aria-hidden="true">
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <div className="skeleton-surface p-8 lg:p-10">
        <Skeleton className="h-8 w-72 max-w-full rounded-xl" />
        <SkeletonParagraph className="mt-3 max-w-md" lines={2} />
        <div className="mt-6 flex max-w-md gap-2">
          <Skeleton className="h-12 flex-1 rounded-full" />
          <Skeleton className="h-12 w-28 rounded-full" />
        </div>
      </div>
    </div>

    <div className="mx-auto mt-14 grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      {[0, 1, 2, 3].map((col) => (
        <div key={col}>
          <Skeleton className="h-5 w-28 rounded-md" />
          <div className="mt-4 space-y-3">
            {[0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-4 w-36 rounded-md" />
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-14 border-t border-ink-800/60 dark:border-white/8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-4 w-24 rounded-md" />
        </div>
        <div className="flex gap-3">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-9 w-9 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export const PageSkeletonCtaBanner = () => (
  <section className="mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
    <div className="skeleton-surface flex flex-col items-center gap-6 p-10 text-center lg:p-14">
      <SkeletonChip />
      <Skeleton className="h-9 w-80 max-w-full rounded-xl" />
      <SkeletonParagraph className="max-w-md" lines={2} />
      <SkeletonButton className="h-12 w-44" />
    </div>
  </section>
)

/* Section heading shell — eyebrow chip + title + description. */
const SectionShell = ({
  eyebrow = true,
  titleWidth = 'w-64',
  description = 2,
  action = false,
  className = '',
}) => (
  <div className={cn('flex flex-wrap items-end justify-between gap-6', className)} aria-hidden="true">
    <div className="max-w-xl">
      {eyebrow && <SkeletonChip className="h-6 w-32" />}
      <Skeleton className={cn('mt-4 h-9 rounded-xl max-w-full', titleWidth)} />
      {description > 0 && <SkeletonParagraph className="mt-4" lines={description} />}
    </div>
    {action && <SkeletonButton className="h-11 w-36" />}
  </div>
)

const CardGrid = ({ count = 3, variant = 'default', cols = 'sm:grid-cols-2 lg:grid-cols-3', className = '' }) => (
  <div className={cn('grid gap-6', cols, className)} aria-hidden="true">
    {Array.from({ length: count }, (_, i) => (
      <CardSkeleton key={i} variant={variant} />
    ))}
  </div>
)

/* Every page wireframe = navbar + <main> + footer, matching the real
 * Layout spacing so the overlay hands off without a jump. */
const PageFrame = ({ children }) => (
  <div className="pointer-events-none">
    <PageSkeletonNavbar />
    <main className="pt-16 lg:pt-20">{children}</main>
    <div className="pt-20">
      <PageSkeletonFooter />
    </div>
  </div>
)

/* ============================================================
 * Page-specific wireframes — mirror each page's real hierarchy.
 * ============================================================ */

export const HomeSkeleton = () => (
  <PageFrame>
    <section className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pt-10 lg:grid-cols-2 lg:px-8 lg:pt-16" aria-hidden="true">
      <div>
        <SkeletonChip />
        <SkeletonHeroHeading className="mt-5" />
        <SkeletonParagraph className="mt-5" lines={3} />
        <div className="mt-7 flex flex-wrap gap-3">
          <SkeletonButton />
          <SkeletonButton className="h-12 w-36" />
        </div>
        <div className="mt-9 flex items-center gap-3">
          <div className="flex -space-x-3">
            {[0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-9 w-9 rounded-full border-2 border-white dark:border-[#0f0f0f]" />
            ))}
          </div>
          <Skeleton className="h-4 w-44 rounded-md" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg">
        <Skeleton className="aspect-[4/5] w-full rounded-[1.75rem]" />
        <div className="absolute right-2 top-8 sm:-right-4">
          <div className="skeleton-surface flex items-center gap-3 px-4 py-3">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-3.5 w-28 rounded-md" />
              <Skeleton className="h-3 w-24 rounded-md" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-2 sm:-left-4">
          <div className="skeleton-surface flex items-center gap-3 px-4 py-3">
            <Skeleton className="h-9 w-9 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-3.5 w-32 rounded-md" />
              <Skeleton className="h-3 w-24 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto mt-20 w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <CardGrid count={4} variant="default" cols="grid-cols-2 lg:grid-cols-4" />
    </section>

    <section className="mx-auto mt-20 w-full max-w-7xl space-y-10 px-6 lg:px-8" aria-hidden="true">
      <SectionShell action />
      <CardGrid count={2} variant="default" cols="lg:grid-cols-2" />
    </section>

    <section className="mt-20 space-y-10" aria-hidden="true">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionShell />
      </div>
      <div className="flex gap-6 overflow-hidden px-6 opacity-70">
        {[0, 1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-12 w-44 shrink-0 rounded-full" />
        ))}
      </div>
    </section>

    <section className="mx-auto mt-20 w-full max-w-7xl space-y-10 px-6 lg:px-8" aria-hidden="true">
      <SectionShell action />
      <CardGrid count={3} variant="media" />
    </section>

    <section className="mx-auto mt-20 w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <PageSkeletonCtaBanner />
    </section>
  </PageFrame>
)

export const EventsSkeleton = () => (
  <PageFrame>
    <section className="mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <div className="mx-auto max-w-2xl text-center">
        <SkeletonChip className="mx-auto" />
        <Skeleton className="mx-auto mt-4 h-10 w-72 max-w-full rounded-xl" />
        <SkeletonParagraph className="mx-auto mt-4 max-w-lg" lines={2} />
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-10 w-28 rounded-full" />
        ))}
      </div>
      <CardGrid count={3} variant="default" className="mt-12" />
    </section>
    <section className="mx-auto mt-20 w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <PageSkeletonCtaBanner />
    </section>
  </PageFrame>
)

export const GallerySkeleton = () => (
  <PageFrame>
    <section className="mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <div className="mx-auto max-w-2xl text-center">
        <SkeletonChip className="mx-auto" />
        <Skeleton className="mx-auto mt-4 h-10 w-72 max-w-full rounded-xl" />
        <SkeletonParagraph className="mx-auto mt-4 max-w-lg" lines={2} />
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-full" />
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="skeleton-surface relative aspect-[4/3] overflow-hidden p-0">
            <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
          </div>
        ))}
      </div>
      <div className="mt-14">
        <SectionShell />
        <div className="mt-8 grid gap-6 sm:grid-cols-2" aria-hidden="true">
          <CardSkeleton variant="media" className="sm:col-span-2" />
          <CardSkeleton variant="media" />
          <CardSkeleton variant="media" />
        </div>
      </div>
    </section>
  </PageFrame>
)

export const AboutSkeleton = () => (
  <PageFrame>
    <section className="mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <div className="mx-auto max-w-2xl text-center">
        <SkeletonChip className="mx-auto" />
        <SkeletonHeroHeading className="mx-auto mt-4 justify-items-center text-center" />
        <SkeletonParagraph className="mx-auto mt-4 max-w-lg" lines={3} />
      </div>
      <div className="mt-14">
        <SectionShell />
        <CardGrid count={3} variant="icon" className="mt-8" />
      </div>
      <div className="mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <SkeletonChip className="mx-auto" />
          <Skeleton className="mx-auto mt-4 h-9 w-64 max-w-full rounded-xl" />
        </div>
        <CardGrid count={6} variant="avatar" className="mt-10 sm:grid-cols-2 lg:grid-cols-3" />
      </div>
    </section>
    <section className="mx-auto mt-20 w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <PageSkeletonCtaBanner />
    </section>
  </PageFrame>
)

export const ContactSkeleton = () => (
  <PageFrame>
    <section className="mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <div className="mx-auto max-w-2xl text-center">
        <SkeletonChip className="mx-auto" />
        <Skeleton className="mx-auto mt-4 h-10 w-72 max-w-full rounded-xl" />
        <SkeletonParagraph className="mx-auto mt-4 max-w-lg" lines={2} />
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6" aria-hidden="true">
          <CardSkeleton variant="icon" listItems={1} />
          <CardSkeleton variant="icon" listItems={1} />
          <CardSkeleton variant="icon" listItems={1} />
        </div>
        <div className="skeleton-surface p-7 lg:p-8" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div key={i} className="mb-5 space-y-2">
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          ))}
          <Skeleton className="h-4 w-24 rounded-md" />
          <Skeleton className="mt-2 h-32 w-full rounded-xl" />
          <SkeletonButton className="mt-6 h-12 w-44" />
        </div>
      </div>
    </section>
  </PageFrame>
)

export const BlogSkeleton = () => (
  <PageFrame>
    <section className="mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <div className="mx-auto max-w-2xl text-center">
        <SkeletonChip className="mx-auto" />
        <Skeleton className="mx-auto mt-4 h-10 w-64 max-w-full rounded-xl" />
        <SkeletonParagraph className="mx-auto mt-4 max-w-lg" lines={2} />
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2" aria-hidden="true">
        <CardSkeleton variant="media" className="lg:col-span-2 lg:grid-cols-1" />
      </div>
      <CardGrid count={6} variant="media" className="mt-6 sm:grid-cols-2 lg:grid-cols-3" />
    </section>
  </PageFrame>
)

export const DocumentationSkeleton = () => (
  <PageFrame>
    <section className="mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <div className="mx-auto max-w-2xl text-center">
        <SkeletonChip className="mx-auto" />
        <Skeleton className="mx-auto mt-4 h-10 w-72 max-w-full rounded-xl" />
        <SkeletonParagraph className="mx-auto mt-4 max-w-lg" lines={2} />
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr]">
        <div className="skeleton-surface hidden p-6 lg:block" aria-hidden="true">
          <Skeleton className="h-5 w-28 rounded-md" />
          <div className="mt-4 space-y-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-4 w-40 rounded-md" />
            ))}
          </div>
        </div>
        <div aria-hidden="true">
          <Skeleton className="h-9 w-3/4 rounded-xl" />
          <SkeletonParagraph className="mt-5" lines={4} />
          <Skeleton className="mt-8 h-9 w-1/2 rounded-xl" />
          <SkeletonParagraph className="mt-5" lines={4} />
          <Skeleton className="mt-8 h-9 w-2/3 rounded-xl" />
          <SkeletonParagraph className="mt-5" lines={3} />
        </div>
      </div>
    </section>
  </PageFrame>
)

export const FaqSkeleton = () => (
  <PageFrame>
    <section className="mx-auto w-full max-w-3xl px-6 lg:px-8" aria-hidden="true">
      <div className="mx-auto max-w-xl text-center">
        <SkeletonChip className="mx-auto" />
        <Skeleton className="mx-auto mt-4 h-10 w-64 max-w-full rounded-xl" />
        <SkeletonParagraph className="mx-auto mt-4" lines={2} />
      </div>
      <div className="mt-12 space-y-3" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="skeleton-surface p-6">
            <div className="flex items-center justify-between gap-4">
              <Skeleton className="h-5 w-2/3 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-full" />
            </div>
            {i === 0 && <SkeletonParagraph className="mt-4" lines={2} />}
          </div>
        ))}
      </div>
    </section>
  </PageFrame>
)

export const NotFoundSkeleton = () => (
  <PageFrame>
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-16 text-center lg:px-8" aria-hidden="true">
      <Skeleton className="h-20 w-48 rounded-xl" />
      <Skeleton className="mt-8 h-8 w-72 max-w-full rounded-xl" />
      <SkeletonParagraph className="mx-auto mt-4 max-w-md" lines={2} />
      <SkeletonButton className="mt-8 h-12 w-44" />
    </section>
  </PageFrame>
)

/* ------------------------------------------------------------
 * Router-aware picker — maps the current pathname to the correct
 * wireframe. Used by PageSkeletonLoader; '/' and gallery params
 * (e.g. /gallery/photos) are handled. Unknown paths get the
 * NotFound wireframe, matching App's catch-all route.
 * ------------------------------------------------------------ */
const PageSkeleton = ({ pathname = '/' }) => {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path.startsWith('/events')) return <EventsSkeleton />
  if (path.startsWith('/gallery')) return <GallerySkeleton />
  if (path.startsWith('/about')) return <AboutSkeleton />
  if (path.startsWith('/contact')) return <ContactSkeleton />
  if (path.startsWith('/blog')) return <BlogSkeleton />
  if (path.startsWith('/documentation')) return <DocumentationSkeleton />
  if (path.startsWith('/guides')) return <BlogSkeleton />
  if (path.startsWith('/faq')) return <FaqSkeleton />
  if (path === '/') return <HomeSkeleton />
  return <NotFoundSkeleton />
}

export default PageSkeleton
