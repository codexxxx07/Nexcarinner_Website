import { Routes, Route ,Navigate } from 'react-router-dom'
import { SignIn, SignUp, SignedIn, SignedOut, UserButton, RedirectToSignIn, 
  SignInButton, SignUpButton, useAuth }
  from '@clerk/clerk-react'
import Layout from './components/Layout'
import { ThemeProvider } from './context/ThemeContext'
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
// import Signin from './pages/Signin'
// import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'





function AppPage() {
  return (
    <main>
      <header>
        <h1>My App</h1>

      <UserButton />

      <SignOutButton redirectUrl="/">
        <button type="button">Sign out</button>
      </SignOutButton>
      </header>
    </main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <PageSkeletonLoader>
        <Layout>
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
              <Route
        path="/sign-in"
        element={
          <SignIn
            signUpUrl="/sign-up"
            fallbackRedirectUrl="/app"
          />
        }
      />

      <Route
        path="/sign-up"
        element={
          <SignUp
            signInUrl="/sign-in"
            fallbackRedirectUrl="/app"
          />
        }
      />
           <Route path="*" element={<Navigate to="/" replace />} />
             <Route
        path="/app/*"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
            
          </Routes>
          
        </Layout>
      </PageSkeletonLoader>
    </ThemeProvider>
  )
}

export default App
