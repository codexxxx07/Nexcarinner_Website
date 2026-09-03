import Reveal from '../components/Reveal'
import BackButton from '../components/BackButton'
import CtaBanner from '../components/CtaBanner'
import { useTheme } from '../context/ThemeContext'
import { usePageTitle } from '../hooks/usePageTitle'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By joining and using Nexcarinner, you agree to these Terms of Service. If you do not agree with any part of these terms, please do not use the platform. We reserve the right to update these terms at any time, and continued use of the platform constitutes acceptance of any changes.`,
  },
  {
    title: 'Community Conduct',
    content: `Nexcarinner is built on mutual respect and collaboration. You agree to treat all community members with dignity, avoid harassment or discrimination of any kind, contribute constructively to discussions, and follow the guidelines set by community organizers. Violations may result in temporary or permanent removal from the community.`,
  },
  {
    title: 'Account Responsibility',
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must provide accurate information during registration and keep it updated. Notify us immediately if you suspect unauthorized access to your account.`,
  },
  {
    title: 'Content and Intellectual Property',
    content: `You retain ownership of any original content you create and share within the community. By posting content, you grant Nexcarinner a non-exclusive license to display and distribute it within the platform for community purposes. Do not share content that infringes on the intellectual property rights of others.`,
  },
  {
    title: 'Events and Collaborations',
    content: `Nexcarinner organizes hackathons, workshops, and collaborative projects. Participation is voluntary, and organizers reserve the right to set specific rules for individual events. Projects created during events remain the intellectual property of their creators unless otherwise agreed upon.`,
  },
  {
    title: 'Prohibited Activities',
    content: `The following are strictly prohibited: spamming, phishing, distributing malware, unauthorized access to other accounts or systems, sharing inappropriate or offensive content, commercial solicitation without permission, and any activity that violates applicable laws or regulations.`,
  },
  {
    title: 'Limitation of Liability',
    content: `Nexcarinner is provided as a community platform on an as-is basis. We are not liable for any damages arising from the use of the platform, including but not limited to loss of data, service interruptions, or interactions between community members. We strive to maintain uptime but do not guarantee uninterrupted access.`,
  },
  {
    title: 'Termination',
    content: `We reserve the right to suspend or terminate your access to Nexcarinner at our discretion, particularly in cases of terms violation or behavior harmful to the community. You may also leave the community at any time by contacting us or deactivating your account.`,
  },
  {
    title: 'Governing Terms',
    content: `These Terms of Service are governed by applicable laws. Any disputes arising from or related to these terms or the use of Nexcarinner shall be resolved through good-faith communication first, and if necessary, through appropriate legal channels.`,
  },
]

const TermsOfService = () => {
  const { dark } = useTheme()
  usePageTitle('Terms of Service')

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-6 pt-16 lg:px-8 lg:pt-24">
        <Reveal>
          <BackButton to="/" className="mb-6" />
        </Reveal>
        <Reveal>
          <span className="chip">Legal</span>
        </Reveal>
        <Reveal delay={100}>
          <h1
            className={`mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl transition-colors duration-300 ${
              dark ? 'text-white' : 'text-ink-50'
            }`}
          >
            Terms of <span className="text-gradient-animate">Service</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p
            className={`mx-auto mt-5 max-w-2xl text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            The rules and guidelines that help keep our community safe, respectful, and productive
            for everyone.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p
            className={`mt-4 text-sm transition-colors duration-300 ${
              dark ? 'text-gray-600' : 'text-ink-500'
            }`}
          >
            Last updated: September 2026
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="space-y-10">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={(index % 3) * 60}>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h2
                  className={`font-display text-xl font-bold transition-colors duration-300 ${
                    dark ? 'text-white' : 'text-ink-50'
                  }`}
                >
                  {section.title}
                </h2>
                <p
                  className={`mt-3 text-sm leading-relaxed transition-colors duration-300 ${
                    dark ? 'text-gray-400' : 'text-ink-400'
                  }`}
                >
                  {section.content}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Ready to <span className="text-gradient">join us</span>?
          </>
        }
        description="By using Nexcarinner, you agree to these terms and become part of a thriving student community."
        primaryLabel="Get Started"
        primaryTo="/contact"
        secondaryLabel="Back to Home"
        secondaryTo="/"
      />
    </>
  )
}

export default TermsOfService
