import { useFirestoreCollection } from '../hooks/useFirestore'
import { SectionSkeleton } from '../components/LoadingSkeletons'

export default function ValuesEthicsPage() {
  const { data: valuesData, loading } = useFirestoreCollection('values')

  const values = valuesData.length > 0 ? valuesData : []

  // Show loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-sinar-dark pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
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
              <span className="text-sm text-sinar-gold-light font-medium">Our Principles</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Values & <span className="text-sinar-gold">Ethics</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              The principles that guide every decision, every project, and every line of code. At SinarAI System, ethics are not optional—they are essential.
            </p>
          </div>
        </div>
      </section>

      {/* Core Statement */}
      <section className="relative py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div
              
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe AI should empower people, not replace them. Technology should be used responsibly, transparently, and ethically. These are the values that define SinarAI System—and they are non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
                
            >
              <div className="bg-sinar-dark-light border border-gray-800 p-8 rounded-lg hover:border-sinar-gold transition-all duration-500 h-full">
                <div className="text-5xl mb-4">{value.icon}</div>
                
                <h3 className="text-2xl font-display mb-4 text-sinar-gold-light">
                  {value.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {value.description}
                </p>
                
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-3">KEY PRINCIPLES:</p>
                  <ul className="space-y-2">
                    {value.principles.map((principle) => (
                      <li key={principle} className="text-sm text-gray-300 flex items-start">
                        <span className="text-sinar-gold mr-2 flex-shrink-0">✓</span>
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4 bg-sinar-dark-light">
        <div className="max-w-4xl mx-auto">
          <div
              
          >
            <h2 className="text-3xl md:text-4xl font-display mb-8 text-center">
              Our <span className="text-sinar-gold">Commitment</span> to You
            </h2>
            
            <div className="bg-sinar-dark border border-sinar-gold border-opacity-30 p-8 rounded-lg">
              <p className="text-gray-300 leading-relaxed mb-4">
                When you work with SinarAI System, you are not just hiring a service—you are partnering with people who care about doing things right. We promise to:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sinar-gold text-xl mr-3">•</span>
                  <span className="text-gray-300">Treat your project with the same care and attention we would give our own.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sinar-gold text-xl mr-3">•</span>
                  <span className="text-gray-300">Use AI responsibly, with human oversight at every stage.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sinar-gold text-xl mr-3">•</span>
                  <span className="text-gray-300">Communicate openly and honestly, even when delivering difficult news.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sinar-gold text-xl mr-3">•</span>
                  <span className="text-gray-300">Deliver work that is ethical, original, and aligned with your values.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sinar-gold text-xl mr-3">•</span>
                  <span className="text-gray-300">Never compromise on quality, integrity, or trust.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
              
          >
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Work with a Team You Can <span className="text-sinar-gold">Trust</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience AI-driven efficiency without sacrificing ethics or quality. Let us show you the difference.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-sinar-gold text-sinar-dark font-semibold rounded-lg hover:bg-sinar-gold-light transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
