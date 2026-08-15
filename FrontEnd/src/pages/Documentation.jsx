import { FiBook, FiCode, FiUsers, FiZap, FiShield, FiGlobe } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import BackButton from '../components/BackButton'
import { useTheme } from '../context/ThemeContext'
import { usePageTitle } from '../hooks/usePageTitle'

const sections = [
  {
    icon: FiBook,
    title: 'Getting Started',
    description: 'Everything you need to join the community, set up your profile, and start contributing from day one.',
    gradient: 'from-brand-500 to-brand-600',
    items: ['Create your account', 'Set up your profile', 'Join a domain track', 'Introduce yourself'],
  },
  {
    icon: FiCode,
    title: 'Projects & Contributions',
    description: 'How to propose ideas, contribute to existing projects, and ship work that the community can see.',
    gradient: 'from-flare-cyan to-brand-500',
    items: ['Proposing a project', 'Contribution guidelines', 'Code review process', 'Shipping a release'],
  },
  {
    icon: FiUsers,
    title: 'Community Standards',
    description: 'The norms, values, and code of conduct that keep Nexcarinner a welcoming place for everyone.',
    gradient: 'from-flare-pink to-brand-500',
    items: ['Code of conduct', 'Communication norms', 'Conflict resolution', 'Moderation policy'],
  },
  {
    icon: FiZap,
    title: 'Events & Hackathons',
    description: 'How to participate in, organise, and get the most out of Nexcarinner events and hackathons.',
    gradient: 'from-brand-500 to-flare-pink',
    items: ['Event calendar', 'Registering for events', 'Organising your own', 'After-event showcase'],
  },
  {
    icon: FiShield,
    title: 'Mentorship Programme',
    description: 'How our mentorship model works — finding a mentor, being a mentor, and making the most of sessions.',
    gradient: 'from-brand-600 to-flare-cyan',
    items: ['Finding a mentor', 'Mentor expectations', 'Session structure', 'Becoming a mentor'],
  },
  {
    icon: FiGlobe,
    title: 'Resources & Tools',
    description: 'Curated tools, platforms, and resources that Nexcarinner members use every day.',
    gradient: 'from-flare-cyan to-flare-pink',
    items: ['Recommended tools', 'Learning resources', 'Design assets', 'Community templates'],
  },
]

const Documentation = () => {
  const { dark } = useTheme()
  usePageTitle('Documentation')

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-[#0f0f0f]' : 'bg-ink-950'}`}>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">

        {/* Back button */}
        <Reveal>
          <BackButton />
        </Reveal>

        {/* Header */}
        <Reveal delay={60}>
          <span className="chip">Reference</span>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className={`mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            <span className="text-gradient-animate">Documentation</span>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            Everything you need to know about how Nexcarinner works — from
            onboarding to shipping projects and everything in between.
          </p>
        </Reveal>

        {/* Search hint */}
        <Reveal delay={240}>
          <div
            className={`mt-8 inline-flex items-center gap-3 rounded-xl border px-5 py-3 text-sm transition-colors duration-300 ${
              dark
                ? 'border-white/8 bg-white/4 text-gray-500'
                : 'border-ink-300/50 bg-white text-ink-400'
            }`}
          >
            <FiBook className="h-4 w-4" />
            <span>Browse a section below to get started</span>
          </div>
        </Reveal>

        {/* Sections grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={(index % 3) * 80}>
              <div
                className={`group h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? 'bg-[#1a1a1a] border border-white/8 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/14 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
                    : 'glass card-lift'
                }`}
              >
                {/* Icon */}
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${section.gradient} text-white shadow-[0_8px_18px_-8px_rgba(124,58,237,0.6),inset_0_1px_0_rgba(255,255,255,0.35)]`}
                >
                  <section.icon className="h-5 w-5" />
                </span>

                {/* Title */}
                <h2
                  className={`mt-5 font-display text-lg font-bold transition-colors duration-300 ${
                    dark ? 'text-white' : 'text-ink-50'
                  }`}
                >
                  {section.title}
                </h2>

                {/* Description */}
                <p
                  className={`mt-2 text-sm leading-relaxed transition-colors duration-300 ${
                    dark ? 'text-gray-500' : 'text-ink-400'
                  }`}
                >
                  {section.description}
                </p>

                {/* Items list */}
                <ul className="mt-5 space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <span
                        className={`group/link inline-flex cursor-pointer items-center gap-2 text-sm transition-colors duration-200 ${
                          dark
                            ? 'text-gray-600 hover:text-gray-200'
                            : 'text-ink-400 hover:text-brand-700'
                        }`}
                      >
                        <span
                          className={`h-px w-3 transition-colors duration-200 ${
                            dark ? 'bg-gray-700 group-hover/link:bg-gray-400' : 'bg-ink-300 group-hover/link:bg-brand-600'
                          }`}
                        />
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Documentation
