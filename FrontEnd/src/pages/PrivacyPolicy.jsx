import Reveal from '../components/Reveal'
import BackButton from '../components/BackButton'
import CtaBanner from '../components/CtaBanner'
import { useTheme } from '../context/ThemeContext'
import { usePageTitle } from '../hooks/usePageTitle'

const sections = [
  {
    title: 'Information We Collect',
    content: `When you join Nexcarinner, we may collect personal information you voluntarily provide, such as your name, email address, and profile details during sign-up or community interactions. We also collect usage data including pages visited, features used, and general interaction patterns to improve the platform.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to provide and maintain the Nexcarinner platform, personalize your experience, communicate with you about community updates and events, improve our services, and ensure the security and integrity of our platform. We do not sell your personal information to third parties.`,
  },
  {
    title: 'Community Content',
    content: `Any content you post in community spaces such as discussions, project showcases, or event submissions may be visible to other members. You are responsible for the information you share publicly within the community. We encourage thoughtful sharing and respectful interactions.`,
  },
  {
    title: 'Third-Party Services',
    content: `Nexcarinner integrates with third-party services such as Clerk for authentication and Discord for community communication. These services have their own privacy policies governing how they handle your data. We encourage you to review their respective privacy policies.`,
  },
  {
    title: 'Data Security',
    content: `We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Cookies and Tracking',
    content: `Nexcarinner may use cookies and similar technologies to maintain session state, remember your preferences, and analyze usage patterns. You can control cookie settings through your browser preferences.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to access, update, or delete your personal information at any time through your account settings. You may also contact us directly to request data removal or to exercise any applicable data protection rights.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify the community of significant changes through our platform or via email.`,
  },
]

const PrivacyPolicy = () => {
  const { dark } = useTheme()
  usePageTitle('Privacy Policy')

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
            Privacy <span className="text-gradient-animate">Policy</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p
            className={`mx-auto mt-5 max-w-2xl text-lg leading-relaxed transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-ink-400'
            }`}
          >
            Your privacy matters to us. This policy explains how Nexcarinner collects, uses, and
            protects your information.
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
            Have <span className="text-gradient">questions</span>?
          </>
        }
        description="If you have any concerns about your privacy, feel free to reach out to us."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Back to Home"
        secondaryTo="/"
      />
    </>
  )
}

export default PrivacyPolicy
