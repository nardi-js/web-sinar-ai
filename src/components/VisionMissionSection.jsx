const VisionMissionSection = () => {
  const missionPoints = [
    {
      icon: '✓',
      title: 'Ethical AI Practices',
      description: 'We believe in responsible AI usage that respects privacy, transparency, and human dignity.',
      gradient: 'from-sinar-gold to-sinar-gold-light'
    },
    {
      icon: '⚡',
      title: 'Efficient Solutions',
      description: 'Speed and precision combined — delivering projects faster without compromising quality.',
      gradient: 'from-sinar-gold to-yellow-400'
    },
    {
      icon: '👥',
      title: 'Human-Centered Design',
      description: 'Every system we build is designed with real people in mind — intuitive, accessible, meaningful.',
      gradient: 'from-yellow-300 to-sinar-gold'
    },
    {
      icon: '🚀',
      title: 'Continuous Innovation',
      description: 'We evolve with technology, constantly learning and adapting to provide cutting-edge solutions.',
      gradient: 'from-green-400 to-emerald-400'
    },
  ]

  return (
    <section id="vision" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-sinar-dark via-sinar-dark-light to-sinar-dark overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Orbs - Reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 md:opacity-100">
        <div className="absolute top-20 right-[20%] w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-sinar-gold/20 to-sinar-gold-light/15 md:from-sinar-gold/30 md:to-sinar-gold-light/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-[15%] w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-r from-sinar-gold-light/15 to-yellow-400/10 md:from-sinar-gold-light/20 md:to-yellow-400/15 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Part */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 mb-6 sm:mb-8 bg-gradient-to-r from-sinar-gold/30 via-sinar-gold-light/20 to-yellow-400/15 border border-sinar-gold/30 rounded-full backdrop-blur-sm animate-fadeIn">
            <span className="text-2xl">🔮</span>
            <span className="text-sm font-semibold bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300 bg-clip-text text-transparent">
              Our Vision
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Illuminating the{' '}
            <span className="bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300 bg-clip-text text-transparent">
              Digital World
            </span>
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              To illuminate the digital world with intelligent systems that{' '}
              <span className="font-bold bg-gradient-to-r from-sinar-gold to-sinar-gold-light bg-clip-text text-transparent">empower people</span> and{' '}
              <span className="font-bold bg-gradient-to-r from-sinar-gold to-yellow-400 bg-clip-text text-transparent">simplify work</span>.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center mt-12 gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-sinar-gold/30 to-transparent"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-sinar-gold to-yellow-400 rounded-full animate-pulse"></div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-sinar-gold-light/20 to-transparent"></div>
          </div>
        </div>

        {/* Mission Part */}
        <div className="space-y-12">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-emerald-500/10 via-sinar-gold/30 to-sinar-gold-light/20 border border-emerald-400/30 rounded-full backdrop-blur-sm">
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-400 via-sinar-gold to-sinar-gold-light bg-clip-text text-transparent">
                Our Mission
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              How We Make It Happen
            </h3>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              We're committed to building a future where technology and humanity work in harmony.
            </p>
          </div>

          {/* Mission Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {missionPoints.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-gray-600/80 transition-all duration-300 hover:shadow-xl hover:shadow-sinar-gold/30 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.gradient} bg-opacity-10 rounded-2xl text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h4 className={`font-display text-xl md:text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:${item.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Animated Bottom Line */}
                  <div className="pt-4">
                    <div className={`h-1 w-0 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Bottom Statement */}
        <div className="mt-24 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-sinar-gold/30 via-sinar-gold-light/20 to-yellow-400/15 rounded-2xl">
            <div className="px-10 py-8 bg-gradient-to-br from-gray-900 to-sinar-dark rounded-2xl">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                <span className="font-bold bg-gradient-to-r from-sinar-gold to-sinar-gold-light bg-clip-text text-transparent">Together</span>, we create intelligent systems with a{' '}
                <span className="font-bold bg-gradient-to-r from-sinar-gold to-yellow-400 bg-clip-text text-transparent">soul</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionSection
