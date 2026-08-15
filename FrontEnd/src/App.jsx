import { Routes, Route } from 'react-router-dom'
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
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'

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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </PageSkeletonLoader>
    </ThemeProvider>
  )
}

export default App
