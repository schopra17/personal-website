import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reveal}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
