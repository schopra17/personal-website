# Shivam Chopra — Portfolio

Recruiter-facing portfolio site highlighting robotics and hardware engineering work. Built with Vite + React + TypeScript + Tailwind (for the Hero's aurora component only) + framer-motion, deployed to GitHub Pages.

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

## Routing

The site uses `react-router-dom`'s `HashRouter` (URLs look like `.../#/robotics/my-slug`) — this needs zero extra GitHub Pages configuration and survives page refresh/direct links, unlike clean URLs which would need a 404-redirect workaround on GH Pages.

- `/` — the home page (Hero, About, Robotics rail, Hardware rail, Publications, Skills)
- `/robotics/:slug` and `/hardware/:slug` — a project's full detail page

## Adding a project

Projects live in `src/content/projects/{robotics,hardware}/*.ts` and are picked up automatically (via `import.meta.glob` in `src/content/projects/index.ts`) — no registration step needed. Each project automatically gets a rail card on the home page *and* its own detail page at `/robotics/:slug` or `/hardware/:slug`.

1. Create a new file, e.g. `src/content/projects/robotics/my-new-robot.ts`:

   ```ts
   import type { Project } from '../types'

   const project: Project = {
     slug: 'my-new-robot',
     category: 'robotics', // or 'hardware'
     title: 'My New Robot',
     org: 'Where the work happened',
     dates: 'Jan 2024 – Present',
     summary: 'One or two sentences describing the project (shown on the rail card and at the top of the detail page).',
     bullets: ['Key contribution one', 'Key contribution two'],
     tags: ['Tag One', 'Tag Two'],
     order: 6, // optional — lower numbers surface first in the section
     media: [], // leave empty to show a placeholder; see the worked example below
   }

   export default project
   ```

That's it — it'll show up on the Robotics rail and be reachable at `#/robotics/my-new-robot` with no other changes.

## Worked example: adding a photo and a video to a project

Say you have `hero.jpg` (a photo) and `demo.mp4` (a short clip) for the sand-swimming robot project.

**1. Drop the files in the project's asset folder** (create it if it doesn't exist):

```
src/assets/projects/underactuated-sand-swimming-robot/hero.jpg
src/assets/projects/underactuated-sand-swimming-robot/demo.mp4
```

**2. Import them at the top of that project's file** (`src/content/projects/robotics/underactuated-sand-swimming-robot.ts`):

```ts
import heroPhoto from '../../../assets/projects/underactuated-sand-swimming-robot/hero.jpg'
import demoVideo from '../../../assets/projects/underactuated-sand-swimming-robot/demo.mp4'
```

**3. Add them to the project's `media` array** — the first entry is what shows on the rail card; the detail page also uses the first entry as its hero media:

```ts
const project: Project = {
  // ...existing fields unchanged...
  media: [
    { type: 'image', src: heroPhoto, alt: 'The robot mid-dive into dry sand' },
    { type: 'video', src: demoVideo, alt: 'Demo of the robot swimming under sand' },
  ],
}
```

That's the whole pattern — `ProjectMedia` (in `src/content/projects/types.ts`) only takes `type: 'image' | 'video'`, `src`, and `alt`. Until `media` has at least one entry, both the rail card and the detail page show an obvious "add project image/video here" placeholder, so there's no risk of shipping a broken-looking card by accident.

## Content that still needs real assets

- `src/assets/profile-placeholder.svg` — swap for a real headshot in the Hero section.
- `src/components/ui/PhotoRotator.tsx` — the `FRAMES` array holds placeholder labels for the About section's rotating photo display; replace with real `<img>`s the same way as project media above.
- Every project without a `media` entry shows a placeholder — add real photos/video as you get them, using the worked example above.

## Structure

```
src/
  content/           # all real copy: profile, skills, publications, project data
  components/
    layout/           # Navbar, Footer
    ui/               # Section, ProjectCard, ProjectRail, PhotoRotator, SkillGroup, Tag
  pages/              # HomePage, ProjectDetail (routed)
  sections/           # Hero, ImpactStrip, About, Robotics, Hardware, Publications, Skills
  assets/             # profile + project media
```
