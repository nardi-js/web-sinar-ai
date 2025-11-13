import { useFirestoreCollection } from '../hooks/useFirestore'
import { SectionSkeleton } from '../components/LoadingSkeletons'

export default function FoundersPage() {
  const { data: foundersData, loading } = useFirestoreCollection('founders')

  const founders = foundersData.length > 0 ? foundersData : []

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
              <span className="text-sm text-sinar-gold-light font-medium">Leadership</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Meet the <span className="text-sinar-gold">Founders</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              The human minds guiding the AI revolution at SinarAI System. Two visionaries united by a shared belief: technology should empower, not replace.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {founders.map((founder) => (
            <div key={founder.name} className="bg-sinar-dark-light border border-sinar-gold/20 p-8 rounded-2xl hover:border-sinar-gold/50 hover:shadow-xl hover:shadow-sinar-gold/10 transition-all duration-500 h-full">
              <div className="text-6xl mb-6">{founder.icon}</div>
                
              <h2 className="text-3xl font-display mb-2">{founder.name}</h2>
              <p className="text-sinar-gold text-sm uppercase tracking-wider mb-6">
                {founder.role}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {founder.bio}
              </p>
              
              <div>
                <p className="text-sm font-semibold text-gray-400 mb-3">Core Values:</p>
                <div className="flex gap-2 flex-wrap">
                  {founder.values.map((value) => (
                    <span
                      key={value}
                      className="px-3 py-1 bg-sinar-gold bg-opacity-10 text-sinar-gold-light text-sm rounded-full border border-sinar-gold border-opacity-30"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-8">
            Our <span className="text-sinar-gold">Shared Philosophy</span>
          </h2>
          <blockquote className="text-xl md:text-2xl text-gray-300 italic leading-relaxed border-l-4 border-sinar-gold pl-6 py-4">
            "We built SinarAI System not to replace human creativity, but to amplify it. 
            Our AI workforce handles repetitive tasks, while we focus on what humans do best: 
            think deeply, create meaningfully, and connect authentically."
          </blockquote>
          <p className="text-sinar-gold-light mt-6 text-lg">
            — Nardi & Xapaynya
          </p>
        </div>
      </section>

      {/* Why We Started */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display mb-8 text-center">
            Why We <span className="text-sinar-gold">Started</span>
          </h2>
          
          <div className="bg-sinar-dark-light border border-sinar-gold/20 p-8 rounded-2xl">
            <p className="text-gray-300 leading-relaxed mb-6">
              We saw a problem: AI was being used recklessly. Companies were cutting costs by replacing humans entirely, producing low-quality work at scale. The promise of AI was being betrayed by greed and short-term thinking.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              SinarAI System was born from a different belief. We knew AI could be powerful, but only when guided by human wisdom. So we built a system where AI employees handle the grunt work, while human founders provide strategy, ethics, and quality control.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              The result? Projects that are faster, more efficient, and more affordable than traditional agencies—without sacrificing quality, honesty, or humanity. This is the future we believe in.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            Work with <span className="text-sinar-gold">Humans & AI</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the perfect balance of AI efficiency and human expertise. Let us show you what is possible.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-sinar-gold text-sinar-dark font-semibold rounded-lg hover:bg-sinar-gold-light transition-all duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  )
}
