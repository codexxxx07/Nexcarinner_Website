import { useNavigate } from 'react-router-dom'
import {
  FiArrowLeft,
  FiArrowRight,
  FiCode,
  FiDatabase,
  FiShield,
  FiCpu,
  FiLayers,
  FiBarChart2,
} from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { useTheme } from '../context/ThemeContext'
import { usePageTitle } from '../hooks/usePageTitle'

const guides = [
  {
    icon: FiCode,
    title: 'Full-Stack Web Development',
    level: 'Beginner → Advanced',
    steps: 12,
    description:
      'From HTML fundamentals to deploying a full React + Node.js application with a real database.',
    gradient: 'from-brand-500 to-brand-600',
    levelColor: 'text-emerald-500',
  },
  {
    icon: FiDatabase,
    title: 'Data Science Foundations',
    level: 'Beginner',
    steps: 8,
    description:
      'Python basics, Pandas, data cleaning, visualisation, and your first ML model — all in one track.',
    gradient: 'from-flare-cyan to-brand-500',
    levelColor: 'text-emerald-500',
  },
  {
    icon: FiShield,
    title: 'Cybersecurity Essentials',
    level: 'Intermediate',
    steps: 10,
    description:
      'Understand the attacker mindset, common vulnerabilities, and how to build more secure systems.',
    gradient: 'from-flare-pink to-brand-500',
    levelColor: 'text-amber-500',
  },
  {
    icon: FiCpu,
    title: 'AI & Machine Learning',
    level: 'Intermediate',
    steps: 14,
    description:
      'Supervised learning, neural networks, model evaluation, and real-world deployment strategies.',
    gradient: 'from-brand-500 to-flare-pink',
    levelColor: 'text-amber-500',
  },
  {
    icon: FiLayers,
    title: 'System Design Primer',
    level: 'Advanced',
    steps: 9,
    description:
      'Scalability, load balancing, caching, databases, and how to design systems that survive growth.',
    gradient: 'from-brand-600 to-flare-cyan',
    levelColor: 'text-rose-500',
  },
  {
    icon: FiBarChart2,
    title: 'Data Analytics with SQL',
    level: 'Beginner → Intermediate',
    steps: 7,
    description:
      'Master SQL from SELECT basics to window functions, then build dashboards in real analytics tools.',
    gradient: 'from-flare-cyan to-flare-pink',
    levelColor: 'text-emerald-500',
  },
]

const Guides = () => {
  const navigate = useNavigate()
  const { dark } = useTheme()
  usePageTitle('Guides')

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-[#0f0f0f]' : 'bg-ink-950'}`}>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">

        {/* Back button */}
        <Reveal>
          <button
            onClick={() => navigate(-1)}
            className={`group mb-10 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
              dark
                ? 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10 hover:text-white'
                : 'border-ink-300/60 bg-white text-ink-400 hover:border-brand-500/40 hover:text-brand-700'
            }`}
          >
            <FiArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back
          </button>
        </Reveal>

        {/* Header */}
        <Reveal delay={60}>
          <span className="chip">Learning paths</span>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className={`mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            Guides &{' '}
            <span className="text-gradient-animate">Learning Tracks</span>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            Structured, step-by-step paths curated by our mentors. Pick a track,
            follow the steps, and ship something real.
          </p>
        </Reveal>

        {/* Guides grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Reveal key={guide.title} delay={(index % 3) * 80}>
              <div
                className={`group relative h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? 'bg-[#1a1a1a] border border-white/8 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/14 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
                    : 'glass card-lift'
                }`}
              >
                {/* Icon */}
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${guide.gradient} text-white shadow-[0_8px_18px_-8px_rgba(124,58,237,0.6),inset_0_1px_0_rgba(255,255,255,0.35)]`}
                >
                  <guide.icon className="h-5 w-5" />
                </span>

                {/* Level + steps */}
                <div className="mt-5 flex items-center justify-between">
                  <span className={`text-xs font-semibold ${guide.levelColor}`}>
                    {guide.level}
                  </span>
                  <span
                    className={`text-xs transition-colors duration-300 ${
                      dark ? 'text-gray-600' : 'text-ink-500'
                    }`}
                  >
                    {guide.steps} steps
                  </span>
                </div>

                {/* Title */}
                <h2
                  className={`mt-3 font-display text-lg font-bold transition-colors duration-300 ${
                    dark ? 'text-white' : 'text-ink-50'
                  }`}
                >
                  {guide.title}
                </h2>

                {/* Description */}
                <p
                  className={`mt-3 text-sm leading-relaxed transition-colors duration-300 ${
                    dark ? 'text-gray-500' : 'text-ink-400'
                  }`}
                >
                  {guide.description}
                </p>

                {/* CTA */}
                <div className="mt-6">
                  <span
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 ${
                      dark
                        ? 'text-gray-500 group-hover:text-gray-200'
                        : 'text-ink-400 group-hover:text-brand-700'
                    }`}
                  >
                    Start this track
                    <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Guides
