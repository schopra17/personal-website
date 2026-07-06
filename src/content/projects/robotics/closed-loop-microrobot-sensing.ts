import type { Project } from '../types'

const project: Project = {
  slug: 'closed-loop-microrobot-sensing',
  category: 'robotics',
  title: 'Closed-Loop Actuation for Micro-Robots Using Embedded Sensors',
  org: 'Gravish Lab, UC San Diego — Masters Research',
  dates: '2016 – 2018',
  summary:
    'Integrated custom on-board sensing with closed-loop control concepts to study flapping-wing actuator response under environmental perturbations, enabling on-board tracking of appendage motion and damage detection.',
  bullets: [
    'Combined embedded strain sensing with closed-loop actuation to respond to real-time appendage state',
    'Studied actuator response to environmental perturbations for robustness in flight-like conditions',
    'Investigated on-board damage detection as a path toward self-monitoring micro-robotic appendages',
  ],
  tags: ['Closed-Loop Control', 'Micro-Robotics', 'Embedded Sensors', 'Damage Detection'],
}

export default project
