import { Section } from '../components/ui/Section'
import { SkillGroupGrid } from '../components/ui/SkillGroup'
import { skillGroups } from '../content/skills'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools & technical range"
      subtitle="Spanning mechanical design, verification, robotics, and the CAD / programming toolchain behind it."
    >
      <SkillGroupGrid groups={skillGroups} />
    </Section>
  )
}
