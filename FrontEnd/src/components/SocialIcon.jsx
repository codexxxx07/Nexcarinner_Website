import { cn } from '../lib/utils'

/*
 * Shared social icon — used by both the About team cards and the Footer
 * so hover behaviour stays identical across the site.
 * Pass the platform's hover style via `hoverClass`.
 */
const SocialIcon = ({ icon: Icon, href, label, hoverClass = '', className = '' }) => {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_6px_14px_-4px_rgba(34,29,58,0.25)] cursor-target',
        'bg-white text-ink-500 border-ink-800/60 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(34,29,58,0.07)]',
        'dark:bg-white/8 dark:text-gray-400 dark:border-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_6px_14px_-4px_rgba(0,0,0,0.5)]',
        hoverClass,
        className,
      )}
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}

export default SocialIcon
