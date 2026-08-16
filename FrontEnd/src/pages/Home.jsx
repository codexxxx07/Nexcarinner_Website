import { Link } from 'react-router-dom'
import { FaCode, FaGlobe } from 'react-icons/fa'
import { IoBarChartSharp } from "react-icons/io5";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCalendar,
  FiUsers,
  FiZap,
  FiMapPin,
  FiBookOpen,
  FiCpu,
  FiBriefcase,
  FiTarget,
  FiActivity,
  FiShield,
  FiDatabase,
} from 'react-icons/fi'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import CountUp from '../components/CountUp'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import BlurText from '../components/reactbits/BlurText'
import TypeWriter from '../components/TypeWriter'
import { Button } from '../components/ui/button'
import { useTheme } from '../context/ThemeContext'
import ImageSkeleton from '../components/Skeleton/ImageSkeleton'
import heroImg from '../assets/images/NCW_Logo.jpg'

const stats = [
  { end: 4500, suffix: '+', label: 'Active Members' },
  { end: 1, label: 'Event Hosted' },
  { end: 20, suffix: '+', label: 'Live Projects' },
  { end: 9, suffix: '+', label: 'Industry Partners' },
]

const communities = [
  {
    title: 'Nexcarinner',
    members: '1800+',
    description: 'Opportunities, jobs, skills, and hackathons all in one place.',
    icon: FaGlobe,
    accent: 'from-flare-pink to-brand-500',
    link: 'https://chat.whatsapp.com/LFpegPQ2vMkKnQ4W07DDqH?s=cl&p=a&ilr=1',
    groups: ['Internship & Job Alerts', 'Government Job Alerts', 'Skill Building & Learning', 'Hackathons & Competitions'],
  },
  {
    title: 'Nexcarinner Network',
    members: '1300+',
    description: 'A central hub for networking, resources, promotions, and general discussions.',
    icon: FiUsers,
    accent: 'from-brand-500 to-brand-600',
    link: 'https://chat.whatsapp.com/HRMehMJ6vCnK1vP3qR7gyH?s=cl&p=a&ilr=1',
    groups: ['Networking Group', 'General Group', 'Learning Resources', 'Promotion Group'],
  },
  {
    title: 'Nexcarinner Tech',
    members: '1200+',
    description: 'Dedicated tech community covering Web Development, AI/ML, cybersecurity & Ethical Hacking, Data Science and Data Analytics',
    icon: FaCode,
    accent: 'from-flare-cyan to-brand-500',
    link: 'https://chat.whatsapp.com/BDg0TFynjZ7JmZkWiFvdWI?s=cl&p=a&ilr=1',
    groups: ['Tech Full Stack', 'Tech Cybersecurity & Ethical Hacking', 'Tech AI/ML', 'Tech Data Science', 'Data Analysis', 'Tech Discussion'],
  },
]

const groups = [
  {
    category: 'Study Groups',
    items: ['React Study Group', 'Python Bootcamp', 'Algorithm Practice'],
  },
  {
    category: 'Project Teams',
    items: ['Open Source Contributors', 'Hackathon Team', 'Startup Builders'],
  },
  {
    category: 'Workshops',
    items: ['Design Systems', 'API Development', 'DevOps Basics'],
  },
  {
    category: 'Mentorship',
    items: ['Peer Mentoring', 'Industry Mentors', 'Career Guidance'],
  },
]

const announcements = [
  { icon: FiZap, text: 'Annual Hackathon registrations are open — Feb 20, 2026' },
  { icon: FiUsers, text: 'New AI & Machine Learning study group starts this week' },
  { icon: FiCalendar, text: 'Monthly demo day — every last Friday' },
  { icon: FiTarget, text: 'Mentorship 1:1s now open for Spring 2026' },
  { icon: FiMapPin, text: 'Cloud Computing meetup at Tech Hub — Jun 18, 2026' },
]

