# CLAUDE.md

Guidance for making content changes to this Next.js site.

## Where to make changes

| Content change      | File path                                        |
| -------------------- | ------------------------------------------------- |
| Home page            | `src/app/page.jsx`                                |
| Other pages          | `src/app/[route]/page.jsx`                        |
| Header               | `src/components/Header.jsx`                       |
| Footer               | `src/components/Footer.jsx`                       |
| Layout               | `src/layouts/Layout.jsx` and `src/app/layout.jsx`  |
| Global CSS           | `src/styles/global.css`                           |
| Site configuration   | `next.config.mjs`                                 |
| Optimized images     | `src/assets/images/`                              |
| Static/public files  | `public/`                                          |

## Image rules

- ALL content images go in `src/assets/images/` — never in `public/`.
- Images must be imported and rendered using the Next.js `<Image />` component from `next/image` for automatic optimization.
- Prefer `.webp` format.
- Always include meaningful `alt` text.
- Always define `width` and `height`.
- A remote placeholder image (such as the current `lh3.googleusercontent.com` stock photos used until real vehicle photography is supplied) is still rendered via `next/image` with explicit `width`/`height`/`alt` exactly as required, pending real photography being added under `src/assets/images/`.

## Editing rules

- Only edit the specific file/component identified for a request.
- Never crawl or "clean up" unrelated files.
- Never add dependencies unless explicitly requested.
- If a request is ambiguous about which page/component it targets, ask before making changes.

## Commands

```
npm install
npm run dev
npm run build
npm start
```
