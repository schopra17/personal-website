import type { ProjectCategory } from '../../content/projects/types'
import styles from './Tag.module.css'

interface TagProps {
  children: string
  variant?: ProjectCategory
}

export function Tag({ children, variant }: TagProps) {
  const variantClass = variant === 'robotics' ? styles.robotics : variant === 'hardware' ? styles.hardware : ''
  return <span className={`${styles.tag} ${variantClass}`}>{children}</span>
}
