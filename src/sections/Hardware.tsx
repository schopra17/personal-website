import { Section } from '../components/ui/Section'
import { ProjectRail } from '../components/ui/ProjectRail'
import { hardwareProjects } from '../content/projects'

export function Hardware() {
  return (
    <Section
      id="hardware"
      eyebrow="Hardware"
      title="Wearable & electromechanical systems"
      subtitle="Professional work in medical device and precision hardware — subsystem architecture, automated test platforms, and validation strategy from feasibility through clinical readiness."
    >
      <ProjectRail projects={hardwareProjects} />
    </Section>
  )
}
