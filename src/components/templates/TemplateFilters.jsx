const TemplateFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  priceFilter,
  setPriceFilter,
}) => {
  return (
    <div className="space-y-6 mb-12">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search templates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-4 bg-sinar-dark-light border border-sinar-gold/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sinar-gold/50 transition-colors"
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Category Filters */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Categories
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark shadow-lg shadow-sinar-gold/30'
                  : 'bg-sinar-dark-light border border-sinar-gold/20 text-gray-300 hover:border-sinar-gold/50 hover:text-sinar-gold'
              }`}
            >
              {category === 'all' ? 'All Templates' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Price Range
        </h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setPriceFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              priceFilter === 'all'
                ? 'bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark shadow-lg shadow-sinar-gold/30'
                : 'bg-sinar-dark-light border border-sinar-gold/20 text-gray-300 hover:border-sinar-gold/50 hover:text-sinar-gold'
            }`}
          >
            All Prices
          </button>
          <button
            onClick={() => setPriceFilter('under-300k')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              priceFilter === 'under-300k'
                ? 'bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark shadow-lg shadow-sinar-gold/30'
                : 'bg-sinar-dark-light border border-sinar-gold/20 text-gray-300 hover:border-sinar-gold/50 hover:text-sinar-gold'
            }`}
          >
            Under Rp 300K
          </button>
          <button
            onClick={() => setPriceFilter('300k-500k')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              priceFilter === '300k-500k'
                ? 'bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark shadow-lg shadow-sinar-gold/30'
                : 'bg-sinar-dark-light border border-sinar-gold/20 text-gray-300 hover:border-sinar-gold/50 hover:text-sinar-gold'
            }`}
          >
            Rp 300K - 500K
          </button>
          <button
            onClick={() => setPriceFilter('over-500k')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              priceFilter === 'over-500k'
                ? 'bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark shadow-lg shadow-sinar-gold/30'
                : 'bg-sinar-dark-light border border-sinar-gold/20 text-gray-300 hover:border-sinar-gold/50 hover:text-sinar-gold'
            }`}
          >
            Over Rp 500K
          </button>
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedCategory !== 'all' || searchQuery !== '' || priceFilter !== 'all') && (
        <button
          onClick={() => {
            setSelectedCategory('all')
            setSearchQuery('')
            setPriceFilter('all')
          }}
          className="text-sm text-sinar-gold-light hover:text-sinar-gold transition-colors flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Clear all filters
        </button>
      )}
    </div>
  )
}

export default TemplateFilters
