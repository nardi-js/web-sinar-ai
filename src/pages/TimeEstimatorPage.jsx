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
        'simple': { days: '3-5', description: 'Landing page or basic portfolio site', icon: '🌐' },
        'medium': { days: '7-10', description: 'Multi-page website with custom design', icon: '🌐' },
        'complex': { days: '14-21', description: 'E-commerce or advanced web application', icon: '🌐' },
      },
      'design': {
        'simple': { days: '2-4', description: 'Logo design or simple branding', icon: '🎨' },
        'medium': { days: '5-7', description: 'Full brand identity kit', icon: '🎨' },
        'complex': { days: '10-14', description: 'Comprehensive brand design + marketing materials', icon: '🎨' },
      },
      'content': {
        'simple': { days: '1-3', description: 'Blog post or product descriptions', icon: '✍️' },
        'medium': { days: '4-7', description: 'Website copy or content series', icon: '✍️' },
        'complex': { days: '10-14', description: 'Complete content strategy + execution', icon: '✍️' },
      },
      'automation': {
        'simple': { days: '3-5', description: 'Basic task automation or workflow', icon: '⚡' },
        'medium': { days: '7-10', description: 'Multi-step automation system', icon: '⚡' },
        'complex': { days: '14-21', description: 'Complex AI-powered automation', icon: '⚡' },
      },
      'custom': {
        'simple': { days: '5-7', description: 'Small custom project', icon: '🔧' },
        'medium': { days: '10-14', description: 'Medium-sized custom solution', icon: '🔧' },
        'complex': { days: '21-30', description: 'Large-scale custom development', icon: '🔧' },
      },
    }

    const result = timeTable[serviceType]?.[complexity]
    if (result) {
      setEstimate({
        days: result.days,
        description: result.description,
        icon: result.icon,
        serviceType: serviceType,
        complexity: complexity,
      })
    } else {
      setEstimate({ error: 'Unable to calculate estimate. Please try again.' })
    }
  }

  const serviceOptions = [
    { value: 'website', label: 'Website Development', icon: '💻', color: 'blue' },
    { value: 'design', label: 'Design & Branding', icon: '🎨', color: 'purple' },
    { value: 'content', label: 'Content Creation', icon: '✍️', color: 'green' },
    { value: 'automation', label: 'Task Automation', icon: '⚡', color: 'yellow' },
    { value: 'custom', label: 'Custom Project', icon: '🔧', color: 'red' },
  ]

  const complexityLevels = [
    { value: 'simple', label: 'Simple', description: 'Basic requirements', icon: '🌱', color: 'green' },
    { value: 'medium', label: 'Medium', description: 'Standard project', icon: '🚀', color: 'blue' },
    { value: 'complex', label: 'Complex', description: 'Advanced features', icon: '💎', color: 'purple' },
  ]

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
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-sinar-dark-light/80 backdrop-blur-sm border border-sinar-gold/30 rounded-full shadow-lg shadow-sinar-gold/5">
              <span className="text-2xl">⏱️</span>
              <span className="text-sm text-sinar-gold font-semibold tracking-wide">PLANNING TOOL</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Project Time{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
                Estimator
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              Get an instant estimate of how long your project will take. 
              Select your service type and complexity level to see realistic timelines powered by our AI workflow.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">3x Faster</div>
                <div className="text-sm text-gray-400">Than Traditional</div>
              </div>
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">Instant</div>
                <div className="text-sm text-gray-400">Estimates</div>
              </div>
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">Accurate</div>
                <div className="text-sm text-gray-400">Timelines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estimator Tool - Enhanced */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-xl border border-sinar-gold/20 rounded-3xl p-8 lg:p-12 shadow-xl shadow-sinar-gold/5">
            
            {/* Service Type Selection */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                  <span className="text-sinar-gold">01.</span> Select Service Type
                </h2>
                <p className="text-gray-400">Choose the type of project you need</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {serviceOptions.map((service) => {
                  const colorMap = {
                    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-500/60',
                    purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/60',
                    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-500/60',
                    yellow: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30 hover:border-yellow-500/60',
                    red: 'from-red-500/20 to-orange-500/20 border-red-500/30 hover:border-red-500/60'
                  }
                  
                  const gradient = colorMap[service.color] || colorMap.blue
                  const isSelected = serviceType === service.value
                  
                  return (
                    <button
                      key={service.value}
                      onClick={() => {
                        setServiceType(service.value)
                        setEstimate(null)
                      }}
                      className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${
                        isSelected
                          ? `bg-gradient-to-br ${gradient} border-sinar-gold shadow-lg shadow-sinar-gold/20 scale-105`
                          : `bg-sinar-dark/50 border-gray-700/50 ${gradient} hover:scale-105`
                      }`}
                    >
                      {/* Selection indicator */}
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-sinar-gold rounded-full flex items-center justify-center text-sinar-dark text-xs font-bold shadow-lg">
                          ✓
                        </div>
                      )}
                      
                      <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-sinar-gold transition-colors">
                        {service.label}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-sinar-gold/20"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 text-sm text-gray-500 bg-sinar-dark-light">THEN</span>
              </div>
            </div>

            {/* Complexity Selection */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                  <span className="text-sinar-gold">02.</span> Choose Complexity Level
                </h2>
                <p className="text-gray-400">How complex is your project?</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {complexityLevels.map((level) => {
                  const colorMap = {
                    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-500/60 text-green-400',
                    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-500/60 text-blue-400',
                    purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/60 text-purple-400'
                  }
                  
                  const gradient = colorMap[level.color] || colorMap.blue
                  const isSelected = complexity === level.value
                  
                  return (
                    <button
                      key={level.value}
                      onClick={() => {
                        setComplexity(level.value)
                        setEstimate(null)
                      }}
                      className={`group relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                        isSelected
                          ? `bg-gradient-to-br ${gradient} border-sinar-gold shadow-lg shadow-sinar-gold/20 scale-105`
                          : `bg-sinar-dark/50 border-gray-700/50 ${gradient} hover:scale-105`
                      }`}
                    >
                      {/* Selection indicator */}
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-sinar-gold rounded-full flex items-center justify-center text-sinar-dark text-xs font-bold shadow-lg">
                          ✓
                        </div>
                      )}
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">{level.icon}</div>
                        <div className="font-bold text-lg text-white group-hover:text-sinar-gold transition-colors">
                          {level.label}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">{level.description}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Calculate Button */}
            <div className="text-center">
              <button
                onClick={estimateTime}
                disabled={!serviceType || !complexity}
                className={`group inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark text-lg font-bold rounded-xl shadow-lg transition-all duration-300 ${
                  serviceType && complexity
                    ? 'hover:shadow-xl hover:shadow-sinar-gold/25 hover:scale-105 cursor-pointer'
                    : 'opacity-50 cursor-not-allowed'
                }`}
              >
                <span className="mr-3">Calculate Estimate</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
              {!serviceType || !complexity ? (
                <p className="text-sm text-gray-500 mt-4">Please select both options above</p>
              ) : null}
            </div>

            {/* Result Display - Enhanced */}
            {estimate && (
              <div className="mt-12 animate-fadeIn">
                {estimate.error ? (
                  <div className="p-8 bg-red-500/10 border border-red-500/30 rounded-2xl text-center">
                    <div className="text-5xl mb-4">⚠️</div>
                    <p className="text-red-400 text-lg">{estimate.error}</p>
                  </div>
                ) : (
                  <div className="relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sinar-gold/20 to-transparent rounded-2xl blur-xl"></div>
                    
                    <div className="relative bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 border-2 border-sinar-gold/40 rounded-2xl p-10 shadow-2xl shadow-sinar-gold/20">
                      {/* Success icon */}
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-sinar-gold/20 rounded-full mb-4">
                          <span className="text-5xl animate-float">{estimate.icon}</span>
                        </div>
                        <div className="inline-block px-4 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
                          <span className="text-sm text-green-400 font-semibold">✓ ESTIMATE READY</span>
                        </div>
                      </div>
                      
                      {/* Timeline */}
                      <div className="text-center mb-6">
                        <h3 className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold to-yellow-300 mb-3">
                          {estimate.days} Days
                        </h3>
                        <p className="text-xl text-gray-300 mb-6">{estimate.description}</p>
                      </div>
                      
                      {/* Details */}
                      <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-sinar-gold/20">
                        <div className="flex items-center gap-2 px-4 py-2 bg-sinar-dark/80 rounded-lg border border-sinar-gold/20">
                          <span className="text-sinar-gold font-semibold">Service:</span>
                          <span className="text-gray-300 capitalize">{estimate.serviceType}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-sinar-dark/80 rounded-lg border border-sinar-gold/20">
                          <span className="text-sinar-gold font-semibold">Complexity:</span>
                          <span className="text-gray-300 capitalize">{estimate.complexity}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="text-center mt-8 pt-8 border-t border-sinar-gold/20">
                        <p className="text-gray-400 mb-4">Ready to get started?</p>
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 px-8 py-3 bg-sinar-dark-light/80 border-2 border-sinar-gold/30 text-white font-semibold rounded-xl hover:bg-sinar-dark-light hover:border-sinar-gold/50 transition-all duration-300"
                        >
                          Contact Us
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Important Notes - Enhanced */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold to-yellow-300">Information</span>
            </h2>
            <p className="text-gray-400 text-lg">What you should know about our estimates</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Note 1 */}
            <div className="group relative bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-3xl mb-6">
                  📊
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Estimates Are Approximate</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  These timelines are based on typical projects. Your actual timeline may vary depending on specific requirements, revisions, and project scope changes.
                </p>
              </div>
            </div>
            
            {/* Note 2 */}
            <div className="group relative bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300 shadow-lg shadow-green-500/5 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center text-3xl mb-6">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-3">Faster with AI</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our AI workforce significantly accelerates development. What might take traditional agencies weeks can often be completed in days with consistent quality.
                </p>
              </div>
            </div>

            {/* Note 3 */}
            <div className="group relative bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-sm border border-sinar-gold/20 rounded-2xl p-8 hover:border-sinar-gold/40 transition-all duration-300 shadow-lg shadow-sinar-gold/5 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sinar-gold/10 rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-sinar-gold/20 rounded-xl flex items-center justify-center text-3xl mb-6">
                  💬
                </div>
                <h3 className="text-xl font-bold text-sinar-gold mb-3">Get a Detailed Quote</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  For accurate timelines and pricing, contact us with your specific project details. We'll provide a customized estimate tailored to your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Speed Comparison */}
          <div className="mt-12 p-8 bg-gradient-to-br from-sinar-dark-light/60 to-sinar-dark/60 backdrop-blur-sm border border-sinar-gold/20 rounded-2xl">
            <h3 className="text-2xl font-display font-bold text-center mb-8">
              <span className="text-sinar-gold">SinarAI</span> vs Traditional Agencies
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-sinar-gold/10 rounded-xl border border-sinar-gold/30">
                  <span className="text-gray-300">Simple Website</span>
                  <div className="text-right">
                    <div className="text-sinar-gold font-bold">3-5 days</div>
                    <div className="text-xs text-gray-500">with SinarAI</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-sinar-dark/50 rounded-xl border border-gray-700">
                  <span className="text-gray-400">Traditional</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through">2-3 weeks</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-sinar-gold/10 rounded-xl border border-sinar-gold/30">
                  <span className="text-gray-300">Complex Project</span>
                  <div className="text-right">
                    <div className="text-sinar-gold font-bold">2-3 weeks</div>
                    <div className="text-xs text-gray-500">with SinarAI</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-sinar-dark/50 rounded-xl border border-gray-700">
                  <span className="text-gray-400">Traditional</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through">2-3 months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark via-sinar-dark-light to-sinar-dark"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sinar-gold/10 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Icon */}
          <div className="text-7xl mb-8 animate-float">🚀</div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
              Start Building?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Got an estimate? Let's discuss your project in detail and provide a precise timeline, 
            pricing, and roadmap tailored specifically to your vision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark text-lg font-bold rounded-xl shadow-lg shadow-sinar-gold/15 hover:shadow-xl hover:shadow-sinar-gold/25 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Contact Us Now</span>
              <span className="ml-3 text-2xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="/case-study"
              className="inline-flex items-center justify-center px-10 py-5 bg-sinar-dark-light/80 backdrop-blur-sm border-2 border-sinar-gold/30 text-white text-lg font-semibold rounded-xl hover:bg-sinar-dark-light hover:border-sinar-gold/50 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-sinar-gold/20">
            {[
              { icon: '⏱️', label: 'Fast Delivery' },
              { icon: '✨', label: 'Premium Quality' },
              { icon: '💰', label: 'Fair Pricing' },
              { icon: '🤝', label: 'Full Support' }
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
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
