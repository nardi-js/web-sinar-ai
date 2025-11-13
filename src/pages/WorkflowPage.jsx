import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFirestoreCollection } from '../hooks/useFirestore'
import { WorkflowSkeleton } from '../components/LoadingSkeletons'

const WorkflowPage = () => {
  const [visibleSteps, setVisibleSteps] = useState([])
  const { data: workflowData, loading } = useFirestoreCollection('workflow')

  // Sort workflow steps by number (ascending)
  const workflowSteps = workflowData.length > 0 
    ? [...workflowData].sort((a, b) => (a.number || 0) - (b.number || 0))
    : []

  useEffect(() => {
    // Animate steps one by one on mount
    if (workflowSteps.length === 0) return
    
    const timer = setTimeout(() => {
      workflowSteps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => [...prev, index])
        }, index * 200)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [workflowSteps.length]) // eslint-disable-line react-hooks/exhaustive-deps

  const principles = [
    { icon: '⚡', title: 'Fast Response', description: 'Quick turnaround time' },
    { icon: '📢', title: 'Clear Updates', description: 'Regular communication' },
    { icon: '🎯', title: 'No Overpromises', description: 'Realistic expectations' },
    { icon: '⏱️', title: 'Honest Timelines', description: 'Transparent scheduling' },
  ]

  const benefits = [
    { icon: '🚀', text: 'AI handles repetitive tasks → faster delivery' },
    { icon: '✨', text: 'Human review ensures quality and authenticity' },
    { icon: '📋', text: 'Structured flow means no chaos' },
    { icon: '🤝', text: 'Transparent steps build trust' },
  ]

  const keywords = ['Transparency', 'Automation', 'Consistency', 'Communication']

  // Show loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-sinar-dark pt-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
          <WorkflowSkeleton />
          <div className="mt-8"><WorkflowSkeleton /></div>
          <div className="mt-8"><WorkflowSkeleton /></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sinar-gold/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sinar-gold-light/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Flow Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-sinar-gold/20 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center rotate-90">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-sinar-gold/20 to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
              <span className="text-sm text-sinar-gold font-medium">Our Process</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              How Your Project Flows{' '}
              <span className="text-sinar-gold">Through SinarAI</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              A simple, transparent, and efficient workflow — powered by AI employees, guided by human values.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Panel */}
      <section className="relative py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sinar-dark-light to-sinar-dark border border-sinar-gold/20 rounded-3xl p-8 lg:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              At SinarAI System, every project follows a structured workflow that blends human direction with AI-powered efficiency. Our process is designed to keep things clear, honest, and fast — from the moment you contact us to the moment we deliver your finished project.
            </p>

            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full text-sinar-gold-light font-medium text-sm hover:bg-sinar-gold/20 transition-colors duration-300"
                >
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-white mb-16">
            The Workflow <span className="text-sinar-gold">Timeline</span>
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sinar-gold via-sinar-gold-light to-sinar-gold hidden md:block"></div>

            <div className="space-y-12">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    visibleSteps.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <div className="flex items-start gap-6 md:gap-8">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-sinar-dark-light to-sinar-dark border-2 border-sinar-gold rounded-full flex items-center justify-center relative z-10">
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 bg-sinar-gold/20 rounded-full animate-ping"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-2xl p-6 hover:border-sinar-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-sinar-gold/10">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-xs text-sinar-gold font-mono font-bold">STEP {step.number}</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communication Principles */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sinar-gold/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Our Communication <span className="text-sinar-gold">Principles</span>
            </h2>
            <div className="max-w-3xl mx-auto p-6 bg-sinar-dark-light/50 backdrop-blur-sm border-l-4 border-sinar-gold rounded-lg">
              <p className="text-xl text-gray-300 italic leading-relaxed">
                "We believe clear communication is the bridge between ideas and results."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6 text-center hover:border-sinar-gold/50 hover:bg-sinar-gold/5 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-400">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Workflow Works */}
      <section className="relative py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Why Our Workflow <span className="text-sinar-gold">Works</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-sinar-dark-light border border-sinar-gold/10 rounded-xl hover:border-sinar-gold/30 transition-all duration-300"
              >
                <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                <p className="text-lg text-gray-300 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sinar-gold/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your{' '}
            <span className="text-sinar-gold">AI-Powered Project?</span>
          </h2>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of AI efficiency and human expertise. Let's bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-sinar-gold/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start a Project
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-sinar-gold/50 text-sinar-gold-light font-bold text-lg rounded-lg hover:bg-sinar-gold/10 hover:border-sinar-gold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkflowPage
