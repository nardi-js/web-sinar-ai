import { useState } from 'react';

export default function CaseStudyPage() {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 'ecommerce-automation',
      title: 'E-Commerce Automation System',
      client: 'Online Retail Store',
      category: 'Automation & Integration',
      timeline: '3 weeks',
      image: '🛒',
      industry: 'E-Commerce',
      clientType: 'Small Business',
      projectGoal: 'Automate order processing and inventory management',
      problemPoints: [
        'Manual order processing causing delays',
        'No real-time inventory tracking',
        'Customer inquiries taking too long to respond',
        'Lack of sales analytics and reporting',
      ],
      problem:
        'The client struggled with manual order processing, inventory tracking, and customer service. They needed an automated system to streamline operations and improve efficiency.',
      process: [
        '📊 AI Researcher analyzed business requirements and existing workflow',
        '🏗️ AI Developer designed database schema and system architecture',
        '💻 AI Developer built automation scripts and integration APIs',
        '🎨 AI Designer created admin dashboard interface',
        '🔍 AI Tester validated functionality and edge cases',
        '👥 Human Founder reviewed system and provided final refinements',
        '✅ Deployment, training, and client handover',
      ],
      tools: ['Python', 'Node.js', 'React', 'Firebase', 'Stripe API', 'SendGrid'],
      results: [
        'Order processing time reduced by 75%',
        'Real-time inventory tracking implemented',
        'Automated customer email notifications',
        'Sales dashboard with analytics and insights',
        'Client reported 40% increase in operational efficiency',
      ],
      testimonial: {
        text: 'SinarAI transformed our operations. What used to take hours now happens automatically. Highly recommended!',
        author: 'Sarah Johnson',
        position: 'Store Owner',
      },
    },
    {
      id: 'startup-branding',
      title: 'Complete Brand Identity Package',
      client: 'Tech Startup',
      category: 'Branding & Design',
      timeline: '2 weeks',
      image: '🎨',
      industry: 'Technology',
      clientType: 'Startup',
      projectGoal: 'Create professional brand identity from scratch',
      problemPoints: [
        'No consistent brand visual identity',
        'Needed logo, color palette, and typography',
        'Required marketing materials and templates',
        'Tight budget and timeline constraints',
      ],
      problem:
        'A newly launched startup needed a complete brand identity but had limited time and budget. They required a professional look that reflected their innovative tech solutions.',
      process: [
        '📊 AI Researcher conducted competitor analysis and market trends',
        '🎨 AI Designer generated multiple logo concepts using Midjourney',
        '🎨 AI Designer created brand guidelines (colors, fonts, styles)',
        '✍️ AI Writer crafted brand messaging and taglines',
        '🎨 AI Designer designed business cards, letterheads, social templates',
        '👥 Human Founder reviewed and refined all deliverables',
        '✅ Final package delivery with usage guidelines',
      ],
      tools: ['Midjourney', 'Figma', 'Adobe Illustrator', 'ChatGPT', 'Canva'],
      results: [
        'Professional logo and brand identity created',
        'Complete brand guidelines document delivered',
        'Marketing templates for social media and print',
        '30+ design assets ready to use',
        'Client launched with strong visual presence',
      ],
      testimonial: {
        text: 'The branding package exceeded our expectations. Professional quality delivered fast. Our investors loved it!',
        author: 'Michael Chen',
        position: 'Startup Founder',
      },
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing Campaign',
      client: 'Digital Marketing Agency',
      category: 'Content Creation',
      timeline: '4 weeks',
      image: '📝',
      industry: 'Marketing',
      clientType: 'Agency',
      projectGoal: 'Generate 30 days of engaging social media content',
      problemPoints: [
        'Content creation bottleneck slowing campaigns',
        'Inconsistent posting schedule',
        'Need for diverse content types (blogs, posts, videos)',
        'SEO optimization requirements',
      ],
      problem:
        'The agency needed to produce high-volume, high-quality content for multiple clients but lacked the resources. They needed a scalable content production system.',
      process: [
        '📊 AI Researcher identified trending topics and keywords',
        '✍️ AI Writer generated 30 blog post drafts',
        '✍️ AI Writer created 90 social media captions',
        '🎨 AI Designer produced graphics for each post',
        '📊 AI Researcher optimized content for SEO',
        '👥 Human Founder reviewed and edited final content',
        '✅ Content calendar delivered with scheduling recommendations',
      ],
      tools: ['ChatGPT', 'Claude', 'Jasper AI', 'Canva', 'SEMrush', 'Buffer'],
      results: [
        '30 blog posts (15,000+ words total)',
        '90 social media posts with graphics',
        'All content SEO-optimized',
        'Content calendar with posting schedule',
        'Client reported 60% time savings',
      ],
      testimonial: {
        text: 'SinarAI became our content production powerhouse. Quality stayed high, and we could focus on strategy.',
        author: 'Amanda Lee',
        position: 'Agency Director',
      },
    },
  ];

  const currentCase = caseStudies[selectedCase];
  const relatedCases = caseStudies
    .filter((_, index) => index !== selectedCase)
    .slice(0, 2);

  const heroStats = [
    { icon: '📈', label: 'Success Rate', value: '98%', color: 'from-green-500/20 to-green-600/10' },
    { icon: '⚡', label: 'Avg. Timeline', value: '3 weeks', color: 'from-sinar-gold/20 to-yellow-600/10' },
    { icon: '⭐', label: 'Client Rating', value: '4.9/5', color: 'from-purple-500/20 to-purple-600/10' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-sinar-dark via-sinar-dark to-sinar-dark-light">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark via-sinar-dark-light to-sinar-dark"></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-sinar-gold/30 via-sinar-gold/15 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/20 via-sinar-gold-light/15 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sinar-gold/10 rounded-full blur-3xl opacity-50"></div>
          
          {/* Animated Grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255,215,138,0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(255,215,138,0.2) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              animation: 'gridMove 20s linear infinite',
            }}
          ></div>

          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-sinar-dark/20 to-sinar-dark/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sinar-gold/15 via-sinar-gold/10 to-transparent border border-sinar-gold/30 rounded-full backdrop-blur-sm">
                <span className="text-sinar-gold text-lg">✦</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-sinar-gold-light">
                  Success Stories
                </span>
                <span className="text-sinar-gold text-lg">✦</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1]">
                  Real Projects.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
                    Real Results.
                  </span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-sinar-gold to-transparent rounded-full lg:mx-0 mx-auto"></div>
              </div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl lg:mx-0 mx-auto">
                See how our AI-powered teams transform complex business challenges
                into measurable success stories—combining automation, design
                excellence, and strategic human oversight.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center pt-4">
                <a
                  href="#case-study-selector"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-bold rounded-xl shadow-lg shadow-sinar-gold/10 hover:shadow-xl hover:shadow-sinar-gold/20 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Explore Case Studies</span>
                  <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sinar-dark-light/80 backdrop-blur-sm border border-sinar-gold/30 text-white font-semibold rounded-xl hover:bg-sinar-dark-light hover:border-sinar-gold/50 transition-all duration-300"
                >
                  Start Your Project
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pt-4 lg:justify-start justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sinar-gold font-bold">3+</span>
                  <span>Industries Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sinar-gold font-bold">100%</span>
                  <span>Client Success</span>
                </div>
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="relative lg:block hidden">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-sinar-gold/20 via-purple-500/10 to-sinar-gold/20 blur-3xl opacity-50 rounded-full"></div>
              
              <div className="relative space-y-5">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`group relative bg-gradient-to-br ${stat.color} backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/10 transition-all duration-500 hover:scale-105 hover:border-sinar-gold/40 ${
                      index === 1 ? 'ml-12' : index === 2 ? 'ml-6' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {/* Background Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative flex items-center gap-5">
                      <div className="text-5xl">{stat.icon}</div>
                      <div className="flex-1">
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1">
                          {stat.label}
                        </p>
                        <p className="text-4xl font-display font-bold text-white">
                          {stat.value}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-sinar-gold/20 transition-colors duration-300">
                        <span className="text-sinar-gold text-xl">✓</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-sinar-gold/20 rounded-full animate-spin-slow"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-purple-500/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Selector */}
      <section id="case-study-selector" className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Browse Our <span className="text-sinar-gold">Portfolio</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select a case study to explore the challenge, our process, and the measurable impact we delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setSelectedCase(index)}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-500 text-left overflow-hidden ${
                  selectedCase === index
                    ? 'bg-gradient-to-br from-sinar-gold/20 via-sinar-gold/10 to-transparent border-sinar-gold shadow-2xl shadow-sinar-gold/30 scale-105'
                    : 'bg-sinar-dark-light/40 border-gray-700/50 hover:border-sinar-gold/50 hover:bg-sinar-dark-light/60'
                }`}
              >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-sinar-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  selectedCase === index ? 'opacity-100' : ''
                }`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`text-6xl mb-6 transition-transform duration-500 ${
                    selectedCase === index ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    {study.image}
                  </div>

                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 bg-sinar-gold/20 border border-sinar-gold/30 rounded-full mb-4">
                    <span className="text-xs font-semibold text-sinar-gold-light uppercase tracking-wider">
                      {study.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    selectedCase === index ? 'text-sinar-gold' : 'text-white group-hover:text-sinar-gold-light'
                  }`}>
                    {study.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <span>📅</span>
                      <span>{study.timeline}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🏢</span>
                      <span>{study.clientType}</span>
                    </div>
                  </div>

                  {/* Action Indicator */}
                  <div className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    selectedCase === index ? 'text-sinar-gold' : 'text-gray-500 group-hover:text-sinar-gold-light'
                  }`}>
                    <span>{selectedCase === index ? 'Currently Viewing' : 'View Details'}</span>
                    <span className={`transition-transform duration-300 ${
                      selectedCase === index ? '' : 'group-hover:translate-x-1'
                    }`}>
                      {selectedCase === index ? '✓' : '→'}
                    </span>
                  </div>
                </div>

                {/* Selected Indicator */}
                {selectedCase === index && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-sinar-gold rounded-full flex items-center justify-center shadow-md shadow-sinar-gold/20">
                    <span className="text-sinar-dark text-lg font-bold">✓</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>      {/* Case Study Detail */}
      <section className="py-20 px-4 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-40 w-96 h-96 bg-sinar-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            key={selectedCase}
            className="transition-all duration-500 opacity-100 space-y-12 animate-fadeIn"
          >
            {/* Enhanced Header */}
            <div className="text-center mb-16 space-y-6">
              {/* Large Icon with Glow */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-sinar-gold/20 blur-3xl rounded-full scale-150"></div>
                <div className="relative text-9xl mb-6 animate-float">
                  {currentCase.image}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight max-w-4xl mx-auto">
                {currentCase.title}
              </h2>

              {/* Meta Info Cards */}
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mt-8">
                <div className="flex items-center gap-3 px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                  <span className="text-2xl">👤</span>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Client</p>
                    <p className="text-sinar-gold-light font-bold">{currentCase.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                  <span className="text-2xl">📂</span>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Category</p>
                    <p className="text-sinar-gold-light font-bold">{currentCase.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                  <span className="text-2xl">⏱️</span>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Timeline</p>
                    <p className="text-sinar-gold-light font-bold">{currentCase.timeline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Profile - Enhanced */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sinar-gold/20 via-purple-500/10 to-sinar-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-sinar-gold/20 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-sinar-gold/30 to-sinar-gold/10 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    👤
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold to-sinar-gold-light">
                      Client Profile
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">Who we worked with</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="group/item p-6 bg-sinar-dark/40 border border-sinar-gold/10 rounded-2xl hover:border-sinar-gold/30 transition-all duration-300">
                    <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3 font-bold">
                      Industry
                    </p>
                    <p className="text-xl text-gray-100 font-semibold">
                      {currentCase.industry}
                    </p>
                  </div>
                  <div className="group/item p-6 bg-sinar-dark/40 border border-sinar-gold/10 rounded-2xl hover:border-sinar-gold/30 transition-all duration-300">
                    <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3 font-bold">
                      Client Type
                    </p>
                    <p className="text-xl text-gray-100 font-semibold">
                      {currentCase.clientType}
                    </p>
                  </div>
                  <div className="group/item p-6 bg-sinar-dark/40 border border-sinar-gold/10 rounded-2xl hover:border-sinar-gold/30 transition-all duration-300">
                    <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3 font-bold">
                      Project Goal
                    </p>
                    <p className="text-xl text-gray-100 font-semibold">
                      {currentCase.projectGoal}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Problem - Enhanced */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-orange-500/10 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-red-950/30 via-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500/30 to-red-600/10 rounded-2xl flex items-center justify-center text-3xl shadow-md shadow-red-500/10">
                    ⚠️
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
                      The Problem
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">Challenges we solved</p>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">
                  {currentCase.problem}
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 uppercase tracking-[0.2em] font-bold mb-4">
                    Key Challenges:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentCase.problemPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-500/10 rounded-xl hover:border-red-500/30 transition-all duration-300">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-lg flex items-center justify-center mt-0.5">
                          <span className="text-red-400 text-sm font-bold">✗</span>
                        </div>
                        <span className="text-gray-300 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Our Process - Enhanced Timeline */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-sinar-gold/10 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-sinar-gold/20 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-purple-500/10 rounded-2xl flex items-center justify-center text-3xl shadow-md shadow-blue-500/10">
                    ⚙️
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Our Process
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">Step-by-step workflow</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {currentCase.process?.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 group/step">
                      <div className="flex-shrink-0 relative">
                        {/* Step Number */}
                        <div className="w-12 h-12 bg-gradient-to-br from-sinar-gold/30 to-sinar-gold/10 border border-sinar-gold/30 text-sinar-gold rounded-xl flex items-center justify-center text-lg font-bold shadow-md shadow-sinar-gold/5 group-hover/step:scale-110 group-hover/step:shadow-lg group-hover/step:shadow-sinar-gold/10 transition-all duration-300">
                          {index + 1}
                        </div>
                        {/* Connector Line */}
                        {index < currentCase.process.length - 1 && (
                          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-sinar-gold/30 to-transparent"></div>
                        )}
                      </div>
                      <div className="flex-1 pt-2 pb-6">
                        <div className="p-5 bg-sinar-dark/40 border border-sinar-gold/10 rounded-xl group-hover/step:border-sinar-gold/30 group-hover/step:bg-sinar-dark/60 transition-all duration-300">
                          <p className="text-gray-100 leading-relaxed font-medium text-lg">
                            {step}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Used - Enhanced Grid */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sinar-gold/20 via-cyan-500/10 to-sinar-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-sinar-gold/20 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-sinar-gold/30 to-sinar-gold/10 rounded-2xl flex items-center justify-center text-3xl shadow-md shadow-sinar-gold/10">
                    🛠️
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      Tools & Technologies
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">Our tech stack</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentCase.tools?.map((tool, index) => (
                    <div
                      key={index}
                      className="group/tool relative px-5 py-4 bg-gradient-to-br from-sinar-gold/10 to-cyan-500/5 border border-sinar-gold/20 rounded-xl text-center font-semibold text-sinar-gold-light hover:bg-gradient-to-br hover:from-sinar-gold/20 hover:to-cyan-500/10 hover:border-sinar-gold/40 hover:scale-105 hover:shadow-md hover:shadow-sinar-gold/10 transition-all duration-300"
                    >
                      <span className="relative z-10">{tool}</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover/tool:opacity-100 rounded-xl transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results - Enhanced Impact Display */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-green-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-green-950/30 via-emerald-950/20 to-sinar-dark/90 backdrop-blur-xl border-2 border-green-500/30 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500/40 to-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-md shadow-green-500/10">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                      The Results
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">Measurable impact delivered</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {currentCase.results?.map((result, index) => (
                    <div key={index} className="group/result flex items-start gap-4 p-5 bg-green-950/20 border border-green-500/20 rounded-xl hover:border-green-500/40 hover:bg-green-950/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500/30 to-emerald-500/10 rounded-xl flex items-center justify-center group-hover/result:scale-110 group-hover/result:shadow-md group-hover/result:shadow-green-500/10 transition-all duration-300">
                        <span className="text-green-400 text-xl font-bold">✓</span>
                      </div>
                      <p className="text-gray-100 leading-relaxed font-medium pt-2 text-lg">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Client Testimonial - Enhanced */}
            {currentCase.testimonial && (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-purple-950/30 via-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/30 to-pink-500/10 rounded-2xl flex items-center justify-center text-3xl shadow-md shadow-purple-500/10">
                      💬
                    </div>
                    <div>
                      <h3 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Client Testimonial
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">What our client says</p>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Quote Mark */}
                    <div className="absolute -top-6 -left-4 text-sinar-gold/20 text-8xl font-serif leading-none">
                      "
                    </div>
                    {/* Testimonial Text */}
                    <div className="relative pl-8">
                      <p className="text-gray-100 text-xl md:text-2xl leading-relaxed italic mb-8 font-light">
                        {currentCase.testimonial.text}
                      </p>
                      {/* Author Info */}
                      <div className="flex items-center gap-5 pl-6 border-l-4 border-sinar-gold/40">
                        <div className="w-16 h-16 bg-gradient-to-br from-sinar-gold/30 to-purple-500/10 rounded-full flex items-center justify-center text-2xl shadow-md shadow-sinar-gold/10">
                          👤
                        </div>
                        <div>
                          <p className="text-white text-lg font-bold mb-1">
                            {currentCase.testimonial.author}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {currentCase.testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Related Case Studies - Enhanced */}
            {relatedCases.length > 0 && (
              <div className="pt-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                    More <span className="text-sinar-gold">Success Stories</span>
                  </h3>
                  <p className="text-gray-400">Explore similar projects we've delivered</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedCases.map((relatedCase, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setSelectedCase(
                          caseStudies.findIndex(
                            (cs) => cs.id === relatedCase.id
                          )
                        )
                      }
                      className="group relative bg-gradient-to-br from-sinar-dark-light/60 to-sinar-dark/60 backdrop-blur-sm border border-sinar-gold/20 rounded-2xl p-8 text-left hover:border-sinar-gold/50 hover:shadow-xl hover:shadow-sinar-gold/10 hover:scale-105 transition-all duration-500 overflow-hidden"
                    >
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-sinar-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          {relatedCase.image}
                        </div>
                        {/* Category Badge */}
                        <div className="inline-block px-3 py-1 bg-sinar-gold/20 border border-sinar-gold/30 rounded-full mb-4">
                          <span className="text-xs font-semibold text-sinar-gold-light uppercase tracking-wider">
                            {relatedCase.category}
                          </span>
                        </div>
                        {/* Title */}
                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-sinar-gold transition-colors duration-300">
                          {relatedCase.title}
                        </h4>
                        {/* Meta */}
                        <p className="text-gray-400 text-sm mb-5">
                          {relatedCase.client} • {relatedCase.timeline}
                        </p>
                        {/* CTA */}
                        <div className="flex items-center text-sinar-gold-light text-sm font-semibold">
                          <span>View Case Study</span>
                          <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                            →
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark via-sinar-dark-light to-sinar-dark"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sinar-gold/10 blur-3xl rounded-full"></div>
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255,215,138,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(255,215,138,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Icon */}
          <div className="text-7xl mb-8 animate-float">🚀</div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Ready to Write Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
              Success Story?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join our growing list of satisfied clients. Let our AI-powered team
            transform your challenges into measurable results—fast, efficient, and
            cost-effective.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
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
              href="/ai-chat"
              className="inline-flex items-center justify-center px-10 py-5 bg-sinar-dark-light/80 backdrop-blur-sm border-2 border-sinar-gold/30 text-white text-lg font-semibold rounded-xl hover:bg-sinar-dark-light hover:border-sinar-gold/50 transition-all duration-300"
            >
              Chat with AI Assistant
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-sinar-gold text-xl">✓</span>
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sinar-gold text-xl">✓</span>
              <span>Fast turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sinar-gold text-xl">✓</span>
              <span>AI + Human quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Styles for animations */}
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

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}