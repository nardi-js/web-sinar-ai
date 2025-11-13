export default function TechStackPage() {
  const techCategories = [
    {
      category: 'AI & Machine Learning',
      icon: '🤖',
      color: 'from-purple-500/20 to-blue-500/10',
      borderColor: 'border-purple-500/30',
      iconBg: 'from-purple-500/30 to-blue-500/10',
      tools: [
        { name: 'ChatGPT (GPT-4o)', use: 'Advanced reasoning, code generation, and content creation with multimodal capabilities' },
        { name: 'Claude (Sonnet)', use: 'Long-context analysis, nuanced writing, and complex problem-solving tasks' },
        { name: 'Gemini Pro', use: 'Multimodal AI for vision, text, and code with Google\'s latest capabilities' },
        { name: 'Midjourney', use: 'High-quality AI image generation for branding, UI mockups, and visual assets' },
        { name: 'Stable Diffusion', use: 'Open-source image generation with fine-tuned control for custom visuals' },
        { name: 'Eleven Labs', use: 'Realistic AI voice synthesis for voiceovers, narration, and audio content' },
      ]
    },
    {
      category: 'Development & Backend',
      icon: '💻',
      color: 'from-green-500/20 to-emerald-500/10',
      borderColor: 'border-green-500/30',
      iconBg: 'from-green-500/30 to-emerald-500/10',
      tools: [
        { name: 'Node.js', use: 'Scalable server-side JavaScript for APIs, real-time apps, and backend services' },
        { name: 'Python', use: 'Data processing, AI integration, automation scripts, and machine learning workflows' },
        { name: 'FastAPI', use: 'High-performance Python web framework for building modern APIs quickly' },
        { name: 'Express.js', use: 'Minimal Node.js framework for building robust web applications and APIs' },
        { name: 'Prisma', use: 'Type-safe database ORM with auto-completion and migrations for productivity' },
        { name: 'REST & GraphQL', use: 'Flexible API architectures for efficient data fetching and integration' },
      ]
    },
    {
      category: 'Frontend & Design',
      icon: '🎨',
      color: 'from-pink-500/20 to-rose-500/10',
      borderColor: 'border-pink-500/30',
      iconBg: 'from-pink-500/30 to-rose-500/10',
      tools: [
        { name: 'React', use: 'Component-based UI library for building fast, interactive web applications' },
        { name: 'Next.js', use: 'React framework with SSR, SSG, and optimal performance for production apps' },
        { name: 'Tailwind CSS', use: 'Utility-first CSS framework for rapid, responsive, and custom UI design' },
        { name: 'Figma', use: 'Collaborative design tool for wireframes, prototypes, and UI/UX design systems' },
        { name: 'Framer Motion', use: 'Production-ready animation library for smooth, interactive React animations' },
        { name: 'shadcn/ui', use: 'Beautiful, accessible React components built with Radix UI and Tailwind' },
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: '☁️',
      color: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      iconBg: 'from-cyan-500/30 to-blue-500/10',
      tools: [
        { name: 'Vercel', use: 'Zero-config deployment platform optimized for Next.js and static sites' },
        { name: 'Firebase', use: 'Backend-as-a-service with auth, Firestore database, hosting, and functions' },
        { name: 'Supabase', use: 'Open-source Firebase alternative with PostgreSQL, auth, and real-time features' },
        { name: 'AWS Lambda', use: 'Serverless compute for running code without managing servers or infrastructure' },
        { name: 'Cloudflare', use: 'CDN, DNS, and edge computing for fast, secure, and reliable web delivery' },
        { name: 'Docker', use: 'Containerization platform for consistent dev, test, and production environments' },
      ]
    },
    {
      category: 'Database & Storage',
      icon: '🗄️',
      color: 'from-orange-500/20 to-yellow-500/10',
      borderColor: 'border-orange-500/30',
      iconBg: 'from-orange-500/30 to-yellow-500/10',
      tools: [
        { name: 'Firestore', use: 'NoSQL cloud database with real-time sync and offline support for scalable apps' },
        { name: 'PostgreSQL', use: 'Powerful open-source relational database with advanced querying and reliability' },
        { name: 'MongoDB', use: 'Flexible NoSQL document database for handling unstructured and evolving data' },
        { name: 'Redis', use: 'In-memory data store for caching, session management, and real-time analytics' },
        { name: 'Pinecone', use: 'Vector database optimized for AI embeddings, semantic search, and ML use cases' },
        { name: 'S3 / Cloud Storage', use: 'Scalable object storage for files, media, backups, and static assets' },
      ]
    },
    {
      category: 'Tools & Automation',
      icon: '⚙️',
      color: 'from-indigo-500/20 to-purple-500/10',
      borderColor: 'border-indigo-500/30',
      iconBg: 'from-indigo-500/30 to-purple-500/10',
      tools: [
        { name: 'GitHub', use: 'Version control, collaboration, CI/CD pipelines, and code repository hosting' },
        { name: 'VS Code', use: 'Powerful, extensible code editor with AI pair programming and debugging tools' },
        { name: 'Cursor', use: 'AI-first code editor with intelligent code completion and generation features' },
        { name: 'Postman', use: 'API development and testing tool for designing, documenting, and debugging APIs' },
        { name: 'Zapier / Make', use: 'No-code automation platforms for connecting apps and automating workflows' },
        { name: 'Notion / Linear', use: 'Project management and documentation tools for team collaboration and planning' },
      ]
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
              <span className="text-sinar-gold text-lg">⚡</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-sinar-gold-light">
                Technology Arsenal
              </span>
              <span className="text-sinar-gold text-lg">⚡</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1]">
                Our Tech{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
                  Stack
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-sinar-gold to-transparent rounded-full mx-auto"></div>
            </div>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              A cutting-edge arsenal of AI tools, development frameworks, and cloud
              infrastructure—carefully curated to deliver speed, quality, and innovation
              for every project.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-sinar-gold font-bold text-2xl">30+</span>
                <span className="text-gray-400">Tools & Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sinar-gold font-bold text-2xl">6</span>
                <span className="text-gray-400">Core Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Always Evolving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Categories - Enhanced */}
      <section className="py-20 px-4 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          {techCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className="space-y-8"
              style={{
                animation: 'fadeIn 0.6s ease-out',
                animationDelay: `${catIndex * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              {/* Category Header */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.iconBg} rounded-2xl flex items-center justify-center text-4xl shadow-md shadow-black/10`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                      {category.category}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {category.tools.length} tools in this category
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Tools Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className={`group relative bg-gradient-to-br ${category.color} backdrop-blur-xl border ${category.borderColor} p-6 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-black/10 transition-all duration-300`}
                    style={{
                      animation: 'fadeIn 0.4s ease-out',
                      animationDelay: `${(catIndex * 0.1) + (index * 0.05)}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    {/* Background Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Tool Name */}
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-sinar-gold-light transition-colors duration-300">
                        {tool.name}
                      </h3>
                      {/* Tool Description */}
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {tool.use}
                      </p>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sinar-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section - Enhanced */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark-light via-sinar-dark to-sinar-dark"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sinar-gold/5 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full mb-6">
              <span className="text-sinar-gold text-xl">💡</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-sinar-gold-light">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Technology <span className="text-sinar-gold">Principles</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How we choose, adopt, and evolve our tech stack to stay ahead
            </p>
          </div>
          
          {/* Philosophy Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-sinar-gold/20 p-8 rounded-2xl hover:border-sinar-gold/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-sinar-gold/10 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🔄
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
                  Always Evolving
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We constantly evaluate and adopt new tools. If a better technology
                  emerges, we integrate it. Our stack is never static—it grows with the
                  industry.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-sinar-gold/20 p-8 rounded-2xl hover:border-sinar-gold/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-3">
                  Best Tool for the Job
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We do not limit ourselves to one ecosystem. We choose tools based on
                  project requirements, not trends. Flexibility is our strength.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-sinar-gold/20 p-8 rounded-2xl hover:border-sinar-gold/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-yellow-500/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-3">
                  Efficiency First
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Every tool in our stack serves a purpose: speed, quality, or scalability.
                  We avoid bloat and prioritize tools that deliver measurable results.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-sinar-dark-light/90 to-sinar-dark/90 backdrop-blur-xl border border-sinar-gold/20 p-8 rounded-2xl hover:border-sinar-gold/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🤝
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                  Human-Guided AI
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  AI tools handle execution, but our founders guide strategy, quality
                  control, and ethical oversight. Technology is powerful, but humans keep it
                  honest.
                </p>
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
            Powered by the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
              Best Tools
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Our tech stack is built for speed, quality, and innovation. Let us show you
            what's possible when cutting-edge AI meets proven development tools.
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
              href="/templates"
              className="inline-flex items-center justify-center px-10 py-5 bg-sinar-dark-light/80 backdrop-blur-sm border-2 border-sinar-gold/30 text-white text-lg font-semibold rounded-xl hover:bg-sinar-dark-light hover:border-sinar-gold/50 transition-all duration-300"
            >
              Browse Templates
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
