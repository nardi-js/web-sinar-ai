import { useFirestoreDoc } from '../hooks/useFirestore'
import { SectionSkeleton } from './LoadingSkeletons'

const VisionMissionSection = () => {
  // eslint-disable-next-line no-unused-vars
  const { data: aboutData, loading } = useFirestoreDoc('content', 'about')

  if (loading) {
    return (
      <section id="vision" className="relative py-24 lg:py-32 bg-sinar-dark-light/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionSkeleton />
        </div>
      </section>
    )
  }

  const missionPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: 'Ethical AI Practices',
      description: 'We believe in responsible AI usage that respects privacy, transparency, and human dignity.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
        </svg>
      ),
      title: 'Efficient Solutions',
      description: 'Speed and precision combined — delivering projects faster without compromising quality.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      title: 'Human-Centered Design',
      description: 'Every system we build is designed with real people in mind — intuitive, accessible, meaningful.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z" />
        </svg>
      ),
      title: 'Continuous Innovation',
      description: 'We evolve with technology, constantly learning and adapting to provide cutting-edge solutions.',
    },
  ]

  return (
    <section id="vision" className="relative py-24 lg:py-32 bg-sinar-dark-light/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Vision Part */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
            <span className="text-sm text-sinar-gold font-medium">Our Vision</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Illuminating the{' '}
            <span className="bg-gradient-to-r from-sinar-gold to-sinar-gold-light bg-clip-text text-transparent">
              Digital World
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              To illuminate the digital world with intelligent systems that{' '}
              <span className="text-sinar-gold-light font-medium">empower people</span> and{' '}
              <span className="text-sinar-gold-light font-medium">simplify work</span>.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-sinar-gold to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-sinar-gold rounded-full"></div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-sinar-gold to-transparent"></div>
          </div>
        </div>

        {/* Mission Part */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 mb-6 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
              <span className="text-sm text-sinar-gold font-medium">Our Mission</span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              How We Make It Happen
            </h3>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We're committed to building a future where technology and humanity work in harmony.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-12">
            {missionPoints.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-sinar-dark border border-sinar-gold/20 rounded-2xl hover:border-sinar-gold/50 transition-all duration-500 hover:shadow-lg hover:shadow-sinar-gold/10 hover:-translate-y-1"
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sinar-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-sinar-gold/20 to-sinar-gold/5 text-sinar-gold rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-xl font-bold text-white group-hover:text-sinar-gold-light transition-colors duration-300">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom Line */}
                  <div className="pt-4">
                    <div className="w-0 h-0.5 bg-sinar-gold group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-6 bg-gradient-to-r from-sinar-dark-light via-sinar-dark to-sinar-dark-light border border-sinar-gold/30 rounded-2xl">
            <p className="text-lg text-gray-300">
              <span className="text-sinar-gold font-semibold">Together</span>, we create intelligent systems with a{' '}
              <span className="text-sinar-gold-light font-semibold">soul</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionSection
