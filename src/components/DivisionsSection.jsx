import { useState } from 'react'
import { useFirestoreCollection } from '../hooks/useFirestore'
import { SectionSkeleton } from './LoadingSkeletons'

const DivisionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const { data: divisionsData, loading } = useFirestoreCollection('divisions')

  // Show loading skeleton
  if (loading) {
    return (
      <section id="divisions" className="relative py-24 lg:py-32 bg-sinar-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionSkeleton />
        </div>
      </section>
    )
  }

  // Use fetched data or fallback
  const divisions = divisionsData.length > 0 ? divisionsData : []

  // Icon mapping helper
  const getIcon = (iconName) => {
    const icons = {
      palette: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
      monitor: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
        </svg>
      ),
      document: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      ),
      brain: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      )
    }
    return icons[iconName] || icons.brain
  }

  // Color mapping helper
  const getColors = (colorScheme) => {
    const colors = {
      yellow: {
        gradient: 'from-yellow-500/20 to-orange-500/10',
        border: 'border-yellow-500/30',
        hoverBorder: 'group-hover:border-yellow-500/60',
        iconBg: 'bg-yellow-500/10',
        iconHoverBg: 'group-hover:bg-yellow-500/20',
      },
      blue: {
        gradient: 'from-blue-500/20 to-cyan-500/10',
        border: 'border-blue-500/30',
        hoverBorder: 'group-hover:border-blue-500/60',
        iconBg: 'bg-blue-500/10',
        iconHoverBg: 'group-hover:bg-blue-500/20',
      },
      green: {
        gradient: 'from-green-500/20 to-emerald-500/10',
        border: 'border-green-500/30',
        hoverBorder: 'group-hover:border-green-500/60',
        iconBg: 'bg-green-500/10',
        iconHoverBg: 'group-hover:bg-green-500/20',
      },
      purple: {
        gradient: 'from-purple-500/20 to-pink-500/10',
        border: 'border-purple-500/30',
        hoverBorder: 'group-hover:border-purple-500/60',
        iconBg: 'bg-purple-500/10',
        iconHoverBg: 'group-hover:bg-purple-500/20',
      }
    }
    return colors[colorScheme] || colors.blue
  }

  return (
    <section id="divisions" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
            <span className="text-sm text-sinar-gold font-medium">Our Divisions</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Three Studios.{' '}
            <span className="text-sinar-gold">Infinite Solutions.</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our AI workforce is organized into specialized studios, each focused on delivering excellence in their domain.
          </p>
        </div>

        {/* Division Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const colors = getColors(division.colorScheme || 'blue')
            return (
              <div
                key={division.id || index}
                className={`group relative p-8 bg-sinar-dark-light border ${colors.border} ${colors.hoverBorder} rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sinar-gold/10`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${colors.iconBg} ${colors.iconHoverBg} text-sinar-gold rounded-xl transition-all duration-500 ${
                      hoveredCard === index ? 'scale-110 rotate-6' : ''
                    }`}
                  >
                    {getIcon(division.icon)}
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {division.title}
                    </h3>
                    <p className="text-sm text-sinar-gold-light font-medium">
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
            )
          })}
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
