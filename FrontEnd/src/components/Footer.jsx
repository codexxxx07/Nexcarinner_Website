const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Nexcarinner</h3>
            <p className="text-gray-600 text-sm">
              A modern tech community for students to learn, grow, and connect.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">Events</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-black mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">Guides</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-black mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>hello@nexcarinner.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2026 Nexcarinner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
