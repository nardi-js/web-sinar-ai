import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { name: 'Founders', href: '/founders' },
      { name: 'Values & Ethics', href: '/values' },
      { name: 'AI Employees', href: '/ai-employees' },
      { name: 'Tech Stack', href: '/tech-stack' },
    ],
    Resources: [
      { name: 'Workflow', href: '/workflow' },
      { name: 'Templates', href: '/templates' },
      { name: 'Case Studies', href: '/case-study' },
      { name: 'FAQ', href: '/faq' },
    ],
    Tools: [
      { name: 'Time Estimator', href: '/time-estimator' },
      { name: 'AI Chat', href: '/ai-chat' },
    ],
    Connect: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' },
    ],
  }

  return (
    <footer className="relative bg-black border-t border-gray-800/30">
      {/* Top Accent Line - Subtle */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Logo */}
                <svg
                  className="w-11 h-11 relative z-10"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="18" stroke="url(#footer-gradient)" strokeWidth="2" />
                  <path d="M20 10 L26 20 L20 30 L14 20 Z" fill="url(#footer-gradient)" className="group-hover:animate-pulse" />
                  <defs>
                    <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d4af37" />
                      <stop offset="50%" stopColor="#f4d98d" />
                      <stop offset="100%" stopColor="#fcd34d" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-display text-xl font-bold bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300 bg-clip-text text-transparent">
                SinarAI
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              AI-Driven Innovation. Human Excellence. Building intelligent systems that illuminate the digital world.
            </p>

            {/* Premium Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: '𝕏', label: 'Twitter', gradient: 'from-sinar-gold to-sinar-gold-light' },
                { icon: 'in', label: 'LinkedIn', gradient: 'from-sinar-gold to-yellow-400' },
                { icon: 'G', label: 'GitHub', gradient: 'from-sinar-gold-light to-yellow-300' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="group relative w-10 h-10 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-xl flex items-center justify-center hover:border-gray-600 transition-all duration-300 overflow-hidden"
                >
                  <span className={`relative z-10 text-gray-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${social.gradient} group-hover:bg-clip-text text-sm font-bold transition-all duration-300`}>
                    {social.icon}
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links with Premium Style */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-display font-bold text-white text-sm flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-sinar-gold to-sinar-gold-light rounded-full"></span>
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-all duration-300"
                      >
                        <span className="w-0 h-px bg-gradient-to-r from-sinar-gold to-yellow-400 group-hover:w-3 transition-all duration-300"></span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-all duration-300"
                      >
                        <span className="w-0 h-px bg-gradient-to-r from-sinar-gold to-yellow-400 group-hover:w-3 transition-all duration-300"></span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Premium Divider */}
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sinar-gold/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sinar-gold-light/20 to-transparent blur-sm"></div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              © {currentYear}{' '}
              <span className="font-bold bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300 bg-clip-text text-transparent">
                SinarAI System
              </span>
              {' '}— Powered by AI Excellence.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline underline-offset-4"
            >
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline underline-offset-4"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Premium Tagline */}
        <div className="pb-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-full backdrop-blur-sm">
            <div className="relative">
              <div className="w-2 h-2 bg-gradient-to-r from-sinar-gold to-sinar-gold-light rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-sinar-gold to-sinar-gold-light rounded-full animate-ping"></div>
            </div>
            <span className="text-xs text-gray-400">
              Illuminating the digital world with AI innovation
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
