import CtaBanner from '../components/CtaBanner'
import { usePageTitle } from '../hooks/usePageTitle'
import {
  LandingHero,
  LandingAnnouncements,
  LandingStats,
  LandingCommunities,
  LandingSkillsMarquee,
  LandingSpotlight,
  LandingGroups,
} from '../components/LandingSections'

const Dashboard = () => {
  usePageTitle('Dashboard')

  return (
    <>
      <LandingHero variant="dashboard" />
      <LandingAnnouncements />
      <LandingStats variant="dashboard" />
      <LandingCommunities variant="dashboard" />
      <LandingSkillsMarquee variant="dashboard" />
      <LandingSpotlight variant="dashboard" />
      <LandingGroups />
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

export default Dashboard