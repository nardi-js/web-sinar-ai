import { Link } from 'react-router-dom'
import { useFirestoreDoc } from '../hooks/useFirestore'
import { HeroSkeleton } from './LoadingSkeletons'

const HeroSection = () => {
  const { data: heroData, loading } = useFirestoreDoc('content', 'hero')

  // Show loading skeleton while fetching data
  if (loading) {
    return <HeroSkeleton />
  }

  // Fallback to default values if no data
  const hero = heroData || {
    badge: 'Welcome to Sinar AI',
    title: 'Building the Future with',
    highlightedText: 'AI Innovation',
    description: 'Transform your business with cutting-edge AI solutions. We combine artificial intelligence with human creativity to deliver exceptional results.',
    ctaPrimaryText: 'Start Your Project',
    ctaPrimaryLink: '/contact',
    ctaSecondaryText: 'View Our Work',
    ctaSecondaryLink: '/#portfolio'
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sinar-dark via-sinar-dark to-sinar-dark-light"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark via-sinar-dark-light/40 to-sinar-dark"></div>
        {/* Reduced light effects for mobile */}
        <div className="absolute top-20 right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sinar-gold/10 md:bg-sinar-gold/20 blur-3xl rounded-full animate-float"></div>
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-yellow-500/8 md:bg-yellow-500/15 blur-3xl rounded-full animate-float-delayed"></div>
        <div
          className="absolute inset-0 opacity-[0.03] md:opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,215,138,0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(255,215,138,0.2) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite',
          }}
        ></div>
      </div>

      {/* Content - Reduced padding for better navbar-to-content spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-sinar-gold/15 via-sinar-gold/10 to-transparent border border-sinar-gold/30 rounded-full backdrop-blur-sm">
            <span className="text-sinar-gold text-base sm:text-lg">⚡</span>
            <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sinar-gold-light">
              {hero.badge}
            </span>
            <span className="text-sinar-gold text-base sm:text-lg">⚡</span>
          </div>

          {/* Title with Modern Animation - Better mobile sizing */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1]">
              {hero.title}{' '}
              <span className="inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300 animate-shimmer" style={{ backgroundSize: '200% 100%' }}>
                  {hero.highlightedText}
                </span>
              </span>
            </h1>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-sinar-gold to-transparent rounded-full mx-auto animate-pulse-slow"></div>
          </div>

          {/* Description - Better mobile text size */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4 sm:px-0">
            {hero.description}
          </p>

          {/* CTA Buttons - Better mobile sizing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
            <a
              href={hero.ctaPrimaryLink}
              className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-400 text-white font-bold text-base sm:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sinar-gold/30 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>{hero.ctaPrimaryText}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-sinar-gold to-sinar-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <Link
              to={hero.ctaSecondaryLink}
              className="group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-sinar-gold/50 text-sinar-gold-light font-bold text-base sm:text-lg rounded-xl hover:bg-sinar-gold/10 hover:border-sinar-gold transition-all duration-300"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>{hero.ctaSecondaryText}</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats - Better mobile layout */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="text-sinar-gold font-bold text-xl sm:text-2xl">100%</span>
              <span className="text-gray-400">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sinar-gold-light font-bold text-xl sm:text-2xl">24/7</span>
              <span className="text-gray-400">Always Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400">Infinite Possibilities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.5;
            transform: scaleX(1.5);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
