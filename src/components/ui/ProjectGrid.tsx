import { motion } from 'framer-motion'
import type { Project } from '../../content/projects/types'
import { ProjectCard } from './ProjectCard'
import styles from './ProjectGrid.module.css'

interface ProjectGridProps {
  projects: Project[]
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <motion.div
      className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  )
}
