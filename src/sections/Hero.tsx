import { motion } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { profile } from '../content/profile'
import profilePlaceholder from '../assets/profile-placeholder.svg'
import styles from './Hero.module.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  return (
    <AuroraBackground id="top" className={`${styles.hero} h-auto items-stretch justify-start bg-transparent dark:bg-transparent`}>
      <div className={`container ${styles.content}`}>
        <motion.div className={styles.text} initial="hidden" animate="visible" variants={container}>
          <motion.p className="eyebrow" variants={item}>
            Robotics &amp; Automation Portfolio
          </motion.p>
          <motion.h1 className={styles.name} variants={item}>
            {profile.name}
          </motion.h1>
          <motion.p className={styles.title} variants={item}>
            {profile.title}
          </motion.p>
          <motion.p className={styles.tagline} variants={item}>
            {profile.tagline}
          </motion.p>
          <motion.p className={styles.location} variants={item}>
            {profile.location}
          </motion.p>

          <motion.div className={styles.ctas} variants={item}>
            <a className={styles.ctaPrimary} href="#robotics">
              View Robotics Work
            </a>
            <a className={styles.ctaSecondary} href={`${import.meta.env.BASE_URL}${profile.resumePath}`} download>
              Download Resume
            </a>
          </motion.div>

          <motion.div className={styles.socials} variants={item}>
            <a className={styles.socialLink} href={`mailto:${profile.email}`} aria-label="Email Shivam Chopra">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </a>
            <a
              className={styles.socialLink}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Shivam Chopra on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
                <path d="M7.5 10.5v6M7.5 7.8v.01M11.5 16.5v-3.7c0-1.4 1-2.3 2.2-2.3s2.1.9 2.1 2.3v3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.portraitWrap}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className={styles.portrait}>
            <img src={profilePlaceholder} alt="Placeholder headshot of Shivam Chopra" />
          </div>
          <p className={styles.portraitCaption}>Swap src/assets/profile-placeholder.svg for a real photo</p>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}
