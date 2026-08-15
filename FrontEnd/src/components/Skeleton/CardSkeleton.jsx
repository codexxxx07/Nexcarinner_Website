import { Skeleton, SkeletonParagraph } from './Skeleton'
import { cn } from '../../lib/utils'

/*
 * CardSkeleton — a wireframe of the Nexcarinner glass cards.
 * `variant` mirrors the common card archetypes:
 *   default  — icon + title + copy + chips + footer row (communities/stats)
 *   icon     — icon + title + copy + list items (docs / values)
 *   avatar   — centered circular avatar + name + role (team)
 *   media    — image block on top + title + copy + meta (blog / gallery)
 */
const CardSkeleton = ({ variant = 'default', className = '', listItems = 3 }) => {
  const inner = () => {
    switch (variant) {
      case 'icon':
        return (
          <div className="p-7">
            <Skeleton className="h-12 w-12 rounded-xl" />
            <Skeleton className="mt-5 h-5 w-2/3 rounded-md" />
            <SkeletonParagraph className="mt-3" lines={2} />
            {listItems > 0 && (
              <div className="mt-5 space-y-2.5">
                {Array.from({ length: listItems }, (_, i) => (
                  <Skeleton
                    key={i}
                    className="h-4 rounded-md"
                    style={{ width: `${96 - i * 8}%` }}
                  />
                ))}
              </div>
            )}
          </div>
        )

      case 'avatar':
        return (
          <div className="flex flex-col items-center p-8">
            <Skeleton className="h-28 w-28 rounded-full" />
            <Skeleton className="mt-6 h-5 w-32 rounded-md" />
            <Skeleton className="mt-2 h-4 w-24 rounded-md" />
            <SkeletonParagraph className="mt-4 max-w-[90%]" lines={2} />
            <div className="mt-6 flex gap-3">
              {[0, 1, 2].map((i) => (
                <Skeleton key={i} className="h-9 w-9 rounded-full" />
              ))}
            </div>
          </div>
        )

      case 'media':
        return (
          <div>
            <Skeleton className="aspect-[4/3] w-full rounded-none" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-4 w-16 rounded-md" />
              </div>
              <Skeleton className="mt-5 h-5 w-full rounded-md" />
              <SkeletonParagraph className="mt-3" lines={2} />
              <Skeleton className="mt-5 h-4 w-28 rounded-md" />
            </div>
          </div>
        )

      default:
        return (
          <div className="p-7">
            <div className="flex items-start justify-between gap-3">
              <Skeleton className="h-12 w-12 rounded-xl" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <Skeleton className="mt-6 h-5 w-2/3 rounded-md" />
            <SkeletonParagraph className="mt-3" lines={2} />
            <div className="mt-5 flex flex-wrap gap-1.5">
              {[0, 1, 2].map((i) => (
                <Skeleton key={i} className="h-6 w-20 rounded-full" />
              ))}
            </div>
            <div className="skeleton-divider mt-6" />
            <div className="mt-5 flex items-center justify-between gap-3">
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-full" />
            </div>
          </div>
        )
    }
  }

  return (
    <div className={cn('skeleton-surface h-full', className)} aria-hidden="true">
      {inner()}
    </div>
  )
}

export default CardSkeleton
