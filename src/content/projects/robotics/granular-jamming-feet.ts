import type { Project } from '../types'

const project: Project = {
  slug: 'granular-jamming-feet',
  category: 'robotics',
  title: 'Adaptive Granular Jamming Feet for Robot Locomotion on Sand',
  org: 'Gravish Lab, UC San Diego — PhD Research',
  dates: '2018 – 2022',
  summary:
    'Developed soft robotic feet that combine passive shape-change with active stiffness control via granular jamming to improve foot-ground interaction on deformable terrain.',
  bullets: [
    'Designed a granular-jamming foot with selectable fills to study how fill material governs stiffness and performance',
    'Built a fluidized granular-bed test platform for drop, shear, and pullout experiments',
    'Quantified performance using accelerometry, high-speed imaging, and load-cell measurements of impact acceleration, penetration depth, shear traction, and pullout force',
  ],
  tags: ['Soft Robotics', 'Granular Jamming', 'Foot-Ground Interaction', 'Deformable Terrain', 'Experimental Validation'],
  notes: [
    {
      heading: 'Publication',
      items: [
        'Chopra S., Tolley M. T., Gravish N. (2020), "Granular Jamming Feet Enable Improved Foot-Ground Interactions for Robot Mobility," IEEE Robotics and Automation Letters.',
      ],
    },
  ],
}

export default project
