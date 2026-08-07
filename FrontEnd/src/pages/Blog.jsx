import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { useTheme } from '../context/ThemeContext'

const posts = [
  {
    id: 1,
    title: 'How We Ran Our First Hackathon with 100+ Students',
    excerpt:
      'From logistics to late-night debugging sessions — a behind-the-scenes look at what it takes to pull off a student hackathon.',
    date: 'May 12, 2025',
    readTime: '5 min read',
    tag: 'Community',
    gradient: 'from-brand-500 to-flare-pink',
  },
  {
    id: 2,
    title: 'Top 5 Open Source Projects Built by Our Members',
    excerpt:
      'Our members ship real things. Here are five projects that went from side idea to live product, built entirely inside Nexcarinner.',
    date: 'Jun 3, 2025',
    readTime: '4 min read',
    tag: 'Projects',
    gradient: 'from-flare-cyan to-brand-500',
  },
  {
    id: 3,
    title: 'Why Learning in Public Accelerates Growth',
    excerpt:
      'Building in private feels safe, but sharing your process — even when messy — is one of the fastest ways to level up.',
    date: 'Jul 18, 2025',
    readTime: '6 min read',
    tag: 'Learning',
    gradient: 'from-flare-pink to-brand-600',
  },
  {
    id: 4,
    title: 'Getting Started with Data Science as a Student',
    excerpt:
      'No fancy hardware, no PhD required. Here is the realistic roadmap our Data Science track recommends for absolute beginners.',
    date: 'Aug 1, 2025',
    readTime: '7 min read',
    tag: 'Data Science',
    gradient: 'from-brand-600 to-flare-cyan',
  },
  {
    id: 5,
    title: 'The Mentorship Model That Actually Works',
    excerpt:
      'Mentorship fails when it is too formal. We redesigned ours around async check-ins and peer pairing — here is what changed.',
    date: 'Sep 22, 2025',
    readTime: '5 min read',
    tag: 'Mentorship',
    gradient: 'from-flare-cyan to-flare-pink',
  },
  {
    id: 6,
    title: "Full-Stack in 6 Months: A Member's Journey",
    excerpt:
      'Ankur had zero web dev experience in January. By June, he shipped a full SaaS app. This is how he did it.',
    date: 'Oct 5, 2025',
    readTime: '8 min read',
    tag: 'Stories',
    gradient: 'from-brand-500 to-brand-700',
  },
]

const Blog = () => {
  const navigate = useNavigate()
  const { dark } = useTheme()

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
          <span className="chip">From the team</span>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className={`mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            The Nexcarinner{' '}
            <span className="text-gradient-animate">Blog</span>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            Stories, tutorials, and insights from the community — written by the
            students building with us.
          </p>
        </Reveal>

        {/* Posts grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={(index % 3) * 80}>
              <article
                className={`group h-full cursor-pointer rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? 'bg-[#1a1a1a] border border-white/8 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/14 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
                    : 'glass card-lift'
                }`}
              >
                {/* Tag + read time */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-linear-to-br ${post.gradient} text-white shadow-sm`}
                  >
                    <FiTag className="h-3 w-3" />
                    {post.tag}
                  </span>
                  <span
                    className={`flex items-center gap-1 text-xs transition-colors duration-300 ${
                      dark ? 'text-gray-600' : 'text-ink-400'
                    }`}
                  >
                    <FiClock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className={`mt-5 font-display text-lg font-bold leading-snug transition-colors duration-300 ${
                    dark
                      ? 'text-white group-hover:text-gray-100'
                      : 'text-ink-50 group-hover:text-brand-700'
                  }`}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p
                  className={`mt-3 text-sm leading-relaxed transition-colors duration-300 ${
                    dark ? 'text-gray-500' : 'text-ink-400'
                  }`}
                >
                  {post.excerpt}
                </p>

                {/* Date */}
                <div
                  className={`mt-6 flex items-center gap-1.5 text-xs transition-colors duration-300 ${
                    dark ? 'text-gray-600' : 'text-ink-500'
                  }`}
                >
                  <FiCalendar className="h-3.5 w-3.5" />
                  {post.date}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
