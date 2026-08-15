import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = forwardRef(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-lg border border-white/10 bg-ink-900 px-3 py-1.5 text-xs font-medium text-white shadow-[0_4px_14px_-4px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] tooltip-in dark:border-white/12 dark:bg-white dark:text-ink-900 dark:shadow-[0_4px_14px_-4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.9)]',
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
