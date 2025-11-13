import { useState } from 'react'

const DivisionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const divisions = [
    {
      id: 1,
      icon: '🎨',
      title: 'Creative Studio',
      subtitle: 'Design & Innovation',
      description: 'Where aesthetics meet intelligence. Our AI designers craft visually stunning, user-centric experiences.',
      features: ['UI/UX Design', 'Brand Identity', 'Motion Graphics', 'Visual Content'],
      gradient: 'from-pink-400 via-purple-400 to-indigo-400',
      bgGradient: 'from-pink-500/10 to-sinar-gold-light/20'
    },
    {
      id: 2,
      icon: '💻',
      title: 'Tech Studio',
      subtitle: 'Development & Engineering',
      description: 'Building robust, scalable systems. Our AI developers turn complex requirements into elegant code.',
      features: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'API Integration'],
      gradient: 'from-sinar-gold via-sinar-gold-light to-yellow-400',
      bgGradient: 'from-sinar-gold/30 to-yellow-400/15'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Strategy Studio',
      subtitle: 'Content & Analytics',
      description: 'Data-driven decisions, compelling narratives. Our AI strategists blend analytics with storytelling.',
      features: ['Content Strategy', 'Data Analysis', 'SEO Optimization', 'Market Research'],
      gradient: 'from-emerald-400 via-green-400 to-lime-400',
      bgGradient: 'from-emerald-500/10 to-green-500/10'
    },
  ]

  return (
    <section id="divisions" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-sinar-dark via-sinar-dark-light to-sinar-dark">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Floating Orbs - Reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 md:opacity-100">
        <div className="absolute top-20 left-[10%] w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-pink-500/10 to-sinar-gold-light/15 md:from-pink-500/15 md:to-sinar-gold-light/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-r from-sinar-gold/20 to-yellow-400/10 md:from-sinar-gold/30 md:to-yellow-400/15 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 mb-6 sm:mb-8 bg-gradient-to-r from-pink-500/10 via-sinar-gold-light/20 to-sinar-gold/30 border border-pink-400/30 rounded-full backdrop-blur-sm animate-fadeIn">
            <span className="text-xl sm:text-2xl">🏢</span>
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-pink-400 via-sinar-gold to-sinar-gold-light bg-clip-text text-transparent">
              Our Divisions
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Three Studios.{' '}
            <span className="bg-gradient-to-r from-pink-400 via-sinar-gold to-sinar-gold-light bg-clip-text text-transparent">
              Infinite Solutions.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Our AI workforce is organized into specialized studios, each focused on delivering excellence in their domain.
          </p>
        </div>

        {/* Division Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div
              key={division.id}
              className="group relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-gray-600/80 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-sinar-gold-light/20"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${division.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${division.bgGradient} rounded-2xl text-5xl transform ${hoveredCard === index ? 'scale-110 rotate-6' : ''} transition-all duration-500`}>
                  {division.icon}
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <h3 className={`font-display text-2xl md:text-3xl font-bold bg-gradient-to-r ${division.gradient} bg-clip-text text-transparent`}>
                    {division.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-semibold">
                    {division.subtitle}
                  </p>
                </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {division.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 pt-4">
                    {division.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg
                          className="w-5 h-5 text-sinar-gold mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                {/* Learn More Link */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-sinar-gold hover:text-sinar-gold-light font-medium transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-sinar-gold/30 rounded-tr-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Need a custom solution that combines multiple studios?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-sinar-gold/50 text-sinar-gold-light font-semibold rounded-lg hover:bg-sinar-gold/10 hover:border-sinar-gold transition-all duration-300"
          >
            <span>Discuss Your Project</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default DivisionsSection
