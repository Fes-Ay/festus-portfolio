# festus-portfolio

Personal academic website of Festus Basimtaal Ayembilla, live at
https://fes-ay.github.io/festus-portfolio/

Built with Next.js 16 (App Router), React 19 and Tailwind CSS 4, exported as a
static site and deployed to GitHub Pages by the workflow in
`.github/workflows/nextjs.yml` on every push to `master`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static export to ./out (uses basePath /festus-portfolio)
```

## Where things live

| What | File |
| --- | --- |
| About, research interests, publications, projects | `app/page.tsx` |
| Publication entry layout and author highlighting | `components/publication/Publication.tsx` |
| Navbar links (About, Publications, Projects, CV) | `components/navbar/links/Links.tsx` |
| Published CV (linked from the navbar) | `public/festus_CV.pdf` |
| Headshot | `public/images/headshot.jpg` |

## Updating the CV

Copy the new PDF over `public/festus_CV.pdf`, then commit and push. Draft CV
files placed in the repo root (`*.pdf`, `*.docx`) are git-ignored.
