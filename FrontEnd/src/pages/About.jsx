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
import SocialIcon from '../components/SocialIcon'
import { useTheme } from '../context/ThemeContext'
import ImageSkeleton from '../components/Skeleton/ImageSkeleton'
import GunjanImg from '../assets/Gunjan.jpg'
import AnkitaImg from '../assets/Ankita.jpg'
import AnkurImg from '../assets/Ankur.jpg'
import KrishImg from '../assets/Krish.jpg'
import LakshyaImg from '../assets/Lakshya.jpg'
import SauryaImg from '../assets/Saurya.jpg'
import ShadowImg from '../assets/Shadow.jpg'
import PahuImg from '../assets/Pahu.jpg'
import SurajitImg from '../assets/Surajit.jpg'
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
      linkedin: 'https://www.linkedin.com/in/with-gunjan',
      instagram: 'https://www.instagram.com/with_gunjan_'
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
      linkedin: 'https://www.linkedin.com/in/saurya-kapoor',
      github: 'https://github.com/sauryakapoor'
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
      linkedin: 'https://www.linkedin.com/in/krishanjit-chakraborty-258a5237a',
      instagram: 'https://www.instagram.com/_k_r_i_s_h_x_',
      github: 'https://github.com/codexxxx07',
      discord: 'https://discord.com/channels/krish014669'
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
      linkedin: 'https://www.linkedin.com/in/surajit-mandal-4a921b328',
      github: 'https://github.com/Ims2006',
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
      linkedin: 'https://www.linkedin.com/in/hrpahulpreetofficial',
      instagram: 'https://www.instagram.com/hrpahulpreetofficial'
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
      linkedin: 'https://www.linkedin.com/in/gourab-gorai-4a51541ba',
      instagram: 'https://www.instagram.com/gourab.gorai.9862',
      github: 'https://github.com/GourabGorai'
    }
  },
  {
    name: 'Siddiqua',
    role: 'Opportunity Curator',
    description: 'Finding and sharing valuable opportunities, resources, and updates for the community',
    image: null,
    initials: 'SD',
    gradient: 'from-brand-600 to-flare-pink',
    socials: {
      github: 'https://github.com/Siddiqua2007'
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
      linkedin: 'https://www.linkedin.com/in/ankita-p-518a462b7',
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
      linkedin: 'https://www.linkedin.com/in/ankur-kumar-gupta-8b3b903a6',
      instagram: 'https://www.instagram.com/ankur4965423',
      github: 'https://github.com/ankurkrgupta22122006-oss',
      discord: 'https://discordapp.com/users/krrish0998'
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
      linkedin: 'https://www.linkedin.com/in/harshialrawat',
      instagram: 'https://www.instagram.com/shadow_slave_02',
      discord: 'https://discord.gg/6hprSUpY'
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
      linkedin: 'https://www.linkedin.com/in/lakshya10',
      instagram: 'https://www.instagram.com/__.lakxz.tkdian.__'                                                                                                                                                                                
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

const socialHover = {
  linkedin: 'hover:bg-[#0077b5] hover:text-white hover:border-transparent',
  instagram:
    'hover:bg-linear-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white hover:border-transparent',
  github: 'hover:bg-gray-900 hover:text-white hover:border-transparent',
  discord: 'hover:bg-[#5865F2] hover:text-white hover:border-transparent',
}

const socialConfig = [
  { key: 'linkedin', label: 'LinkedIn', icon: FaLinkedin, hover: socialHover.linkedin },
  { key: 'instagram', label: 'Instagram', icon: FaInstagram, hover: socialHover.instagram },
  { key: 'github', label: 'GitHub', icon: FaGithub, hover: socialHover.github },
  { key: 'discord', label: 'Discord', icon: FaDiscord, hover: socialHover.discord },
]

const TeamCard = ({ member }) => {
  const { dark } = useTheme()
  return (
    <div className="group relative h-full">
      <div className="glass card-lift relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-300 ease-out hover:-translate-y-1.5">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${
            dark ? 'via-white/12' : 'via-brand-500/40'
          } to-transparent`}
        />

        {/* Profile Image/Initials */}
        <div className="flex justify-center">
          <div className="relative">
            <div
              className={`absolute -inset-1.5 rounded-full bg-linear-to-br ${member.gradient} opacity-25 blur-[6px] transition-opacity duration-300 group-hover:opacity-45`}
            />
            {member.image ? (
              <ImageSkeleton
                src={member.image}
                alt={member.name}
                className="rounded-full"
                imgClassName={`relative h-28 w-28 rounded-full object-cover shadow-[0_10px_24px_-8px_rgba(34,29,58,0.35)] ring-4 transition-transform duration-200 ease-in-out group-hover:scale-105 ${
                  dark ? 'ring-[#1c1c1c]' : 'ring-white'
                }`}
              />
            ) : (
              <span
                className={`relative flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br ${member.gradient} font-display text-3xl font-bold text-white shadow-[0_10px_24px_-8px_rgba(34,29,58,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] ring-4 transition-transform duration-200 ease-in-out group-hover:scale-105 ${
                  dark ? 'ring-[#1c1c1c]' : 'ring-white'
                }`}
              >
                {member.initials}
              </span>
            )}
            <span
              aria-hidden="true"
              className="online-dot absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4"
            />
          </div>
        </div>

        {/* Name and Role */}
        <div className="mt-6 text-center">
          <h3
            className={`font-display text-xl font-bold transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            {member.name}
          </h3>
          <p
            className={`mt-1.5 text-sm font-medium transition-colors duration-300 ${
              dark ? 'text-gray-500' : 'text-ink-500'
            }`}
          >
            {member.role}
          </p>
        </div>

        {/* Description */}
        <p
          className={`mt-4 text-center text-sm leading-relaxed transition-colors duration-300 ${
            dark ? 'text-gray-500' : 'text-ink-400'
          }`}
        >
          {member.description}
        </p>

        {/* Social Icons — rendered only when a real link exists */}
        <div className="mt-6 flex justify-center gap-3">
          {socialConfig.map(({ key, label, icon, hover }) =>
            member.socials[key] && member.socials[key] !== '#' ? (
              <SocialIcon
                key={key}
                icon={icon}
                href={member.socials[key]}
                label={label}
                hoverClass={hover}
              />
            ) : null,
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
