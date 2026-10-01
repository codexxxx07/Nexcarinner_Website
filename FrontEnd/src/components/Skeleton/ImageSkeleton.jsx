import { useState } from 'react'
import { Skeleton } from './Skeleton'
import { cn } from '../../lib/utils'

/*
 * ImageSkeleton — renders the real <img> with a branded skeleton face
 * underneath until the image has fully decoded, then the placeholder
 * dissolves away. The wrapper always reserves space so there is no CLS.
 *
 *   eager        — loading="eager" for above-the-fold images.
 *                  Defaults to native loading="lazy" for below-fold.
 *   fetchPriority — "high" for LCP candidates, "low" for decorative
 *                  images. Defaults to "auto".
 *   width/height  — pass explicit pixel dimensions when known so the
 *                  browser can reserve the correct aspect ratio before
 *                  the image loads, preventing CLS.
 *   onError      — optional handler; on failure the image is replaced
 *                  by a subtle gradient tile (alt text preserved).
 */
const ImageSkeleton = ({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  imgClassName = '',
  eager = false,
  fetchPriority = 'auto',
  onError,
  width,
  height,
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
        fetchPriority={fetchPriority}
        width={width}
        height={height}
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
