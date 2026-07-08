import { useRef } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../../content/projects/types'
import { ProjectCard } from './ProjectCard'
import styles from './ProjectRail.module.css'

interface ProjectRailProps {
  projects: Project[]
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function ProjectRail({ projects }: ProjectRailProps) {
  const railRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 1 | -1) => {
    railRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' })
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <button type="button" className={styles.arrowBtn} aria-label="Scroll left" onClick={() => scroll(-1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" className={styles.arrowBtn} aria-label="Scroll right" onClick={() => scroll(1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className={styles.railOuter}>
        <div className={`${styles.edge} ${styles.edgeLeft}`} aria-hidden="true" />
        <div className={`${styles.edge} ${styles.edgeRight}`} aria-hidden="true" />
        <motion.div
          className={styles.rail}
          ref={railRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
