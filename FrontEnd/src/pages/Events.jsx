import { useState } from 'react'

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Workshops', 'Hackathons', 'Meetups', 'Webinars']

  const events = [
    {
      title: 'React Workshop',
      date: 'Jan 15, 2026',
      time: '2:00 PM',
      location: 'Online',
      type: 'Workshops',
      description: 'Learn modern React patterns and best practices in this hands-on workshop.'
    },
    {
      title: 'Annual Hackathon',
      date: 'Feb 20, 2026',
      time: '9:00 AM',
      location: 'Campus Hall',
      type: 'Hackathons',
      description: '48-hour hackathon to build innovative solutions with prizes for winners.'
    },
    {
      title: 'Tech Meetup',
      date: 'Mar 10, 2026',
      time: '6:00 PM',
      location: 'Community Center',
      type: 'Meetups',
      description: 'Network with fellow tech enthusiasts and share your experiences.'
    },
    {
      title: 'AI Webinar',
      date: 'Apr 5, 2026',
      time: '3:00 PM',
      location: 'Online',
      type: 'Webinars',
      description: 'Explore the latest trends in artificial intelligence with industry experts.'
    },
    {
      title: 'Design Systems Workshop',
      date: 'May 12, 2026',
      time: '1:00 PM',
      location: 'Design Lab',
      type: 'Workshops',
      description: 'Build scalable and consistent design systems for your projects.'
    },
    {
      title: 'Cloud Computing Meetup',
      date: 'Jun 18, 2026',
      time: '5:00 PM',
      location: 'Tech Hub',
      type: 'Meetups',
      description: 'Discuss cloud architecture and deployment strategies.'
    }
  ]

  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.type === activeFilter)

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover workshops, hackathons, meetups, and webinars to enhance your skills and connect with the community.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 border transition-colors duration-200 ${
                activeFilter === filter
                  ? 'bg-black text-white border-black'
                  : 'border-gray-300 text-black hover:border-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div key={index} className="border border-gray-200 p-8 h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{event.type}</span>
                <span className="text-sm text-gray-500">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span className="w-1.5 h-1.5 bg-black"></span>
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-black"></span>
                  {event.location}
                </div>
              </div>
              <button className="w-full mt-6 border border-gray-300 text-black py-2 hover:border-black transition-colors duration-200">
                Register
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="border border-gray-200 p-16 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Host an Event</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Have an idea for an event? We'd love to help you bring it to life.
          </p>
          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-200">
            Propose an Event
          </button>
        </div>
      </section>
    </div>
  )
}

export default Events
