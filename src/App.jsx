import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TemplatesPage from './pages/TemplatesPage'
import ContactPage from './pages/ContactPage'

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
      <div className="min-h-screen bg-sinar-dark text-gray-100 overflow-x-hidden">
        <Navigation scrollY={scrollY} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
