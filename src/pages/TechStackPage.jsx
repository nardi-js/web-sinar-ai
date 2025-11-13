import { useFirestoreDoc } from '../hooks/useFirestore'
import { SectionSkeleton } from '../components/LoadingSkeletons'

export default function TechStackPage() {
  const { data: techStackData, loading } = useFirestoreDoc('content', 'techStack')

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

  // Convert techStack object to array format
  const techCategories = techStackData ? Object.entries(techStackData)
    .filter(([key]) => !['createdAt', 'updatedAt'].includes(key))
    .map(([category, tools]) => ({
      category,
      icon: getCategoryIcon(category),
      tools: Array.isArray(tools) ? tools : []
    })) : []

  function getCategoryIcon(category) {
    const icons = {
      'AI & ML': '🤖',
      'Backend': '💻',
      'Frontend': '🎨',
      'Cloud & DevOps': '☁️',
      'Database': '🗄️'
    }
    return icons[category] || '🔧'
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
              <span className="text-sm text-sinar-gold-light font-medium">Technology</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Our <span className="text-sinar-gold">Tech Stack</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              The tools and technologies powering SinarAI System. A carefully curated stack that combines cutting-edge AI with proven development tools.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {techCategories.map((category) => (
            <div
              key={category.category}
                
            >
              <div className="mb-8 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-display">{category.category}</h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-sinar-dark-light border border-gray-800 p-6 rounded-lg hover:border-sinar-gold transition-all duration-500"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-sinar-gold-light">
                      {tool.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {tool.use}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-sinar-dark-light">
        <div className="max-w-4xl mx-auto">
          <div
              
          >
            <h2 className="text-3xl md:text-4xl font-display mb-8 text-center">
              Our <span className="text-sinar-gold">Technology Philosophy</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-sinar-dark border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-sinar-gold mb-3">Always Evolving</h3>
                <p className="text-gray-300 leading-relaxed">
                  We constantly evaluate and adopt new tools. If a better technology emerges, we integrate it. Our stack is never static—it grows with the industry.
                </p>
              </div>
              
              <div className="bg-sinar-dark border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-sinar-gold mb-3">Best Tool for the Job</h3>
                <p className="text-gray-300 leading-relaxed">
                  We do not limit ourselves to one ecosystem. We choose tools based on project requirements, not trends. Flexibility is our strength.
                </p>
              </div>
              
              <div className="bg-sinar-dark border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-sinar-gold mb-3">Efficiency First</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every tool in our stack serves a purpose: speed, quality, or scalability. We avoid bloat and prioritize tools that deliver measurable results.
                </p>
              </div>
              
              <div className="bg-sinar-dark border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-sinar-gold mb-3">Human-Guided AI</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI tools handle execution, but our founders guide strategy, quality control, and ethical oversight. Technology is powerful, but humans keep it honest.
                </p>
              </div>
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
              Powered by the <span className="text-sinar-gold">Best Tools</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our tech stack is built for speed, quality, and innovation. Let us show you what is possible.
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
