import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { ProjectDetail } from './pages/ProjectDetail'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (!state?.scrollTo) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.state])

  return null
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <ScrollManager />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/robotics/:slug" element={<ProjectDetail category="robotics" />} />
            <Route path="/hardware/:slug" element={<ProjectDetail category="hardware" />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </MotionConfig>
  )
}

export default App
