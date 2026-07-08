import { Section } from '../components/ui/Section'
import { publications, pressCoverage } from '../content/publications'
import styles from './Publications.module.css'

export function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="Publications"
      title="Peer-reviewed research & press"
      subtitle="Robotics research published in IEEE and materials-science venues, with coverage of the sand-swimming robot across engineering and general-interest outlets."
    >
      <div className={styles.layout}>
        <div className={styles.list}>
          {publications.map((pub) => (
            <div className={styles.pub} key={pub.title}>
              <div className={styles.pubMeta}>
                {pub.authors} ({pub.year})
              </div>
              <div className={styles.pubTitle}>{pub.title}</div>
              <div className={styles.pubVenue}>{pub.venue}</div>
            </div>
          ))}
        </div>

        <div className={styles.pressCard}>
          <div className={styles.pressHeading}>Press Coverage</div>
          <ul className={styles.pressList}>
            {pressCoverage.map((outlet) => (
              <li className={styles.pressItem} key={outlet}>
                {outlet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
