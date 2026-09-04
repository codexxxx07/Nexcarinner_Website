import {
  RedirectToSignIn,
  useAuth,
} from '@clerk/clerk-react'
import { Skeleton } from './ui/skeleton'

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="w-full max-w-md space-y-4 px-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />
  }

  return children
}