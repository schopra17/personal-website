import type { Project } from '../types'

const project: Project = {
  slug: 'automated-test-platforms',
  category: 'hardware',
  title: 'Electromechanical Test Platforms & Automated Validation Systems',
  org: 'Dexcom — R&D Technology Evaluation, Advanced Technology',
  dates: 'Dec 2022 – Mar 2025',
  summary:
    'Designed and delivered electromechanical test platforms and prototype systems supporting wearable sensor R&D, integrating precision motion, actuation, and measurement for repeatable system characterization from feasibility through DVT.',
  bullets: [
    'Built automated test architectures (LabVIEW, MATLAB, Python) and real-time data pipelines to support V&V and clinical readiness',
    'Led GD&T and tolerance analysis for multi-part assemblies; produced detailed drawings and partnered with suppliers on DFM/DFA',
    'Developed bench and preclinical test methods to characterize wear, sensor motion, and stability',
    'Rapidly developed new test methods for failure investigations, including accelerated fatigue characterization on short timelines',
  ],
  tags: ['LabVIEW', 'MATLAB', 'Python', 'Test Automation', 'GD&T', 'DFM/DFA'],
}

export default project
