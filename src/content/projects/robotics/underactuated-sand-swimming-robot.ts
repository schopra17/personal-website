import type { Project } from '../types'

const project: Project = {
  slug: 'underactuated-sand-swimming-robot',
  category: 'robotics',
  title: 'Underactuated Appendage Robot for Swimming & Sensing in Granular Media',
  org: 'Gravish Lab, UC San Diego — PhD Research',
  dates: 'Jul 2018 – Mar 2022',
  order: 1,
  summary:
    'Owned end-to-end development of an untethered, underactuated robot that swims and senses obstacles beneath dry sand, inspired by baby sea turtles digging through granular media. At its beach demonstration in San Diego, it was the fastest untethered digging-and-sensing robot of its kind.',
  bullets: [
    'Designed compliant, underactuated appendages that convert simple actuation into effective propulsive thrust in granular media',
    'Added "terrafoils" to modulate lift and hold a stable subsurface swimming depth',
    'Demonstrated obstacle sensing purely from changes in appendage force, with no additional sensors',
    'Built constrained-volume, untethered electromechanical prototypes balancing stiffness, compliance, and robustness',
    'Designed custom experimental setups combining high-speed imaging, locomotion control, and force sensing to characterize performance limits and failure modes',
  ],
  tags: ['Underactuated Robotics', 'Granular Media', 'Mechanism Design', 'Compliant Systems', 'High-Speed Imaging'],
  notes: [
    {
      heading: 'Selected Publication',
      items: [
        'Chopra S., et al. (2023), "Toward Robotic Sensing and Swimming in Granular Environments using Underactuated Appendages," Advanced Intelligent Systems.',
      ],
    },
    {
      heading: 'Press Coverage',
      items: [
        'UCSD Today',
        'New Atlas',
        'IoT World Today',
        'Interesting Engineering',
        'The Robot Report',
        'Tech Times',
        'Earth.com',
        'Knowridge',
      ],
    },
  ],
}

export default project
