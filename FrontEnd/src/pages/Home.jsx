import { Navigate } from 'react-router-dom'
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

  usePageTitle('Home')

  // Declarative redirect: an effect + `return null` still painted the landing
  // page for a frame before the navigation committed.
  if (isLoaded && isSignedIn) return <Navigate to="/app" replace />

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