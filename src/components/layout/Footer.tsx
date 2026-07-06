import { profile } from '../../content/profile'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <div className={styles.heading}>Education</div>
            <ul className={styles.eduList}>
              {profile.education.map((edu) => (
                <li key={edu.degree}>
                  {edu.degree}
                  <br />
                  <span className={styles.eduSchool}>
                    {edu.school} · {edu.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className={styles.heading}>Contact</div>
            <ul className={styles.contactList}>
              <li>
                <a className={styles.contactLink} href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              <li>
                <a className={styles.contactLink} href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className={styles.contactLink}
                  href={`${import.meta.env.BASE_URL}${profile.resumePath}`}
                  download
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Shivam Chopra</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  )
}
