import { Skeleton } from '../ui/skeleton'
import { cn } from '../../lib/utils'

/* Base block (shadcn-style primitive, Nexcarinner-branded). */
export { Skeleton }

/* Paragraph of "text" — lines shrink toward the last one. */
export const SkeletonParagraph = ({ lines = 3, className = '' }) => (
  <div className={cn('space-y-2.5', className)} aria-hidden="true">
    {Array.from({ length: lines }, (_, i) => (
      <Skeleton
        key={i}
        className={cn(
          'h-4 rounded-md',
          i === lines - 1 ? 'w-2/3' : 'w-full',
        )}
      />
    ))}
  </div>
)

/* Small pill — eyebrows, tags, chips. */
export const SkeletonChip = ({ className = '' }) => (
  <Skeleton className={cn('h-7 w-36 max-w-full rounded-full', className)} />
)

/* Large page-hero heading, two lines. */
export const SkeletonHeroHeading = ({ className = '' }) => (
  <div className={cn('space-y-3', className)} aria-hidden="true">
    <Skeleton className="h-12 w-full max-w-xl rounded-xl sm:h-14" />
    <Skeleton className="h-12 w-3/4 max-w-lg rounded-xl sm:h-14" />
  </div>
)

/* Pill button placeholder. */
export const SkeletonButton = ({ className = '' }) => (
  <Skeleton className={cn('h-12 w-40 max-w-full rounded-full', className)} />
)
