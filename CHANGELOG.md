# Changelog

All notable portfolio changes are recorded here.

## [0.1.0] - 2026-06-01

### Added

- Added `.github/workflows/compile-resume.yml`.
- Compile `resume.tex` into `resume.pdf` when `resume.tex` or workflow file changes.
- Allow manual workflow runs from GitHub Actions.
- Commit and push generated `resume.pdf` only when PDF output changes.

### Existing Behavior Used

- Portfolio resume link already points to `resume.pdf` through `script.js`.
- Generated PDF remains at repository root, so website link needs no change.

### Verification

- Confirmed `script.js` uses `resume_url: "resume.pdf"`.
- Local PDF compilation was not run because no LaTeX compiler is installed locally.
- First GitHub Actions run after push will verify cloud compilation.

## Versioning

Use semantic versions:

- Patch: documentation, workflow fixes, or small portfolio fixes.
- Minor: new portfolio feature or automation.
- Major: incompatible portfolio structure change.

Add newest entry above older entries.
