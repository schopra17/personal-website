import type { Project } from '../types'

const project: Project = {
  slug: 'flapping-wing-actuator',
  category: 'robotics',
  title: 'Piezoelectric Actuators with Embedded Sensing for Micro-Robotics',
  org: 'Gravish Lab, UC San Diego — Masters Research',
  dates: 'Dec 2016 – Jun 2018',
  summary:
    'Designed and fabricated penny-scale flapping-wing mechanisms with piezoelectric actuation and embedded strain sensing for micro-robotic applications.',
  bullets: [
    'Engineered lightweight frames using Smart Composite Microstructure (SCM) fabrication — laser micromachining, lamination, flexures, and transmissions — for high-frequency, durable motion',
    'Developed piezoelectric bending actuators with electrically isolated sensing strips mechanically coupled to the actuation layer',
    'Demonstrated a linear relationship between sensor output and displacement across a wide range of voltages and frequencies',
    'Validated sensing utility through wing-collision and degradation experiments using high-speed video',
  ],
  tags: ['Piezoelectric Actuators', 'Micro-Robotics', 'Embedded Sensing', 'SCM Fabrication'],
  notes: [
    {
      heading: 'Publication',
      items: [
        'Chopra S., Gravish N. (2019), "Piezoelectric actuators with on-board sensing for micro-robotic applications," Smart Materials and Structures, IOP.',
      ],
    },
  ],
}

export default project
