export default function AIChatPage() {

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sinar-gold/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sinar-gold-light/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
              <span className="text-sm text-sinar-gold-light font-medium">Support</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              AI <span className="text-sinar-gold">Chat Assistant</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
              Get instant answers about SinarAI System, our services, and how we can help you. Chat with our AI assistant 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Interface Placeholder */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div
              
          >
            <div className="bg-sinar-dark-light border border-gray-800 rounded-lg p-8 min-h-[500px] flex flex-col items-center justify-center">
              <div className="text-6xl mb-6">💬</div>
              <h2 className="text-2xl font-display mb-4 text-center">
                AI Chat Assistant <span className="text-sinar-gold">Coming Soon</span>
              </h2>
              <p className="text-gray-300 text-center max-w-md mb-8 leading-relaxed">
                We are building an intelligent chat assistant to answer your questions instantly. 
                In the meantime, feel free to reach out directly via our contact page.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-sinar-gold text-sinar-dark font-semibold rounded-lg hover:bg-sinar-gold-light transition-all duration-300"
              >
                Contact Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Ask */}
      <section className="py-20 px-4 bg-sinar-dark-light">
        <div className="max-w-6xl mx-auto">
          <div
              
          >
            <h2 className="text-3xl md:text-4xl font-display mb-12 text-center">
              What You Will Be Able to <span className="text-sinar-gold">Ask</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-sinar-dark border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-sinar-gold-light">About Our Services</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>What services does SinarAI offer?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>Can you build a custom website for me?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>Do you offer branding and design services?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>How does your automation service work?</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-sinar-dark border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-sinar-gold-light">About Pricing & Process</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>What are your pricing packages?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>How long does a typical project take?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>What is your revision policy?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>Do you offer payment plans?</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-sinar-dark border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-sinar-gold-light">About AI Workforce</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>How do your AI employees work?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>Is AI-generated work reliable?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>Do humans review the work?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>What tools do you use?</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-sinar-dark border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-sinar-gold-light">General Questions</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>Who are the founders?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>Do you work with international clients?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>Can I see examples of your work?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sinar-gold mr-2">•</span>
                    <span>How do I get started?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
              
          >
            <h2 className="text-3xl md:text-4xl font-display mb-12 text-center">
              Why Use Our <span className="text-sinar-gold">AI Assistant</span>?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Instant Responses</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Get answers immediately, no waiting for business hours or email replies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-3">Smart & Accurate</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Trained on our full knowledge base to provide accurate, helpful information.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3">Available 24/7</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ask questions anytime, anywhere, from any device. Always online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-sinar-dark-light">
        <div className="max-w-4xl mx-auto text-center">
          <div
              
          >
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Ready to <span className="text-sinar-gold">Get Started?</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              While our AI chat assistant is in development, you can reach out directly. We are always happy to answer your questions.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-sinar-gold text-sinar-dark font-semibold rounded-lg hover:bg-sinar-gold-light transition-all duration-300"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
