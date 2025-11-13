import { useState } from 'react'

export default function CaseStudyPage() {
  const [selectedCase, setSelectedCase] = useState(0)

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
        'Lack of sales analytics and reporting'
      ],
      problem: 'The client struggled with manual order processing, inventory tracking, and customer service. They needed an automated system to streamline operations and improve efficiency.',
      process: [
        '📊 AI Researcher analyzed business requirements and existing workflow',
        '🏗️ AI Developer designed database schema and system architecture',
        '💻 AI Developer built automation scripts and integration APIs',
        '🎨 AI Designer created admin dashboard interface',
        '🔍 AI Tester validated functionality and edge cases',
        '👥 Human Founder reviewed system and provided final refinements',
        '✅ Deployment, training, and client handover'
      ],
      tools: ['Python', 'Node.js', 'React', 'Firebase', 'Stripe API', 'SendGrid'],
      results: [
        'Order processing time reduced by 75%',
        'Real-time inventory tracking implemented',
        'Automated customer email notifications',
        'Sales dashboard with analytics and insights',
        'Client reported 40% increase in operational efficiency'
      ],
      testimonial: {
        text: 'SinarAI transformed our operations. What used to take hours now happens automatically. Highly recommended!',
        author: 'Sarah Johnson',
        position: 'Store Owner'
      }
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
        'Tight budget and timeline constraints'
      ],
      problem: 'A newly launched startup needed a complete brand identity but had limited time and budget. They required a professional look that reflected their innovative tech solutions.',
      process: [
        '📊 AI Researcher conducted competitor analysis and market trends',
        '🎨 AI Designer generated multiple logo concepts using Midjourney',
        '🎨 AI Designer created brand guidelines (colors, fonts, styles)',
        '✍️ AI Writer crafted brand messaging and taglines',
        '🎨 AI Designer designed business cards, letterheads, social templates',
        '👥 Human Founder reviewed and refined all deliverables',
        '✅ Final package delivery with usage guidelines'
      ],
      tools: ['Midjourney', 'Figma', 'Adobe Illustrator', 'ChatGPT', 'Canva'],
      results: [
        'Professional logo and brand identity created',
        'Complete brand guidelines document delivered',
        'Marketing templates for social media and print',
        '30+ design assets ready to use',
        'Client launched with strong visual presence'
      ],
      testimonial: {
        text: 'The branding package exceeded our expectations. Professional quality delivered fast. Our investors loved it!',
        author: 'Michael Chen',
        position: 'Startup Founder'
      }
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
        'SEO optimization requirements'
      ],
      problem: 'The agency needed to produce high-volume, high-quality content for multiple clients but lacked the resources. They needed a scalable content production system.',
      process: [
        '📊 AI Researcher identified trending topics and keywords',
        '✍️ AI Writer generated 30 blog post drafts',
        '✍️ AI Writer created 90 social media captions',
        '🎨 AI Designer produced graphics for each post',
        '📊 AI Researcher optimized content for SEO',
        '👥 Human Founder reviewed and edited final content',
        '✅ Content calendar delivered with scheduling recommendations'
      ],
      tools: ['ChatGPT', 'Claude', 'Jasper AI', 'Canva', 'SEMrush', 'Buffer'],
      results: [
        '30 blog posts (15,000+ words total)',
        '90 social media posts with graphics',
        'All content SEO-optimized',
        'Content calendar with posting schedule',
        'Client reported 60% time savings'
      ],
      testimonial: {
        text: 'SinarAI became our content production powerhouse. Quality stayed high, and we could focus on strategy.',
        author: 'Amanda Lee',
        position: 'Agency Director'
      }
    }
  ]

  const currentCase = caseStudies[selectedCase]
  const relatedCases = caseStudies.filter((_, index) => index !== selectedCase).slice(0, 2)

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-sinar-dark via-sinar-dark to-sinar-dark-light">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sinar-gold/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sinar-gold-light/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
              <span className="text-sm text-sinar-gold-light font-medium">Success Stories</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Case <span className="text-sinar-gold">Studies</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              Real projects. Real results. See how SinarAI System transforms challenges into success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Selector */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setSelectedCase(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCase === index
                    ? 'bg-sinar-gold text-sinar-dark'
                    : 'bg-sinar-dark border border-gray-700 text-gray-300 hover:border-sinar-gold'
                }`}
              >
                {study.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Detail */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            key={selectedCase}
            className="transition-all duration-500 opacity-100 space-y-8"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className="text-8xl mb-6">{currentCase.image}</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                {currentCase.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <span className="text-gray-300">
                  <span className="text-gray-500">Client:</span>{' '}
                  <span className="text-sinar-gold-light font-semibold">{currentCase.client}</span>
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">
                  <span className="text-gray-500">Category:</span>{' '}
                  <span className="text-sinar-gold-light font-semibold">{currentCase.category}</span>
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">
                  <span className="text-gray-500">Timeline:</span>{' '}
                  <span className="text-sinar-gold-light font-semibold">{currentCase.timeline}</span>
                </span>
              </div>
            </div>

            {/* Client Profile */}
            <div className="bg-gradient-to-br from-sinar-dark-light to-sinar-dark border border-sinar-gold/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-sinar-gold/20 rounded-lg flex items-center justify-center text-xl">
                  👤
                </div>
                <h3 className="text-2xl font-display font-bold text-sinar-gold">Client Profile</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Industry</p>
                  <p className="text-gray-200 font-medium">{currentCase.industry}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Client Type</p>
                  <p className="text-gray-200 font-medium">{currentCase.clientType}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Project Goal</p>
                  <p className="text-gray-200 font-medium">{currentCase.projectGoal}</p>
                </div>
              </div>
            </div>

            {/* The Problem */}
            <div className="bg-gradient-to-br from-sinar-dark-light to-sinar-dark border border-sinar-gold/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-xl">
                  ⚠️
                </div>
                <h3 className="text-2xl font-display font-bold text-sinar-gold">The Problem</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">{currentCase.problem}</p>
              <div className="space-y-3">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Key Challenges:</p>
                <ul className="space-y-3">
                  {currentCase.problemPoints.map((point, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-red-400 mr-3 mt-1 flex-shrink-0">✗</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Process - Timeline Style */}
            <div className="bg-gradient-to-br from-sinar-dark-light to-sinar-dark border border-sinar-gold/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-sinar-gold/20 rounded-lg flex items-center justify-center text-xl">
                  ⚙️
                </div>
                <h3 className="text-2xl font-display font-bold text-sinar-gold">Our Process</h3>
              </div>
              <div className="space-y-6">
                {currentCase.process?.map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-sinar-gold/20 to-sinar-gold/5 text-sinar-gold rounded-xl flex items-center justify-center text-sm font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-gray-200 leading-relaxed font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Used - Grid Style */}
            <div className="bg-gradient-to-br from-sinar-dark-light to-sinar-dark border border-sinar-gold/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-sinar-gold/20 rounded-lg flex items-center justify-center text-xl">
                  🛠️
                </div>
                <h3 className="text-2xl font-display font-bold text-sinar-gold">Tools Used</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {currentCase.tools?.map((tool, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-sinar-gold/10 text-sinar-gold-light rounded-xl border border-sinar-gold/20 font-medium text-center hover:bg-sinar-gold/20 hover:border-sinar-gold/40 transition-all duration-300"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Results - Impact Style */}
            <div className="bg-gradient-to-br from-sinar-gold/10 via-sinar-gold/5 to-transparent border border-sinar-gold/30 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-sinar-gold/30 rounded-lg flex items-center justify-center text-xl">
                  🏆
                </div>
                <h3 className="text-2xl font-display font-bold text-sinar-gold">The Results</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {currentCase.results?.map((result, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-sinar-gold/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-sinar-gold/30 transition-colors duration-300">
                      <span className="text-sinar-gold text-lg">✓</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed font-medium pt-1">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial */}
            {currentCase.testimonial && (
              <div className="bg-gradient-to-br from-sinar-dark-light to-sinar-dark border border-sinar-gold/20 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-sinar-gold/20 rounded-lg flex items-center justify-center text-xl">
                    💬
                  </div>
                  <h3 className="text-2xl font-display font-bold text-sinar-gold">Client Testimonial</h3>
                </div>
                <div className="relative">
                  <div className="text-sinar-gold/20 text-6xl font-serif absolute -top-4 -left-2">"</div>
                  <p className="text-gray-200 text-lg leading-relaxed italic pl-8 mb-6">
                    {currentCase.testimonial.text}
                  </p>
                  <div className="pl-8 border-l-4 border-sinar-gold/30 ml-4">
                    <p className="text-white font-semibold">{currentCase.testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{currentCase.testimonial.position}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Related Case Studies */}
            {relatedCases.length > 0 && (
              <div className="pt-12">
                <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
                  Related <span className="text-sinar-gold">Case Studies</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedCases.map((relatedCase, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCase(caseStudies.findIndex(cs => cs.id === relatedCase.id))}
                      className="bg-gradient-to-br from-sinar-dark-light to-sinar-dark border border-sinar-gold/20 rounded-2xl p-6 text-left hover:border-sinar-gold/50 hover:shadow-xl hover:shadow-sinar-gold/10 transition-all duration-300 group"
                    >
                      <div className="text-5xl mb-4">{relatedCase.image}</div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-sinar-gold transition-colors duration-300">
                        {relatedCase.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">{relatedCase.category}</p>
                      <div className="flex items-center text-sinar-gold-light text-sm font-medium">
                        <span>View Case Study</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-sinar-dark-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            Ready for Your <span className="text-sinar-gold">Success Story?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us turn your challenges into achievements. Start your project today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-sinar-gold text-sinar-dark font-semibold rounded-lg hover:bg-sinar-gold-light transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}
