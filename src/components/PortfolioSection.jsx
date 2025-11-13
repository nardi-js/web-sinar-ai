import { useState, useMemo } from 'react'
import { useFirestoreCollection } from '../hooks/useFirestore'
import { SectionSkeleton } from './LoadingSkeletons'

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)
  const { data: portfolioData, loading } = useFirestoreCollection('portfolio')

  const projects = useMemo(() => {
    return portfolioData.length > 0 ? portfolioData : []
  }, [portfolioData])

  // Extract unique categories from projects
  const filters = useMemo(() => {
    const categories = new Set(projects.map(p => p.category))
    return ['All', ...Array.from(categories)]
  }, [projects])

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter(p => p.category?.toLowerCase() === activeFilter)
  }, [projects, activeFilter])

  // Show loading skeleton
  if (loading) {
    return (
      <section id="portfolio" className="relative py-24 lg:py-32 bg-sinar-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionSkeleton />
        </div>
      </section>
    )
  }

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-sinar-dark-light/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
            <span className="text-sm text-sinar-gold font-medium">Our Work</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Projects Built with{' '}
            <span className="text-sinar-gold">Intelligence</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of AI-powered solutions that blend creativity, functionality, and innovation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter.toLowerCase())}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.toLowerCase()
                  ? 'bg-sinar-gold text-sinar-dark shadow-lg shadow-sinar-gold/30'
                  : 'bg-sinar-dark border border-sinar-gold/20 text-gray-400 hover:text-sinar-gold hover:border-sinar-gold/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-sinar-dark border border-sinar-gold/20 rounded-2xl overflow-hidden hover:border-sinar-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sinar-gold/10"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image/Icon Section */}
              <div className="relative h-48 bg-gradient-to-br from-sinar-dark-light to-sinar-dark flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sinar-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`text-7xl transition-transform duration-500 ${
                    hoveredProject === project.id ? 'scale-110 rotate-6' : ''
                  }`}
                >
                  {project.image}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-sinar-dark/80 backdrop-blur-sm border border-sinar-gold/30 rounded-full text-xs text-sinar-gold-light font-medium">
                  {project.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white group-hover:text-sinar-gold-light transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="pt-4 border-t border-sinar-gold/5">
                    <p className="text-xs text-gray-500 mb-2 font-medium">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-400 bg-sinar-dark-light px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results */}
                {project.results && (
                  <div className="pt-3">
                    <div className="flex items-center gap-2 text-sinar-gold text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{project.results}</span>
                    </div>
                  </div>
                )}

                {/* View Details Link */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-sinar-gold hover:text-sinar-gold-light font-medium text-sm transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-sinar-gold/0 group-hover:border-sinar-gold/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-sinar-dark-light via-sinar-dark to-sinar-dark-light border border-sinar-gold/30 rounded-2xl">
            <p className="text-lg text-gray-300 mb-6">
              Have a project in mind? Let our AI workforce bring it to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-semibold rounded-lg hover:shadow-xl hover:shadow-sinar-gold/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Start Your Project</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
