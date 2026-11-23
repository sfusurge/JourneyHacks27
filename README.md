# JourneyHacks 2027

The SFU Surge hackathon website. Built with SvelteKit and TypeScript.

## Get started

Use Node.js 22.17+ on the 22.x line, or Node.js 24+. If you use nvm, run `nvm install` from this folder.

```sh
npm ci
npm run dev
```

Installing dependencies sets up the pre-commit hook. It runs ESLint on staged JS, TypeScript, and Svelte files, and Prettier formats those files plus staged CSS, HTML, JSON, Markdown, and YAML. Run `npm run prepare` if you need to reinstall the hook.

| Command          | What it does                          |
| ---------------- | ------------------------------------- |
| `npm run lint`   | Checks formatting and runs ESLint     |
| `npm run format` | Formats the project                   |
| `npm run check`  | Checks Svelte and TypeScript          |
| `npm run build`  | Generates the static site in `build/` |

GitHub Actions runs lint, type checks, and the build on pull requests and pushes to `main`.

## Where to work

- `src/routes/+page.svelte` is the landing page.
- `src/lib/event.ts` holds the external hacker and mentor application URLs. Each link appears once its URL is filled in. The same file has the draft event details and schedule from Figma for the organizers to confirm.
- `src/lib/styles/theme.css` holds the shared Figma colors and font stacks. The mockups use Gilroy and GT Cinetype Trial. Add webfont files once the club has the licensed versions. The starter uses system fallbacks when the fonts are unavailable.
- `src/app.css` holds global styles. Keep styles for individual sections in their Svelte components.

### Figma artwork

Import artwork from `#lib/assets/` in Svelte. Files are named for what they depict, so sections can reuse the same stars and sprites.

| Folder      | Artwork                                            |
| ----------- | -------------------------------------------------- |
| `brand/`    | JourneyHacks wordmark, favicon, and Surge credit   |
| `space/`    | Comets, constellations, orbits, planets, and stars |
| `sprites/`  | Four-point shapes, crescent, and angled sprite     |
| `brackets/` | Left orange and right blue Apply artwork           |

The FAQ planets and the two Apply brackets are separate files so they can move independently. Add the schedule labels, FAQ questions and answers, and application links as page text.

Raster artwork is exported from Figma at 3× and compressed to transparent WebP. Set its display size in CSS to match the layout.

The build uses the SvelteKit static adapter. Point the host at `build/` when you're ready to deploy.
