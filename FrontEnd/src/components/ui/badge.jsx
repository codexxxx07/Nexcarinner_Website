import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

/*
 * Nexcarinner Badge — raised pill label. Composes with the chip
 * language but stays flexible for inline tags and category labels.
 */
const badgeVariants = cva(
  'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border font-semibold uppercase tracking-wider transition-colors duration-200',
  {
    variants: {
      variant: {
        default:
          'border-brand-500/25 bg-brand-500/10 text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-white/14 dark:bg-white/6 dark:text-gray-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
        outline:
          'border-ink-300/60 bg-transparent text-ink-500 dark:border-white/14 dark:text-gray-400',
        soft:
          'border-transparent bg-ink-800/60 text-ink-500 dark:bg-white/8 dark:text-gray-400',
        brand:
          'border-brand-600/30 bg-gradient-to-b from-brand-500 to-brand-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.12),0_4px_12px_-4px_rgba(124,58,237,0.5)]',
      },
      size: {
        sm: 'px-2.5 py-1 text-[10px]',
        md: 'px-3 py-1 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
)

const Badge = forwardRef(({ className, variant, size, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(badgeVariants({ variant, size }), className)}
    {...props}
  />
))
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
