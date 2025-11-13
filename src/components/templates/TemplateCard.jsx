const TemplateCard = ({ template }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="group relative bg-sinar-dark-light border border-sinar-gold/10 rounded-2xl overflow-hidden hover:border-sinar-gold/30 transition-all duration-500 hover:-translate-y-2">
      {/* Featured Badge */}
      {template.isFeatured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-sinar-gold text-sinar-dark text-xs font-bold rounded-full">
          FEATURED
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-sinar-dark">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sinar-dark-light to-transparent opacity-60"></div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-sinar-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <a
            href={template.demo}
            className="px-4 py-2 bg-sinar-gold text-sinar-dark font-semibold rounded-lg hover:bg-sinar-gold-light transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Live Demo
          </a>
          <button className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
            Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-sinar-gold-light font-medium px-2 py-1 bg-sinar-gold/10 rounded">
            {template.category}
          </span>
          <span className="text-lg font-bold text-sinar-gold">
            {formatPrice(template.price)}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-sinar-gold transition-colors">
            {template.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {template.description}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <p className="text-xs text-gray-500 font-medium">Key Features:</p>
          <div className="flex flex-wrap gap-2">
            {template.features?.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-400 bg-sinar-dark px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {template.features && template.features.length > 3 && (
              <span className="text-xs text-sinar-gold-light px-2 py-1">
                +{template.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-sinar-gold/5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-500">Tech:</span>
            {template.tech?.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-300 font-medium"
              >
                {tech}{idx < template.tech.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-3 bg-gradient-to-r from-sinar-gold/10 to-sinar-gold-light/10 border border-sinar-gold/30 text-sinar-gold-light font-semibold rounded-lg hover:from-sinar-gold hover:to-sinar-gold-light hover:text-sinar-dark transition-all duration-300">
          Purchase Template
        </button>
      </div>
    </div>
  )
}

export default TemplateCard
