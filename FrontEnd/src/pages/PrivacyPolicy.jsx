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
    title: 'Information We Collect',
    content: [
      `We collect what you give us, such as your name and email when you contact us and your sign-in details if you create an account. We also save your light or dark mode choice in your own browser, and our host (Vercel) records standard request logs such as your IP address and browser.`,
    ],
  },
  {
    title: 'How We Use Information',
    content: [
      `We use your information to manage your account, reply to your messages, and keep the site running and improving. We never sell it and never share it for advertising.`,
    ],
  },
  {
    title: 'Third-Party Services',
    content: [
      `Sign-in is handled by Clerk, typefaces are loaded from Google Fonts, and hosting is by Vercel, each under its own privacy policy. We also link to platforms such as Discord and WhatsApp, which follow their own terms.`,
    ],
  },
  {
    title: 'Contact Us',
    content: [
      `For any privacy question or data request, contact us at nexcarinner.support@gmail.com or +91 62056 39470.`,
    ],
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
            A short summary of what this site collects, why we use it, and how to reach us.
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
