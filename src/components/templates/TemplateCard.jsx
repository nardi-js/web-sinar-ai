const TemplateCard = ({ template }) => {
  // Price is stored as string (e.g., "$999") - display as is
  const displayPrice = template.price || 'Contact for pricing';

  return (
    <div className="group relative bg-sinar-dark-light border border-sinar-gold/10 rounded-2xl overflow-hidden hover:border-sinar-gold/30 transition-all duration-500 hover:-translate-y-2">
      {/* Featured Badge */}
      {template.featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-sinar-gold text-sinar-dark text-xs font-bold rounded-full">
          FEATURED
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-sinar-dark">
        {template.image ? (
          <img
            src={template.image}
            alt={template.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sinar-gold/20 to-yellow-600/10">
            <span className="text-6xl">📄</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-sinar-dark-light to-transparent opacity-60"></div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-sinar-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          {template.demoUrl && (
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-sinar-gold text-sinar-dark font-semibold rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Live Demo
            </a>
          )}
          {template.detailsUrl && (
            <a
              href={template.detailsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Details
            </a>
          )}
          {!template.demoUrl && !template.detailsUrl && (
            <a
              href={template.cta?.link || '/templates'}
              className="px-4 py-2 bg-sinar-gold text-sinar-dark font-semibold rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              {template.cta?.text || 'View Details'}
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category & Price */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-sinar-gold-light font-medium px-2 py-1 bg-sinar-gold/10 rounded">
            {template.category}
          </span>
          <div className="text-right">
            <span className="text-lg font-bold text-sinar-gold">
              {displayPrice}
            </span>
            {template.originalPrice && (
              <div className="text-xs text-gray-500 line-through">
                {template.originalPrice}
              </div>
            )}
          </div>
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
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-500">Tech:</span>
              {template.tech?.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs text-gray-300 font-medium"
                >
                  {tech}{idx < Math.min(template.tech.length, 3) - 1 ? ',' : ''}
                </span>
              ))}
              {template.tech && template.tech.length > 3 && (
                <span className="text-xs text-sinar-gold-light">
                  +{template.tech.length - 3}
                </span>
              )}
            </div>
            {template.timeline && (
              <span className="text-xs text-gray-400">
                ⏱️ {template.timeline}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <a
          href={template.detailsUrl || template.cta?.link || '/templates'}
          target={template.detailsUrl ? '_blank' : '_self'}
          rel={template.detailsUrl ? 'noopener noreferrer' : undefined}
          className="block w-full py-3 text-center bg-gradient-to-r from-sinar-gold/10 to-sinar-gold-light/10 border border-sinar-gold/30 text-sinar-gold-light font-semibold rounded-lg hover:from-sinar-gold hover:to-sinar-gold-light hover:text-sinar-dark transition-all duration-300"
        >
          {template.detailsUrl ? 'View Details' : (template.cta?.text || 'View Details')}
        </a>
      </div>
    </div>
  )
}

export default TemplateCard
