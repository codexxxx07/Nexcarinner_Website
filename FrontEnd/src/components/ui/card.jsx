import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

/*
 * Nexcarinner Card — a physical UI surface, not a flat rectangle.
 * Defaults to the raised "glass" surface (white face + layered
 * 3D shadows). Pass `lift` for the elevated hover state.
 */
const Card = forwardRef(({ className, lift = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('glass rounded-2xl', lift && 'card-lift', className)}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-display text-lg font-bold leading-snug tracking-tight text-ink-50 dark:text-white', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm leading-relaxed text-ink-400 dark:text-gray-400', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
