import { useState } from 'react'
import { useFirestoreDoc } from '../hooks/useFirestore'

const ContactSection = () => {
  // eslint-disable-next-line no-unused-vars
  const { data: contactData, loading } = useFirestoreDoc('content', 'contact')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sinar-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sinar-gold-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
                <span className="text-sm text-sinar-gold font-medium">Get In Touch</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Let's Build Something{' '}
                <span className="text-sinar-gold">Smart Together</span>
              </h2>

              <p className="text-xl text-gray-400 leading-relaxed">
                Ready to experience the power of AI-driven work with human values? Share your ideas, and our AI workforce will bring them to life.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-8">
              {contactData?.email && (
                <div className="flex items-start space-x-4 p-4 bg-sinar-dark-light/50 border border-sinar-gold/10 rounded-xl hover:border-sinar-gold/30 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-sinar-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-sinar-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href={`mailto:${contactData.email}`} className="text-gray-400 hover:text-sinar-gold transition-colors">
                      {contactData.email}
                    </a>
                  </div>
                </div>
              )}

              {contactData?.address && (
                <div className="flex items-start space-x-4 p-4 bg-sinar-dark-light/50 border border-sinar-gold/10 rounded-xl hover:border-sinar-gold/30 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-sinar-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-sinar-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400 whitespace-pre-line">{contactData.address}</p>
                  </div>
                </div>
              )}

              {contactData?.phone && (
                <div className="flex items-start space-x-4 p-4 bg-sinar-dark-light/50 border border-sinar-gold/10 rounded-xl hover:border-sinar-gold/30 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-sinar-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-sinar-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a href={`tel:${contactData.phone}`} className="text-gray-400 hover:text-sinar-gold transition-colors">
                      {contactData.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start space-x-4 p-4 bg-sinar-dark-light/50 border border-sinar-gold/10 rounded-xl hover:border-sinar-gold/30 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-sinar-gold/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-sinar-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Response Time</h4>
                  <p className="text-gray-400">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-sm text-gray-400 mb-4">Follow our journey</p>
              <div className="flex space-x-4">
                {contactData?.twitter && (
                  <a
                    href={contactData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sinar-dark-light border border-sinar-gold/20 rounded-lg flex items-center justify-center hover:bg-sinar-gold/10 hover:border-sinar-gold/50 transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-sinar-gold text-xs font-medium">
                      T
                    </span>
                  </a>
                )}
                {contactData?.linkedin && (
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sinar-dark-light border border-sinar-gold/20 rounded-lg flex items-center justify-center hover:bg-sinar-gold/10 hover:border-sinar-gold/50 transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-sinar-gold text-xs font-medium">
                      L
                    </span>
                  </a>
                )}
                {contactData?.instagram && (
                  <a
                    href={contactData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sinar-dark-light border border-sinar-gold/20 rounded-lg flex items-center justify-center hover:bg-sinar-gold/10 hover:border-sinar-gold/50 transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-sinar-gold text-xs font-medium">
                      I
                    </span>
                  </a>
                )}
                {contactData?.facebook && (
                  <a
                    href={contactData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sinar-dark-light border border-sinar-gold/20 rounded-lg flex items-center justify-center hover:bg-sinar-gold/10 hover:border-sinar-gold/50 transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-sinar-gold text-xs font-medium">
                      F
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="relative p-8 bg-sinar-dark-light border border-sinar-gold/20 rounded-2xl">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sinar-gold/5 to-transparent rounded-2xl"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-sinar-dark border border-sinar-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sinar-gold transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-sinar-dark border border-sinar-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sinar-gold transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-sinar-dark border border-sinar-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sinar-gold transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-sinar-gold to-sinar-gold-light text-sinar-dark font-semibold rounded-lg hover:shadow-xl hover:shadow-sinar-gold/50 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <span>Send Message</span>
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  )}
                </button>

                {/* Success Message */}
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-sm text-center">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
