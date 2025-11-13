import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import TemplateCard from '../components/templates/TemplateCard'
import TemplateFilters from '../components/templates/TemplateFilters'
import { useFirestoreCollection } from '../hooks/useFirestore'
import { SectionSkeleton } from '../components/LoadingSkeletons'

const TemplatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const { data: templatesData, loading } = useFirestoreCollection('templates')

  const templates = useMemo(() => {
    return templatesData.length > 0 ? templatesData : []
  }, [templatesData])

  // Extract unique categories from templates
  const categories = useMemo(() => {
    const cats = new Set(templates.map(t => t.category))
    return ['all', ...Array.from(cats)]
  }, [templates])

  // Show loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-sinar-dark pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <SectionSkeleton />
        </div>
      </div>
    )
  }

  // Filter logic
  const filteredTemplates = templates.filter((template) => {
    const matchCategory = selectedCategory === 'all' || template.category === selectedCategory
    const matchSearch =
      searchQuery === '' ||
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    let matchPrice = true
    if (priceFilter === 'under-300k') {
      matchPrice = template.price < 300000
    } else if (priceFilter === '300k-500k') {
      matchPrice = template.price >= 300000 && template.price < 500000
    } else if (priceFilter === 'over-500k') {
      matchPrice = template.price >= 500000
    }

    return matchCategory && matchSearch && matchPrice
  })

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
          <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-[15%] w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-40 left-[20%] w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" style={{ animation: 'float 25s ease-in-out infinite' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm animate-fadeIn">
              <span className="text-2xl">🎨</span>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Crafted Templates
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Premium</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready-Made Templates
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              Discover our curated collection of professionally designed templates—crafted by AI, perfected by humans. Built for speed, scalability, and style.
            </p>

            {/* Stats Grid */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
              <div className="group px-8 py-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {templates.length}+
                </div>
                <div className="text-sm text-gray-400 mt-1">Templates</div>
              </div>

              <div className="group px-8 py-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {categories.length - 1}
                </div>
                <div className="text-sm text-gray-400 mt-1">Categories</div>
              </div>

              <div className="group px-8 py-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-gray-400 mt-1">Customizable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Templates */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12">
            <TemplateFilters
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
            />
          </div>

          {/* Results Count */}
          <div className="mb-8 flex items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <p className="text-gray-300 font-medium">
              Showing <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold text-xl">{filteredTemplates.length}</span> {filteredTemplates.length === 1 ? 'template' : 'templates'}
            </p>
          </div>

          {/* Templates Grid */}
          {filteredTemplates.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template, index) => (
                <div
                  key={template.id}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TemplateCard template={template} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-block p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl backdrop-blur-sm mb-6">
                <div className="text-7xl mb-4">🔍</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">No Templates Found</h3>
              <p className="text-gray-400 text-lg mb-6">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                  setPriceFilter('all')
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Templates?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every template is built with best practices, modern design, and full customization in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Optimized code and assets for blazing-fast load times',
                color: 'from-yellow-400 to-orange-400'
              },
              {
                icon: '🎨',
                title: 'Modern Design',
                description: 'Contemporary aesthetics that stay ahead of trends',
                color: 'from-pink-400 to-purple-400'
              },
              {
                icon: '📱',
                title: 'Fully Responsive',
                description: 'Perfect viewing experience on all devices',
                color: 'from-blue-400 to-cyan-400'
              },
              {
                icon: '🔧',
                title: '100% Customizable',
                description: 'Easy to modify and adapt to your brand',
                color: 'from-green-400 to-emerald-400'
              },
              {
                icon: '🚀',
                title: 'SEO Optimized',
                description: 'Built-in best practices for search engines',
                color: 'from-indigo-400 to-blue-400'
              },
              {
                icon: '💎',
                title: 'Premium Quality',
                description: 'Professional-grade code and design standards',
                color: 'from-purple-400 to-pink-400'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-gray-600/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl mb-8 animate-fadeIn">
            <div className="bg-sinar-dark px-12 py-16 rounded-3xl">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Need a <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Custom Template</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                Can't find exactly what you're looking for? Our AI workforce can craft a bespoke template tailored precisely to your vision and requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1"
                >
                  <span className="relative z-10">Request Custom Template</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  to="/ai-employees"
                  className="px-8 py-4 bg-transparent border-2 border-purple-400/50 text-purple-300 font-bold rounded-xl hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
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

export default TemplatesPage
