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
    <motion.article className={styles.card} variants={cardReveal}>
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
        <ul className={styles.bullets}>
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        {project.notes && (
          <div className={styles.notes}>
            {project.notes.map((note) => (
              <div key={note.heading}>
                <div className={styles.notesHeading}>{note.heading}</div>
                <ul className={styles.notesList}>
                  {note.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag} variant={project.category}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
