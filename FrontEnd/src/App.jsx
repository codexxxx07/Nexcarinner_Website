import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { SignIn, SignUp } from '@clerk/clerk-react'
import Layout from './components/Layout'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import PageSkeletonLoader from './components/Skeleton/PageSkeletonLoader'
import Home from './pages/Home'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Documentation from './pages/Documentation'
import Guides from './pages/Guides'
import FAQ from './pages/FAQ'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { clerkAppearance, clerkUrl } from './lib/clerkAppearance'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function ClerkSignInPage() {
  const { dark } = useTheme()
  return (
    <SignIn
      signUpUrl={clerkUrl('/sign-up')}
      fallbackRedirectUrl={clerkUrl('/app')}
      appearance={clerkAppearance(dark)}
    />
  )
}

function ClerkSignUpPage() {
  const { dark } = useTheme()
  return (
    <SignUp
      signInUrl={clerkUrl('/sign-in')}
      fallbackRedirectUrl={clerkUrl('/app')}
      appearance={clerkAppearance(dark)}
    />
  )
}

function App() {
  return (
    <ThemeProvider>
      <PageSkeletonLoader>
        <Layout>
          <ScrollToTop />
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </PageSkeletonLoader>
    </ThemeProvider>
  )
}

export default App