# Unified Portfolio and Resume

`data/` is only regular editing surface. Build reads it once, renders portfolio and resume independently, then prints one-page vector PDF.

## Edit

- `data/personal.json` - contact, portfolio copy, resume summary
- `data/projects.json` - project identity, links, output visibility, separate portfolio/resume copy
- `data/experience.json` - separate portfolio/resume copy
- `data/education.json` and `data/skills.json`

## Build

```bash
npm install
npx playwright install chromium
npm run build
```

Generated files:

- `dist/index.html`
- `dist/resume.html`
- `dist/resume.pdf`

`npm run validate` checks required fields and duplicate project IDs. It warns for missing project links and empty enabled resume bullets. PDF generation fails when resume spans more than one page.

GitHub Actions installs Chromium, builds all output, and commits changed `dist/` files on push.
