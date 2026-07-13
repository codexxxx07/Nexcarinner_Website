const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left: Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-black leading-tight">
              Build the Future of Tech Together
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Join a community of passionate students, developers, and innovators. Learn, collaborate, and grow your skills in a supportive environment.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-gray-300 text-black px-8 py-3 hover:border-black transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Right: Visual Block */}
          <div className="bg-gray-100 border border-gray-200 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-300 mb-4">NC</div>
              <p className="text-gray-500">Community Visual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-8 mt-16">
        <div className="grid grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">500+</div>
            <div className="text-gray-600">Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">50+</div>
            <div className="text-gray-600">Events</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">20+</div>
            <div className="text-gray-600">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">15+</div>
            <div className="text-gray-600">Partners</div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Our Communities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore specialized groups focused on different areas of technology and innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Web Development', members: '150 members', description: 'Build modern web applications with latest technologies.' },
            { title: 'Mobile Development', members: '120 members', description: 'Create native and cross-platform mobile apps.' },
            { title: 'AI & Machine Learning', members: '100 members', description: 'Explore artificial intelligence and ML algorithms.' },
            { title: 'Cloud Computing', members: '80 members', description: 'Learn cloud infrastructure and deployment strategies.' },
            { title: 'Cybersecurity', members: '90 members', description: 'Understand security best practices and ethical hacking.' },
            { title: 'Data Science', members: '110 members', description: 'Analyze data and build predictive models.' }
          ].map((community, index) => (
            <div key={index} className="border border-gray-200 p-8 h-full">
              <h3 className="text-xl font-bold text-black mb-2">{community.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{community.members}</p>
              <p className="text-gray-600">{community.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Groups Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Active Groups</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join focused study groups and collaborative teams working on real projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { category: 'Study Groups', items: ['React Study Group', 'Python Bootcamp', 'Algorithm Practice'] },
            { category: 'Project Teams', items: ['Open Source Contributors', 'Hackathon Team', 'Startup Builders'] },
            { category: 'Workshops', items: ['Design Systems', 'API Development', 'DevOps Basics'] },
            { category: 'Mentorship', items: ['Peer Mentoring', 'Industry Mentors', 'Career Guidance'] }
          ].map((group, index) => (
            <div key={index} className="border border-gray-200 p-8">
              <h3 className="text-lg font-bold text-black mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="border border-gray-200 p-16 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Ready to Join?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Become part of our growing community and start your journey in tech today.
          </p>
          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-200">
            Join Nexcarinner
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
