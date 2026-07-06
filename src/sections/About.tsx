import { motion } from 'framer-motion'
import { Section } from '../components/ui/Section'
import { profile } from '../content/profile'
import styles from './About.module.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.35 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export function About() {
  return (
    <Section id="about" eyebrow="About" title="From Himalayan foothills to bio-inspired robots">
      <div className={styles.layout}>
        <motion.div
          className={styles.bio}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
        >
          {profile.bio.map((paragraph) => (
            <motion.p key={paragraph} variants={item}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className={styles.factsCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className={styles.factsHeading}>Quick Facts</div>
          <ul className={styles.factsList}>
            {profile.quickFacts.map((fact) => (
              <li key={fact}>
                <span className={styles.dot} />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
