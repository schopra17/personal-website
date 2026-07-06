import type { ProjectCategory } from '../../content/projects/types'
import styles from './ProjectCard.module.css'

interface ProjectPlaceholderProps {
  category: ProjectCategory
}

/** Obvious placeholder shown until real project photos/video are added to `media`. */
export function ProjectPlaceholder({ category }: ProjectPlaceholderProps) {
  return (
    <div className={`${styles.placeholder} ${category === 'hardware' ? styles.placeholderHardware : styles.placeholderRobotics}`}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 5V3M16 5V3M8 21v-2M16 21v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="12" r="1.4" fill="currentColor" />
        <circle cx="15" cy="12" r="1.4" fill="currentColor" />
      </svg>
      <span>Project image / video goes here</span>
    </div>
  )
}