const skills = [
  { label: 'Technology', icon: FiCpu },
  { label: 'Networking', icon: FiUsers },
  { label: 'Learning', icon: FiBookOpen },
  { label: 'Hackathons', icon: FiZap },
  { label: 'Internships', icon: FiBriefcase },
  { label: 'Jobs', icon: FiTarget },
  { label: 'AI/ML', icon: FiActivity },
  { label: 'Full Stack', icon: FaCode },
  { label: 'Cybersecurity', icon: FiShield },
  { label: 'Data Science', icon: FiDatabase },
  { label: 'Data Analysis', icon: IoBarChartSharp },
]

const heroPillars = [
  { label: 'Learn', icon: FiBookOpen },
  { label: 'Network', icon: FiUsers },
  { label: 'Build', icon: FaCode },
  { label: 'Find opportunities', icon: FiBriefcase },
]

const heroPhrases = ['together', 'with us', 'as one', 'differently']

const Hero = () => {
  const { dark } = useTheme()
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <Reveal>
            <span className="chip">
              <span className="presence-dot" />
              Season 2026 — now onboarding
            </span>
          </Reveal>

          <h1
            className={`mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            <BlurText
              as="span"
              delay={70}
              text="Build the future of learning"
            />
            {' '}
            <TypeWriter
              phrases={heroPhrases}
              className="text-gradient-animate"
              startDelay={420}
            />
          </h1>

          <Reveal delay={220}>
            <p
              className={`mt-7 max-w-lg text-lg leading-relaxed transition-colors duration-300 ${
                dark ? 'text-gray-400' : 'text-ink-400'
              }`}
            >
              A community of students, developers, and innovators learning,
              shipping, and finding real opportunities — together.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-7 flex flex-wrap gap-2">
              {heroPillars.map((pillar) => (
                <span key={pillar.label} className="skill-chip skill-chip-sm">
                  <pillar.icon
                    className={`h-3.5 w-3.5 ${dark ? 'text-gray-400' : 'text-brand-600'}`}
                  />
                  <span>{pillar.label}</span>
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Join the Community
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about" className={dark ? 'text-gray-300' : 'text-ink-300'}>
                  Explore Nexcarinner
                  <FiArrowUpRight className={`h-4 w-4 ${dark ? 'text-gray-500' : 'text-ink-400'}`} />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {['from-brand-500 to-flare-pink', 'from-flare-cyan to-brand-500', 'from-flare-pink to-brand-500', 'from-brand-500 to-flare-cyan'].map(
                  (g, i) => (
                    <span
                      key={i}
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br ${g} font-display text-xs font-bold text-white shadow-[0_4px_10px_-2px_rgba(34,29,58,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] ${
                        dark ? 'ring-4 ring-[#1a1a1a]' : 'ring-4 ring-white'
                      }`}
                    >
                      {['A', 'M', 'K', 'S'][i]}
                    </span>
                  ),
                )}
              </div>
              <div className="text-sm">
                <p
                  className={`font-semibold transition-colors duration-300 ${
                    dark ? 'text-gray-200' : 'text-ink-700'
                  }`}
                >
                  4500+ members
                </p>
                <p className={`transition-colors duration-300 ${dark ? 'text-gray-500' : 'text-ink-400'}`}>
                  learning together every week
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal variant="zoom" delay={200} className="relative">
          <div className="relative mx-auto max-w-lg">
            <div
              className={`absolute -inset-6 rounded-4xl blur-2xl ${
                dark
                  ? 'bg-linear-to-br from-white/5 via-white/3 to-white/5'
                  : 'bg-linear-to-br from-brand-400/20 via-flare-pink/15 to-flare-cyan/20'
              }`}
            />

            <div className="glass relative overflow-hidden rounded-[1.75rem] p-2.5">
              <ImageSkeleton
                src={heroImg}
                alt="Nexcarinner community"
                eager
                width={343}
                height={361}
                fetchPriority="high"
                className="rounded-[1.25rem]"
                imgClassName="w-full rounded-[1.25rem] object-cover"
              />
            </div>

            {/* Floating card — next event */}
            <Reveal
              variant="up"
              delay={480}
              className="absolute right-2 top-10 sm:-right-6"
            >
              <div className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-flare-pink to-brand-500 text-white shadow-[0_8px_18px_-8px_rgba(124,58,237,0.6),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.1)]">
                  <FiZap className="h-5 w-5" />
                </span>
                <div>
                  <p className={`text-xs font-semibold ${dark ? 'text-gray-200' : 'text-ink-700'}`}>
                    Annual Hackathon
                  </p>
                  <p className={`text-xs ${dark ? 'text-gray-500' : 'text-ink-400'}`}>
                    Feb 20 · Registrations open
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Floating card — live community */}
            <Reveal
              variant="up"
              delay={580}
              className="absolute bottom-8 left-2 sm:-left-6"
            >
              <div className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3">
                <div className="flex -space-x-2">
                  {['from-brand-500 to-flare-pink', 'from-flare-cyan to-brand-500'].map((g, i) => (
                    <span
                      key={i}
                      className={`flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br ${g} font-display text-[9px] font-bold text-white ring-2 ${
                        dark ? 'ring-[#242424]' : 'ring-white'
                      }`}
                    >
                      {['A', 'M'][i]}
                    </span>
                  ))}
                </div>
                <div>
                  <p className={`text-xs font-semibold ${dark ? 'text-gray-200' : 'text-ink-700'}`}>
                    4500+ members
                  </p>
                  <p className={`flex items-center gap-1.5 text-xs ${dark ? 'text-gray-500' : 'text-ink-400'}`}>
                    <span className="presence-dot" />
                    120+ active now
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const Announcements = () => {
  const { dark } = useTheme()
  const row = (
    <div className="flex items-center">
      {announcements.map((item) => (
        <span key={item.text} className="flex items-center">
          <span
            className={`flex items-center gap-2.5 px-7 text-sm font-medium transition-colors duration-300 ${
              dark ? 'text-gray-500' : 'text-ink-500'
            }`}
          >
            <item.icon className={`h-3.5 w-3.5 ${dark ? 'text-gray-400' : 'text-brand-600'}`} />
            {item.text}
          </span>
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
              dark ? 'bg-white/15' : 'bg-ink-300'
            }`}
          />
        </span>
      ))}
    </div>
  )

  return (
    <section
      className={`relative overflow-hidden border-y py-4 transition-colors duration-300 ${
        dark
          ? 'border-white/8 bg-white/3'
          : 'border-ink-800/70 bg-white/60'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r ${
          dark ? 'from-[#0f0f0f]' : 'from-ink-950'
        } to-transparent`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l ${
          dark ? 'from-[#0f0f0f]' : 'from-ink-950'
        } to-transparent`}
      />
      <Marquee duration={48}>
        {row}
      </Marquee>
    </section>
  )
}

const Stats = () => {
  const { dark } = useTheme()
  return (
  <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 80}>
          <div className="glass card-lift group relative overflow-hidden rounded-2xl p-6 text-center sm:p-8">
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${
                dark ? 'via-white/12' : 'via-brand-500/40'
              } to-transparent`}
            />
            <CountUp
              end={stat.end}
              suffix={stat.suffix}
              className={`stat-number font-display text-4xl font-bold sm:text-5xl transition-colors duration-300 ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            />
            <p
              className={`mt-2 text-sm transition-colors duration-300 ${
                dark ? 'text-gray-500' : 'text-ink-400'
              }`}
            >
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
  )
}

const Communities = () => {
  const { dark } = useTheme()
  return (
  <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
    <SectionHeading
      eyebrow="Our Communities"
      title={
        <>
          Pick your lane.
          <br />
          <span className="text-gradient">Find your people.</span>
        </>
      }
      description="Specialized groups focused on the technologies and ideas shaping tomorrow."
    />

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {communities.map((community, index) => (
        <Reveal key={community.title} delay={index * 80}>
          <a
            href={community.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div className="glass card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${dark ? 'via-white/12' : 'via-brand-500/40'} to-transparent`} />

              <div className="flex items-start justify-between gap-4">
                <span
                  className={`inline-flex h-13 w-13 items-center justify-center rounded-xl bg-linear-to-br ${community.accent} text-white shadow-[0_8px_18px_-8px_rgba(124,58,237,0.6),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.1)]`}
                >
                  <community.icon className="h-5.5 w-5.5" />
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors duration-200 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-gray-400'
                      : 'border-ink-300/60 bg-white/70 text-ink-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(34,29,58,0.05)]'
                  }`}
                >
                  <FiUsers className={`h-3 w-3 ${dark ? 'text-gray-400' : 'text-brand-600'}`} />
                  {community.members} members
                </span>
              </div>

              <h3
                className={`mt-6 font-display text-xl font-bold transition-colors duration-300 ${
                  dark ? 'text-white' : 'text-ink-50'
                }`}
              >
                {community.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed transition-colors duration-300 ${
                  dark ? 'text-gray-400' : 'text-ink-400'
                }`}
              >
                {community.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {community.groups.slice(0, 3).map((group) => (
                  <span key={group} className="skill-chip skill-chip-sm">
                    <span>{group}</span>
                  </span>
                ))}
                {community.groups.length > 3 && (
                  <span className="skill-chip skill-chip-sm">
                    <span>+{community.groups.length - 3} more</span>
                  </span>
                )}
              </div>

              <div
                className={`mt-auto flex items-center justify-between border-t pt-5 transition-colors duration-300 ${
                  dark ? 'mt-6 border-white/8' : 'mt-6 border-ink-800/70'
                }`}
              >
                <span
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                    dark
                      ? 'text-gray-300 group-hover:text-white'
                      : 'text-ink-700 group-hover:text-brand-700'
                  }`}
                >
                  Join the group
                </span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-gray-400 group-hover:border-white/20 group-hover:text-white group-hover:translate-x-0.5'
                      : 'border-ink-300/70 bg-white/80 text-ink-500 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_3px_rgba(34,29,58,0.08)] group-hover:border-brand-600/50 group-hover:text-brand-700 group-hover:translate-x-0.5'
                  }`}
                >
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
  )
}

const SkillsMarquee = () => {
  const { dark } = useTheme()
  const row = (
    <div className="flex items-center">
      {skills.map((skill) => (
        <span key={skill.label} className="flex items-center">
          <span className="skill-chip px-6 py-2.5 text-sm">
            <skill.icon className={`h-4 w-4 ${dark ? 'text-gray-400' : 'text-brand-600'}`} />
            {skill.label}
          </span>
          <span
            className={`mx-6 h-1.5 w-1.5 shrink-0 rotate-45 rounded-xs ${
              dark ? 'bg-white/15' : 'bg-ink-300'
            }`}
          />
        </span>
      ))}
    </div>
  )

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p
            className={`mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
              dark ? 'text-gray-600' : 'text-ink-400'
            }`}
          >
            Wherever you are in tech — there's a seat for you
          </p>
        </Reveal>
        <Marquee reverse duration={42}>
          {row}
        </Marquee>
      </div>
    </section>
  )
}

const Spotlight = () => {
  const { dark } = useTheme()
  return (
  <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
    <SectionHeading
      eyebrow="This season"
      title={
        <>
          One big event,
          <span className="text-gradient"> endless energy.</span>
        </>
      }
    />

    <div className="grid gap-6 lg:grid-cols-3">
      {/* Large spotlight */}
      <Reveal variant="zoom" className="lg:col-span-2">
        <div
          className="glass card-lift relative h-full overflow-hidden rounded-2xl p-8 sm:p-12"
          style={
            dark
              ? undefined
              : {
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,247,252,0.95) 60%, rgba(253,246,255,0.96) 100%)',
                }
          }
        >

          <div className="relative flex h-full flex-col justify-between gap-10 sm:flex-row sm:items-end">
            <div className="max-w-md">
              <span className="chip">Hackathon · Feb 20, 2026</span>
              <h3
                className={`mt-6 font-display text-3xl font-bold sm:text-4xl transition-colors duration-300 ${
                  dark ? 'text-white' : 'text-ink-50'
                }`}
              >
                Annual Nexcarinner Hackathon
              </h3>
              <p
                className={`mt-4 leading-relaxed transition-colors duration-300 ${
                  dark ? 'text-gray-400' : 'text-ink-400'
                }`}
              >
                48 hours. Real problems. Prizes for the bold. Bring your team —
                or find one at the door.
              </p>
              <Button asChild variant="soft" className="mt-8">
                <Link to="/events">
                  Register now
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Hours', value: '48' },
                { label: 'Teams', value: '40+' },
                { label: 'Prizes', value: '$5k' },
                { label: 'Mentors', value: '25+' },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="glass-strong rounded-xl px-5 py-4 text-center"
                >
                  <p
                    className={`font-display text-2xl font-bold transition-colors duration-300 ${
                      dark ? 'text-white' : 'text-ink-50'
                    }`}
                  >
                    {chip.value}
                  </p>
                  <p
                    className={`mt-1 text-xs uppercase tracking-widest transition-colors duration-300 ${
                      dark ? 'text-gray-500' : 'text-ink-400'
                    }`}
                  >
                    {chip.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Side cards */}
      <div className="flex flex-col gap-6">
        <Reveal variant="left" delay={150}>
          <div className="glass card-lift group h-full rounded-2xl p-8">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors duration-300 ${
                dark
                  ? 'bg-white/8 text-gray-300'
                  : 'bg-cyan-100/80 text-cyan-700'
              }`}
            >
              <FiUsers className="h-5 w-5" />
            </span>
            <h4
              className={`mt-5 font-display text-lg font-bold transition-colors duration-300 ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            >
              Mentorship circles
            </h4>
            <p
              className={`mt-2 text-sm leading-relaxed transition-colors duration-300 ${
                dark ? 'text-gray-400' : 'text-ink-400'
              }`}
            >
              Weekly 1:1s with engineers from top companies. Growth, guided.
            </p>
          </div>
        </Reveal>
        <Reveal variant="left" delay={250}>
          <div className="glass card-lift group h-full rounded-2xl p-8">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors duration-300 ${
                dark
                  ? 'bg-white/8 text-gray-300'
                  : 'bg-pink-100/80 text-pink-600'
              }`}
            >
              <FiCalendar className="h-5 w-5" />
            </span>
            <h4
              className={`mt-5 font-display text-lg font-bold transition-colors duration-300 ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            >
              Monthly demo day
            </h4>
            <p
              className={`mt-2 text-sm leading-relaxed transition-colors duration-300 ${
                dark ? 'text-gray-400' : 'text-ink-400'
              }`}
            >
              Ship a side project, show the room, collect feedback — and maybe
              a co-founder.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
  )
}

const Groups = () => {
  const { dark } = useTheme()
  return (
  <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
    <SectionHeading
      eyebrow="Active Groups"
      title={
        <>
          Small teams.
          <span className="text-gradient"> Big momentum.</span>
        </>
      }
      description="Focused study groups and collaborative teams working on real projects — join one that fits."
    />

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {groups.map((group, index) => (
        <Reveal key={group.category} delay={index * 80}>
          <div className="glass card-lift group h-full rounded-2xl p-7">
            <span className="chip">{group.category}</span>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 text-sm transition-colors duration-200 ${
                    dark
                      ? 'text-gray-500 group-hover:text-gray-300'
                      : 'text-ink-400 group-hover:text-ink-700'
                  }`}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-brand-600 to-flare-pink" />
                  {item}
                </li>
              ))}
            </ul>
            <div
              className={`mt-6 h-px w-full bg-linear-to-r ${
                dark ? 'from-white/10' : 'from-brand-500/40'
              } to-transparent`}
            />
          </div>
        </Reveal>
      ))}
    </div>
  </section>
  )
}

const Home = () => {
  return (
    <>
      <Hero />
      <Announcements />
      <Stats />
      <Communities />
      <SkillsMarquee />
      <Spotlight />
      <Groups />
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
