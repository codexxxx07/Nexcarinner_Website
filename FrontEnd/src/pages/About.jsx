const About = () => {
  const team = [
    { name: 'Alex Johnson', role: 'Founder & Lead', description: 'Passionate about building tech communities.' },
    { name: 'Sarah Chen', role: 'Technical Director', description: 'Expert in full-stack development.' },
    { name: 'Michael Brown', role: 'Community Manager', description: 'Dedicated to member engagement.' },
    { name: 'Emily Davis', role: 'Event Coordinator', description: 'Organizes impactful tech events.' },
    { name: 'David Wilson', role: 'Mentorship Lead', description: 'Connects students with industry mentors.' },
    { name: 'Lisa Anderson', role: 'Content Creator', description: 'Creates educational resources.' }
  ]

  const timeline = [
    { year: '2024', title: 'Founded', description: 'Nexcarinner was established with a vision to connect student developers.' },
    { year: '2025', title: 'First Hackathon', description: 'Hosted our inaugural hackathon with 100+ participants.' },
    { year: '2026', title: 'Expansion', description: 'Grew to 500+ members across multiple tech communities.' }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about our mission, vision, and the team behind Nexcarinner.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To create an inclusive and supportive environment where students can learn, collaborate, and grow their technical skills. We believe in the power of community to drive innovation and personal development.
            </p>
          </div>
          <div className="border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the leading student tech community, empowering the next generation of developers, designers, and innovators to shape the future of technology.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Collaboration', description: 'We believe in the power of working together to achieve great things.' },
              { title: 'Learning', description: 'Continuous growth and education are at the heart of our community.' },
              { title: 'Innovation', description: 'We encourage creative thinking and pushing boundaries.' },
              { title: 'Inclusivity', description: 'Everyone is welcome regardless of background or experience level.' },
              { title: 'Excellence', description: 'We strive for quality in everything we do.' },
              { title: 'Integrity', description: 'We operate with transparency and honesty.' }
            ].map((value, index) => (
              <div key={index} className="border border-gray-200 p-8 h-full">
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="border border-gray-200 p-8 h-full">
                <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-8">
                <div className="w-24 shrink-0">
                  <div className="text-2xl font-bold text-black">{item.year}</div>
                </div>
                <div className="border-l-2 border-gray-200 pl-8 pb-8 flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="border border-gray-200 p-16 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Join Our Team</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            We're always looking for passionate individuals to help us grow the community.
          </p>
          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-200">
            View Openings
          </button>
        </div>
      </section>
    </div>
  )
}

export default About
