const TestimonialsSection = () => {
  // Static testimonials data with premium content
  const testimonials = [
    {
      id: 1,
      content: "SinarAI transformed our digital presence in record time. Their AI workforce delivers quality that rivals our best human designers, but with unprecedented speed and consistency.",
      name: "Sarah Mitchell",
      role: "Chief Digital Officer",
      company: "TechVentures Inc.",
      avatar: "👩‍💼",
      rating: 5,
      gradient: "from-sinar-gold to-sinar-gold-light"
    },
    {
      id: 2,
      content: "Working with SinarAI feels like having an entire creative studio at your disposal. The AI employees understand our brand vision and execute it flawlessly, every single time.",
      name: "Marcus Chen",
      role: "Head of Marketing",
      company: "GrowthLabs",
      avatar: "👨‍💻",
      rating: 5,
      gradient: "from-sinar-gold to-yellow-400"
    },
    {
      id: 3,
      content: "The efficiency gains are staggering. What used to take our team weeks now takes days, with no compromise on quality. SinarAI has become an indispensable part of our workflow.",
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateCo",
      avatar: "👩‍🎨",
      rating: 5,
      gradient: "from-yellow-300 to-sinar-gold"
    },
    {
      id: 4,
      content: "I was skeptical about AI-powered services, but SinarAI exceeded all expectations. The attention to detail and creative problem-solving capabilities are truly remarkable.",
      name: "David Kim",
      role: "Founder & CEO",
      company: "StartupHub",
      avatar: "👨‍💼",
      rating: 5,
      gradient: "from-sinar-gold to-sinar-gold-light"
    },
    {
      id: 5,
      content: "SinarAI's AI workforce handles our content production at scale without losing the human touch. It's like having unlimited creative capacity on demand.",
      name: "Jessica Taylor",
      role: "Content Director",
      company: "MediaFlow",
      avatar: "👩‍💻",
      rating: 5,
      gradient: "from-sinar-gold-light to-yellow-400"
    },
    {
      id: 6,
      content: "The ROI has been incredible. We're producing more content, faster, at a fraction of the cost. SinarAI has revolutionized how we approach digital projects.",
      name: "Michael Zhang",
      role: "Operations Lead",
      company: "ScaleUp Solutions",
      avatar: "👨‍🎨",
      rating: 5,
      gradient: "from-sinar-gold to-yellow-300"
    }
  ]

  // Duplicate testimonials for seamless infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(212,175,55,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(212,175,55,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Gradient Orbs - Reduced for mobile */}
      <div className="absolute top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-sinar-gold/10 md:bg-sinar-gold/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-sinar-gold/10 md:bg-sinar-gold/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-2.5 mb-6 sm:mb-8 bg-gradient-to-r from-sinar-gold/30 via-sinar-gold-light/20 to-yellow-400/15 border border-sinar-gold/30 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-sinar-gold rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-sinar-gold rounded-full absolute"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300 bg-clip-text text-transparent">
              CLIENT TESTIMONIALS
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Trusted by </span>
            <span className="bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover how businesses worldwide transform their operations with our AI-powered workforce
          </p>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="flex animate-scroll-left hover:pause">
            {infiniteTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[400px] mx-4"
              >
                <div className="group relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-gray-600/80 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-sinar-gold-light/20">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Quote Icon */}
                    <div className="flex items-center justify-between">
                      <div className="text-6xl font-serif leading-none bg-gradient-to-br from-sinar-gold/30 to-sinar-gold-light/30 bg-clip-text text-transparent">
                        "
                      </div>
                      {/* Stars Rating */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, idx) => (
                          <svg
                            key={idx}
                            className="w-5 h-5 fill-current text-yellow-500"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 leading-relaxed text-base min-h-[120px]">
                      {testimonial.content}
                    </p>

                    {/* Animated Divider */}
                    <div className="relative h-px overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sinar-gold/30 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sinar-gold-light/20 to-transparent animate-pulse"></div>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      {/* Avatar with Gradient Border */}
                      <div className={`relative flex-shrink-0`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <div className="relative w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-2xl border border-gray-700 group-hover:scale-110 transition-transform duration-300">
                          {testimonial.avatar}
                        </div>
                      </div>

                      {/* Name and Role */}
                      <div>
                        <h4 className="font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-sinar-gold group-hover:to-sinar-gold-light group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                        <p className={`text-xs font-medium bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 bg-gradient-to-br ${testimonial.gradient} opacity-30 rounded-tr-2xl`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Stats Bar */}
        <div className="mt-20 max-w-6xl mx-auto px-6">
          <div className="relative p-8 bg-gradient-to-r from-gray-800/40 via-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm overflow-hidden">
            {/* Animated Background Line */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sinar-gold to-transparent animate-pulse"></div>
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2 group cursor-default">
                <div className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-sinar-gold to-sinar-gold-light bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  150+
                </div>
                <div className="text-sm text-gray-400 font-medium">Happy Clients</div>
              </div>

              <div className="text-center space-y-2 group cursor-default">
                <div className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-sinar-gold to-yellow-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-sm text-gray-400 font-medium">Satisfaction Rate</div>
              </div>

              <div className="text-center space-y-2 group cursor-default">
                <div className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-yellow-300 to-sinar-gold bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-sm text-gray-400 font-medium">AI Availability</div>
              </div>

              <div className="text-center space-y-2 group cursor-default">
                <div className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-sinar-gold to-sinar-gold-light bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  5x
                </div>
                <div className="text-sm text-gray-400 font-medium">Faster Delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 max-w-4xl mx-auto px-6">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sinar-gold to-sinar-gold-light rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 rounded-2xl backdrop-blur-xl text-center">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sinar-gold/30 to-sinar-gold-light/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-sinar-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                  Ready to Join Our Success Stories?
                </h3>

                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Experience the power of AI-driven creativity. Let's build something extraordinary together.
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-sinar-gold-light/20 transition-all duration-300 hover:scale-105"
                >
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for Horizontal Scroll */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        @keyframes gridMove {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(4rem) translateY(4rem);
          }
        }
      `}</style>
    </section>
  )
}

export default TestimonialsSection
