import { lazy, Suspense, useEffect } from 'react'
import TargetCursor from './components/reactbits/TargetCursor'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { SignIn, SignUp } from '@clerk/clerk-react'
import Layout from './components/Layout'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import PageSkeletonLoader from './components/Skeleton/PageSkeletonLoader'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { ToastProvider } from './context/ToastContext'
import { SignInNotification, SignUpNotification } from './components/auth/AuthNotifications'
import { clerkAppearance, clerkUrl } from './lib/clerkAppearance'
import { useLenis } from 'lenis/react'

const Home = lazy(() => import('./pages/Home'))
const Events = lazy(() => import('./pages/Events'))
const Gallery = lazy(() => import('./pages/Gallery'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const Documentation = lazy(() => import('./pages/Documentation'))
const Guides = lazy(() => import('./pages/Guides'))
const FAQ = lazy(() => import('./pages/FAQ'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, lenis])

  return null
}

function ClerkSignInPage() {
  const { dark } = useTheme()
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 lg:min-h-[calc(100vh-5rem)]">
      <SignIn
        signUpUrl={clerkUrl('/sign-up')}
        fallbackRedirectUrl={clerkUrl('/app')}
        appearance={clerkAppearance(dark)}
      />
      <SignInNotification />
    </div>
  )
}

function ClerkSignUpPage() {
  const { dark } = useTheme()
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 lg:min-h-[calc(100vh-5rem)]">
      <SignUp
        signInUrl={clerkUrl('/sign-in')}
        fallbackRedirectUrl={clerkUrl('/app')}
        appearance={clerkAppearance(dark)}
      />
      <SignUpNotification />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <TargetCursor targetSelector=".cursor-target" />
      <PageSkeletonLoader>
        <ToastProvider>
          <Layout>
            <ScrollToTop />
            <ErrorBoundary>
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/gallery/:category?" element={<Gallery />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/guides" element={<Guides />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/sign-in" element={<ClerkSignInPage />} />
                  <Route path="/sign-up" element={<ClerkSignUpPage />} />
                  <Route path="/login" element={<Navigate to="/sign-in" replace />} />
                  <Route path="/signup" element={<Navigate to="/sign-up" replace />} />
                  <Route
                    path="/app/*"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </Layout>
        </ToastProvider>
      </PageSkeletonLoader>
    </ThemeProvider>
  )
}

export default App