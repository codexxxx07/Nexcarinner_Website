import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
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

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate('/app', { replace: true })
    }
  }, [isLoaded, isSignedIn, navigate])

  if (isLoaded && isSignedIn) return null

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