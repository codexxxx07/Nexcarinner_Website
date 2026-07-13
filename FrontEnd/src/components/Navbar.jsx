import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-black">
            Nexcarinner
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-200">
              Home
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-black transition-colors duration-200">
              Events
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-black transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors duration-200">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
