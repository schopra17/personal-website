import { motion } from 'framer-motion'
import type { SkillGroup as SkillGroupType } from '../../content/skills'
import styles from './SkillGroup.module.css'

interface SkillGroupProps {
  groups: SkillGroupType[]
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
}

export function SkillGroupGrid({ groups }: SkillGroupProps) {
  return (
    <motion.div
      className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      {groups.map((group) => (
        <motion.div className={styles.card} key={group.category} variants={item}>
          <h3 className={styles.heading}>{group.category}</h3>
          <ul className={styles.items}>
            {group.items.map((skill) => (
              <li className={styles.item} key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}
