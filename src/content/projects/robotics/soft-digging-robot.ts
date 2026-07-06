import type { Project } from '../types'

const project: Project = {
  slug: 'soft-digging-robot',
  category: 'robotics',
  title: 'Anisotropic Friction-Enabled Soft Digging Robot',
  org: 'Gravish Lab, UC San Diego — PhD Research',
  dates: '2018 – 2022',
  summary:
    'Built a pneumatically actuated, worm-inspired soft robot that digs through granular material using reciprocal elongation/contraction and directional (anisotropic) friction.',
  bullets: [
    'Designed a worm-inspired architecture with longitudinal pneumatic muscles and setae-inspired directional friction features',
    'Added terrafoils and studied terrafoil/setae angle trade-offs through controlled drag and lift experiments',
    'Demonstrated forward digging and controlled turning behavior in granular substrate',
  ],
  tags: ['Soft Robotics', 'Pneumatic Actuation', 'Bio-Inspired Design', 'Granular Materials'],
}

export default project
