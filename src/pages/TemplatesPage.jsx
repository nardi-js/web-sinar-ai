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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sinar-gold/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sinar-gold-light/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
              <span className="text-sm text-sinar-gold font-medium">AI-Generated Templates</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready-Made{' '}
              <span className="text-sinar-gold">Templates</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              Browse our collection of professionally designed templates, crafted by AI and refined by humans. Perfect for your next project.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sinar-gold">{templates.length}+</div>
                <div className="text-sm text-gray-400">Templates</div>
              </div>
              <div className="w-px h-12 bg-sinar-gold/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sinar-gold">{categories.length - 1}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="w-px h-12 bg-sinar-gold/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sinar-gold">100%</div>
                <div className="text-sm text-gray-400">Customizable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Templates */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TemplateFilters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-400">
              Showing <span className="text-sinar-gold font-semibold">{filteredTemplates.length}</span> templates
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>

          {/* No Results */}
          {filteredTemplates.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No templates found</h3>
              <p className="text-gray-400">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sinar-gold/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Need a Custom Template?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Can't find what you're looking for? Let our AI workforce create a custom template tailored to your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-semibold rounded-lg hover:shadow-2xl hover:shadow-sinar-gold/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            Request Custom Template
          </Link>
        </div>
      </section>
    </div>
  )
}

export default TemplatesPage
