import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../sections/Hero'
import { ImpactStrip } from '../sections/ImpactStrip'
import { About } from '../sections/About'
import { Robotics } from '../sections/Robotics'
import { Hardware } from '../sections/Hardware'
import { Publications } from '../sections/Publications'
import { Skills } from '../sections/Skills'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo) {
      requestAnimationFrame(() => {
        document.getElementById(state.scrollTo as string)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <ImpactStrip />
      <About />
      <Robotics />
      <Hardware />
      <Publications />
      <Skills />
    </>
  )
}
