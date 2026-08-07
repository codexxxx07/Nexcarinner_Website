import {
  FiUsers,
  FiBookOpen,
  FiZap,
  FiHeart,
  FiAward,
  FiShield,
} from 'react-icons/fi'
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaDiscord,
} from 'react-icons/fa'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import { useTheme } from '../context/ThemeContext'
import GunjanImg from '../assets/Gunjan.jpg'
import AnkitaImg from '../assets/Ankita.jpg'
import AnkurImg from '../assets/Ankur.jpg'
import KrishImg from '../assets/Krish.jpg'
import LakshyaImg from '../assets/Lakshya.jpg'
import SauryaImg from '../assets/Saurya.jpg'
import ShadowImg from '../assets/Shadow.jpg'
import PahuImg from '../assets/Pahu.jpg'
import SurajitImg from '../assets/Surajit.jpg'
import SiddiquaImg from '../assets/Siddiqua.jpg'
import GourabImg from '../assets/Gourab.jpg'

const values = [
  {
    title: 'Collaboration',
    description: 'We believe great things are built together, not alone.',
    icon: FiUsers,
    gradient: 'from-brand-500 to-brand-600',
  },
  {
    title: 'Learning',
    description: 'Continuous growth and curiosity are at our core.',
    icon: FiBookOpen,
    gradient: 'from-flare-cyan to-brand-500',
  },
  {
    title: 'Innovation',
    description: 'We push boundaries and reward bold ideas.',
    icon: FiZap,
    gradient: 'from-flare-pink to-brand-500',
  },
  {
    title: 'Inclusivity',
    description: 'Everyone is welcome, at any skill level.',
    icon: FiHeart,
    gradient: 'from-brand-500 to-flare-pink',
  },
  {
    title: 'Excellence',
    description: 'We sweat the details and ship quality.',
    icon: FiAward,
    gradient: 'from-brand-600 to-flare-cyan',
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency and honesty.',
    icon: FiShield,
    gradient: 'from-flare-cyan to-flare-pink',
  },
]

