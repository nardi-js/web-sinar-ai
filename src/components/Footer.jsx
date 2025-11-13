const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Vision', href: '#vision' },
      { name: 'Divisions', href: '#divisions' },
      { name: 'Portfolio', href: '#portfolio' },
    ],
    Services: [
      { name: 'Creative Studio', href: '#divisions' },
      { name: 'Web & System Studio', href: '#divisions' },
      { name: 'Document & Task Studio', href: '#divisions' },
      { name: 'Custom Solutions', href: '#contact' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'AI Insights', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
    Connect: [
      { name: 'Contact', href: '#contact' },
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'GitHub', href: '#' },
    ],
  }

  return (
    <footer className="relative bg-sinar-dark-light border-t border-sinar-gold/5">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sinar-gold/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 space-y-6">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-sinar-gold/20 blur-xl rounded-full group-hover:bg-sinar-gold/30 transition-all duration-500"></div>
                <svg
                  className="w-10 h-10 relative z-10"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="18" stroke="url(#footer-gold-gradient)" strokeWidth="2" />
                  <path d="M20 10 L26 20 L20 30 L14 20 Z" fill="url(#footer-gold-gradient)" />
                  <defs>
                    <linearGradient id="footer-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              AI-Driven Work. Human Values. Building intelligent systems that illuminate the digital world.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { name: 'T', label: 'Twitter' },
                { name: 'L', label: 'LinkedIn' },
                { name: 'G', label: 'GitHub' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 bg-sinar-dark border border-sinar-gold/20 rounded-lg flex items-center justify-center hover:bg-sinar-gold/10 hover:border-sinar-gold/50 transition-all duration-300 group"
                >
                  <span className="text-gray-400 group-hover:text-sinar-gold text-xs font-medium">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-display font-semibold text-white text-sm">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-sinar-gold text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sinar-gold/30 to-transparent"></div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              © {currentYear}{' '}
              <span className="text-sinar-gold-light font-semibold">SinarAI System</span>
              {' '} — Powered by AI Workforce.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-sinar-gold text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-sinar-gold text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="pb-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sinar-dark/50 border border-sinar-gold/10 rounded-full">
            <div className="w-2 h-2 bg-sinar-gold rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400">
              Illuminating the digital world, one intelligent system at a time
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
