import { useEffect, useRef, useState } from 'react'
import styles from './PhotoRotator.module.css'

const FRAMES = [
  'Add a lab / workshop photo here',
  'Add a robot demo photo here',
  'Add a conference / team photo here',
]

const ROTATE_MS = 4000

export function PhotoRotator() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (paused || reducedMotion.current) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % FRAMES.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [paused])

  return (
    <div>
      <div
        className={styles.rotator}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {FRAMES.map((label, i) => (
          <div key={label} className={`${styles.frame} ${i === active ? styles.active : ''}`} aria-hidden={i !== active}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="9" cy="12" r="1.4" fill="currentColor" />
              <circle cx="15" cy="12" r="1.4" fill="currentColor" />
            </svg>
            <span className={styles.frameLabel}>{label}</span>
          </div>
        ))}

        <div className={styles.dots}>
          {FRAMES.map((label, i) => (
            <button
              key={label}
              type="button"
              className={`${styles.dot} ${i === active ? styles.active : ''}`}
              aria-label={`Show frame ${i + 1}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
      <p className={styles.caption}>Swap these placeholders for real photos in src/components/ui/PhotoRotator.tsx</p>
    </div>
  )
}
