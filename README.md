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
- `src/lib` is for shared components, event content, and imported artwork.
- `src/lib/event.ts` holds the external hacker and mentor application URLs. Each link appears once its URL is filled in.
- `src/app.css` holds site-wide styles. Keep styles for individual sections in their Svelte components.

The build uses the SvelteKit static adapter. Point the host at `build/` when you're ready to deploy.
