import { useState } from 'react'
import { Skeleton } from './Skeleton'
import { cn } from '../../lib/utils'

/*
 * ImageSkeleton — renders the real <img> (preserving size/layout)
 * with a branded skeleton face underneath until the image has fully
 * decoded, then the placeholder dissolves away. The img box always
 * reserves the space, so there is never a layout shift.
 *
 *   eager  — loading="eager" for above-the-fold images; the default
 *            uses native loading="lazy", which defers below-fold
 *            fetches while the skeleton face stays visible.
 *   onError — optional handler if the image fails to load; the image
 *             is replaced by a subtle gradient tile (alt text kept).
 */
const ImageSkeleton = ({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  imgClassName = '',
  eager = false,
  onError,
  ...imgProps
}) => {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className={cn('relative', wrapperClassName)}>
      {!failed && !loaded && (
        <Skeleton
          aria-hidden="true"
          className={cn('absolute inset-0 h-full w-full rounded-none', className)}
        />
      )}
      {failed && (
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 flex h-full w-full items-center justify-center rounded-none bg-ink-800/70 dark:bg-black/40',
            className,
          )}
        >
          <span className="h-10 w-10 rounded-full bg-gradient-to-br from-flare-cyan to-brand-500 opacity-60" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setFailed(true)
          if (onError) onError()
        }}
        className={cn(
          'skeleton-fade block',
          loaded && !failed ? 'opacity-100' : 'opacity-0',
          imgClassName,
        )}
        {...imgProps}
      />
    </div>
  )
}

export default ImageSkeleton
