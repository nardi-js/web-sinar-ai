import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import ScrollToTop from './components/ScrollToTop'

// Simple loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-sinar-dark">
    <div className="text-center">
      <div className="inline-block w-16 h-16 border-4 border-sinar-gold/30 border-t-sinar-gold rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-400">Loading...</p>
    </div>
  </div>
)

// Eager load critical pages (above the fold)
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

// Lazy load public pages
const TemplatesPage = lazy(() => import('./pages/TemplatesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const WorkflowPage = lazy(() => import('./pages/WorkflowPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const FoundersPage = lazy(() => import('./pages/FoundersPage'))
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'))
const AIEmployeesPage = lazy(() => import('./pages/AIEmployeesPage'))
const TechStackPage = lazy(() => import('./pages/TechStackPage'))
const ValuesEthicsPage = lazy(() => import('./pages/ValuesEthicsPage'))
const AIChatPage = lazy(() => import('./pages/AIChatPage'))
const TimeEstimatorPage = lazy(() => import('./pages/TimeEstimatorPage'))

// Lazy load admin pages (rarely used, heavy)
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminHeroSection = lazy(() => import('./pages/admin/AdminHeroSection'))
const AdminAboutSection = lazy(() => import('./pages/admin/AdminAboutSection'))
const AdminInitialize = lazy(() => import('./pages/admin/AdminInitialize'))
const AdminPortfolio = lazy(() => import('./pages/admin/AdminPortfolio'))
const AdminTestimonials = lazy(() => import('./pages/admin/AdminTestimonials'))
const AdminWorkflow = lazy(() => import('./pages/admin/AdminWorkflow'))
const AdminFAQ = lazy(() => import('./pages/admin/AdminFAQ'))
const AdminTemplates = lazy(() => import('./pages/admin/AdminTemplates'))

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <div className="min-h-screen bg-sinar-dark text-gray-100 overflow-x-hidden">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Public Routes with Navigation & Footer */}
              <Route path="/" element={
                <>
                  <Navigation scrollY={scrollY} />
                  <HomePage />
                  <Footer />
                </>
              } />
              <Route path="/templates" element={
                <>
                  <Navigation scrollY={scrollY} />
                  <TemplatesPage />
                  <Footer />
                </>
              } />
              <Route path="/workflow" element={
                <>
                  <Navigation scrollY={scrollY} />
                  <WorkflowPage />
                  <Footer />
                </>
              } />
              <Route path="/faq" element={
                <>
                  <Navigation scrollY={scrollY} />
                  <FAQPage />
                  <Footer />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <Navigation scrollY={scrollY} />
                  <ContactPage />
                  <Footer />
                </>
              } />
              <Route path="/founders" element={
                <>
                  <Navigation scrollY={scrollY} />
                  <FoundersPage />
                  <Footer />
                </>
              } />
              <Route path="/case-study" element={
                <>
                  <Navigation scrollY={scrollY} />
                  <CaseStudyPage />
                  <Footer />
                </>
              } />
            <Route path="/ai-employees" element={
              <>
                <Navigation scrollY={scrollY} />
                <AIEmployeesPage />
                <Footer />
              </>
            } />
            <Route path="/tech-stack" element={
              <>
                <Navigation scrollY={scrollY} />
                <TechStackPage />
                <Footer />
              </>
            } />
            <Route path="/values" element={
              <>
                <Navigation scrollY={scrollY} />
                <ValuesEthicsPage />
                <Footer />
              </>
            } />
            <Route path="/ai-chat" element={
              <>
                <Navigation scrollY={scrollY} />
                <AIChatPage />
                <Footer />
              </>
            } />
            <Route path="/time-estimator" element={
              <>
                <Navigation scrollY={scrollY} />
                <TimeEstimatorPage />
                <Footer />
              </>
            } />

            {/* Login Route (No Navigation/Footer) */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/hero" element={
              <ProtectedRoute>
                <AdminHeroSection />
              </ProtectedRoute>
            } />
            <Route path="/admin/about" element={
              <ProtectedRoute>
                <AdminAboutSection />
              </ProtectedRoute>
            } />
            <Route path="/admin/portfolio" element={
              <ProtectedRoute>
                <AdminPortfolio />
              </ProtectedRoute>
            } />
            <Route path="/admin/testimonials" element={
              <ProtectedRoute>
                <AdminTestimonials />
              </ProtectedRoute>
            } />
            <Route path="/admin/workflow" element={
              <ProtectedRoute>
                <AdminWorkflow />
              </ProtectedRoute>
            } />
            <Route path="/admin/faq" element={
              <ProtectedRoute>
                <AdminFAQ />
              </ProtectedRoute>
            } />
            <Route path="/admin/templates" element={
              <ProtectedRoute>
                <AdminTemplates />
              </ProtectedRoute>
            } />
            <Route path="/admin/initialize" element={
              <ProtectedRoute>
                <AdminInitialize />
              </ProtectedRoute>
            } />
          </Routes>
          </Suspense>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
