import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  const socialLinks = [
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'GitHub', url: '#' },
    { name: 'Discord', url: '#' }
  ]

  const contactInfo = [
    { label: 'Email', value: 'hello@nexcarinner.com' },
    { label: 'Phone', value: '+1 (555) 123-4567' },
    { label: 'Location', value: 'San Francisco, CA' }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors duration-200"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors duration-200"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors duration-200"
                placeholder="What is this about?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors duration-200 resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((item, index) => (
            <div key={index} className="border border-gray-200 p-8 text-center">
              <h3 className="font-semibold text-black mb-2">{item.label}</h3>
              <p className="text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="max-w-2xl mx-auto">
          <div className="border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-black mb-6 text-center">Connect With Us</h2>
            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="border border-gray-300 p-4 text-center hover:border-black transition-colors duration-200"
                >
                  <span className="text-sm text-black">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { question: 'How can I join Nexcarinner?', answer: 'You can join by clicking the "Join Now" button in the navbar and filling out the registration form.' },
              { question: 'Is there a membership fee?', answer: 'No, Nexcarinner is completely free for all students.' },
              { question: 'Can I propose an event?', answer: 'Yes! We welcome event proposals. Click "Propose an Event" on the Events page to get started.' },
              { question: 'How do I become a mentor?', answer: 'Contact us through the form above or reach out to our Mentorship Lead directly.' }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 p-6">
                <h3 className="font-semibold text-black mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
