export default function ValuesEthicsPage() {
  // Static values data based on SinarAI System principles
  const values = [
    {
      id: 1,
      icon: '🌟',
      title: 'Human-Centered AI',
      color: 'blue',
      description: 'We believe technology should elevate people, not replace their value. Every solution we build is guided by empathy, fairness, and a deep respect for human intelligence and creativity.',
      principles: [
        'Technology elevates, never replaces human value',
        'Empathy guides every solution we build',
        'Deep respect for human intelligence and creativity'
      ]
    },
    {
      id: 2,
      icon: '💎',
      title: 'Transparency First',
      color: 'cyan',
      description: 'We communicate clearly about how our AI works, what it can do, and how it is used in projects. No hidden processes. No unclear promises. Clients always know exactly how their work is created.',
      principles: [
        'Clear communication about AI capabilities',
        'No hidden processes or unclear promises',
        'Full visibility into how work is created'
      ]
    },
    {
      id: 3,
      icon: '⚖️',
      title: 'Integrity in Every Interaction',
      color: 'purple',
      description: 'Honesty is our default. We deliver what we promise, maintain accountability, and take responsibility for the quality of our work — AI-generated or human-reviewed.',
      principles: [
        'Honesty as our default approach',
        'Deliver promises with full accountability',
        'Take responsibility for quality at every stage'
      ]
    },
    {
      id: 4,
      icon: '🛡️',
      title: 'Ethical Use of Artificial Intelligence',
      color: 'green',
      description: 'We strictly avoid harmful tasks, manipulation, disinformation, or unethical data use. Our AI employees follow safe, responsible workflows designed to protect clients and end users.',
      principles: [
        'Zero tolerance for harmful or manipulative tasks',
        'No disinformation or unethical data use',
        'Safe workflows that protect all stakeholders'
      ]
    },
    {
      id: 5,
      icon: '🔒',
      title: 'Privacy & Data Protection',
      color: 'red',
      description: 'Your data stays your data. We apply strong confidentiality, secure processing, and zero unauthorized sharing. Only essential project information is used — never more.',
      principles: [
        'Your data remains exclusively yours',
        'Strong confidentiality with secure processing',
        'Only essential information used, nothing more'
      ]
    },
    {
      id: 6,
      icon: '🌍',
      title: 'Fair Access to Technology',
      color: 'orange',
      description: 'We believe advanced AI tools should empower everyone, not just large corporations. Our services are designed to be accessible, scalable, and supportive for individuals, startups, and businesses of all sizes.',
      principles: [
        'AI tools for everyone, not just corporations',
        'Accessible and scalable for all business sizes',
        'Support individuals, startups, and enterprises equally'
      ]
    },
    {
      id: 7,
      icon: '⭐',
      title: 'Excellence Through Consistency',
      color: 'yellow',
      description: 'Quality matters. Every output goes through structured workflows, AI review, and human refinement. This ensures dependable results — every project, every time.',
      principles: [
        'Structured workflows for every output',
        'AI review combined with human refinement',
        'Dependable results across all projects'
      ]
    },
    {
      id: 8,
      icon: '🚀',
      title: 'Continuous Learning & Improvement',
      color: 'indigo',
      description: 'AI evolves fast, and we evolve with it. We constantly refine our systems, our skills, and our internal processes to deliver better, faster, and smarter outcomes.',
      principles: [
        'Evolve alongside AI advancements',
        'Constant refinement of systems and skills',
        'Deliver better, faster, smarter outcomes'
      ]
    },
    {
      id: 9,
      icon: '🎨',
      title: 'Respect for Creativity and Originality',
      color: 'pink',
      description: 'We never copy. We create. All content, designs, and systems produced by SinarAI System are original, tailored, and ethically generated.',
      principles: [
        'Original content, never copied',
        'Tailored solutions for each client',
        'Ethically generated work at all times'
      ]
    },
    {
      id: 10,
      icon: '🤝',
      title: 'Collaboration Over Automation',
      color: 'teal',
      description: 'Automation enhances human strengths — it doesn\'t erase them. We work side-by-side with clients, making AI a partner in success rather than a replacement for connection, insight, and judgment.',
      principles: [
        'Automation enhances, never replaces humans',
        'Side-by-side collaboration with clients',
        'AI as partner, not replacement'
      ]
    }
  ]

  // Color theme mapping
  const colorThemes = {
    blue: { from: 'from-blue-500/20', to: 'to-cyan-500/20', border: 'border-blue-500/30', icon: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-blue-500/10' },
    cyan: { from: 'from-cyan-500/20', to: 'to-teal-500/20', border: 'border-cyan-500/30', icon: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-cyan-500/10' },
    purple: { from: 'from-purple-500/20', to: 'to-pink-500/20', border: 'border-purple-500/30', icon: 'bg-purple-500/10', text: 'text-purple-400', glow: 'shadow-purple-500/10' },
    green: { from: 'from-green-500/20', to: 'to-emerald-500/20', border: 'border-green-500/30', icon: 'bg-green-500/10', text: 'text-green-400', glow: 'shadow-green-500/10' },
    red: { from: 'from-red-500/20', to: 'to-orange-500/20', border: 'border-red-500/30', icon: 'bg-red-500/10', text: 'text-red-400', glow: 'shadow-red-500/10' },
    orange: { from: 'from-orange-500/20', to: 'to-yellow-500/20', border: 'border-orange-500/30', icon: 'bg-orange-500/10', text: 'text-orange-400', glow: 'shadow-orange-500/10' },
    yellow: { from: 'from-yellow-500/20', to: 'to-amber-500/20', border: 'border-yellow-500/30', icon: 'bg-yellow-500/10', text: 'text-yellow-400', glow: 'shadow-yellow-500/10' },
    indigo: { from: 'from-indigo-500/20', to: 'to-purple-500/20', border: 'border-indigo-500/30', icon: 'bg-indigo-500/10', text: 'text-indigo-400', glow: 'shadow-indigo-500/10' },
    pink: { from: 'from-pink-500/20', to: 'to-rose-500/20', border: 'border-pink-500/30', icon: 'bg-pink-500/10', text: 'text-pink-400', glow: 'shadow-pink-500/10' },
    teal: { from: 'from-teal-500/20', to: 'to-cyan-500/20', border: 'border-teal-500/30', icon: 'bg-teal-500/10', text: 'text-teal-400', glow: 'shadow-teal-500/10' }
  }

  return (
    <div className="min-h-screen pt-20">
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
              <span className="text-2xl">⚖️</span>
              <span className="text-sm text-sinar-gold font-semibold tracking-wide">OUR PRINCIPLES</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Values &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
                Ethics
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              The principles that guide every decision, every project, and every line of code. 
              At SinarAI System, ethics are not optional—they are <span className="text-sinar-gold font-semibold">essential</span>.
            </p>

            {/* Stats/Features */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">10</div>
                <div className="text-sm text-gray-400">Core Values</div>
              </div>
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">100%</div>
                <div className="text-sm text-gray-400">Transparent</div>
              </div>
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">Non-Negotiable</div>
                <div className="text-sm text-gray-400">Principles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Statement - Enhanced */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-xl border border-sinar-gold/20 rounded-2xl p-10 lg:p-16 shadow-xl shadow-sinar-gold/5">
            {/* Decorative quote mark */}
            <div className="absolute top-8 left-8 text-7xl text-sinar-gold/20 font-serif">"</div>
            
            <p className="relative text-xl md:text-2xl text-gray-200 leading-relaxed text-center italic">
              We believe AI should <span className="text-sinar-gold font-semibold">empower people</span>, not replace them. 
              Technology should be used responsibly, transparently, and ethically. 
              These are the values that define SinarAI System—and they are{' '}
              <span className="text-sinar-gold font-semibold">non-negotiable</span>.
            </p>
            
            {/* Decorative closing quote mark */}
            <div className="absolute bottom-8 right-8 text-7xl text-sinar-gold/20 font-serif">"</div>
          </div>
        </div>
      </section>

      {/* Values Grid - Enhanced with Colors */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold to-yellow-300">10 Core Values</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Each principle represents our unwavering commitment to ethical AI and human-centered technology
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const colorMap = {
                blue: { gradient: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', icon: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-blue-500/10' },
                cyan: { gradient: 'from-cyan-500/20 to-teal-500/20', border: 'border-cyan-500/30', icon: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-cyan-500/10' },
                purple: { gradient: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30', icon: 'bg-purple-500/10', text: 'text-purple-400', glow: 'shadow-purple-500/10' },
                green: { gradient: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', icon: 'bg-green-500/10', text: 'text-green-400', glow: 'shadow-green-500/10' },
                red: { gradient: 'from-red-500/20 to-orange-500/20', border: 'border-red-500/30', icon: 'bg-red-500/10', text: 'text-red-400', glow: 'shadow-red-500/10' },
                orange: { gradient: 'from-orange-500/20 to-yellow-500/20', border: 'border-orange-500/30', icon: 'bg-orange-500/10', text: 'text-orange-400', glow: 'shadow-orange-500/10' },
                yellow: { gradient: 'from-yellow-500/20 to-amber-500/20', border: 'border-yellow-500/30', icon: 'bg-yellow-500/10', text: 'text-yellow-400', glow: 'shadow-yellow-500/10' },
                indigo: { gradient: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/30', icon: 'bg-indigo-500/10', text: 'text-indigo-400', glow: 'shadow-indigo-500/10' },
                pink: { gradient: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', icon: 'bg-pink-500/10', text: 'text-pink-400', glow: 'shadow-pink-500/10' },
                teal: { gradient: 'from-teal-500/20 to-cyan-500/20', border: 'border-teal-500/30', icon: 'bg-teal-500/10', text: 'text-teal-400', glow: 'shadow-teal-500/10' }
              }
              
              const theme = colorMap[value.color] || colorMap.blue
              
              return (
                <div
                  key={value.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Card */}
                  <div className={`relative bg-sinar-dark-light/80 backdrop-blur-sm border ${theme.border} rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-opacity-70 shadow-lg ${theme.glow} hover:shadow-xl group-hover:-translate-y-1`}>
                    {/* Icon Badge */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${theme.icon} rounded-xl mb-6 text-3xl shadow-md`}>
                      {value.icon}
                    </div>
                    
                    {/* Number Badge */}
                    <div className={`absolute top-6 right-6 w-8 h-8 ${theme.icon} ${theme.text} rounded-full flex items-center justify-center text-sm font-bold border ${theme.border}`}>
                      {value.id}
                    </div>
                    
                    {/* Title */}
                    <h3 className={`text-2xl font-display font-bold mb-4 ${theme.text}`}>
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {value.description}
                    </p>
                    
                    {/* Divider */}
                    <div className={`h-px bg-gradient-to-r ${theme.gradient} mb-6`}></div>
                    
                    {/* Principles */}
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Key Principles</p>
                      <ul className="space-y-2.5">
                        {value.principles.map((principle, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className={`${theme.text} text-lg flex-shrink-0 mt-0.5`}>✓</span>
                            <span className="text-sm text-gray-400 leading-snug">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Summary Statement - Enhanced */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-sinar-gold/5 via-transparent to-purple-500/5"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6 animate-float">✨</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold to-yellow-300">Promise</span> to You
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-sinar-gold/30 rounded-2xl p-10 shadow-xl shadow-sinar-gold/5">
            {/* Statement */}
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl font-display font-semibold text-sinar-gold mb-4">
                Be honest. Be responsible. Protect people. Deliver excellence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe AI can make the world more creative, efficient, and humane — when built on strong ethics.
              </p>
            </div>
            
            {/* Commitment List */}
            <div className="border-t border-sinar-gold/20 pt-8">
              <p className="text-gray-400 text-center mb-6">
                When you work with SinarAI System, you partner with people who care about doing things right:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '🎯', text: 'Treat your project with the same care we give our own' },
                  { icon: '🤖', text: 'Use AI responsibly with human oversight at every stage' },
                  { icon: '💬', text: 'Communicate openly and honestly, always' },
                  { icon: '✨', text: 'Deliver work that is ethical, original, and aligned with your values' },
                  { icon: '🛡️', text: 'Never compromise on quality, integrity, or trust' },
                  { icon: '🚀', text: 'Continuously improve and evolve with technology' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-sinar-dark/50 rounded-lg border border-sinar-gold/10">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
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
          <div className="text-7xl mb-8 animate-float">🤝</div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Work with a Team You Can{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
              Trust
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience AI-driven efficiency without sacrificing ethics or quality. 
            Let us show you the difference that values-driven technology makes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark text-lg font-bold rounded-xl shadow-lg shadow-sinar-gold/15 hover:shadow-xl hover:shadow-sinar-gold/25 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Start Your Project</span>
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
              { icon: '🔒', label: '100% Confidential' },
              { icon: '⚖️', label: 'Ethically Built' },
              { icon: '✨', label: 'Human-Centered' },
              { icon: '🛡️', label: 'Trusted by Clients' }
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
      `}</style>
    </div>
  )
}
