# Shivam Chopra — Portfolio

Recruiter-facing portfolio site highlighting robotics and hardware engineering work. Built with Vite + React + TypeScript + framer-motion, deployed to GitHub Pages.

Live at: `https://schopra17.github.io/personal-website/`

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages via the official Pages Actions.

One-time setup in the GitHub repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

## Adding a project

Projects live in `src/content/projects/{robotics,hardware}/*.ts` and are picked up automatically (via `import.meta.glob` in `src/content/projects/index.ts`) — no registration step needed.

1. Create a new file, e.g. `src/content/projects/robotics/my-new-robot.ts`:

   ```ts
   import type { Project } from '../types'

   const project: Project = {
     slug: 'my-new-robot',
     category: 'robotics', // or 'hardware'
     title: 'My New Robot',
     org: 'Where the work happened',
     dates: 'Jan 2024 – Present',
     summary: 'One or two sentences describing the project.',
     bullets: ['Key contribution one', 'Key contribution two'],
     tags: ['Tag One', 'Tag Two'],
     order: 6, // optional — lower numbers surface first in the section
     media: [], // leave empty to show a placeholder; see below to add real media
   }

   export default project
   ```

2. To add real photos/video: import the file and add it to `media`:

   ```ts
   import shot from '../../../assets/projects/my-new-robot/hero.jpg'

   media: [{ type: 'image', src: shot, alt: 'Describe the image' }]
   ```

   Put project images/video under `src/assets/projects/<slug>/`. Until real media is added, each card shows an obvious "add project image/video here" placeholder.

## Content that still needs real assets

- `src/assets/profile-placeholder.svg` — swap for a real headshot in the Hero section.
- Each project card without a `media` entry shows a placeholder — add real photos/video as you get them.

## Structure

```
src/
  content/          # all real copy: profile, skills, project data
  components/
    layout/          # Navbar, Footer
    ui/              # Section, ProjectCard, ProjectGrid, SkillGroup, Tag
  sections/          # Hero, About, Robotics, Hardware, Skills
  assets/            # profile + project media
```
