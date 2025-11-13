export default function FoundersPage() {
  const founders = [
    {
      name: 'Nardi',
      role: 'Co-Founder & Strategic Director',
      icon: '👨‍💼',
      image: '🎯',
      bio: 'Visionary entrepreneur with deep expertise in business strategy, operations, and AI integration. Nardi architected the SinarAI System framework, blending cutting-edge AI automation with human oversight to deliver scalable, ethical, and high-quality solutions for clients worldwide.',
      values: ['Strategic Thinking', 'Innovation', 'Scalability', 'Efficiency'],
      expertise: [
        'Business Strategy & Operations',
        'AI System Architecture',
        'Process Automation',
        'Client Relations',
      ],
      quote: 'AI should multiply human potential, not replace it.',
      color: 'from-blue-500/20 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      iconBg: 'from-blue-500/30 to-cyan-500/10',
    },
    {
      name: 'Xapaynya',
      role: 'Co-Founder & Creative Director',
      icon: '👩‍💻',
      image: '✨',
      bio: 'Creative technologist and design strategist with a passion for building beautiful, functional, and user-centric digital experiences. Xapaynya leads the design philosophy at SinarAI, ensuring every project balances aesthetics, usability, and innovation—all powered by intelligent AI workflows.',
      values: ['Creativity', 'Quality', 'User Experience', 'Ethics'],
      expertise: [
        'UX/UI Design Strategy',
        'Brand & Visual Identity',
        'Creative Direction',
        'Quality Assurance',
      ],
      quote: 'Great design is invisible. Great AI amplifies it.',
      color: 'from-purple-500/20 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      iconBg: 'from-purple-500/30 to-pink-500/10',
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-sinar-dark via-sinar-dark to-sinar-dark-light">
      {/* Hero Section - Enhanced */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark via-sinar-dark-light/40 to-sinar-dark"></div>
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-sinar-gold/20 blur-3xl rounded-full animate-float"></div>
          <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-purple-500/15 blur-3xl rounded-full animate-float-delayed"></div>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255,215,138,0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(255,215,138,0.2) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              animation: 'gridMove 20s linear infinite',
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sinar-gold/15 via-sinar-gold/10 to-transparent border border-sinar-gold/30 rounded-full backdrop-blur-sm">
              <span className="text-sinar-gold text-lg">👥</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-sinar-gold-light">
                Leadership
              </span>
              <span className="text-sinar-gold text-lg">👥</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1]">
                Meet the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
                  Founders
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-sinar-gold to-transparent rounded-full mx-auto"></div>
            </div>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              The human minds guiding the AI revolution at SinarAI System. Two
              visionaries united by a shared belief: technology should empower, not
              replace.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-sinar-gold font-bold text-2xl">2</span>
                <span className="text-gray-400">Co-Founders</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sinar-gold font-bold text-2xl">100%</span>
                <span className="text-gray-400">Human Oversight</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Always Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Grid - Enhanced */}
      <section className="relative py-20 px-4">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className="group relative"
                style={{
                  animation: 'fadeIn 0.6s ease-out',
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both',
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${founder.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`}></div>
                
                {/* Card */}
                <div className={`relative bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border-2 ${founder.borderColor} p-8 md:p-10 rounded-3xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 h-full flex flex-col`}>
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Icon/Avatar */}
                    <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${founder.iconBg} rounded-2xl flex items-center justify-center text-5xl shadow-md shadow-black/10`}>
                      {founder.icon}
                    </div>
                    
                    {/* Name & Role */}
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:text-sinar-gold-light transition-colors duration-300">
                        {founder.name}
                      </h2>
                      <p className="text-sinar-gold-light text-sm uppercase tracking-[0.2em] font-semibold">
                        {founder.role}
                      </p>
                    </div>

                    {/* Decorative Icon */}
                    <div className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      {founder.image}
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {founder.bio}
                  </p>
                  
                  {/* Expertise */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                      Expertise:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {founder.expertise.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <span className="text-sinar-gold">✓</span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Values */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                      Core Values:
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {founder.values.map((value) => (
                        <span
                          key={value}
                          className="px-4 py-2 bg-gradient-to-br from-sinar-gold/15 to-sinar-gold/5 border border-sinar-gold/30 text-sinar-gold-light text-sm font-semibold rounded-xl hover:bg-gradient-to-br hover:from-sinar-gold/25 hover:to-sinar-gold/10 transition-all duration-300"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-auto pt-6 border-t border-sinar-gold/20">
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-sinar-gold/20 text-4xl font-serif">
                        "
                      </div>
                      <p className="text-gray-200 italic pl-6 leading-relaxed">
                        {founder.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Enhanced */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark-light via-sinar-dark to-sinar-dark"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sinar-gold/5 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full mb-6">
              <span className="text-sinar-gold text-xl">💡</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-sinar-gold-light">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Shared <span className="text-sinar-gold">Vision</span>
            </h2>
          </div>

          {/* Quote Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sinar-gold/20 via-purple-500/10 to-sinar-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border-2 border-sinar-gold/30 p-10 md:p-12 rounded-3xl shadow-xl shadow-black/5">
              {/* Large Quote Mark */}
              <div className="absolute -top-6 left-8 text-sinar-gold/20 text-9xl font-serif leading-none">
                "
              </div>
              
              {/* Quote Text */}
              <blockquote className="relative text-2xl md:text-3xl text-gray-100 italic leading-relaxed mb-8 pl-8">
                We built SinarAI System not to replace human creativity, but to amplify
                it. Our AI workforce handles repetitive tasks, while we focus on what
                humans do best: think deeply, create meaningfully, and connect
                authentically.
              </blockquote>
              
              {/* Attribution */}
              <div className="flex items-center justify-end gap-4 pl-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-sinar-gold/30"></div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">✍️</div>
                  <div className="text-right">
                    <p className="text-sinar-gold-light text-xl font-bold">
                      Nardi & Xapaynya
                    </p>
                    <p className="text-gray-400 text-sm">Co-Founders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started - Enhanced */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Why We <span className="text-sinar-gold">Started</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The story behind SinarAI System—a response to reckless AI adoption
            </p>
          </div>
          
          {/* Story Cards */}
          <div className="space-y-6">
            <div className="group relative bg-gradient-to-br from-red-950/20 via-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-red-500/20 p-8 md:p-10 rounded-2xl hover:border-red-500/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  ⚠️
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
                    The Problem We Saw
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                AI was being used recklessly. Companies were cutting costs by replacing
                humans entirely, producing low-quality work at scale. The promise of AI
                was being betrayed by greed and short-term thinking.
              </p>
            </div>
            
            <div className="group relative bg-gradient-to-br from-sinar-dark-light/90 via-gray-900/90 to-sinar-dark/90 backdrop-blur-xl border border-sinar-gold/20 p-8 md:p-10 rounded-2xl hover:border-sinar-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sinar-gold/20 to-yellow-400/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  💡
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold to-yellow-400 mb-2">
                    Our Different Belief
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                SinarAI System was born from a different belief. We knew AI could be
                powerful, but only when guided by human wisdom. So we built a system
                where AI employees handle the grunt work, while human founders provide
                strategy, ethics, and quality control.
              </p>
            </div>
            
            <div className="group relative bg-gradient-to-br from-green-950/20 via-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-green-500/20 p-8 md:p-10 rounded-2xl hover:border-green-500/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  🏆
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                    The Result
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Projects that are faster, more efficient, and more affordable than
                traditional agencies—without sacrificing quality, honesty, or humanity.
                This is the future we believe in.
              </p>
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
            Work with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
              Humans & AI
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect balance of AI efficiency and human expertise. Let us
            show you what's possible when innovation meets integrity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark text-lg font-bold rounded-xl shadow-lg shadow-sinar-gold/15 hover:shadow-xl hover:shadow-sinar-gold/25 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Start a Conversation</span>
              <span className="ml-3 text-2xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center px-10 py-5 bg-sinar-dark-light/80 backdrop-blur-sm border-2 border-sinar-gold/30 text-white text-lg font-semibold rounded-xl hover:bg-sinar-dark-light hover:border-sinar-gold/50 transition-all duration-300"
            >
              View Our Work
            </a>
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
