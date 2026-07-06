export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Mechanical Design & Architecture',
    items: ['System-level mechanical architecture', 'Tolerance analysis & load paths', 'Material selection', 'GD&T (ASME Y14.5)', 'DFM / DFA'],
  },
  {
    category: 'Verification, Reliability & Debug',
    items: ['Mechanical validation & life testing', 'Wear characterization', 'Custom test platforms', 'Root-cause analysis'],
  },
  {
    category: 'Robotics & Automation',
    items: [
      'Robotic mechanism & kinematic design',
      'Actuator & sensor integration',
      'Compliant / adaptive mechanisms',
      'Constrained-volume robotic assemblies',
      'Automated test platforms',
      'Haptics',
      'Soft robotics',
    ],
  },
  {
    category: 'CAD, Analysis & Engineering Tools',
    items: ['SolidWorks', 'Onshape', 'PDM best practices', 'FEA-informed sizing (Ansys)', 'DOE & variability analysis (JMP)'],
  },
  {
    category: 'Machine Vision & Imaging',
    items: ['Cognex In-Sight Explorer', 'Machine vision camera & illumination strategy', 'Image processing for feature isolation'],
  },
  {
    category: 'Prototyping & Fabrication',
    items: ['Machining', '3D printing', 'Laser cutting', 'Molding', 'Laminate fabrication', 'Soft-material prototyping'],
  },
  {
    category: 'Programming',
    items: ['LabVIEW', 'MATLAB', 'Python', 'C#', 'JMP', 'Arduino'],
  },
]
