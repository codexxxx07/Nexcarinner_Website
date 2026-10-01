import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { usePageTitle } from '../hooks/usePageTitle'
import CtaBanner from '../components/CtaBanner'
import {
  LandingHero,
  LandingAnnouncements,
  LandingStats,
  LandingCommunities,
  LandingSkillsMarquee,
  LandingSpotlight,
} from '../components/LandingSections'

const Home = () => {
  const { isLoaded, isSignedIn } = useAuth()
  const navigate = useNavigate()

  usePageTitle('Home')

  /*
   * Redirect signed-in users to the dashboard, but do NOT block the
   * initial render while waiting for Clerk to resolve.
   *
   * Previously this was a synchronous guard:
   *   if (isLoaded && isSignedIn) return <Navigate to="/app" replace />
   *
   * That caused the entire Home page — a public page — to render nothing
   * while Clerk completed its auth network round-trip, directly killing
   * FCP and LCP. The content is public so there is no security reason
   * to gate it behind auth state.
   *
   * The effect-based redirect fires as soon as Clerk resolves (~200–400ms
   * after mount). Signed-in users see the Home page for a brief flash
   * before being redirected, but this is a negligible UX trade-off versus
   * showing a blank page to ALL users on every visit.
   */
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate('/app', { replace: true })
    }
  }, [isLoaded, isSignedIn, navigate])

  return (
    <>
      <LandingHero variant="home" />
      <LandingAnnouncements />
      <LandingStats variant="home" />
      <LandingCommunities variant="home" />
      <LandingSkillsMarquee variant="home" />
      <LandingSpotlight variant="home" />
      <CtaBanner
        title={
          <>
            Ready to join the <span className="text-gradient">inner circle?</span>
          </>
        }
        description="Become part of a growing community and start your journey in tech today. It's free, it's fast, and it's better together."
        primaryLabel="Join Nexcarinner"
        primaryTo="/contact"
        secondaryLabel="Explore events"
        secondaryTo="/events"
      />
    </>
  )
}

export default Home
