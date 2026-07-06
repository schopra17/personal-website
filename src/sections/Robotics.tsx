import { Section } from '../components/ui/Section'
import { ProjectGrid } from '../components/ui/ProjectGrid'
import { roboticsProjects } from '../content/projects'

export function Robotics() {
  return (
    <Section
      id="robotics"
      eyebrow="Robotics"
      title="Bio-inspired & underactuated robots"
      subtitle="PhD and Masters research from the Gravish Lab at UC San Diego — robots that exploit compliance and underactuation to move through sand, granular media, and constrained spaces."
    >
      <ProjectGrid projects={roboticsProjects} />
    </Section>
  )
}
