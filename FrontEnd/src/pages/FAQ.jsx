import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiChevronDown, FiHelpCircle } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { useTheme } from '../context/ThemeContext'

const faqData = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Nexcarinner?',
        a: 'Nexcarinner is a student-led tech community where learners collaborate on projects, attend events and hackathons, find mentors, and grow their skills across web development, data science, AI/ML, cybersecurity, and more.',
      },
      {
        q: 'Is Nexcarinner free to join?',
        a: 'Yes — completely free. We believe access to a great learning community should not depend on your budget. There are no hidden fees or premium tiers.',
      },
      {
        q: 'Who can join Nexcarinner?',
        a: 'Any student, regardless of school, year, or skill level. Whether you are writing your first "Hello World" or shipping production apps, there is a place for you here.',
      },
    ],
  },
  {
    category: 'Membership',
    questions: [
      {
        q: 'How do I join the community?',
        a: 'Head to the Contact page and reach out to us — we will send you an invite to our Discord server where everything happens. From there you can introduce yourself, pick a domain track, and start contributing.',
      },
      {
        q: 'Can I be part of multiple domain tracks?',
        a: 'Absolutely. Many members are in two or even three tracks — for example, someone building a full-stack app might also be in the Data Science track. We encourage cross-domain learning.',
      },
      {
        q: 'What happens if I go inactive for a while?',
        a: 'Nothing harsh. Life gets busy. Just jump back in whenever you are ready. We do archive inactive members after 6 months of zero activity, but rejoining is instant.',
      },
    ],
  },
  {
    category: 'Events & Hackathons',
    questions: [
      {
        q: 'How often do you run events?',
        a: 'We run at least one event per month — ranging from casual study sessions and workshop streams to full 48-hour hackathons. Check the Events page for the current calendar.',
      },
      {
        q: 'Do I need a team to join a hackathon?',
        a: 'No. You can join solo and we will help you find teammates from the community. Most of our best projects have come from people who met each other at the event.',
      },
      {
        q: 'Can I suggest or organise my own event?',
        a: 'Yes! Reach out to any Community Manager on Discord. We love member-led events — workshops, talk series, project showcases, you name it. We will support you with logistics.',
      },
    ],
  },
  {
    category: 'Mentorship',
    questions: [
      {
        q: 'How does the mentorship programme work?',
        a: 'Mentors are experienced members (seniors, alumni, or professionals) who volunteer their time. Sessions are async-first with an optional weekly check-in. You set goals, mentors guide you, and peer pairs keep each other accountable.',
      },
      {
        q: 'Can I become a mentor?',
        a: 'Yes! If you have been a member for at least 3 months and have expertise in a domain, you can apply to become a mentor. Reach out to our Mentorship Coordinator on Discord.',
      },
      {
        q: 'Is mentorship one-on-one or in groups?',
        a: 'Both. We have 1:1 mentor-mentee pairings for focused guidance, and group mentorship circles (4–6 members) for peer learning in the same track.',
      },
    ],
  },
  {
    category: 'Projects',
    questions: [
      {
        q: 'How do I propose a project idea?',
        a: 'Post your idea in the #project-ideas channel on Discord with a short description. If it gets traction, we set up a dedicated project channel and help you form a team.',
      },
      {
        q: 'Do projects need to be open source?',
        a: 'We strongly encourage it, but it is not mandatory. Open source projects get more visibility, feedback, and contributors from within the community.',
      },
      {
        q: 'What if a project I joined goes stale?',
        a: "It happens. You can either pick it back up if the original team is gone, archive it, or fork it. We don't abandon ideas — we just pause them.",
      },
    ],
  },
]

// Accordion item component
const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  const { dark } = useTheme()

  return (
    <div
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
        isOpen
          ? dark
            ? 'border-white/14 bg-white/6 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
            : 'border-brand-500/20 bg-brand-500/5 shadow-[0_4px_20px_rgba(124,58,237,0.08)]'
          : dark
          ? 'border-white/8 bg-[#1a1a1a]'
          : 'border-ink-300/40 bg-white'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 ${
          dark ? 'hover:bg-white/4' : 'hover:bg-brand-500/5'
        }`}
      >
        <span
          className={`font-display text-base font-semibold transition-colors duration-300 ${
            dark
              ? isOpen ? 'text-white' : 'text-gray-300'
              : isOpen ? 'text-brand-700' : 'text-ink-50'
          }`}
        >
          {question}
        </span>
        <FiChevronDown
          className={`ml-4 h-5 w-5 shrink-0 transition-all duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          } ${dark ? 'text-gray-500' : 'text-ink-400'}`}
        />
      </button>

      {/* Smooth height animation via max-height */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p
          className={`px-6 pb-6 text-sm leading-relaxed transition-colors duration-300 ${
            dark ? 'text-gray-400' : 'text-ink-400'
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  )
}

const FAQ = () => {
  const navigate = useNavigate()
  const { dark } = useTheme()
  // Track open items as "categoryIndex-questionIndex"
  const [openItem, setOpenItem] = useState('0-0')

  const handleToggle = (key) => {
    setOpenItem((prev) => (prev === key ? null : key))
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-[#0f0f0f]' : 'bg-ink-950'}`}>
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-16 lg:px-8">

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
          <span className="chip">
            <FiHelpCircle className="h-3.5 w-3.5" />
            Questions answered
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className={`mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            Frequently Asked{' '}
            <span className="text-gradient-animate">Questions</span>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            Everything we get asked most. If something is missing, drop us a
            message on Discord or via the Contact page.
          </p>
        </Reveal>

        {/* FAQ sections */}
        <div className="mt-16 space-y-14">
          {faqData.map((section, catIndex) => (
            <Reveal key={section.category} delay={catIndex * 60}>
              <div>
                {/* Category heading */}
                <h2
                  className={`mb-5 font-display text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                    dark ? 'text-gray-600' : 'text-ink-500'
                  }`}
                >
                  {section.category}
                </h2>

                {/* Accordion */}
                <div className="space-y-3">
                  {section.questions.map((item, qIndex) => {
                    const key = `${catIndex}-${qIndex}`
                    return (
                      <AccordionItem
                        key={key}
                        question={item.q}
                        answer={item.a}
                        isOpen={openItem === key}
                        onToggle={() => handleToggle(key)}
                      />
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Still have questions? */}
        <Reveal delay={300}>
          <div
            className={`mt-20 rounded-2xl border p-10 text-center transition-colors duration-300 ${
              dark
                ? 'border-white/8 bg-[#1a1a1a]'
                : 'glass'
            }`}
          >
            <span
              className={`font-display text-2xl font-bold transition-colors duration-300 ${
                dark ? 'text-white' : 'text-ink-50'
              }`}
            >
              Still have questions?
            </span>
            <p
              className={`mt-3 text-sm transition-colors duration-300 ${
                dark ? 'text-gray-500' : 'text-ink-400'
              }`}
            >
              We are active on Discord every day. Come say hi.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="btn-gradient mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              Contact us
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default FAQ
