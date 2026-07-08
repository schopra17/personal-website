import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { profile } from '../../content/profile'
import { useScrollToSection } from '../../lib/scrollToSection'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'robotics', label: 'Robotics' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const goToSection = useScrollToSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} to="/" onClick={() => goToSection('top')}>
          Shivam Chopra
        </Link>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <button key={item.id} type="button" className={styles.link} onClick={() => goToSection(item.id)}>
              {item.label}
            </button>
          ))}
          <a className={styles.resumeBtn} href={`${import.meta.env.BASE_URL}${profile.resumePath}`} download>
            Resume
          </a>
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className={`container ${styles.mobileLinks}`}>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={styles.mobileLink}
                  onClick={() => {
                    setMenuOpen(false)
                    // Wait for the mobile menu's collapse animation (250ms) to
                    // finish before scrolling, or the layout shift throws off scrollIntoView.
                    window.setTimeout(() => goToSection(item.id), 300)
                  }}
                >
                  {item.label}
                </button>
              ))}
              <a
                className={styles.mobileLink}
                href={`${import.meta.env.BASE_URL}${profile.resumePath}`}
                download
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
