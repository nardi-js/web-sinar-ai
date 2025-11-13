export default function AIEmployeesPage() {
  const aiEmployees = [
    {
      id: 'writer',
      name: 'AI Writer',
      role: 'Content Creation',
      icon: '✍️',
      description: 'Generates all written content — blog posts, captions, copywriting, technical documentation, and marketing materials using advanced language models.',
      capabilities: [
        'Blog posts and articles',
        'Social media captions',
        'Product descriptions and copywriting',
        'Technical documentation',
        'SEO-optimized content'
      ],
      tools: ['ChatGPT', 'Claude', 'Jasper AI']
    },
    {
      id: 'designer',
      name: 'AI Designer',
      role: 'Visual Creation',
      icon: '🎨',
      description: 'Creates stunning visuals, logos, brand graphics, UI mockups, and marketing materials using AI-powered design tools.',
      capabilities: [
        'Logo and brand identity design',
        'Social media graphics',
        'UI/UX mockups and prototypes',
        'Marketing visuals and banners',
        'Illustration and concept art'
      ],
      tools: ['Midjourney', 'DALL-E', 'Canva AI', 'Figma']
    },
    {
      id: 'developer',
      name: 'AI Developer',
      role: 'Code Implementation',
      icon: '�',
      description: 'Produces clean, functional code for websites, applications, and digital systems. Handles frontend, backend, and database implementation.',
      capabilities: [
        'Website and app development',
        'API development and integration',
        'Database design and queries',
        'Code optimization and debugging',
        'Automation scripts'
      ],
      tools: ['GitHub Copilot', 'ChatGPT', 'Cursor AI', 'Replit']
    },
    {
      id: 'researcher',
      name: 'AI Researcher',
      role: 'Data & Insights',
      icon: '📊',
      description: 'Gathers data, analyzes market trends, conducts competitor research, and provides actionable insights to guide strategic decisions.',
      capabilities: [
        'Market research and analysis',
        'Competitor intelligence',
        'Data collection and processing',
        'Trend forecasting',
        'Report generation'
      ],
      tools: ['ChatGPT', 'Perplexity AI', 'Google Analytics', 'Data Tools']
    },
    {
      id: 'project-manager',
      name: 'AI Project Manager',
      role: 'Task Organization',
      icon: '📋',
      description: 'Organizes workflows, manages timelines, tracks progress, and ensures all tasks are completed on schedule with proper coordination.',
      capabilities: [
        'Task breakdown and scheduling',
        'Timeline management',
        'Progress tracking and reporting',
        'Resource allocation',
        'Workflow automation'
      ],
      tools: ['Notion AI', 'ClickUp', 'Monday.com', 'Automation Tools']
    },
    {
      id: 'tester',
      name: 'AI Tester',
      role: 'Quality Assurance',
      icon: '🔍',
      description: 'Tests functionality, identifies bugs, validates performance, and ensures everything works perfectly before delivery to clients.',
      capabilities: [
        'Automated testing and QA',
        'Bug detection and reporting',
        'Performance validation',
        'Security vulnerability scanning',
        'User experience testing'
      ],
      tools: ['Selenium', 'Cypress', 'Jest', 'Testing Frameworks']
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-sinar-dark via-sinar-dark to-sinar-dark-light">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-sinar-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-sinar-gold-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
              <span className="text-sinar-gold text-2xl">🤖</span>
              <span className="text-sm text-sinar-gold-light font-semibold tracking-wide">AI WORKFORCE</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Meet Our </span>
              <span className="bg-gradient-to-r from-sinar-gold to-sinar-gold-light bg-clip-text text-transparent">
                AI Specialists
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              Not human workers. Not AI creating AI. Just <span className="text-sinar-gold font-semibold">specialized task units</span> powered by existing AI tools like ChatGPT, Claude, and Midjourney — each one trained for a specific role in our workflow.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-sinar-gold mb-1">6</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">AI Specialists</div>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-sinar-gold/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sinar-gold mb-1">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Availability</div>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-sinar-gold/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sinar-gold mb-1">∞</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Scalability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are AI Employees - Explanation Section */}
      <section className="relative py-16 lg:py-20 bg-sinar-dark-light/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sinar-gold/5 to-transparent border border-sinar-gold/20 rounded-3xl p-8 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-sinar-gold/20 rounded-xl flex items-center justify-center text-2xl">
                  💡
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                  What Are <span className="text-sinar-gold">AI Employees?</span>
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  In SinarAI System, the term <span className="text-sinar-gold font-semibold">"AI Employee"</span> does NOT refer to real human workers or AI models creating other AI models.
                </p>
                
                <p className="text-lg">
                  Instead, an <span className="text-white font-semibold">AI Employee is a role-based task unit</span> powered by existing AI tools like ChatGPT, Claude, Midjourney, Notion, and more.
                </p>

                <div className="bg-sinar-dark/50 border-l-4 border-sinar-gold/50 p-6 rounded-lg my-6">
                  <p className="text-lg italic">
                    "Think of them as <span className="text-sinar-gold-light font-semibold">virtual team members</span> — each with a specific job, just like in a real company. But their work is powered by advanced AI systems, not by humans."
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <span className="text-sinar-gold mr-2">✓</span>
                      What They Are
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-sinar-gold mr-2 mt-1">→</span>
                        <span>Specialized AI-powered work units</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sinar-gold mr-2 mt-1">→</span>
                        <span>Role-based task automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sinar-gold mr-2 mt-1">→</span>
                        <span>Representations of our workflow</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sinar-gold mr-2 mt-1">→</span>
                        <span>Powered by proven AI tools</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <span className="text-red-400 mr-2">✗</span>
                      What They're NOT
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 mt-1">→</span>
                        <span>Real human employees</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 mt-1">→</span>
                        <span>AI creating other AI models</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 mt-1">→</span>
                        <span>Independent decision makers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 mt-1">→</span>
                        <span>Replacement for human oversight</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Team Grid */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiEmployees.map((employee, index) => (
              <div
                key={employee.id}
                className="group relative bg-gradient-to-br from-sinar-dark-light to-sinar-dark border border-sinar-gold/20 rounded-2xl p-8 hover:border-sinar-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sinar-gold/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sinar-gold/20 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-sinar-gold/20 to-sinar-gold/5 rounded-2xl flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {employee.icon}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-sinar-gold/20 rounded-lg blur-sm group-hover:bg-sinar-gold/40 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Name & Role */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-sinar-gold transition-colors duration-300">
                      {employee.name}
                    </h3>
                    <p className="text-sm text-sinar-gold-light uppercase tracking-wider font-semibold">
                      {employee.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {employee.description}
                  </p>

                  {/* Capabilities */}
                  <div className="pt-4 border-t border-sinar-gold/10">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">
                      Key Capabilities
                    </p>
                    <ul className="space-y-2">
                      {employee.capabilities?.slice(0, 3).map((capability, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <span className="text-sinar-gold mr-2 mt-1">→</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                      {employee.capabilities && employee.capabilities.length > 3 && (
                        <li className="text-xs text-sinar-gold-light italic">
                          +{employee.capabilities.length - 3} more capabilities
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {employee.tools?.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-sinar-gold/10 text-sinar-gold-light text-xs rounded-full border border-sinar-gold/20 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sinar-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-16 lg:py-24 bg-sinar-dark-light/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              How Our <span className="text-sinar-gold">AI Workflow</span> Works
            </h2>
            <p className="text-gray-400 text-lg">
              A structured, organized process that makes SinarAI trustworthy and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sinar-gold/20 to-sinar-gold/5 rounded-2xl flex items-center justify-center text-3xl mx-auto">
                🎯
              </div>
              <h3 className="text-xl font-bold text-white">1. Task Assignment</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our founders assign project tasks to the appropriate "AI Employee" based on the job requirements — writing, design, code, research, or testing
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sinar-gold/20 to-sinar-gold/5 rounded-2xl flex items-center justify-center text-3xl mx-auto">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white">2. AI Execution</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI tools (ChatGPT, Claude, Midjourney, etc.) process the task at high speed, producing content, designs, code, or analysis — dramatically faster than traditional methods
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sinar-gold/20 to-sinar-gold/5 rounded-2xl flex items-center justify-center text-3xl mx-auto">
                ✅
              </div>
              <h3 className="text-xl font-bold text-white">3. Human Oversight</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every output is reviewed, refined, and approved by our human founders to ensure quality, accuracy, and alignment with your vision
              </p>
            </div>
          </div>

          {/* Why This Approach */}
          <div className="mt-16 bg-sinar-dark/50 border border-sinar-gold/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Why We Show <span className="text-sinar-gold">"AI Employees"</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-sinar-gold text-xl mt-1">📋</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Transparency</h4>
                  <p className="text-gray-400 text-sm">Show clients exactly how SinarAI works internally</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-sinar-gold text-xl mt-1">🔄</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Clear Workflow</h4>
                  <p className="text-gray-400 text-sm">Help clients understand the process from start to finish</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-sinar-gold text-xl mt-1">⚙️</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Specialized Processes</h4>
                  <p className="text-gray-400 text-sm">Demonstrate that tasks are handled by focused AI systems</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-sinar-gold text-xl mt-1">🏢</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Professional Structure</h4>
                  <p className="text-gray-400 text-sm">Make SinarAI feel organized, structured, and trustworthy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-sinar-gold/10 to-transparent border border-sinar-gold/30 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sinar-gold/5 to-transparent"></div>
            
            <div className="relative z-10 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                Ready to Work with Our AI Team?
              </h2>
              <p className="text-gray-300 text-lg">
                Experience the power of specialized AI workflows — fast, structured, and consistently high-quality. Human-guided, AI-powered.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-bold rounded-lg hover:shadow-xl hover:shadow-sinar-gold/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
