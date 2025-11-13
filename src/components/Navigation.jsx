import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navLinks = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Workflow', href: '/workflow', type: 'route' },
    { name: 'Templates', href: '/templates', type: 'route' },
    { name: 'FAQ', href: '/faq', type: 'route' },
    {
      name: 'More',
      type: 'dropdown',
      items: [
        { name: 'AI Employees', href: '/ai-employees' },
        { name: 'Tech Stack', href: '/tech-stack' },
        { name: 'Case Studies', href: '/case-study' },
        { name: 'Founders', href: '/founders' },
        { name: 'Values & Ethics', href: '/values' },
        { name: 'Time Estimator', href: '/time-estimator' },
        { name: 'AI Chat', href: '/ai-chat' },
      ]
    },
    { name: 'Contact', href: '/contact', type: 'route' },
  ]

  const isScrolled = scrollY > 50

  const handleLinkClick = (link) => {
    if (link.type === 'hash' && !isHomePage) {
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
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-sinar-gold/20 blur-xl rounded-full group-hover:bg-sinar-gold/30 transition-all duration-500"></div>
              <svg className="w-10 h-10 relative z-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="url(#gold-gradient)" strokeWidth="2" />
                <path d="M20 10 L26 20 L20 30 L14 20 Z" fill="url(#gold-gradient)" className="animate-pulse" />
                <defs>
                  <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F4E4A6" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-sinar-gold-light">SinarAI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => 
              link.type === 'route' ? (
                <Link key={link.name} to={link.href} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-sinar-gold transition-colors duration-300 relative group">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sinar-gold group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : link.type === 'dropdown' ? (
                <div key={link.name} className="relative group" onMouseEnter={() => setOpenDropdown(link.name)} onMouseLeave={() => setOpenDropdown(null)}>
                  <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-sinar-gold transition-colors duration-300 flex items-center gap-1">
                    {link.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute top-full left-0 mt-2 w-56 bg-sinar-dark-light border border-gray-800 rounded-lg shadow-xl shadow-black/50 overflow-hidden transition-all duration-300 ${openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    {link.items.map((item) => (
                      <Link key={item.name} to={item.href} className="block px-4 py-3 text-sm text-gray-300 hover:text-sinar-gold hover:bg-sinar-dark transition-colors duration-200 border-b border-gray-800 last:border-b-0" onClick={() => setOpenDropdown(null)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={link.name} href={link.href} onClick={() => handleLinkClick(link)} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-sinar-gold transition-colors duration-300 relative group">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sinar-gold group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="px-6 py-2.5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-sinar-gold/50 transition-all duration-300 transform hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-300 hover:text-sinar-gold transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2">
            {navLinks.map((link) =>
              link.type === 'route' ? (
                <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-sinar-gold hover:bg-sinar-dark-light rounded-lg transition-all duration-300">
                  {link.name}
                </Link>
              ) : link.type === 'dropdown' ? (
                <div key={link.name} className="space-y-1">
                  <button onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)} className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-300 hover:text-sinar-gold hover:bg-sinar-dark-light rounded-lg transition-all duration-300">
                    {link.name}
                    <svg className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openDropdown === link.name ? 'max-h-96' : 'max-h-0'}`}>
                    {link.items.map((item) => (
                      <Link key={item.name} to={item.href} onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }} className="block pl-8 pr-4 py-2 text-sm text-gray-400 hover:text-sinar-gold hover:bg-sinar-dark-light rounded-lg transition-all duration-200">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={link.name} href={link.href} onClick={() => handleLinkClick(link)} className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-sinar-gold hover:bg-sinar-dark-light rounded-lg transition-all duration-300">
                  {link.name}
                </a>
              )
            )}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-center bg-sinar-gold text-sinar-dark rounded-lg hover:bg-sinar-gold-light transition-all duration-300 mt-4">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
