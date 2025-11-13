import { useState } from 'react'
import { Link } from 'react-router-dom'
import TemplateCard from '../components/templates/TemplateCard'
import TemplateFilters from '../components/templates/TemplateFilters'

const TemplatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')

  // Data template statis untuk testing
  const templates = [
    {
      id: 1,
      title: 'Modern Portfolio Website',
      description: 'Clean and elegant portfolio template perfect for showcasing your work with smooth animations.',
      category: 'Portfolio',
      price: 299000,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      features: ['Responsive Design', 'Dark Mode', 'Smooth Animations', 'Contact Form'],
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      demo: '#',
      isFeatured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Dashboard',
      description: 'Complete admin dashboard with analytics, product management, and order tracking.',
      category: 'Dashboard',
      price: 599000,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      features: ['Analytics Charts', 'Product CRUD', 'Order Management', 'User Management'],
      tech: ['React', 'Chart.js', 'Tailwind CSS'],
      demo: '#',
      isFeatured: true,
    },
    {
      id: 3,
      title: 'Landing Page Startup',
      description: 'High-converting landing page template designed for SaaS and tech startups.',
      category: 'Landing Page',
      price: 199000,
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop',
      features: ['Hero Section', 'Pricing Table', 'Testimonials', 'CTA Sections'],
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: '#',
      isFeatured: false,
    },
    {
      id: 4,
      title: 'Blog & Magazine Template',
      description: 'Modern blog template with multiple layouts, perfect for content creators.',
      category: 'Blog',
      price: 349000,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      features: ['Multiple Layouts', 'SEO Optimized', 'Dark Mode', 'Newsletter Integration'],
      tech: ['Next.js', 'Tailwind CSS', 'MDX'],
      demo: '#',
      isFeatured: false,
    },
    {
      id: 5,
      title: 'Corporate Business Website',
      description: 'Professional corporate website with team showcase and service pages.',
      category: 'Corporate',
      price: 499000,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      features: ['Team Section', 'Service Pages', 'About Company', 'Contact Form'],
      tech: ['React', 'Tailwind CSS', 'React Router'],
      demo: '#',
      isFeatured: true,
    },
    {
      id: 6,
      title: 'Restaurant & Cafe Website',
      description: 'Delicious template for restaurants with menu display and reservation system.',
      category: 'Food & Beverage',
      price: 399000,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      features: ['Menu Display', 'Reservation Form', 'Gallery', 'Location Map'],
      tech: ['React', 'Tailwind CSS', 'Google Maps API'],
      demo: '#',
      isFeatured: false,
    },
    {
      id: 7,
      title: 'Fitness & Gym Website',
      description: 'Energetic template for fitness centers with class schedules and trainer profiles.',
      category: 'Health & Fitness',
      price: 449000,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      features: ['Class Schedule', 'Trainer Profiles', 'Membership Plans', 'BMI Calculator'],
      tech: ['React', 'Tailwind CSS', 'Calendar'],
      demo: '#',
      isFeatured: false,
    },
    {
      id: 8,
      title: 'Real Estate Listing',
      description: 'Property listing template with advanced search and filtering capabilities.',
      category: 'Real Estate',
      price: 549000,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      features: ['Property Search', 'Map Integration', 'Image Gallery', 'Contact Agent'],
      tech: ['React', 'Tailwind CSS', 'Mapbox'],
      demo: '#',
      isFeatured: true,
    },
  ]

  const categories = [
    'all',
    'Portfolio',
    'Dashboard',
    'Landing Page',
    'Blog',
    'Corporate',
    'Food & Beverage',
    'Health & Fitness',
    'Real Estate',
  ]

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
