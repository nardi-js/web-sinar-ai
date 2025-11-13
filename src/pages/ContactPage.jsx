import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Static contact data
  const contactInfo = {
    email: 'hello@sinarai.com',
    phone: '+62 123 456 7890',
    address: 'Jakarta, Indonesia',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/company/sinarai', icon: '💼', color: 'blue' },
      { name: 'Twitter', url: 'https://twitter.com/sinarai', icon: '🐦', color: 'cyan' },
      { name: 'Instagram', url: 'https://instagram.com/sinarai', icon: '📸', color: 'pink' },
      { name: 'Facebook', url: 'https://facebook.com/sinarai', icon: '👥', color: 'blue' }
    ]
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen pt-20 bg-sinar-dark">
      {/* Hero Section - Enhanced & Raised */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sinar-dark via-sinar-dark-light to-sinar-dark"></div>
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}></div>
          </div>
          {/* Floating orbs - reduced for mobile */}
          <div className="absolute top-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-sinar-gold/10 md:bg-sinar-gold/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 md:bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-sinar-dark-light/80 backdrop-blur-sm border border-sinar-gold/30 rounded-full shadow-lg shadow-sinar-gold/5">
              <span className="text-xl sm:text-2xl">✉️</span>
              <span className="text-xs sm:text-sm text-sinar-gold font-semibold tracking-wide">GET IN TOUCH</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Let's Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
                Amazing
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              Have a project in mind? Want to learn more about our AI-driven solutions? 
              We're here to help. Reach out and let's create something extraordinary together.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">Free</div>
                <div className="text-sm text-gray-400">Consultation</div>
              </div>
              <div className="px-6 py-3 bg-sinar-dark-light/60 backdrop-blur-sm border border-sinar-gold/20 rounded-xl">
                <div className="text-2xl font-bold text-sinar-gold">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-xl border border-sinar-gold/20 rounded-3xl p-8 lg:p-10 shadow-xl shadow-sinar-gold/5">
                <h2 className="text-3xl font-display font-bold text-white mb-6">
                  Send Us a <span className="text-sinar-gold">Message</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <p className="text-green-400">Message sent successfully! We'll be in touch soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-sinar-dark/80 border border-sinar-gold/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sinar-gold/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-sinar-dark/80 border border-sinar-gold/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sinar-gold/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-sinar-dark/80 border border-sinar-gold/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sinar-gold/50 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark text-lg font-bold rounded-xl shadow-lg shadow-sinar-gold/15 transition-all duration-300 ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:shadow-xl hover:shadow-sinar-gold/25 hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              
              {/* Contact Details Cards */}
              <div className="space-y-4">
                {/* Email */}
                <div className="group bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 shadow-lg shadow-blue-500/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-400 mb-1">Email Us</h3>
                      <p className="text-gray-400 text-sm mb-2">Send us an email anytime</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-sinar-gold transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 shadow-lg shadow-green-500/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-green-400 mb-1">Call Us</h3>
                      <p className="text-gray-400 text-sm mb-2">Mon-Fri from 9am to 6pm</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-sinar-gold transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="group bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 shadow-lg shadow-purple-500/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple-400 mb-1">Visit Us</h3>
                      <p className="text-gray-400 text-sm mb-2">Come say hello</p>
                      <p className="text-white">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-sinar-dark-light/80 to-sinar-dark/80 backdrop-blur-sm border border-sinar-gold/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Follow Our Journey</h3>
                <p className="text-gray-400 mb-6 text-sm">Connect with us on social media</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {contactInfo.socialLinks.map((social) => {
                    const colorMap = {
                      blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-500/60',
                      cyan: 'from-cyan-500/20 to-teal-500/20 border-cyan-500/30 hover:border-cyan-500/60',
                      pink: 'from-pink-500/20 to-rose-500/20 border-pink-500/30 hover:border-pink-500/60'
                    }
                    const gradient = colorMap[social.color] || colorMap.blue
                    
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-3 p-4 bg-gradient-to-br ${gradient} border rounded-xl hover:scale-105 transition-all duration-300`}
                      >
                        <span className="text-3xl">{social.icon}</span>
                        <span className="text-white font-semibold text-sm">{social.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-sinar-gold/10 to-transparent border border-sinar-gold/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">⚡</span>
                  <h3 className="text-lg font-bold text-sinar-gold">Fast Response Guaranteed</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  We typically respond within 24 hours. For urgent inquiries, please call us directly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="relative py-20 px-4 bg-sinar-dark-light/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold to-yellow-300">Us?</span>
            </h2>
            <p className="text-gray-400 text-lg">Experience the SinarAI difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: '3x Faster Delivery',
                description: 'AI-powered workflows mean your project gets completed in a fraction of traditional timelines',
                color: 'yellow'
              },
              {
                icon: '🎯',
                title: 'Precision & Quality',
                description: 'Every output is reviewed by humans to ensure accuracy and alignment with your vision',
                color: 'blue'
              },
              {
                icon: '💰',
                title: 'Fair & Transparent',
                description: 'No hidden costs, clear communication, and pricing that makes sense for your business',
                color: 'green'
              }
            ].map((item, idx) => {
              const colorMap = {
                yellow: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-400',
                blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400',
                green: 'from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400'
              }
              const theme = colorMap[item.color]
              
              return (
                <div key={idx} className={`group bg-gradient-to-br ${theme} bg-sinar-dark-light/80 backdrop-blur-sm border rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-lg`}>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className={`text-xl font-bold mb-3 ${theme.split(' ')[2]}`}>{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinar-gold via-sinar-gold-light to-yellow-300">
              Get Started?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join innovative businesses that trust SinarAI to bring their ideas to life. 
            Let's turn your vision into reality with the power of AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('form').scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark text-lg font-bold rounded-xl shadow-lg shadow-sinar-gold/15 hover:shadow-xl hover:shadow-sinar-gold/25 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Start Your Project</span>
              <span className="ml-3 text-2xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="/case-study"
              className="inline-flex items-center justify-center px-10 py-5 bg-sinar-dark-light/80 backdrop-blur-sm border-2 border-sinar-gold/30 text-white text-lg font-semibold rounded-xl hover:bg-sinar-dark-light hover:border-sinar-gold/50 transition-all duration-300"
            >
              View Our Work
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

export default ContactPage
