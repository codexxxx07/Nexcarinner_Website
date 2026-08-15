import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

/*
 * Nexcarinner Button — shadcn/ui structure, our design system.
 * Every variant carries the skeuomorphic depth language (raised pill,
 * inner highlight, press-down active state) instead of the default
 * flat shadcn look.
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-55 active:translate-y-px',
  {
    variants: {
      variant: {
        gradient: 'btn-gradient text-white',
        outline: 'btn-outline',
        soft: 'text-brand-700 border border-brand-500/20 bg-brand-500/10 hover:bg-brand-500/15 hover:border-brand-500/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:text-gray-200 dark:bg-white/6 dark:border-white/12 dark:hover:bg-white/10 dark:hover:border-white/22 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
        ghost: 'text-ink-400 hover:bg-white/70 hover:text-ink-900 dark:text-gray-400 dark:hover:bg-white/8 dark:hover:text-white',
        link: 'text-brand-700 underline-offset-4 hover:underline dark:text-gray-200',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-8 text-sm',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'gradient',
      size: 'md',
    },
  },
)

const Button = forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button, buttonVariants }
