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
    title: 'Who We Are and What This Policy Covers',
    content: [
      `Nexcarinner ("Nexcarinner", "we", "us") is a student-led community for students and freshers based in India, for people interested in both technology and non-technology fields. This policy explains what information this website (the "Site") collects, why we use it, and the choices you have.`,
      `It covers the Site itself: the pages you read, the sign-up and sign-in forms, and the contact form. Community conversation happens largely on third-party platforms we link to, such as Discord, WhatsApp, GitHub, LinkedIn, Instagram and X. Those platforms have their own terms and privacy policies, which apply instead of this policy once you are using them.`,
      `Nexcarinner is a community, not a government organisation, university, bank, employer or identity-verification service. Nothing on the Site should be read as an official notice from any government body, university or financial institution.`,
    ],
  },
  {
    title: 'Information You Choose to Give Us',
    content: [
      `Contact form: the form on our Contact page asks for your name, email address, a subject and a message. When you press "Send Message", the Site opens a new draft email in your own email application, addressed to nexcarinner.support@gmail.com, with those details filled in. The Site itself does not transmit, store or log what you type. If you close the draft without sending it, nothing reaches us at all. If you do send it, the message travels through your own email provider and then arrives in our inbox, and from that point it is handled by your provider and by us under our respective practices.`,
      `Email and community messages: if you email us directly, or post in a community group we run on another platform, we hold what you choose to write or send, together with the email address or platform username you used.`,
      `The email box in the footer: it accepts an address and shows a confirmation message in your browser, but the Site does not currently transmit or store that address anywhere. Please do not treat it as a subscription. If you want to hear from us, use the Contact page instead.`,
      `We never ask you for government-issued ID documents, proof of identity, biometric information, payment card details, or bank and financial information, and you should never send such information to us or into a community channel.`,
    ],
  },
  {
    title: 'Account Information and Authentication',
    content: [
      `Signing up and signing in are handled by Clerk (clerk.com), a third-party authentication provider we use. Our sign-up form asks for a first name, a last name, an email address and a password, and it also offers sign-up with GitHub or Google. Sign-in asks for an email address and a password. Clerk collects and stores that information on our behalf and manages the session that keeps you signed in. If you choose a social provider instead, that provider collects its own information under its own privacy policy. If Clerk asks you to verify your email address while you sign up, that check is carried out by Clerk.`,
      `Nexcarinner never receives or stores your password. Passwords are hashed and handled entirely by Clerk.`,
      `The signed-in area of the Site is currently read-only. It shows the same community content as the public pages and does not display, publish or edit your personal details. You can view and update the information held on your account through the account menu in the sign-in menu, and you can request deletion of your account there.`,
    ],
  },
  {
    title: 'Information Stored on Your Device',
    content: [
      `Theme preference: when you switch between light and dark mode, that choice is saved in your browser's local storage under the key "theme", so the page does not flash the wrong colours on your next visit. It stays on your device and is never sent to us.`,
      `Sign-in notification: after you sign in or sign up, the Site writes a short-lived flag to your browser's session storage so it can show you a confirmation message. It is deleted as soon as it is read and disappears when you close the tab.`,
      `You can remove both of these at any time by clearing site data for this Site in your browser settings.`,
    ],
  },
  {
    title: 'Cookies and Similar Technologies',
    content: [
      `The Site does not set advertising or analytics cookies, and it contains no tracking pixel, ad network or cross-site advertising.`,
      `Clerk sets authentication cookies on this domain so the Site can recognise you and keep you signed in. Those cookies are removed when you sign out or delete your Clerk account. Because signing in depends on them, blocking cookies for this Site in your browser settings will stop the signed-in area from working; blocking cookies does not stop you from reading the public pages.`,
      `The Site loads its typefaces from Google Fonts, so Google receives the network request for those files, including your IP address. Google's own privacy policy then applies to that request.`,
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [],
    bullets: [
      `Creating and managing your account, and letting you sign in and sign out.`,
      `Responding to enquiries, event proposals, partnership requests and questions sent through the contact form or by email.`,
      `Communicating with you about community activities when you have given us your contact details for that purpose, for example by replying to your message or by messaging you on the platform where we first spoke.`,
      `Operating the features you choose to use, such as remembering your light or dark mode preference and showing you the signed-in area.`,
      `Keeping the Site available and troubleshooting problems, together with our authentication and hosting providers.`,
      `Improving the Site. We do not run any analytics or profiling script, so we only have the limited technical information our providers make available to us, and we do not build advertising profiles from your activity.`,
    ],
  },
  {
    title: 'What We Do Not Collect',
    content: [],
    bullets: [
      `No government ID or identity documents. We do not run a KYC, background check or member-verification process, and no badge or "verified" mark on the Site means that we have confirmed your legal identity.`,
      `No analytics, advertising or tracking technology. There is no analytics script, advertising network, data broker, or behavioural and cross-site tracking on the Site.`,
      `No biometric data, health data, payment card numbers, or precise location tracking.`,
      `We do not sell, rent or trade your personal information, and we do not share it with advertisers.`,
    ],
  },
  {
    title: 'Third-Party Services and External Platforms',
    content: [
      `Clerk (clerk.com) provides authentication and account management, and processes the account data described above on our behalf.`,
      `Our hosting provider serves the Site. Like any web host, it may record standard request logs, such as your IP address, browser and the URL requested, under its own privacy policy.`,
      `Google Fonts provides the typefaces used across the Site.`,
      `External services we link to, including Discord, WhatsApp, GitHub, LinkedIn, Instagram, X, and course or certificate providers, are operated by their own companies. When you follow a link and post, message or sign up there, that platform collects information under its own privacy policy, which we neither control nor receive. Please read their policies before you share anything with them.`,
    ],
  },
  {
    title: 'Data Security',
    content: [
      `The Site is served over HTTPS, Clerk handles authentication and account security on our behalf, and access to the information we hold is limited to the people who need it in order to reply to enquiries and run the community.`,
      `No method of transmission or storage is completely secure, so we cannot promise that information will never be lost, intercepted or misused. If you believe an account, or an email account of ours, has been compromised, please tell us at nexcarinner.support@gmail.com.`,
    ],
  },
  {
    title: 'How Long We Keep Information',
    content: [
      `We do not publish a fixed retention period for every category of information, because the reason for keeping each kind of item is different. In practice: contact and email messages are kept only for as long as we need them to respond to you and to keep a record of anything we have committed to, and are then deleted; Clerk account data exists while your account exists, and deleting your account removes it; hosting logs are kept for the period set by our hosting provider; the theme preference and the sign-in notification flag stay in your browser until you clear them.`,
      `Where we are required to keep information for legal reasons, we restrict it to that purpose rather than using it for anything else.`,
    ],
  },
  {
    title: 'Your Rights and Choices',
    content: [
      `You can sign out at any time, view and update the information held on your account through Clerk's account settings, request deletion of your account from the same place or by emailing us, and clear the Site's stored data from your browser settings.`,
      `If you are in India, the Digital Personal Data Protection Act, 2023 gives you the right to access information about you, to have inaccurate information corrected, to have information erased, to withdraw consent where processing relies on consent, to nominate another person to exercise these rights, and to complain to the Data Protection Board of India. For anything the account settings do not cover, email nexcarinner.support@gmail.com and we will respond in line with applicable law. We will not treat you differently for making a request.`,
      `If you are under 18, please ask a parent or guardian to contact us instead, as required under the Digital Personal Data Protection Act, 2023 for the personal data of children.`,
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      `The Site is aimed at students and freshers and is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you are between 13 and 17, please use the Site with the awareness of a parent or guardian.`,
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      `We may update this policy as the Site changes or as legal requirements change. The "Last updated" date above always reflects the current version, and significant changes will be announced on the Site. Continuing to use the Site after an update means the updated policy applies to you.`,
    ],
  },
  {
    title: 'Contact Us',
    content: [
      `For any privacy question, data request or complaint, contact us at nexcarinner.support@gmail.com, or by phone on +91 62056 39470. Nexcarinner is a community run from India. If you are not satisfied with our response, you can raise the matter with the relevant authority in your country, which in India is the Data Protection Board.`,
      `This policy is written in plain language for our community. It describes what we actually do today; it is not legal advice, and it does not limit any rights you have under applicable law.`,
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
            Nexcarinner is a student and fresher community for people interested in technology
            and non-technology fields. This policy explains what information this website
            collects, why we use it, and the choices you have.
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
