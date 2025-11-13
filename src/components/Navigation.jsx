import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navLinks = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Templates', href: '/templates', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' },
  ]

  const isScrolled = scrollY > 50

  const handleLinkClick = (link) => {
    if (link.type === 'hash' && !isHomePage) {
      // If clicking hash link from non-home page, go to home first then scroll
      const newUrl = '/' + link.href
      window.location.assign(newUrl)
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-sinar-dark/95 backdrop-blur-lg shadow-lg shadow-sinar-gold/5'
          : 'bg-transparent md:bg-transparent bg-sinar-dark/95 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sinar-gold/20 blur-xl rounded-full group-hover:bg-sinar-gold/30 transition-all duration-500"></div>
              <svg
                className="w-10 h-10 relative z-10"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="18" stroke="url(#gold-gradient)" strokeWidth="2" />
                <path
                  d="M20 10 L26 20 L20 30 L14 20 Z"
                  fill="url(#gold-gradient)"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F4E4A6" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-sinar-gold-light">
              SinarAI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-sinar-gold transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sinar-gold group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-sinar-gold transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sinar-gold group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-sinar-gold/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-sinar-gold transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) =>
              link.type === 'route' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-sinar-gold hover:bg-sinar-dark-light rounded-lg transition-all duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link)}
                  className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-sinar-gold hover:bg-sinar-dark-light rounded-lg transition-all duration-300"
                >
                  {link.name}
                </a>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 mt-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-semibold rounded-lg text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
