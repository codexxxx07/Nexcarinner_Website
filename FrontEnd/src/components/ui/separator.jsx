import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

/*
 * Nexcarinner Separator — soft gradient hairline that reads as a
 * machined edge on raised surfaces.
 */
const Separator = forwardRef(({ className, orientation = 'horizontal', ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    aria-orientation={orientation}
    className={cn(
      'shrink-0',
      orientation === 'horizontal'
        ? 'h-px w-full bg-linear-to-r from-transparent via-ink-800/80 to-transparent dark:via-white/12'
        : 'h-full w-px bg-linear-to-b from-transparent via-ink-800/80 to-transparent dark:via-white/12',
      className,
    )}
    {...props}
  />
))
Separator.displayName = 'Separator'

export { Separator }
