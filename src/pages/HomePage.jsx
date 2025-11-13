import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import VisionMissionSection from '../components/VisionMissionSection'
import DivisionsSection from '../components/DivisionsSection'
import PortfolioSection from '../components/PortfolioSection'
import TestimonialsSection from '../components/TestimonialsSection'

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'vision', 'divisions', 'portfolio', 'testimonials']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'about', icon: '📖', label: 'About' },
    { id: 'vision', icon: '🎯', label: 'Vision' },
    { id: 'divisions', icon: '🎨', label: 'Divisions' },
    { id: 'portfolio', icon: '💼', label: 'Portfolio' },
    { id: 'testimonials', icon: '⭐', label: 'Testimonials' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = sectionId === 'home' ? 0 : element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Enhanced Side Navigation - Purple/Blue Theme */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-sinar-gold/30 via-sinar-gold-light/20 to-yellow-400/15 rounded-full blur-xl"></div>
          
          {/* Navigation Container */}
          <div className="relative bg-gradient-to-b from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-sinar-gold/30 rounded-full p-3 space-y-3 shadow-2xl">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-br from-sinar-gold to-sinar-gold-light text-white shadow-lg shadow-sinar-gold/30'
                    : 'bg-transparent text-gray-500 hover:text-white hover:bg-gradient-to-br hover:from-sinar-gold/30 hover:to-sinar-gold-light/20'
                }`}
                title={section.label}
              >
                <span className="text-xl relative z-10">{section.icon}</span>
                
                {/* Active Indicator */}
                {activeSection === section.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-sinar-gold to-yellow-400 rounded-full animate-ping opacity-30"></div>
                )}
                
                {/* Enhanced Tooltip */}
                <div className="absolute left-full ml-5 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 border border-sinar-gold/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl backdrop-blur-sm">
                  <span className="text-sm font-bold bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300 bg-clip-text text-transparent">
                    {section.label}
                  </span>
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="vision">
        <VisionMissionSection />
      </div>
      <div id="divisions">
        <DivisionsSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* Enhanced Final CTA Section - TechStack Style */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-sinar-dark via-sinar-dark-light to-sinar-dark">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark via-sinar-dark-light/40 to-sinar-dark"></div>
          <div className="absolute top-20 right-[15%] w-96 h-96 bg-sinar-gold/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-[10%] w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-3xl animate-float-delayed"></div>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255,215,138,0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(255,215,138,0.2) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              animation: 'gridMove 20s linear infinite',
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sinar-gold/15 via-sinar-gold/10 to-transparent border border-sinar-gold/30 rounded-full backdrop-blur-sm">
                <span className="text-2xl">🚀</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-sinar-gold-light">
                  Let's Build Together
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Ready to Build</span>
                  <br />
                  <span className="bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300 bg-clip-text text-transparent">
                    Something Amazing?
                  </span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-sinar-gold to-transparent rounded-full mx-auto"></div>
              </div>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your ideas into reality with our AI-powered solutions. Fast, precise, and reliable.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link
                to="/contact"
                className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-400 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sinar-gold/30 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start Your Project</span>
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
              </Link>

              <Link
                to="/templates"
                className="group w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-sinar-gold/50 text-sinar-gold-light font-bold text-lg rounded-xl hover:bg-sinar-gold/10 hover:border-sinar-gold transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Browse Templates</span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Features Grid - Enhanced */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'AI-powered delivery in record time',
                color: 'from-sinar-gold/20 to-yellow-400/10',
                borderColor: 'border-sinar-gold/30',
                iconBg: 'from-sinar-gold/30 to-yellow-400/10'
              },
              {
                icon: '🎯',
                title: 'Precision Quality',
                description: 'Human-guided AI for perfect results',
                color: 'from-sinar-gold-light/20 to-yellow-300/10',
                borderColor: 'border-sinar-gold-light/30',
                iconBg: 'from-sinar-gold-light/30 to-yellow-300/10'
              },
              {
                icon: '🔒',
                title: '100% Reliable',
                description: 'Trusted by businesses worldwide',
                color: 'from-yellow-400/20 to-sinar-gold/10',
                borderColor: 'border-yellow-400/30',
                iconBg: 'from-yellow-400/30 to-sinar-gold/10'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.color} backdrop-blur-xl border ${feature.borderColor} p-6 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-black/10 transition-all duration-300`}
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.iconBg} rounded-xl flex items-center justify-center text-3xl mb-4 shadow-md shadow-black/10`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-sinar-gold-light transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sinar-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Stats Bar - Enhanced */}
          <div className="mt-16 relative">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-sinar-gold/20 via-sinar-gold-light/10 to-yellow-400/20 rounded-2xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-r from-sinar-gold/10 via-sinar-gold-light/5 to-yellow-400/10 backdrop-blur-xl border border-sinar-gold/20 p-1 rounded-2xl">
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-8 rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { value: '50+', label: 'Projects Delivered', color: 'from-sinar-gold to-sinar-gold-light' },
                    { value: '98%', label: 'Client Satisfaction', color: 'from-sinar-gold-light to-yellow-400' },
                    { value: '24/7', label: 'AI Support', color: 'from-yellow-400 to-sinar-gold' },
                    { value: '100%', label: 'Quality Guaranteed', color: 'from-sinar-gold via-sinar-gold-light to-yellow-400' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 font-display`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

export default HomePage
