import ContactSection from '../components/ContactSection'
import { useFirestoreDoc } from '../hooks/useFirestore'

const ContactPage = () => {
  const { data: contactData } = useFirestoreDoc('content', 'contact')

  const socialLinks = []
  if (contactData?.twitter) {
    socialLinks.push({ name: 'Twitter', url: contactData.twitter, letter: 'T' })
  }
  if (contactData?.linkedin) {
    socialLinks.push({ name: 'LinkedIn', url: contactData.linkedin, letter: 'L' })
  }
  if (contactData?.instagram) {
    socialLinks.push({ name: 'Instagram', url: contactData.instagram, letter: 'I' })
  }
  if (contactData?.facebook) {
    socialLinks.push({ name: 'Facebook', url: contactData.facebook, letter: 'F' })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section for Contact Page */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sinar-gold/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sinar-gold-light/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mb-8">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
              <span className="text-sm text-sinar-gold font-medium">Get In Touch</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Build Something{' '}
              <span className="text-sinar-gold">Smart</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              Have a project in mind? Want to learn more about our AI-driven solutions? We're here to help. Reach out and let's create something amazing together.
            </p>

            {/* Follow Our Journey - Social Links */}
            {socialLinks.length > 0 && (
              <div className="pt-4">
                <p className="text-sm text-gray-500 mb-4">Follow our journey</p>
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-sinar-dark-light border border-sinar-gold/20 rounded-lg hover:border-sinar-gold/50 hover:bg-sinar-gold/10 transition-all duration-300"
                    >
                      <span className="text-sinar-gold-light font-semibold">{social.letter}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Additional Info Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Response Time */}
            <div className="text-center p-8 bg-sinar-dark-light border border-sinar-gold/10 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sinar-gold/10 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-sinar-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>
              <p className="text-gray-400">We typically respond within 24 hours</p>
            </div>

            {/* AI Support */}
            <div className="text-center p-8 bg-sinar-dark-light border border-sinar-gold/10 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sinar-gold/10 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-sinar-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered Support</h3>
              <p className="text-gray-400">24/7 automated assistance available</p>
            </div>

            {/* Consultation */}
            <div className="text-center p-8 bg-sinar-dark-light border border-sinar-gold/10 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sinar-gold/10 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-sinar-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
              <p className="text-gray-400">Get expert advice for your project</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
