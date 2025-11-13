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
          ? 'bg-gradient-to-r from-gray-900/95 via-sinar-dark/95 to-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-gray-800/50'
          : 'bg-transparent md:bg-transparent bg-gradient-to-r from-gray-900/95 via-sinar-dark/95 to-gray-900/95 backdrop-blur-xl border-b border-gray-800/30'
      }`}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sinar-gold/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Premium Design */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sinar-gold/30 via-sinar-gold-light/20 to-yellow-400/15 blur-xl rounded-full group-hover:from-sinar-gold/30 group-hover:via-sinar-gold-light/20 group-hover:to-yellow-400/15 transition-all duration-500"></div>
              
              {/* Logo SVG */}
              <svg className="w-11 h-11 relative z-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="url(#nav-gradient)" strokeWidth="2" />
                <path d="M20 10 L26 20 L20 30 L14 20 Z" fill="url(#nav-gradient)" className="group-hover:animate-pulse" />
                <defs>
                  <linearGradient id="nav-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="50%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-display text-xl font-bold bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300 bg-clip-text text-transparent">
              SinarAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => 
              link.type === 'route' ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 relative group ${
                    location.pathname === link.href 
                      ? 'text-sinar-gold' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light transition-all duration-300 ${
                    location.pathname === link.href 
                      ? 'w-3/4' 
                      : 'w-0 group-hover:w-3/4'
                  }`}></span>
                </Link>
              ) : link.type === 'dropdown' ? (
                <div 
                  key={link.name} 
                  className="relative group" 
                  onMouseEnter={() => setOpenDropdown(link.name)} 
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                    {link.name}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Premium Dropdown */}
                  <div className={`absolute top-full left-0 mt-3 w-64 bg-gradient-to-br from-gray-900 to-sinar-dark border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-xl transition-all duration-300 ${openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    {/* Dropdown Accent */}
                    <div className="h-1 bg-gradient-to-r from-sinar-gold to-sinar-gold-light"></div>
                    
                    {link.items.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.href} 
                        className="block px-5 py-3.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-sinar-gold/30 hover:to-sinar-gold-light/20 transition-all duration-200 border-b border-gray-800/50 last:border-b-0 group"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-gradient-to-r group-hover:from-sinar-gold group-hover:to-sinar-gold-light transition-all duration-200"></span>
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => handleLinkClick(link)} 
                  className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light group-hover:w-3/4 transition-all duration-300"></span>
                </a>
              )
            )}
          </div>

          {/* Premium CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="group relative px-6 py-2.5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-sinar-gold/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-1 border-t border-gray-800/50">
            {navLinks.map((link) =>
              link.type === 'route' ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 relative ${
                    location.pathname === link.href
                      ? 'text-white bg-gradient-to-r from-sinar-gold/30 to-sinar-gold-light/20 border-l-4 border-sinar-gold'
                      : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-sinar-gold/20 hover:to-sinar-gold-light/10'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {link.name}
                    {location.pathname === link.href && (
                      <span className="w-2 h-2 rounded-full bg-sinar-gold animate-pulse"></span>
                    )}
                  </span>
                </Link>
              ) : link.type === 'dropdown' ? (
                <div key={link.name} className="space-y-1">
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)} 
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-sinar-gold/30 hover:to-sinar-gold-light/20 rounded-lg transition-all duration-300"
                  >
                    {link.name}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openDropdown === link.name ? 'max-h-96' : 'max-h-0'}`}>
                    {link.items.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.href} 
                        onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }} 
                        className={`block pl-8 pr-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                          location.pathname === item.href
                            ? 'text-sinar-gold bg-sinar-gold/10 border-l-2 border-sinar-gold'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          {item.name}
                          {location.pathname === item.href && (
                            <span className="w-1.5 h-1.5 rounded-full bg-sinar-gold animate-pulse"></span>
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => handleLinkClick(link)} 
                  className="block px-4 py-3 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-sinar-gold/30 hover:to-sinar-gold-light/20 rounded-lg transition-all duration-300"
                >
                  {link.name}
                </a>
              )
            )}
            
            {/* Mobile CTA */}
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="block mx-4 mt-4 px-4 py-3 text-sm font-bold text-center bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-white rounded-lg hover:shadow-lg hover:shadow-sinar-gold/30 transition-all duration-300"
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
