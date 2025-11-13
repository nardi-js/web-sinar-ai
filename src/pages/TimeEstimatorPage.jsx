import { useState } from 'react'

export default function TimeEstimatorPage() {
  const [serviceType, setServiceType] = useState('')
  const [complexity, setComplexity] = useState('')
  const [estimate, setEstimate] = useState(null)

  const estimateTime = () => {
    if (!serviceType || !complexity) {
      setEstimate({ error: 'Please select both service type and complexity level.' })
      return
    }

    const timeTable = {
      'website': {
        'simple': { days: '3-5', description: 'Landing page or basic portfolio site' },
        'medium': { days: '7-10', description: 'Multi-page website with custom design' },
        'complex': { days: '14-21', description: 'E-commerce or advanced web application' },
      },
      'design': {
        'simple': { days: '2-4', description: 'Logo design or simple branding' },
        'medium': { days: '5-7', description: 'Full brand identity kit' },
        'complex': { days: '10-14', description: 'Comprehensive brand design + marketing materials' },
      },
      'content': {
        'simple': { days: '1-3', description: 'Blog post or product descriptions' },
        'medium': { days: '4-7', description: 'Website copy or content series' },
        'complex': { days: '10-14', description: 'Complete content strategy + execution' },
      },
      'automation': {
        'simple': { days: '3-5', description: 'Basic task automation or workflow' },
        'medium': { days: '7-10', description: 'Multi-step automation system' },
        'complex': { days: '14-21', description: 'Complex AI-powered automation' },
      },
      'custom': {
        'simple': { days: '5-7', description: 'Small custom project' },
        'medium': { days: '10-14', description: 'Medium-sized custom solution' },
        'complex': { days: '21-30', description: 'Large-scale custom development' },
      },
    }

    const result = timeTable[serviceType]?.[complexity]
    if (result) {
      setEstimate({
        days: result.days,
        description: result.description,
        serviceType: serviceType,
        complexity: complexity,
      })
    } else {
      setEstimate({ error: 'Unable to calculate estimate. Please try again.' })
    }
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
              <span className="text-sm text-sinar-gold-light font-medium">Planning Tool</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Time <span className="text-sinar-gold">Estimator</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              Get an instant estimate of how long your project will take. Select your service type and complexity level below.
            </p>
          </div>
        </div>
      </section>

      {/* Estimator Tool */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div
              
          >
            <div className="bg-sinar-dark-light border border-gray-800 rounded-lg p-8">
              {/* Service Type Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-sinar-gold-light">
                  Select Service Type:
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { value: 'website', label: 'Website Development', icon: '💻' },
                    { value: 'design', label: 'Design & Branding', icon: '🎨' },
                    { value: 'content', label: 'Content Creation', icon: '✍️' },
                    { value: 'automation', label: 'Task Automation', icon: '⚡' },
                    { value: 'custom', label: 'Custom Project', icon: '🔧' },
                  ].map((service) => (
                    <button
                      key={service.value}
                      onClick={() => {
                        setServiceType(service.value)
                        setEstimate(null)
                      }}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        serviceType === service.value
                          ? 'bg-sinar-gold bg-opacity-20 border-sinar-gold'
                          : 'bg-sinar-dark border-gray-700 hover:border-sinar-gold'
                      }`}
                    >
                      <div className="text-3xl mb-2">{service.icon}</div>
                      <div className="text-sm font-semibold">{service.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Complexity Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-sinar-gold-light">
                  Select Complexity Level:
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { value: 'simple', label: 'Simple', description: 'Basic requirements' },
                    { value: 'medium', label: 'Medium', description: 'Standard project' },
                    { value: 'complex', label: 'Complex', description: 'Advanced features' },
                  ].map((level) => (
                    <button
                      key={level.value}
                      onClick={() => {
                        setComplexity(level.value)
                        setEstimate(null)
                      }}
                      className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                        complexity === level.value
                          ? 'bg-sinar-gold bg-opacity-20 border-sinar-gold'
                          : 'bg-sinar-dark border-gray-700 hover:border-sinar-gold'
                      }`}
                    >
                      <div className="font-semibold mb-1">{level.label}</div>
                      <div className="text-xs text-gray-400">{level.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <div className="text-center">
                <button
                  onClick={estimateTime}
                  className="px-8 py-4 bg-sinar-gold text-sinar-dark font-semibold rounded-lg hover:bg-sinar-gold-light transition-all duration-300"
                >
                  Calculate Estimate
                </button>
              </div>

              {/* Result Display */}
              {estimate && (
                <div className="mt-8 p-6 bg-sinar-dark border border-sinar-gold border-opacity-30 rounded-lg">
                  {estimate.error ? (
                    <p className="text-center text-red-400">{estimate.error}</p>
                  ) : (
                    <div className="text-center">
                      <div className="text-5xl mb-4">⏱️</div>
                      <h3 className="text-3xl font-display text-sinar-gold mb-2">
                        {estimate.days} Days
                      </h3>
                      <p className="text-gray-300 mb-4">{estimate.description}</p>
                      <div className="inline-block px-4 py-2 bg-sinar-gold bg-opacity-10 rounded-full text-sm text-gray-400">
                        {estimate.serviceType.charAt(0).toUpperCase() + estimate.serviceType.slice(1)} • {estimate.complexity.charAt(0).toUpperCase() + estimate.complexity.slice(1)}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display mb-8 text-center">
            Important <span className="text-sinar-gold">Notes</span>
          </h2>
          
          <div className="space-y-4">
              <div className="bg-sinar-dark border border-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-sinar-gold-light mb-2">Estimates Are Approximate</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  These timelines are estimates based on typical projects. Your actual timeline may vary depending on specific requirements, revisions, and project scope.
                </p>
              </div>
              
              <div className="bg-sinar-dark border border-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-sinar-gold-light mb-2">Faster with AI</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our AI workforce significantly accelerates development compared to traditional agencies. What might take others weeks can often be completed in days.
                </p>
              </div>
            <div className="bg-sinar-dark-light border border-sinar-gold/20 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-sinar-gold-light mb-2">Get a Detailed Quote</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                For a more accurate timeline and pricing, contact us with your specific project details. We will provide a customized estimate tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            Ready to <span className="text-sinar-gold">Start?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Got an estimate? Let us discuss your project in detail and provide a precise timeline and quote.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-sinar-gold text-sinar-dark font-semibold rounded-lg hover:bg-sinar-gold-light transition-all duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
