import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProject } from '../content/projects'
import type { ProjectCategory } from '../content/projects/types'
import { Tag } from '../components/ui/Tag'
import styles from './ProjectDetail.module.css'

interface ProjectDetailProps {
  category: ProjectCategory
}

export function ProjectDetail({ category }: ProjectDetailProps) {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const project = slug ? getProject(category, slug) : undefined

  if (!project) {
    return (
      <div className={`container ${styles.notFound}`}>
        <h1>Project not found</h1>
        <p>
          <button type="button" className={styles.back} onClick={() => navigate('/', { state: { scrollTo: category } })}>
            ← Back to {category === 'robotics' ? 'Robotics' : 'Hardware'}
          </button>
        </p>
      </div>
    )
  }

  const media = project.media?.[0]

  return (
    <motion.div
      className={`container ${styles.wrap}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <button type="button" className={styles.back} onClick={() => navigate('/', { state: { scrollTo: category } })}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to {category === 'robotics' ? 'Robotics' : 'Hardware'}
      </button>

      <span className="eyebrow">{category === 'robotics' ? 'Robotics' : 'Hardware'}</span>
      <div className={styles.meta}>
        {project.org} · {project.dates}
      </div>
      <h1 className={styles.title}>{project.title}</h1>

      <div className={styles.media}>
        {media ? (
          media.type === 'video' ? (
            <video src={media.src} controls aria-label={media.alt} />
          ) : (
            <img src={media.src} alt={media.alt} />
          )
        ) : (
          <div className={`${styles.placeholder} ${category}`}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="9" cy="12" r="1.4" fill="currentColor" />
              <circle cx="15" cy="12" r="1.4" fill="currentColor" />
            </svg>
            <span>Project image / video goes here</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div>
          <p className={styles.summary}>{project.summary}</p>
          <div className={styles.bulletsHeading}>Highlights</div>
          <ul className={styles.bullets}>
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

        <div className={styles.side}>
          {project.notes && (
            <div className={styles.notesCard}>
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
      </div>
    </motion.div>
  )
}
