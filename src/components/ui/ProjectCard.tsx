import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../../content/projects/types'
import { Tag } from './Tag'
import { ProjectPlaceholder } from './ProjectPlaceholder'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export function ProjectCard({ project }: ProjectCardProps) {
  const media = project.media?.[0]

  return (
    <motion.div className={styles.cardWrap} variants={cardReveal}>
      <Link to={`/${project.category}/${project.slug}`} className={styles.card}>
        <div className={styles.media}>
          {media ? (
            media.type === 'video' ? (
              <video src={media.src} muted loop playsInline autoPlay aria-label={media.alt} />
            ) : (
              <img src={media.src} alt={media.alt} loading="lazy" />
            )
          ) : (
            <ProjectPlaceholder category={project.category} />
          )}
        </div>
        <div className={styles.body}>
          <div className={styles.meta}>
            {project.org} · {project.dates}
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.summary}>{project.summary}</p>
          <div className={styles.footer}>
            <Tag variant={project.category}>{project.tags[0]}</Tag>
            <span className={styles.readMore}>
              Read more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
