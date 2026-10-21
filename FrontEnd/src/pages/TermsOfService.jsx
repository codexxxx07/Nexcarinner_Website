import Reveal from '../components/Reveal'
import BackButton from '../components/BackButton'
import CtaBanner from '../components/CtaBanner'
import { useTheme } from '../context/ThemeContext'
import { usePageTitle } from '../hooks/usePageTitle'

/*
 * `content` may be a single string or an array of paragraphs.
 * `bullets` is optional and renders a simple list under the paragraphs.
 */
const sections = [
  {
    title: 'Acceptance of These Terms',
    content: [
      `These Terms of Service ("Terms") apply to your use of this website (the "Site") and to your participation in Nexcarinner community activities. By creating an account, using the Site, or taking part in a community activity, you agree to them. If you do not agree with any part of them, please do not use the Site.`,
      `You also confirm that you are at least 13 years old. If you are under 18, please involve a parent or guardian.`,
    ],
  },
  {
    title: 'What Nexcarinner Is, and What It Is Not',
    content: [
      `Nexcarinner is a free, student- and fresher-led community for people interested in technology and non-technology fields. Its purpose is to help members learn and develop new skills, collaborate on projects and ideas, connect with other learners and community members, take part in events, workshops, hackathons and other learning activities, explore opportunities in both technology and non-technology fields, share knowledge, and support one another as they grow.`,
      `The Site itself is an informational website. It presents our communities, events, gallery, guides and documentation, and it links to opportunities that we collect from the community and from third parties. Most community conversation happens on third-party platforms we link to, such as Discord and WhatsApp, and those platforms have their own terms, which also apply to you when you use them.`,
      `Nexcarinner is a community. It is not a government organisation, university, bank, employer, recruitment agency or identity-verification service. We do not verify anyone's legal identity, we are not an employer, and nothing on the Site is an official notice from any government body, university or financial institution. Joining and taking part is free: we do not charge membership, subscription or participation fees.`,
    ],
  },
  {
    title: 'Using the Website Responsibly',
    content: [
      `Please use the Site and the community in a way that is lawful, respectful and safe. You are responsible for your own account and for what you do with it, and you must comply with applicable law, including the law of India and of any other country where you take part.`,
    ],
  },
  {
    title: 'Community Conduct',
    content: [
      `Nexcarinner is built on mutual respect and collaboration. We expect members to:`,
    ],
    bullets: [
      `Treat other people with dignity and kindness, regardless of background, field of study, gender, or level of experience.`,
      `Give and accept constructive feedback, and keep disagreements civil.`,
      `Contribute to discussions and projects rather than disrupting them.`,
      `Take part responsibly in events, workshops and hackathons, and follow the rules set for each one.`,
      `Help newcomers, and share knowledge openly and honestly.`,
    ],
  },
  {
    title: 'Unacceptable Behaviour',
    content: [
      `Harassment, hate speech, discrimination, bullying, doxxing, spam, and sharing someone else's private information are not acceptable. Organisers may set additional rules for a particular event, track or group, and those rules apply to everyone taking part. We may remove content, restrict your access to the Site, or remove you from community channels where these expectations are not met, and we will explain the reason where we reasonably can.`,
    ],
  },
  {
    title: 'Accounts and Account Security',
    content: [
      `You may create a sign-in account using Clerk. You are responsible for keeping your credentials confidential, for everything that happens under your account, and for telling us promptly at nexcarinner.support@gmail.com if you suspect that someone else has accessed it. You must not share an account, create accounts for other people, or use an account to impersonate anyone.`,
      `You must give accurate registration information and keep it current. We do not ask for government ID documents, proof of identity, biometric information or payment details, so never send such information to us or into a community channel. You can request deletion of your account from the account settings in the sign-in menu at any time.`,
    ],
  },
  {
    title: 'Content You Share',
    content: [
      `You keep ownership of everything you create. Your projects, code, portfolios, writing, designs and artwork remain yours, and Nexcarinner does not claim ownership of your work.`,
      `When you post or share content with us, or in our community channels, you confirm that you have the right to share it, and you give us a non-exclusive, royalty-free licence to display and share it for the purpose of running the community, for example featuring a project in the gallery or an article in a post. You keep all of your rights in the content itself. Please do not post content you do not own, or content that is unlawful, defamatory or offensive.`,
      `The Nexcarinner name, logo, branding, website text and design belong to us or our contributors and are protected by intellectual property law. You may share short excerpts and links with attribution, but please do not reproduce substantial parts of the Site, or use our name and branding in a way that suggests endorsement, without our written permission.`,
    ],
  },
  {
    title: 'Events, Projects, Mentorship and Opportunities',
    content: [
      `The Site lists events, workshops, hackathons, learning tracks, certificates, and internship, job and other opportunities that we gather from the community and from third parties. Listing something here does not guarantee that it will happen, that there is a place for you, or that a prize, certificate, mentorship session, internship or job will be offered. Details can change, be rescheduled or be cancelled, so please confirm specifics with the organiser before making plans. The event listing and the organiser's own announcement are the authoritative sources, not this policy.`,
      `Each event or track may have its own rules, deadlines and eligibility conditions. Unless a specific event says otherwise in writing, the projects you build during an event remain yours.`,
      `Certificates shown in the Gallery are records of completion for the member and the track named. They are not an accreditation, licence, qualification or guarantee of employment, and where a verification link is provided, it points to the issuing provider.`,
      `Mentorship is offered by members and professionals who volunteer their time. We cannot guarantee that a particular mentor will be available, how many sessions you will get, or what any mentoring relationship will achieve.`,
    ],
  },
  {
    title: 'Third-Party Services and External Links',
    content: [
      `The Site links to external websites and platforms, including Discord, WhatsApp, GitHub, LinkedIn, Instagram, X, and course or certificate providers. These are operated by their own companies: their content, availability, terms and privacy practices are theirs, and we do not control them or accept responsibility for them. Following an external link is at your own risk. Anything you post or share on those platforms is handled by them under their own policies, not by us.`,
    ],
  },
  {
    title: 'Prohibited Activities',
    content: [],
    bullets: [
      `Sending spam or bulk unsolicited messages.`,
      `Phishing, scamming, or pretending to be another person or organisation.`,
      `Distributing malware, or attempting to break into accounts, systems or networks.`,
      `Scraping, overloading, or otherwise disrupting the Site or its community channels.`,
      `Sharing another person's private information without their permission.`,
      `Harassing, targeting, or bullying anyone.`,
      `Commercial solicitation, advertising, or trading member data without our permission.`,
      `Anything that breaks applicable law.`,
    ],
  },
  {
    title: 'Website Availability and Changes',
    content: [
      `We work to keep the Site available and up to date, but we do not promise that it will always be reachable, error-free or complete. We may change, move or remove content, such as event listings, gallery entries, guides and documentation, as the community evolves, and we may change or suspend parts of the Site at any time.`,
    ],
  },
  {
    title: 'Disclaimer and Limitation of Liability',
    content: [
      `The Site and the community are provided on an "as is" and "as available" basis. To the extent permitted by law, we do not warrant that content will be accurate, complete or current, and we are not liable for indirect or consequential loss arising from your use of the Site, from your dealings with other members, or from content on third-party platforms. Nothing in these Terms limits liability that cannot lawfully be limited, including liability for fraud.`,
    ],
  },
  {
    title: 'Suspension and Leaving',
    content: [
      `You can stop using the Site at any time, request deletion of your account from the account settings, and leave our community channels whenever you wish. We may suspend access to the Site, or remove you from community channels, where you break these Terms, where your behaviour harms the community, or where required by law.`,
    ],
  },
  {
    title: 'Governing Law and Disputes',
    content: [
      `These Terms are governed by the laws of India. If a dispute comes up, please raise it with us first at nexcarinner.support@gmail.com, since most questions are settled quickly that way. Where a dispute cannot be settled, the courts of India have jurisdiction. Nothing in these Terms prevents either of us from seeking urgent protection of our rights.`,
    ],
  },
  {
    title: 'Changes to These Terms',
    content: [
      `We may update these Terms from time to time. The "Last updated" date above always shows the current version, the latest version is always published on this page, and continuing to use the Site after an update means you accept the updated Terms.`,
    ],
  },
  {
    title: 'Contact Us',
    content: [
      `Questions about these Terms can go to nexcarinner.support@gmail.com, or by phone on +91 62056 39470. Nexcarinner is a community run from India.`,
      `These Terms are written in plain language for our community. They describe how Nexcarinner works today, and they do not take away any right you have under applicable law.`,
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
            The practical rules that help keep Nexcarinner a safe, respectful and useful place for
            students and freshers to learn, build and collaborate.
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
                  {section.bullets && (
                    <ul
                      className={`list-disc space-y-2 pl-5 text-sm leading-relaxed transition-colors duration-300 ${
                        dark ? 'text-gray-400' : 'text-ink-400'
                      }`}
                    >
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
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
