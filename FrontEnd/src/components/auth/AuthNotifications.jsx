import { useEffect, useRef } from 'react'
import { useSignIn, useSignUp } from '@clerk/clerk-react'
import { AUTH_SESSION_KEY } from '../../context/ToastContext'

/*
 * Detect a genuinely completed Clerk sign-in / sign-up and record a one-shot
 * notification flag that the ToastProvider consumes after navigation.
 *
 * Why sessionStorage + `status === 'complete'`:
 *  - Clerk redirects after authentication with a full page load, so component
 *    state does not survive; sessionStorage does.
 *  - `signIn.status === 'complete'` / `signUp.status === 'complete'` only ever
 *    becomes true when the flow actually succeeds — never on page load, failed
 *    credentials, a cancelled flow, or failed verification — so the toast can
 *    never fire from any of those cases.
 *
 * `setItem` is idempotent, so React StrictMode double-invoking the effect (or
 * both navigation styles observing it) cannot queue a duplicate toast. The
 * consumer removes the flag on first read, guaranteeing exactly one toast.
 */

const markAuthNotification = (kind) => {
  try {
    sessionStorage.setItem(AUTH_SESSION_KEY, kind)
  } catch {
    /* ignore storage-unavailable environments */
  }
}

export function SignInNotification() {
  const { isLoaded, status } = useSignIn()
  const firedRef = useRef(false)

  useEffect(() => {
    if (isLoaded && !firedRef.current && status === 'complete') {
      firedRef.current = true
      markAuthNotification('signin')
    }
  }, [isLoaded, status])

  return null
}

export function SignUpNotification() {
  const { isLoaded, status } = useSignUp()
  const firedRef = useRef(false)

  useEffect(() => {
    if (isLoaded && !firedRef.current && status === 'complete') {
      firedRef.current = true
      markAuthNotification('signup')
    }
  }, [isLoaded, status])

  return null
}
