import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import TemplatesPage from './pages/TemplatesPage'
import ContactPage from './pages/ContactPage'
import WorkflowPage from './pages/WorkflowPage'
import FAQPage from './pages/FAQPage'
import FoundersPage from './pages/FoundersPage'
import CaseStudyPage from './pages/CaseStudyPage'
import AIEmployeesPage from './pages/AIEmployeesPage'
import TechStackPage from './pages/TechStackPage'
import ValuesEthicsPage from './pages/ValuesEthicsPage'
import AIChatPage from './pages/AIChatPage'
import TimeEstimatorPage from './pages/TimeEstimatorPage'
import LoginPage from './pages/LoginPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminHeroSection from './pages/admin/AdminHeroSection'
import AdminAboutSection from './pages/admin/AdminAboutSection'
import AdminInitialize from './pages/admin/AdminInitialize'
import AdminDivisions from './pages/admin/AdminDivisions'
import AdminPortfolio from './pages/admin/AdminPortfolio'
import AdminTestimonials from './pages/admin/AdminTestimonials'
import AdminWorkflow from './pages/admin/AdminWorkflow'
import AdminFAQ from './pages/admin/AdminFAQ'
import AdminCaseStudies from './pages/admin/AdminCaseStudies'
import AdminFounders from './pages/admin/AdminFounders'
import AdminTechStack from './pages/admin/AdminTechStack'
import AdminTemplates from './pages/admin/AdminTemplates'
import AdminValues from './pages/admin/AdminValues'
import AdminContact from './pages/admin/AdminContact'

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
      <AuthProvider>
        <div className="min-h-screen bg-sinar-dark text-gray-100 overflow-x-hidden">
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
            <Route path="/admin/divisions" element={
              <ProtectedRoute>
                <AdminDivisions />
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
            <Route path="/admin/case-studies" element={
              <ProtectedRoute>
                <AdminCaseStudies />
              </ProtectedRoute>
            } />
            <Route path="/admin/founders" element={
              <ProtectedRoute>
                <AdminFounders />
              </ProtectedRoute>
            } />
            <Route path="/admin/tech-stack" element={
              <ProtectedRoute>
                <AdminTechStack />
              </ProtectedRoute>
            } />
            <Route path="/admin/templates" element={
              <ProtectedRoute>
                <AdminTemplates />
              </ProtectedRoute>
            } />
            <Route path="/admin/values" element={
              <ProtectedRoute>
                <AdminValues />
              </ProtectedRoute>
            } />
            <Route path="/admin/contact" element={
              <ProtectedRoute>
                <AdminContact />
              </ProtectedRoute>
            } />
            <Route path="/admin/initialize" element={
              <ProtectedRoute>
                <AdminInitialize />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
