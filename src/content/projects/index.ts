import type { Project, ProjectCategory } from './types'

// Auto-collects every project file dropped into ./robotics or ./hardware —
// add a new project by creating a new file there; no registration needed here.
const modules = import.meta.glob<{ default: Project }>('./{robotics,hardware}/*.ts', {
  eager: true,
})

const allProjects: Project[] = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title))

export const roboticsProjects: Project[] = allProjects.filter((p) => p.category === 'robotics')
export const hardwareProjects: Project[] = allProjects.filter((p) => p.category === 'hardware')

export function getProject(category: ProjectCategory, slug: string): Project | undefined {
  const list = category === 'robotics' ? roboticsProjects : hardwareProjects
  return list.find((p) => p.slug === slug)
}
