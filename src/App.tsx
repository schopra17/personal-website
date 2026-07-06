import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Robotics } from './sections/Robotics'
import { Hardware } from './sections/Hardware'
import { Skills } from './sections/Skills'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Robotics />
        <Hardware />
        <Skills />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
