import Reveal from '../components/Reveal'
import BackButton from '../components/BackButton'
import CtaBanner from '../components/CtaBanner'
import { useTheme } from '../context/ThemeContext'
import { usePageTitle } from '../hooks/usePageTitle'

/*
 * `content` may be a single string or an array of paragraphs.
 */
const sections = [
  {
    title: 'Using Nexcarinner',
    content: [
      `Nexcarinner is a free, student-led community for learning, events and collaboration, and taking part costs nothing. By signing up or joining in, you agree to these terms.`,
    ],
  },
  {
    title: 'User Responsibilities',
    content: [
      `Use the site and community lawfully and respectfully: no harassment, spam, scams or impersonation, and never share anyone's private information. You are responsible for your account, so keep your credentials to yourself and tell us at nexcarinner.support@gmail.com if someone else gets in.`,
    ],
  },
  {
    title: 'Community Content',
    content: [
      `You keep ownership of everything you create, and only share content you have the right to share. By sharing it you allow us to display it for the community, for example featuring a project in the gallery.`,
    ],
  },
  {
    title: 'Updates to These Terms',
    content: [
      `We may update these terms from time to time, and continuing to use the site after an update means you accept the new version.`,
    ],
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
            The simple rules for using Nexcarinner.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p
            className={`mt-4 text-sm transition-colors duration-300 ${
              dark ? 'text-gray-600' : 'text-ink-500'
            }`}
          >
            Last updated: October 2026
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
                <div className="mt-3 space-y-3">
                  {(Array.isArray(section.content) ? section.content : [section.content]).map(
                    (paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={`text-sm leading-relaxed transition-colors duration-300 ${
                          dark ? 'text-gray-400' : 'text-ink-400'
                        }`}
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </div>
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
        description="Using Nexcarinner means agreeing to these terms. We are a free community for students and freshers — come learn, build and collaborate."
        primaryLabel="Get Started"
        primaryTo="/contact"
        secondaryLabel="Back to Home"
        secondaryTo="/"
      />
    </>
  )
}

export default TermsOfService
