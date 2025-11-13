import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFirestoreCollection } from '../hooks/useFirestore'
import { SectionSkeleton } from '../components/LoadingSkeletons'

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const { data: faqData, loading } = useFirestoreCollection('faq')

  const faqs = faqData.length > 0 ? faqData : []

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Show loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-sinar-dark pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <SectionSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-sinar-dark">
      {/* Hero Section - Enhanced */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark via-sinar-dark-light to-sinar-dark"></div>
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}></div>
          </div>
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-sinar-gold/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-sinar-dark-light/80 backdrop-blur-sm border border-sinar-gold/30 rounded-full shadow-lg shadow-sinar-gold/5">
              <span className="text-2xl">❓</span>
              <span className="text-sm text-sinar-gold font-semibold tracking-wide">HELP CENTER</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
                Questions
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              Find answers to common questions about our services, process, and AI-driven approach. 
              Can't find what you're looking for? <Link to="/contact" className="text-sinar-gold hover:underline">Contact us</Link>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">{faqs.length}+</div>
                <div className="text-sm text-gray-400">FAQs Answered</div>
              </div>
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">Instant</div>
                <div className="text-sm text-gray-400">Responses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List - Enhanced */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-sm border border-sinar-gold/20 rounded-2xl overflow-hidden hover:border-sinar-gold/40 transition-all duration-300 shadow-lg shadow-sinar-gold/5"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                  >
                    {/* Question Number & Text */}
                    <div className="flex items-start gap-4 flex-1 pr-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                        isOpen 
                          ? 'bg-sinar-gold text-sinar-dark' 
                          : 'bg-sinar-gold/20 text-sinar-gold'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <span className={`font-semibold text-lg transition-colors ${
                        isOpen ? 'text-sinar-gold' : 'text-white'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    
                    {/* Toggle Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-sinar-gold/10 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-sinar-gold/20' : ''
                    }`}>
                      <svg
                        className="w-6 h-6 text-sinar-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-500 ${
                      isOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                      <div className="pl-14 border-t border-sinar-gold/10 pt-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Empty State */}
          {faqs.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🤔</div>
              <h3 className="text-2xl font-bold text-white mb-4">No FAQs Yet</h3>
              <p className="text-gray-400 mb-8">Check back soon for answers to common questions</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sinar-gold text-sinar-dark font-bold rounded-xl hover:bg-sinar-gold-light transition-colors"
              >
                Contact Us Instead
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA - Enhanced */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark via-sinar-dark-light to-sinar-dark"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sinar-gold/10 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Icon */}
          <div className="text-7xl mb-8 animate-float">💬</div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Still Have{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
              Questions?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Can't find the answer you're looking for? No worries! Contact us anytime. 
            We're here to help and happy to discuss your project in detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark text-lg font-bold rounded-xl shadow-lg shadow-sinar-gold/15 hover:shadow-xl hover:shadow-sinar-gold/25 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="ml-3 text-2xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
            <Link
              to="/ai-employees"
              className="inline-flex items-center justify-center px-10 py-5 bg-sinar-dark-light/80 backdrop-blur-sm border-2 border-sinar-gold/30 text-white text-lg font-semibold rounded-xl hover:bg-sinar-dark-light hover:border-sinar-gold/50 transition-all duration-300"
            >
              Learn About Our AI
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-sinar-gold/20">
            {[
              { icon: '⚡', label: 'Quick Responses' },
              { icon: '🤝', label: 'Friendly Support' },
              { icon: '✨', label: 'Expert Advice' },
              { icon: '💯', label: 'Always Available' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default FAQPage
