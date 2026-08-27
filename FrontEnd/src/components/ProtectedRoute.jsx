import {
  RedirectToSignIn,
  useAuth,
} from '@clerk/clerk-react'

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) {
    return <p>Checking authentication...</p>
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />
  }

  return children
}