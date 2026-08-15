import * as TabsPrimitive from '@radix-ui/react-tabs'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

/*
 * Nexcarinner Tabs — pill-styled, matching the navbar's liquid-glass
 * segmented control. The active tab sits on a raised white chip in
 * light mode / soft highlight in dark mode.
 */
const Tabs = TabsPrimitive.Root

const TabsList = forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-12 items-center justify-center gap-1 rounded-full border border-ink-800/60 bg-white/70 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(34,29,58,0.06),0_3px_8px_-4px_rgba(34,29,58,0.1)] dark:border-white/10 dark:bg-white/5 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4)]',
      className,
    )}
    {...props}
  />
))
TabsList.displayName = 'TabsList'

const TabsTrigger = forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold text-ink-400 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-brand-700 data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(124,58,237,0.08),0_2px_8px_-2px_rgba(124,58,237,0.18)] hover:text-ink-700 dark:text-gray-400 dark:data-[state=active]:bg-white/10 dark:data-[state=active]:text-white dark:data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:text-gray-200',
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }
