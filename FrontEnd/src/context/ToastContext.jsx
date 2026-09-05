import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'
import { FiCheck, FiX } from 'react-icons/fi'
import { cn } from '../lib/utils'

const ToastContext = createContext(null)

/*
 * One-shot flag used to carry a "just authenticated" notification across
 * Clerk's full-page redirect after sign-in/sign-up. Clerk navigates to the
 * fallback route with a hard page load, so React state is lost — sessionStorage
 * survives it. The flag is consumed (removed) the first time it is read, so a
 * refresh or later navigation can never re-show the same toast.
 */
export const AUTH_SESSION_KEY = 'nc_auth_notification'

const AUTH_TOASTS = {
  signin: {
    type: 'success',
    title: 'Thanks for signing in! 👋',
    message: 'Welcome back to Nexcarinner.',
  },
  signup: {
    type: 'success',
    title: 'Welcome to Nexcarinner! 🚀',
    message: 'Your account has been created successfully.',
  },
}

const AUTODISMISS_MS = 5000
const EXIT_MS = 260

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

/*
 * Consume the pending auth notification (if any) and clear it so it can only
 * ever fire once. Returns the toast descriptor or null.
 */
const consumeAuthToast = () => {
  try {
    const kind = sessionStorage.getItem(AUTH_SESSION_KEY)
    if (!kind) return null
    sessionStorage.removeItem(AUTH_SESSION_KEY)
    return AUTH_TOASTS[kind] ?? null
  } catch {
    return null
  }
}

/* ---------------------------------------------------------------------------
 * Toast surface — skeuomorphic card matching the Nexcarinner design system.
 * Light mode uses the crisp white raised face; dark mode the liquid-glass
 * override. Entrance/exit are cheap transform+opacity transitions.
 * ------------------------------------------------------------------------- */
const Toast = ({ toast, open, onClose }) => (
  <div
    role="status"
    aria-live="polite"
    className="pointer-events-none fixed inset-x-0 bottom-5 z-70 flex justify-center px-4 sm:bottom-6"
  >
    <div
      className={cn(
        'glass-strong pointer-events-auto flex w-full max-w-md items-start gap-3.5 rounded-2xl p-4 transition-all duration-300 ease-out sm:p-4.5',
        open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <span
        className={cn(
          'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
          'bg-linear-to-b from-brand-400 to-brand-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_12px_-4px_rgba(124,58,237,0.6)]',
        )}
      >
        <FiCheck className="h-5 w-5" strokeWidth={3} />
      </span>

      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-bold leading-snug text-ink-100 sm:text-[0.95rem] dark:text-gray-50">
          {toast.title}
        </p>
        <p className="mt-0.5 text-[0.82rem] leading-snug text-ink-500 sm:text-sm dark:text-gray-400">
          {toast.message}
        </p>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 cursor-target',
          'border-ink-800/60 bg-white/70 text-ink-500 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(34,29,58,0.07)] hover:text-ink-900',
          'dark:border-white/12 dark:bg-white/5 dark:text-gray-400 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:text-white',
        )}
      >
        <FiX className="h-4 w-4" />
      </button>
    </div>
  </div>
)

export const ToastProvider = ({ children }) => {
  const { pathname } = useLocation()
  const [toast, setToast] = useState(null)
  const [open, setOpen] = useState(false)
  const timerRef = useRef(null)
  const openTimerRef = useRef(null)
  const exitTimerRef = useRef(null)

  const clearDismissTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const closeToast = useCallback(() => {
    clearDismissTimer()
    setOpen(false)
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current)
    exitTimerRef.current = window.setTimeout(() => {
      exitTimerRef.current = null
      setToast(null)
    }, EXIT_MS)
  }, [clearDismissTimer])

  const showToast = useCallback(
    (next) => {
      clearDismissTimer()
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current)
        openTimerRef.current = null
      }
      const duration = typeof next?.duration === 'number' ? next.duration : AUTODISMISS_MS
      setToast({
        type: next?.type ?? 'success',
        title: next?.title ?? '',
        message: next?.message ?? '',
      })
      // Defer the visible state so the entrance transition runs.
      openTimerRef.current = window.setTimeout(() => setOpen(true), 20)
      timerRef.current = window.setTimeout(closeToast, duration)
    },
    [clearDismissTimer, closeToast],
  )

  // Pick up any pending auth notification. Runs on mount (captures Clerk's
  // full-page redirect) and again on soft route changes so the toast survives
  // either navigation style — while consume-once guarantees no duplicates.
  // The read is deferred out of the render+effect cycle to avoid a cascading
  // render and lets the new route paint first.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const pending = consumeAuthToast()
      if (pending) showToast(pending)
    }, 0)
    return () => clearTimeout(timer)
    // showToast/closeToast are stable; only re-run on navigation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Clean up all timers on unmount to avoid leaks.
  useEffect(() => {
    return () => {
      clearDismissTimer()
      if (openTimerRef.current) clearTimeout(openTimerRef.current)
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current)
    }
  }, [clearDismissTimer])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast toast={toast} open={open} onClose={closeToast} />}
    </ToastContext.Provider>
  )
}
