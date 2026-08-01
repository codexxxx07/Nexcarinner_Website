import { useState } from 'react'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiChevronDown,
  FiSend,
  FiCheck,
} from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaDiscord, FaXTwitter } from 'react-icons/fa6'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const contactInfo = [
  {
    label: 'Email',
    value: 'hello@nexcarinner.com',
    icon: FiMail,
    gradient: 'from-brand-500 to-flare-pink',
  },
  {
    label: 'Phone',
    value: '+1 (555) 123-4567',
    icon: FiPhone,
    gradient: 'from-flare-cyan to-brand-500',
  },
  {
    label: 'Location',
    value: 'San Francisco, CA',
    icon: FiMapPin,
    gradient: 'from-flare-pink to-brand-500',
  },
]

const socials = [
  { name: 'GitHub', icon: FaGithub },
  { name: 'LinkedIn', icon: FaLinkedinIn },
  { name: 'Discord', icon: FaDiscord },
  { name: 'X', icon: FaXTwitter },
]

const faqs = [
  {
    question: 'How can I join Nexcarinner?',
    answer: 'You can join by clicking the "Join Now" button in the navbar and filling out the registration form.',
  },
  {
    question: 'Is there a membership fee?',
    answer: 'No, Nexcarinner is completely free for all students.',
  },
  {
    question: 'Can I propose an event?',
    answer: 'Yes! We welcome event proposals. Use the form here or reach out on our Events page to get started.',
  },
  {
    question: 'How do I become a mentor?',
    answer: 'Contact us through the form above or reach out to our Mentorship Lead directly.',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal>
          <span className="chip">Say hello</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-ink-50 sm:text-5xl lg:text-6xl">
            Questions? <span className="text-gradient-animate">Let's talk.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-400">
            Want to get involved, propose an idea, or just say hi? We'd love to
            hear from you.
          </p>
        </Reveal>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal variant="left" className="lg:col-span-3">
            <div className="glass relative h-full overflow-hidden rounded-3xl p-8 sm:p-10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

              {submitted ? (
                <div className="relative flex h-full min-h-[28rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_18px_34px_-14px_rgba(124,58,237,0.8),inset_0_1px_0_rgba(255,255,255,0.35)]">
                    <FiCheck className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink-50">
                    Message sent!
                  </h3>
                  <p className="mt-3 max-w-sm text-ink-400">
                    Thanks for reaching out, {formData.name || 'friend'}. We'll
                    get back to you within a day or two.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-8 px-6 py-3 text-sm font-semibold text-ink-300"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-600">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="field"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-600">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="field"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-ink-600">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="field"
                      placeholder="What is this about?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="field resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white sm:w-auto"
                  >
                    Send Message
                    <FiSend className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info panel */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {contactInfo.map((item, index) => (
              <Reveal key={item.label} variant="right" delay={index * 80}>
                <div className="glass card-lift group flex items-center gap-5 rounded-2xl p-6">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-[0_8px_18px_-8px_rgba(124,58,237,0.6),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.1)]`}
                  >
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink-400">
                      {item.label}
                    </p>
                    <p className="mt-1 font-semibold text-ink-700">
                      {item.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal variant="right" delay={300}>
              <div className="glass rounded-2xl p-6">
                <p className="text-sm font-semibold text-ink-700">
                  Follow the community
                </p>
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.name}
                      className="flex h-12 items-center justify-center rounded-xl border border-ink-300/60 bg-white text-ink-500 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_3px_rgba(34,29,58,0.09),0_3px_8px_-4px_rgba(34,29,58,0.1)] transition-colors duration-200 hover:border-brand-600/40 hover:text-brand-700 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(34,29,58,0.07),0_6px_14px_-6px_rgba(124,58,237,0.28)]"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={380}>
              <div
                className="relative overflow-hidden rounded-2xl p-6 text-center"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #c026d3 100%)',
                  boxShadow: [
                    'inset 0 1px 0 rgba(255,255,255,0.25)',
                    '0 1px 2px rgba(34,29,58,0.15)',
                    '0 8px 20px -8px rgba(124,58,237,0.5)',
                    '0 20px 44px -18px rgba(124,58,237,0.4)',
                  ].join(', '),
                }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="relative">
                  <p className="font-display text-lg font-bold text-white">
                    Want to sponsor or partner?
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    We're always open to collaborations that help students grow.
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur hover:bg-white/30"
                  >
                    Partner with us
                    <FiArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Common <span className="text-gradient">questions</span>
            </>
          }
        />
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <Reveal key={faq.question} delay={index * 80}>
                <div
                  className={`glass overflow-hidden rounded-2xl ${
                    isOpen ? 'border-brand-600/30' : ''
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-ink-700">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-300/70 bg-white/70 text-ink-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ${
                        isOpen ? 'rotate-180 border-brand-600/40 text-brand-700' : ''
                      }`}
                    >
                      <FiChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`transition-opacity duration-200 ${
                      isOpen ? 'opacity-100' : 'hidden opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-ink-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Contact
