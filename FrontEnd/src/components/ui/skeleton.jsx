import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

/*
 * Nexcarinner Skeleton — shadcn/ui structure, branded to the design
 * system. A soft raised surface (light: ink-800, dark: #232323) with
 * a subtle shimmer sweep. Use `className` to control size and rounding.
 * It is inert for assistive tech — real loading text is announced by
 * the PageSkeleton wrapper instead.
 */
const Skeleton = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    aria-hidden="true"
    className={cn('skeleton-block', className)}
    {...props}
  />
))
Skeleton.displayName = 'Skeleton'

export { Skeleton }
