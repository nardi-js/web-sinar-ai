import { useFirestoreCollection } from '../hooks/useFirestore'
import { TestimonialSkeleton } from './LoadingSkeletons'

const TestimonialsSection = () => {
  const { data: testimonialsData, loading } = useFirestoreCollection('testimonials')

  // Show loading skeleton
  if (loading) {
    return (
      <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden bg-sinar-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialSkeleton />
            <TestimonialSkeleton />
            <TestimonialSkeleton />
          </div>
        </div>
      </section>
    )
  }

  const testimonials = testimonialsData.length > 0 ? testimonialsData : []

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-sinar-gold/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sinar-gold-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
            <span className="text-sm text-sinar-gold font-medium">Testimonials</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Trusted by{' '}
            <span className="text-sinar-gold">Visionaries</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what our clients say about working with an AI-powered workforce.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative p-8 bg-sinar-dark-light border border-sinar-gold/20 rounded-2xl hover:border-sinar-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sinar-gold/10"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sinar-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Quote Icon */}
                <div className="text-5xl text-sinar-gold/20 font-serif leading-none">"</div>

                {/* Stars Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-5 h-5 text-sinar-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed italic">
                  {testimonial.content}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-sinar-gold/30 to-transparent"></div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-sinar-gold/20 to-sinar-gold/5 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>

                  {/* Name and Role */}
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-sinar-gold-light transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-sinar-gold/60">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-sinar-gold/30 rounded-bl-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-sinar-gold font-display">
              50+
            </div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-sinar-gold font-display">
              100%
            </div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-sinar-gold font-display">
              24/7
            </div>
            <div className="text-sm text-gray-400">AI Availability</div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-sinar-gold font-display">
              3x
            </div>
            <div className="text-sm text-gray-400">Faster Delivery</div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-6 bg-gradient-to-r from-sinar-dark-light via-sinar-dark to-sinar-dark-light border border-sinar-gold/30 rounded-2xl max-w-3xl">
            <p className="text-lg text-gray-300">
              <span className="text-sinar-gold font-semibold">"Technology that understands humanity</span> — that's what makes SinarAI different."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
