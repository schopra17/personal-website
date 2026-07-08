export interface Publication {
  authors: string
  year: string
  title: string
  venue: string
}

export const publications: Publication[] = [
  {
    authors: 'Chopra S., Gravish N.',
    year: '2019',
    title: 'Piezoelectric actuators with on-board sensing for micro-robotic applications',
    venue: 'Smart Materials and Structures, IOP',
  },
  {
    authors: 'Chopra S., Tolley M. T., Gravish N.',
    year: '2020',
    title: 'Granular Jamming Feet Enable Improved Foot-Ground Interactions for Robot Mobility',
    venue: 'IEEE Robotics and Automation Letters',
  },
  {
    authors: 'Chopra S., et al.',
    year: '2023',
    title: 'Toward Robotic Sensing and Swimming in Granular Environments using Underactuated Appendages',
    venue: 'Advanced Intelligent Systems',
  },
]

export const pressCoverage: string[] = [
  'UCSD Today',
  'New Atlas',
  'IoT World Today',
  'Interesting Engineering',
  'The Robot Report',
  'Tech Times',
  'Earth.com',
  'Knowridge',
  'Life Technology',
]
