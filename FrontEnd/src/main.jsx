import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ClerkProvider } from '@clerk/clerk-react'
import { clerkUrl } from './lib/clerkAppearance'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
        signInUrl={clerkUrl('/sign-in')}
        signUpUrl={clerkUrl('/sign-up')}
        signInFallbackRedirectUrl={clerkUrl('/app')}
        signUpFallbackRedirectUrl={clerkUrl('/app')}
        afterSignOutUrl={clerkUrl('/')}
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)