const team = [
  {
    name: 'Gunjan Kumar Gupta',
    role: 'Founder',
    description: 'Visionary behind NexCarInner, leading the community with ideas, direction, and long-term goals',
    image: GunjanImg,
    initials: 'GK',
    gradient: 'from-brand-500 to-flare-pink',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
  {
    name: 'Saurya Kapoor',
    role: 'Co-Founder',
    description: 'Co-driving the mission, supporting growth, strategy, and overall execution of the community',
    image: SauryaImg,
    initials: 'SY',
    gradient: 'from-flare-cyan to-brand-500',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
  {
    name: 'Krish Chakraborty',
    role: 'Community Manager/Lead + Tech & Full-Stack Lead',
    description: 'Managing the community while leading the tech side, building and maintaining the platform from scratch',
    image: KrishImg,
    initials: 'KR',
    gradient: 'from-flare-pink to-brand-500',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
  {
    name: 'Surajit Mandal',
    role: 'Community Manager/Lead + Data science Lead',
    description: 'Handling community engagement while driving data-focused initiatives and insights',
    image: SurajitImg,
    initials: 'SJ',
    gradient: 'from-brand-500 to-flare-cyan',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
  {
    name: 'Pahulpreet Singh',
    role: 'Recruitment Head',
    description: 'Responsible for onboarding talent and growing the team with the right people',
    image: PahuImg,
    initials: 'PP',
    gradient: 'from-brand-600 to-flare-pink',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
  {
    name: 'Gourab Gorai',
    role: 'Community Coordinator',
    description: 'Ensuring smooth communication and coordination within the community',
    image: GourabImg,
    initials: 'PP',
    gradient: 'from-brand-600 to-flare-pink',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
  {
    name: 'Siddiqua',
    role: 'Opportunity Curator',
    description: 'Finding and sharing valuable opportunities, resources, and updates for the community',
    image: SiddiquaImg,
    initials: 'SD',
    gradient: 'from-brand-600 to-flare-pink',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
  {
    name: 'Ankita Pati',
    role: 'AIML Mentor',
    description: 'Guiding members in AI/ML, helping them learn and grow in the field',
    image: AnkitaImg,
    initials: 'AK',
    gradient: 'from-flare-cyan to-flare-pink',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
  {
    name: 'Ankur Kumar Gupta',
    role: 'Full-Stack Mentor',
    description: 'Supporting full-stack development learning and sharing resources with the team',
    image: AnkurImg,
    initials: 'AK',
    gradient: 'from-flare-cyan to-flare-pink',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
  {
    name: 'Harshial Rawat',
    role: 'Cybersecurity Mentor',
    description: 'Guiding members to understand cybersecurity and ethical hacking fundamentals',
    image: ShadowImg,
    initials: 'AK',
    gradient: 'from-flare-cyan to-flare-pink',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
  {
    name: 'Lakshya GT',
    role: 'Data Analytics Mentor',
    description: 'Guiding members in data analytics, helping them understand data, tools and real-world insights',
    image: LakshyaImg,
    initials: 'AK',
    gradient: 'from-flare-cyan to-flare-pink',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#',
      discord: '#'
    }
  },
]

const timeline = [
  {
    year: '2024',
    title: 'The spark',
    description: 'Nexcarinner is founded with a simple idea: connect student developers who care.',
  },
  {
    year: '2025',
    title: 'First hackathon',
    description: 'Our inaugural hackathon brings in 100+ participants and 20 shipped projects.',
  },
  {
    year: '2026',
    title: 'The expansion',
    description: '500+ members across six communities, with mentorship and demo days every month.',
  },
]

const TeamCard = ({ member }) => {
  const { dark } = useTheme()
  return (
    <div className="group relative h-full">
      <div
        className={`h-full rounded-3xl p-8 transition-all duration-300 ease-out hover:-translate-y-2 ${
          dark
            ? 'bg-[#1a1a1a] border border-white/8 shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07)]'
            : 'bg-linear-to-br from-gray-50 to-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]'
        }`}
      >
        {/* Profile Image/Initials */}
        <div className="flex justify-center">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className={`h-24 w-24 rounded-full object-cover shadow-lg ring-2 ring-white/10 transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:shadow-xl ${
                dark ? 'ring-white/10' : 'ring-black/10'
              }`}
            />
          ) : (
            <span
              className={`flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br ${member.gradient} font-display text-3xl font-bold text-white shadow-lg ring-2 transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:shadow-xl ${
                dark ? 'ring-white/10' : 'ring-black/10'
              }`}
            >
              {member.initials}
            </span>
          )}
        </div>

        {/* Name and Role */}
        <div className="mt-6 text-center">
          <h3
            className={`font-display text-xl font-bold transition-colors duration-300 ${
              dark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {member.name}
          </h3>
          <p
            className={`mt-1 text-sm font-medium transition-colors duration-300 ${
              dark ? 'text-gray-500' : 'text-gray-500'
            }`}
          >
            {member.role}
          </p>
        </div>

        {/* Description */}
        <p
          className={`mt-4 text-center text-sm leading-relaxed transition-colors duration-300 ${
            dark ? 'text-gray-500' : 'text-gray-600'
          }`}
        >
          {member.description}
        </p>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-3">
          <a
            href={member.socials.linkedin}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:shadow-md ${
              dark
                ? 'bg-white/8 text-gray-400 hover:bg-[#0077b5] hover:text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-[#0077b5] hover:text-white'
            }`}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href={member.socials.instagram}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:bg-linear-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white hover:shadow-md ${
              dark ? 'bg-white/8 text-gray-400' : 'bg-gray-200 text-gray-600'
            }`}
            aria-label="Instagram"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href={member.socials.github}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-900 hover:text-white hover:shadow-md ${
              dark ? 'bg-white/8 text-gray-400' : 'bg-gray-200 text-gray-600'
            }`}
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          {member.socials.discord && (
            <a
              href={member.socials.discord}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:bg-[#5865F2] hover:text-white hover:shadow-md ${
                dark ? 'bg-white/8 text-gray-400' : 'bg-gray-200 text-gray-600'
              }`}
              aria-label="Discord"
            >
              <FaDiscord className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const About = () => {
  const { dark } = useTheme()
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal>
          <span className="chip">Who we are</span>
        </Reveal>
        <Reveal delay={100}>
          <h1
            className={`mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            More than a community — <span className="text-gradient-animate">a launchpad</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            Nexcarinner exists to help students level up, find their people,
            and build things worth showing off.
          </p>
        </Reveal>
      </section>

      {/* Mission / Vision */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="glass card-lift h-full rounded-2xl p-8 sm:p-10">
              <span className="chip">Our mission</span>
              <h2
                className={`mt-6 font-display text-2xl font-bold transition-colors duration-300 ${
                  dark ? 'text-white' : 'text-ink-50'
                }`}
              >
                Make learning feel alive
              </h2>
              <p
                className={`mt-4 leading-relaxed transition-colors duration-300 ${
                  dark ? 'text-gray-400' : 'text-ink-400'
                }`}
              >
                To create an inclusive, hands-on environment where students
                learn by doing, collaborate on real problems, and grow their
                technical skills — faster than they would on their own.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="glass card-lift h-full rounded-2xl p-8 sm:p-10">
              <span className="chip">Our vision</span>
              <h2
                className={`mt-6 font-display text-2xl font-bold transition-colors duration-300 ${
                  dark ? 'text-white' : 'text-ink-50'
                }`}
              >
                The default home for student builders
              </h2>
              <p
                className={`mt-4 leading-relaxed transition-colors duration-300 ${
                  dark ? 'text-gray-400' : 'text-ink-400'
                }`}
              >
                To become the leading student tech community — empowering the
                next generation of developers, designers, and innovators to
                shape what comes next.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Our values"
          title={
            <>
              What we <span className="text-gradient">stand for</span>
            </>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={(index % 3) * 80}>
              <div className="glass card-lift group relative h-full overflow-hidden rounded-2xl p-8">
                <span
                  className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${value.gradient} text-white shadow-[0_8px_18px_-8px_rgba(124,58,237,0.6),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.1)]`}
                >
                  <value.icon className="h-5 w-5" />
                </span>
                <h3
                  className={`relative mt-6 font-display text-xl font-bold transition-colors duration-300 ${
                    dark ? 'text-white' : 'text-ink-50'
                  }`}
                >
                  {value.title}
                </h3>
                <p
                  className={`relative mt-3 text-sm leading-relaxed transition-colors duration-300 ${
                    dark ? 'text-gray-400' : 'text-ink-400'
                  }`}
                >
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="The team"
          title={
            <>
              Run by people who <span className="text-gradient">show up</span>
            </>
          }
          description="A small, obsessed crew keeping the community sharp, welcoming, and always moving."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={(index % 3) * 80}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Our journey"
          title={
            <>
              From idea to <span className="text-gradient">impact</span>
            </>
          }
        />
        <div className="relative">
          <div className="absolute left-5.5 top-2 h-full w-px bg-linear-to-b from-brand-500 via-flare-pink to-transparent sm:left-1/2" />
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <Reveal
                key={item.year}
                variant={index % 2 === 0 ? 'left' : 'right'}
                className="relative"
              >
                <div
                  className={`flex flex-col gap-6 pl-16 sm:w-1/2 sm:pl-0 ${
                    index % 2 === 0
                      ? 'sm:pr-14 sm:text-right'
                      : 'sm:ml-auto sm:pl-14'
                  }`}
                >
                  <div className="glass card-lift rounded-2xl p-7">
                    <span className="font-display text-3xl font-bold text-gradient">
                      {item.year}
                    </span>
                    <h3
                      className={`mt-3 font-display text-xl font-bold transition-colors duration-300 ${
                        dark ? 'text-white' : 'text-ink-50'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed transition-colors duration-300 ${
                        dark ? 'text-gray-400' : 'text-ink-400'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
                <span
                  className={`absolute left-3.5 top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-600 shadow-sm sm:left-1/2 sm:-translate-x-1/2 ${
                    dark ? 'bg-[#1a1a1a]' : 'bg-white'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Build with <span className="text-gradient">us</span>
          </>
        }
        description="We're always looking for passionate people to help grow the community — as members, mentors, or organizers."
        primaryLabel="View Openings"
        primaryTo="/contact"
        secondaryLabel="Talk to us"
        secondaryTo="/contact"
      />
    </>
  )
}

export default About
