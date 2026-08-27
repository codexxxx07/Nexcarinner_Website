import { useState } from 'react'
import {
  FiClock,
  FiMapPin,
  FiArrowRight,
  FiCalendar,
  FiRadio,
} from 'react-icons/fi'
import Reveal from '../components/Reveal'
import CtaBanner from '../components/CtaBanner'
import { Button } from '../components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs'
import { useTheme } from '../context/ThemeContext'

const filters = ['All', 'Workshops', 'Hackathons', 'Meetups', 'Webinars']

const typeStyles = {
  Workshops: {
    light: { text: 'text-cyan-800', bg: 'bg-cyan-100/70', border: 'border-cyan-200' },
    dark: { text: 'text-cyan-300', bg: 'bg-cyan-900/20', border: 'border-cyan-800/40' },
  },
  Hackathons: {
    light: { text: 'text-pink-600', bg: 'bg-pink-100/70', border: 'border-pink-200' },
    dark: { text: 'text-pink-300', bg: 'bg-pink-900/20', border: 'border-pink-800/40' },
  },
  Meetups: {
    light: { text: 'text-violet-700', bg: 'bg-violet-100/70', border: 'border-violet-200' },
    dark: { text: 'text-violet-300', bg: 'bg-violet-900/20', border: 'border-violet-800/40' },
  },
  Webinars: {
    light: { text: 'text-sky-700', bg: 'bg-sky-100/70', border: 'border-sky-200' },
    dark: { text: 'text-sky-300', bg: 'bg-sky-900/20', border: 'border-sky-800/40' },
  },
}

const events = [
  {
    title: 'React Workshop',
    date: 'Jan 15, 2026',
    time: '2:00 PM',
    location: 'Online',
    type: 'Workshops',
    description: 'Learn modern React patterns and best practices in this hands-on workshop.',
  },
  {
    title: 'Annual Hackathon',
    date: 'Feb 20, 2026',
    time: '9:00 AM',
    location: 'Campus Hall',
    type: 'Hackathons',
    description: '48-hour hackathon to build innovative solutions with prizes for winners.',
    featured: true,
  },
  {
    title: 'Tech Meetup',
    date: 'Mar 10, 2026',
    time: '6:00 PM',
    location: 'Community Center',
    type: 'Meetups',
    description: 'Network with fellow tech enthusiasts and share your experiences.',
  },
  {
    title: 'AI Webinar',
    date: 'Apr 5, 2026',
    time: '3:00 PM',
    location: 'Online',
    type: 'Webinars',
    description: 'Explore the latest trends in artificial intelligence with industry experts.',
  },
  {
    title: 'Design Systems Workshop',
    date: 'May 12, 2026',
    time: '1:00 PM',
    location: 'Design Lab',
    type: 'Workshops',
    description: 'Build scalable and consistent design systems for your projects.',
  },
  {
    title: 'Cloud Computing Meetup',
    date: 'Jun 18, 2026',
    time: '5:00 PM',
    location: 'Tech Hub',
    type: 'Meetups',
    description: 'Discuss cloud architecture and deployment strategies.',
  },
]

const Events = () => {
  const { dark } = useTheme()
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredEvents =
    activeFilter === 'All'
      ? events
      : events.filter((event) => event.type === activeFilter)

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 text-center lg:px-8 lg:pt-24">
        <Reveal>
          <span className="chip">What's happening</span>
        </Reveal>
        <Reveal delay={100}>
          <h1
            className={`mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            Workshops, hackathons, <span className="text-gradient-animate">and everything in between</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p
            className={`mx-auto mt-5 max-w-2xl text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            Level up your skills and meet the people who make this community
            tick.
          </p>
        </Reveal>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center">
            <Tabs value={activeFilter} onValueChange={setActiveFilter} defaultValue="All">
              <TabsList className="flex-wrap h-auto py-1.5">
                {filters.map((filter) => (
                  <TabsTrigger key={filter} value={filter}>
                    {filter}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </Reveal>
      </section>

      {/* Events grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => {
            const styleSet = typeStyles[event.type] || typeStyles.Workshops
            const style = dark ? styleSet.dark : styleSet.light
            return (
              <Reveal key={event.title} delay={(index % 3) * 100}>
                <div
                  className={`glass card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 ${
                    event.featured ? 'ring-2 ring-brand-600/30' : ''
                  }`}
                >
                  {event.featured && (
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${
                        dark ? 'via-white/20' : 'via-flare-pink'
                      } to-transparent`}
                    />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${style.bg} ${style.border} ${style.text}`}
                    >
                      {event.type === 'Webinars' && <FiRadio className="h-3 w-3" />}
                      {event.type}
                    </span>
                    <span
                      className={`flex items-center gap-1.5 text-xs transition-colors duration-300 ${
                        dark ? 'text-gray-500' : 'text-ink-400'
                      }`}
                    >
                      <FiCalendar className="h-3.5 w-3.5" />
                      {event.date}
                    </span>
                  </div>

                  <h3
                    className={`mt-5 font-display text-xl font-bold transition-colors duration-300 ${
                      dark ? 'text-white' : 'text-ink-50'
                    }`}
                  >
                    {event.title}
                  </h3>
                  <p
                    className={`mt-2.5 flex-1 text-sm leading-relaxed transition-colors duration-300 ${
                      dark ? 'text-gray-400' : 'text-ink-400'
                    }`}
                  >
                    {event.description}
                  </p>

                  <div
                    className={`mt-5 flex items-center gap-6 border-t pt-4 text-sm transition-colors duration-300 ${
                      dark
                        ? 'border-white/8 text-gray-500'
                        : 'border-ink-800/80 text-ink-400'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <FiClock className={`h-4 w-4 ${dark ? 'text-gray-400' : 'text-brand-600'}`} />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2 truncate">
                      <FiMapPin className={`h-4 w-4 ${dark ? 'text-gray-400' : 'text-brand-600'}`} />
                      {event.location}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    size="md"
                    className={`w-full ${dark ? 'text-gray-300' : 'text-ink-300'}`}
                  >
                    Register
                    <FiArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Got an idea for <span className="text-gradient">an event?</span>
          </>
        }
        description="Have an idea for an event? We'd love to help you bring it to life — you bring the spark, we bring the stage."
        primaryLabel="Propose an Event"
        primaryTo="/contact"
        secondaryLabel="Talk to us"
        secondaryTo="/contact"
      />
    </>
  )
}

export default Events
