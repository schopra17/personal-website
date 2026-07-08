import { motion } from 'framer-motion'
import { profile } from '../content/profile'
import styles from './ImpactStrip.module.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
}

export function ImpactStrip() {
  return (
    <section className={styles.strip}>
      <div className="container">
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
        >
          {profile.impactStats.map((stat) => (
            <motion.div className={styles.stat} key={stat.label} variants={item}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
