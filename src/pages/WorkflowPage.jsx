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
    <div className="min-h-screen pt-20 bg-gradient-to-b from-sinar-dark via-sinar-dark-light to-sinar-dark">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-[15%] w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-40 left-[60%] w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" style={{ animation: 'float 22s ease-in-out infinite' }}></div>
        </div>

        {/* Flow Lines */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center rotate-90 opacity-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-400/30 rounded-full backdrop-blur-sm animate-fadeIn">
              <span className="text-2xl">⚙️</span>
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Process
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Your Project Flows</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Through SinarAI
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              A transparent, efficient, and AI-powered workflow—designed for clarity, speed, and exceptional results at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Panel */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative p-1 bg-gradient-to-br from-emerald-500/50 via-blue-500/50 to-purple-500/50 rounded-3xl">
            <div className="bg-gradient-to-br from-gray-900 to-sinar-dark p-8 lg:p-12 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">💡</div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                    The <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">SinarAI Way</span>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    At SinarAI System, every project follows a meticulously structured workflow that harmonizes human creativity with AI-powered precision. Our process is engineered for transparency, honesty, and lightning-fast delivery—from your first inquiry to final deployment.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {keywords.map((keyword, index) => (
                  <div
                    key={index}
                    className="group px-5 py-2.5 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-400/30 rounded-full hover:border-blue-400/50 transition-all duration-300"
                  >
                    <span className="text-sm font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {keyword}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              The Workflow <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Follow your project's journey through our AI-enhanced pipeline
            </p>
          </div>

          <div className="relative">
            {/* Vertical Gradient Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-blue-400 to-purple-400 hidden md:block rounded-full"></div>

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
                    {/* Step Icon with Radar Effect */}
                    <div className="flex-shrink-0 relative">
                      {/* Outer Radar Pulse (multiple layers for stronger effect) */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-blue-400/30 to-purple-400/30 rounded-full animate-ping"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      
                      {/* Middle Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-md"></div>
                      
                      {/* Icon Circle */}
                      <div className="relative w-16 h-16 bg-gradient-to-br from-gray-900 to-sinar-dark border-2 border-emerald-400/50 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-500/20">
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 pb-8">
                      <div className="group relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                        {/* Gradient Accent */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 rounded-full text-xs font-mono font-bold text-emerald-400 mb-2">
                                STEP {step.number}
                              </span>
                              <h3 className="text-xl md:text-2xl font-bold text-white mt-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communication Principles */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Our Communication <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Principles</span>
            </h2>
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-l-4 border-emerald-400 rounded-2xl backdrop-blur-sm">
              <p className="text-2xl text-gray-300 italic leading-relaxed">
                "Clear communication is the bridge between ideas and exceptional results."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 text-center"
              >
                {/* Hover Gradient Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-emerald-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
                
                <div className="relative">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-400">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Workflow Works */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Why Our Workflow <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The perfect synergy of AI automation and human expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 text-4xl transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-3xl mb-8 animate-fadeIn">
            <div className="bg-sinar-dark px-12 py-16 rounded-3xl">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">AI-Powered Project?</span>
              </h2>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                Experience seamless collaboration between cutting-edge AI and human creativity. Let's transform your vision into reality.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group relative px-10 py-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-1"
                >
                  <span className="relative z-10">Start a Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  to="/ai-employees"
                  className="px-10 py-4 bg-transparent border-2 border-emerald-400/50 text-emerald-300 font-bold text-lg rounded-xl hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300"
                >
                  Meet Our AI Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkflowPage
