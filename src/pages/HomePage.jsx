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
      {/* Mini Section Navigation - Left Side */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-sinar-dark-light/80 backdrop-blur-lg border border-sinar-gold/20 rounded-full p-3 space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-sinar-gold text-sinar-dark'
                  : 'bg-transparent text-gray-500 hover:text-sinar-gold hover:bg-sinar-gold/10'
              }`}
              title={section.label}
            >
              <span className="text-lg">{section.icon}</span>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-sinar-dark-light border border-sinar-gold/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                <span className="text-sm text-sinar-gold-light font-medium">{section.label}</span>
              </div>
            </button>
          ))}
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

      {/* Final CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sinar-gold/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
                Ready to Build Something{' '}
                <span className="text-sinar-gold">Amazing?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with the power of AI-driven solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-sinar-gold/50 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-2">
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
              </Link>

              <Link
                to="/templates"
                className="group w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-sinar-gold/50 text-sinar-gold-light font-bold text-lg rounded-lg hover:bg-sinar-gold/10 hover:border-sinar-gold transition-all duration-300"
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

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-12">
              <div className="p-6 bg-sinar-dark-light/50 backdrop-blur-sm border border-sinar-gold/10 rounded-xl">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
                <p className="text-sm text-gray-400">AI-powered delivery in record time</p>
              </div>
              <div className="p-6 bg-sinar-dark-light/50 backdrop-blur-sm border border-sinar-gold/10 rounded-xl">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-white mb-2">Precision Quality</h3>
                <p className="text-sm text-gray-400">Human-guided AI for perfect results</p>
              </div>
              <div className="p-6 bg-sinar-dark-light/50 backdrop-blur-sm border border-sinar-gold/10 rounded-xl">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-white mb-2">100% Reliable</h3>
                <p className="text-sm text-gray-400">Trusted by businesses worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
