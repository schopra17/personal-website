export type ProjectCategory = 'robotics' | 'hardware'

export interface ProjectMedia {
  type: 'image' | 'video'
  src: string
  alt: string
}

export interface ProjectMediaGroup {
  heading: string
  items: string[]
}

export interface Project {
  slug: string
  category: ProjectCategory
  title: string
  org: string
  dates: string
  summary: string
  bullets: string[]
  tags: string[]
  /** Lower numbers surface first within their section; ties fall back to title. */
  order?: number
  /** Real project photos/videos. Leave empty to show the placeholder card. */
  media?: ProjectMedia[]
  /** Extra citation-style lists, e.g. publications or press coverage. */
  notes?: ProjectMediaGroup[]
}
