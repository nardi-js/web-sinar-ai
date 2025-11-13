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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sinar-gold/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sinar-gold-light/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
              <span className="text-sm text-sinar-gold-light font-medium">FAQs</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Frequently Asked <span className="text-sinar-gold">Questions</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              Find answers to common questions about our services, process, and AI-driven approach.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl overflow-hidden hover:border-sinar-gold/40 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg text-white pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-sinar-gold flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
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
                </button>

                <div
                  className={`transition-all duration-300 ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-400 leading-relaxed border-t border-sinar-gold/10 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sinar-gold/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">💬</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Contact us anytime. We're here to help and happy to discuss your project in detail.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-sinar-gold/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
