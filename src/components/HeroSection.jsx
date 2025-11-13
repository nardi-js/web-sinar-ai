import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFirestoreDoc } from '../hooks/useFirestore'
import { HeroSkeleton } from './LoadingSkeletons'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { data: heroData, loading } = useFirestoreDoc('content', 'hero')

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Show loading skeleton while fetching data
  if (loading) {
    return <HeroSkeleton />
  }

  // Fallback to default values if no data
  const hero = heroData || {
    badge: 'Welcome to Sinar AI',
    title: 'Building the Future with',
    highlightedText: 'AI Innovation',
    description: 'Transform your business with cutting-edge AI solutions.',
    ctaPrimaryText: 'Start Your Project',
    ctaPrimaryLink: '/contact',
    ctaSecondaryText: 'View Our Work',
    ctaSecondaryLink: '/#portfolio'
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-sinar-gold/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sinar-gold-light/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
            animationDelay: '1s',
          }}
        ></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #D4AF37 1px, transparent 1px),
              linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        ></div>

        {/* Light Beam Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-sinar-gold/0 via-sinar-gold/10 to-sinar-gold/0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sinar-dark-light/50 backdrop-blur-sm border border-sinar-gold/20 rounded-full">
            <div className="w-2 h-2 bg-sinar-gold rounded-full animate-pulse"></div>
            <span className="text-sm text-sinar-gold-light font-medium">
              {hero.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-white">{hero.title}</span>
            <span className="block bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-sinar-gold bg-clip-text text-transparent animate-gradient">
              {hero.highlightedText}
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={hero.ctaPrimaryLink}
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-semibold rounded-lg hover:shadow-2xl hover:shadow-sinar-gold/50 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
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
            </a>

            <Link
              to={hero.ctaSecondaryLink}
              className="group w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-sinar-gold/50 text-sinar-gold-light font-semibold rounded-lg hover:bg-sinar-gold/10 hover:border-sinar-gold transition-all duration-300"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>{hero.ctaSecondaryText}</span>
                <svg
                  className="w-5 h-5 group-hover:rotate-45 transition-transform"
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-sinar-gold font-display">
                100%
              </div>
              <div className="text-sm text-gray-400">AI-Powered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-sinar-gold font-display">
                24/7
              </div>
              <div className="text-sm text-gray-400">Always Active</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-sinar-gold font-display">
                ∞
              </div>
              <div className="text-sm text-gray-400">Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
