import { useFirestoreDoc } from '../hooks/useFirestore'
import { StatsSkeleton } from './LoadingSkeletons'

const AboutSection = () => {
  const { data: aboutData, loading } = useFirestoreDoc('content', 'about')

  // Show loading skeleton while fetching
  if (loading) {
    return (
      <section id="about" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-sinar-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StatsSkeleton />
        </div>
      </section>
    )
  }

  // Fallback data
  const about = aboutData || {
    badge: 'About Us',
    title: 'Where AI Does the Work',
    description: 'SinarAI System is a futuristic organization where AI serves as our workforce.',
    mission: 'We don\'t hire humans to act like machines — we train machines to serve human values.',
    stats: [
      { number: '100+', label: 'AI Projects' },
      { number: '24/7', label: 'Always Active' },
      { number: '∞', label: 'Possibilities' },
      { number: '100%', label: 'AI-Powered' }
    ]
  }

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements - Reduced for mobile */}
      <div className="absolute inset-0 opacity-[0.03] md:opacity-5">
        <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-sinar-gold/20 md:bg-sinar-gold/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-sinar-gold-light/15 md:bg-sinar-gold-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
                <span className="text-xs sm:text-sm text-sinar-gold font-medium">{about.badge}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {about.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-sinar-gold">{about.title.split(' ').slice(-1)}</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>{about.description}</p>
            </div>

            {/* Stats Grid */}
            {about.stats && about.stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
                {about.stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-sinar-gold font-display">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Quote Box */}
            <div className="relative p-8 bg-gradient-to-br from-sinar-dark-light to-sinar-dark border border-sinar-gold/20 rounded-2xl">
              <div className="absolute top-4 left-4 text-6xl text-sinar-gold/20 font-serif">"</div>
              <blockquote className="relative z-10 space-y-4">
                <p className="text-xl text-gray-300 italic leading-relaxed pl-8">
                  {about.mission}
                </p>
                <div className="flex items-center space-x-3 pl-8">
                  <div className="w-12 h-0.5 bg-sinar-gold"></div>
                  <span className="text-sm text-sinar-gold-light font-medium">
                    SinarAI Philosophy
                  </span>
                </div>
              </blockquote>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-square">
              {/* Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 border-2 border-sinar-gold/30 rounded-full animate-spin-slow"></div>
                  
                  {/* Middle Ring */}
                  <div
                    className="absolute inset-8 border-2 border-sinar-gold/50 rounded-full"
                    style={{ animationDirection: 'reverse', animationDuration: '20s' }}
                  ></div>
                  
                  {/* Inner Glow */}
                  <div className="absolute inset-12 bg-gradient-to-br from-sinar-gold/20 to-sinar-gold-light/10 rounded-full backdrop-blur-sm"></div>
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-sinar-gold animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7V8.3l7-3.11 7 3.11V13c0 4-3 7-7 7z" />
                      <path d="M12 6l-5 2.5V13c0 2.76 1.79 5.35 5 6.3 3.21-.95 5-3.54 5-6.3V8.5L12 6zm0 10l-3-1.5V10l3-1.5 3 1.5v4.5L12 16z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Orbs */}
              <div className="absolute top-1/4 left-0 w-20 h-20 bg-sinar-gold/20 rounded-full blur-xl animate-float"></div>
              <div
                className="absolute top-1/2 right-0 w-16 h-16 bg-sinar-gold-light/20 rounded-full blur-xl animate-float"
                style={{ animationDelay: '1s' }}
              ></div>
              <div
                className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-sinar-gold/10 rounded-full blur-xl animate-float"
                style={{ animationDelay: '2s' }}
              ></div>

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 400 400"
              >
                <line
                  x1="50"
                  y1="100"
                  x2="200"
                  y2="200"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="10"
                    to="0"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1="350"
                  y1="200"
                  x2="200"
                  y2="200"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="10"
                    to="0"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1="100"
                  y1="300"
                  x2="200"
                  y2="200"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="10"
                    to="0"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </line>
                <defs>
                  <linearGradient id="line-gradient">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default AboutSection
